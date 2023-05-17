import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './User.module.css';
import { UserIcon } from './UserIcon.js';

interface Props {
  className?: string;
  classes?: {
    user?: string;
    root?: string;
  };
  swap?: {
    user?: ReactNode;
  };
}
/* @figmaId 2:668 */
export const User: FC<Props> = memo(function User(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.user || ''} ${classes.user}`}>
        {props.swap?.user || <UserIcon className={classes.icon} />}
      </div>
    </div>
  );
});
