import { memo, SVGProps } from 'react';

const UserIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 19' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M10 11.875C12.7614 11.875 15 9.74835 15 7.125C15 4.50165 12.7614 2.375 10 2.375C7.23858 2.375 5 4.50165 5 7.125C5 9.74835 7.23858 11.875 10 11.875Z'
      stroke='black'
      strokeWidth={2}
      strokeMiterlimit={10}
    />
    <path
      d='M2.42102 16.0306C3.18942 14.767 4.29431 13.7178 5.62467 12.9884C6.95504 12.259 8.46404 11.875 10.0001 11.875C11.5361 11.875 13.0451 12.259 14.3755 12.9885C15.7058 13.718 16.8107 14.7672 17.5791 16.0307'
      stroke='black'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(UserIcon);
export { Memo as UserIcon };
