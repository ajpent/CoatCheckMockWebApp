import { memo, SVGProps } from 'react';

const ShapeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 6 4' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.0731819 0.493315L2.78052 3.90123C2.89402 4.03292 3.09282 4.03292 3.20633 3.90123L5.9271 0.493315C6.09097 0.3024 5.96068 0 5.71419 0H0.28676C0.0396004 0 -0.0913671 0.3024 0.0731819 0.493315Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(ShapeIcon);
export { Memo as ShapeIcon };
