import { memo, useState, Dispatch, SetStateAction } from 'react';
import type { FC } from 'react';
// Initialize the JS client
import { createClient } from '@supabase/supabase-js'

import resets from '../_resets.module.css';
import classes from './Login1.module.css';
import { ShapeIcon } from './ShapeIcon.js';
import { User } from './User/User.js';
import { UserIcon } from './UserIcon.js';

interface Props {
  className?: string;
  setAuthenticated: any;
  setActivePage: Dispatch<SetStateAction<number>>;
  setUserID: Dispatch<SetStateAction<number>>;
}
/* @figmaId 2:680 */
const apiKey ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind6eGp6cHRqa3RxeGJlYXNodWRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE3NTEyMzMsImV4cCI6MTk5NzMyNzIzM30.ZVxVL9y9gL6SPplCN4ZCVKR6AgXt3oUYSo1JK42oQgM"
const backendAddr = "https://wzxjzptjktqxbeashudj.supabase.co"
export const Login1: FC<Props> = memo(function Login1({ setAuthenticated,setActivePage,setUserID }:Props) {
  const supabase = createClient(backendAddr, apiKey)

  const [ email, setEmail] = useState<String>()
  const [ password, setPassword] = useState<String>()
  
  

  // Make a request
  

  const handleClick = async() => {
    const { data: login_info, error } = await supabase.from('login_info').select('*')
    console.log('login_info:',login_info, 'error:',error)

    if (login_info !== null) {

  
      // Check if username and password match with a user in the login_info array
      const matchingUser = login_info.find((user) => {
        return user.username === email && user.password === password;
      });
  
      if (matchingUser) {
        console.log('Username and password match with user:', matchingUser);
        setUserID(Number(matchingUser.client_id))
        console.log(Number(matchingUser.client_id))
        if (matchingUser.user_type == 1){
          //käyttäjä
          setActivePage(1)
          setAuthenticated(true)
        } else if(matchingUser.user_type == 2){
          //baari
          console.log("morrooo")
          setActivePage(2)
          setAuthenticated(true) 
        }
      } else {
        console.log('Username and password do not match with any user');
      }
    } else {
      console.log('login_info is null');
    }
  }
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.forgotPassword}>Forgot Password ?</div>
      <div className={classes.rectangle28}></div>
      <button onClick={() => handleClick()} className={classes.login}>Login </button>
      <div className={classes.rectangle26}></div>
      <input type="text" className={classes.emailAddress} placeholder="Email address" onChange={(e) => setEmail(e.target.value)}/>
      <div className={classes.rectangle27}></div>
      <input type="password" placeholder="password" className={classes.password} onChange={(e) => setPassword(e.target.value)}/>
      <div className={classes.rectangle29}></div>
      <div className={classes.rectangle30}></div>
      <div className={classes.email}>Email</div>
      <div className={classes.phoneNumber}>Phone Number</div>
      <div className={classes.loginAccount}>Login Account </div>
      <div className={classes.helloWelcomeBackToOurAccount}>Hello , welcome back to our account !</div>
      <div className={classes.shape}>
        <ShapeIcon className={classes.icon2} />
      </div>
      <div className={classes.india}></div>
      <User
        className={classes.user2}
        classes={{ user: classes.user }}
        swap={{
          user: (
            <div className={classes.user}>
              <UserIcon className={classes.icon} />
            </div>
          ),
        }}
      />
    </div>
  );
});
