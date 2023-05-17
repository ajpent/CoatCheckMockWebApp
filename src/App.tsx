import { memo, useState } from 'react';
import type { FC } from 'react';

import classes from './App.module.css';
import resets from './components/_resets.module.css';
import { Login1 } from './components/Login1/Login1.js';
import { GenerateQRCode } from './components/GenerateQRCode/GenerateQRCode';
import { CreateAccount } from './components/CreateAccount/CreateAccount.js';
import { EnterCoatPlacement } from './components/EnterCoatPlacement/EnterCoatPlacement';


interface Props {
  className?: string;
}
export const App: FC<Props> = memo(function App(props = {}) {
  const [authenticated, setAuthenticated] = useState<Boolean>(false)
  const [ activePage, setActivePage] = useState<number>(1);
  const [ userID, setUserID] = useState<number>(0);
  const [ visitID, setVisitID] = useState<number>(0);
  const [coatPlaced, setCoatPlaced] = useState<string>("");
  if (!authenticated) {
    return (
      <div className={`${resets.clapyResets} ${classes.root}`}>
        {!authenticated  && <Login1 setAuthenticated={setAuthenticated} setActivePage={setActivePage} setUserID={setUserID}/>}
      </div>
    );
  };
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      {(activePage === 1 || activePage ===2 ) && <GenerateQRCode setActivePage={setActivePage} setVisitID={setVisitID} userID={userID} activePage={activePage} />}
      {(activePage >= 3 && activePage <= 10) && <EnterCoatPlacement setActivePage={setActivePage} setCoatPlaced={setCoatPlaced} coatPlaced = {coatPlaced} activePage={activePage} visitID={visitID} userID={userID}/>}
      {(activePage === 3) && <div></div>}
    </div>
  )
});
