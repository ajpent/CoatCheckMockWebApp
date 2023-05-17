import { Dispatch, SetStateAction, memo,useEffect, useState  } from 'react';
import type { FC } from 'react';
import { createClient } from '@supabase/supabase-js'

import resets from '../_resets.module.css';
import classes from './EnterCoatPlacement.module.css';

interface Props {
  className?: string;
  setActivePage: Dispatch<SetStateAction<number>>;
  coatPlaced: string;
  activePage : number;
  visitID: any;
  userID: any;
  setCoatPlaced : Dispatch<SetStateAction<string>>;
}
interface VisitData {
  [x: string]: any;
}
const apiKey ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind6eGp6cHRqa3RxeGJlYXNodWRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE3NTEyMzMsImV4cCI6MTk5NzMyNzIzM30.ZVxVL9y9gL6SPplCN4ZCVKR6AgXt3oUYSo1JK42oQgM"
const backendAddr = "https://wzxjzptjktqxbeashudj.supabase.co"
const supabase = createClient(backendAddr, apiKey)

/* @figmaId 127:316 */
export const EnterCoatPlacement: FC<Props> = memo(function EnterCoatPlacement({setActivePage, setCoatPlaced, coatPlaced, activePage, visitID, userID}:Props) {
  const [ visitID2, setVisitID2] = useState<String>()

  const [supabaseData, setSupabaseData] = useState<VisitData[] | null>(null)
  useEffect(() => {
    async function fetchData() {
      console.log('test');
      //fetch all the active options
      const { data, error } = await supabase
        .from('visits')
        .select()
      //save data to compare later
      setSupabaseData(data);
    }
    fetchData();
  }, []);

  const handleBlurCode = async() => {
    //jos koodi on jo mitä teet
    const { data, error } = await supabase
        .from('visits')
        .select()
    console.log('Input customer code field blurred!');
    console.log("supabaseData:",supabaseData)
    const matchingVisit = supabaseData?.find((visit) => {
      return visit.id == visitID2 && visit.status == 2;
    });
    console.log("matchingVisit:",matchingVisit)
    if(matchingVisit  == null){
      const { data, error } = await supabase
          .from('visits')
          .update({event_id:userID,status:2})
          .eq('id',visitID2)
          .select()
        console.log('login_info:',data, 'error:',error)
        if(error ===null){
          console.log("added eventid and updated status to 2")
          setActivePage(5)
        }
    }else{
      const { data, error } = await supabase
        .from('visits')
        .update({status:3})
        .eq('id',matchingVisit.id)
        .select()
      console.log('login_info:',data, 'error:',error)
      if(error ===null){  
        console.log("updated status to 3")
        setActivePage(7)
      }
    }
  };
  const handleBlurCoat = async() => {
    console.log("kakkosrundi visitID", visitID2)
    const { data, error } = await supabase
        .from('visits')
        .update({coatPlace:coatPlaced})
        .eq('id',visitID2)
        .select()
    console.log('Input coat field blurred!');
    if(error ===null){  
      console.log("Added coat in place ", coatPlaced)
      setActivePage(2)
    }
  };
  //lisää tonne onclick action joka tallentaa jos 4
  let inputField;
  let message;
  function runEvery10Seconds(): void {
    setInterval(async () => {
      console.log('This message will be printed every 10 seconds.');
      const { data, error } = await supabase
        .from('visits')
        .select()
        .eq("status","2")
      console.log("data to compare before setting activePage(6) ",data)
      if(data?.length != 0){
        setActivePage(6)
      }
      // Add your code that needs to run every 10 seconds here
    }, 10000);
  }
  function runEvery10Seconds2(): void {
    setInterval(async () => {
      console.log('This message will be printed every 10 seconds.');
      const { data, error } = await supabase
        .from('visits')
        .select()
        .eq("status","2")
      console.log("data to compare before setting activePage(6) ",data)
      if(data?.length == 0){
        setActivePage(2)
      }
      // Add your code that needs to run every 10 seconds here
    }, 10000);
  }
  switch (activePage) {
    case 4:
      inputField = <input type="text" className={classes.enterHere} placeholder="Enter here" onBlur={handleBlurCode} onChange={(e) => setVisitID2(e.target.value)}/>;
      message = <div className={classes.pleaseEnterThePlacementOfTheIt}> Please enter customers code </div>;
      break;
    case 5:
      inputField = <input type="text" className={classes.enterHere} placeholder="Enter here" onBlur={handleBlurCoat} onChange={(e) => setCoatPlaced(e.target.value)}/>;
      message = <div className={classes.pleaseEnterThePlacementOfTheIt}> Please enter the placement of the item </div>;
    break;
    case 3:
      inputField = <div className={classes.enterHere} style={{color: "black"}}>  {visitID} </div>;
      message = <div className={classes.pleaseEnterThePlacementOfTheIt}> Your code for event </div>;
      runEvery10Seconds()
    break;
    case 6:
      inputField = <div className={classes.enterHere} style={{color: "black"}}>ID {visitID} </div>; //\n Coat {coatPlaced}
      message = <div className={classes.pleaseEnterThePlacementOfTheIt}> Your info </div>;
      runEvery10Seconds2()
    break;
    case 7:
      inputField = <div className={classes.enterHere} style={{color: "black"}}> {coatPlaced} </div>;
      message = <div className={classes.pleaseEnterThePlacementOfTheIt}> Coat is in place </div>;
    break;
    case 8:
      inputField = <div className={classes.enterHere}> TEST </div>;
      message = <div className={classes.pleaseEnterThePlacementOfTheIt}> Coat is in place </div>;
    break;
    default:
      inputField = <div className={classes.enterHere}> coatPlace </div>;
      message = <div className={classes.pleaseEnterThePlacementOfTheIt}> Error </div>;
      break;
  }

  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.frame2}>
        {inputField}
      </div> 
      {message}        
    </div>
  );
});