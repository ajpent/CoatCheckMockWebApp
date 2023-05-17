import { Dispatch, SetStateAction, memo } from 'react';
import type { FC } from 'react';
import { createClient } from '@supabase/supabase-js'

import resets from '../_resets.module.css';
import classes from './GenerateQRCode.module.css';
import { GroupIcon } from './GroupIcon.js';

interface Props {
  className?: string;
  setActivePage: Dispatch<SetStateAction<number>>;
  setVisitID: any;
  activePage : number;
  userID : number;
}
const apiKey ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind6eGp6cHRqa3RxeGJlYXNodWRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE3NTEyMzMsImV4cCI6MTk5NzMyNzIzM30.ZVxVL9y9gL6SPplCN4ZCVKR6AgXt3oUYSo1JK42oQgM"
const backendAddr = "https://wzxjzptjktqxbeashudj.supabase.co"


/* @figmaId 102:316 */
export const GenerateQRCode: FC<Props> = memo(function GenerateQRCode({setActivePage,setVisitID, activePage, userID}:Props) {
  const supabase = createClient(backendAddr, apiKey)
  const visitIDhack = 3
  const handleClickUser = async() => {
    const { data, error } = await supabase
      .from('visits')
      .insert({id : visitIDhack,
      event_id: null,
      client_id: userID,//users id
      status: 1})
      .select()
    console.log('login_info:',data, 'error:',error,"userID: ", userID)
    setVisitID(visitIDhack)
    setActivePage(3)
  }

  const handleClickBar = async() => {

    setActivePage(4)

  }
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      
      {activePage === 1 ? (
        <div className={classes.generateQRCode}>Generate QR code</div>
      ) : (
        <div className={classes.generateQRCode}>Enter Customer Code</div>
      )}
      <div className={classes.generateCode}>
        <div className={classes.group}>
          <GroupIcon className={classes.icon} />
        </div>
        {activePage === 1 ? (
          <button onClick={() => handleClickUser()} className={classes.gENERATECODE}>GENERATE CODE</button>
        ) : (
          <button onClick={() => handleClickBar()} className={classes.gENERATECODE}>ENTER CODE</button>
        )}
      </div>
    </div>
  );
});
