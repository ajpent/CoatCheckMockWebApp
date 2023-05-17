import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './CreateAccount.module.css';
import { ShapeIcon } from './ShapeIcon.js';
import { User } from './User/User.js';
import { UserIcon } from './UserIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 127:182 */
export const CreateAccount: FC<Props> = memo(function CreateAccount(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle29}></div>
      <div className={classes.rectangle26}></div>
      <div className={classes.rectangle27}></div>
      <div className={classes.rectangle28}></div>
      <div className={classes.createAccount}>Create account</div>
      <div className={classes.emailAddress}>Email address</div>
      <div className={classes.firstName}>First name</div>
      <div className={classes.rectangle30}></div>
      <div className={classes.lastName}>Last name</div>
      <div className={classes.rectangle32}></div>
      <div className={classes.dateOfBirth}>Date of birth</div>
      <div className={classes.rectangle31}></div>
      <div className={classes.phoneNumber}>Phone number</div>
      <div className={classes.password}>Password</div>
      <div className={classes.create}>Create</div>
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
