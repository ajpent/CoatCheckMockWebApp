import { memo, SVGProps } from 'react';

const GroupIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 406 262' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g filter='url(#filter0_f_316_414)'>
      <path
        d='M270.125 261.973C328.292 261.973 375.447 229.404 375.447 189.229C375.447 149.053 328.292 116.484 270.125 116.484C211.957 116.484 164.803 149.053 164.803 189.229C164.803 229.404 211.957 261.973 270.125 261.973Z'
        fill='#585EFE'
      />
    </g>
    <g filter='url(#filter1_f_316_414)'>
      <path
        d='M106.284 202.997C164.452 202.997 211.606 170.428 211.606 130.252C211.606 90.0765 164.452 57.5076 106.284 57.5076C48.1166 57.5076 0.962402 90.0765 0.962402 130.252C0.962402 170.428 48.1166 202.997 106.284 202.997Z'
        fill='#DE2B4B'
        fillOpacity={0.8}
      />
    </g>
    <g filter='url(#filter2_f_316_414)'>
      <path
        d='M300.306 146.18C358.473 146.18 405.627 113.611 405.627 73.4352C405.627 33.2594 358.473 0.690475 300.306 0.690475C242.138 0.690475 194.984 33.2594 194.984 73.4352C194.984 113.611 242.138 146.18 300.306 146.18Z'
        fill='#2447FF'
        fillOpacity={0.8}
      />
    </g>
    <defs>
      <filter
        id='filter0_f_316_414'
        x={104.803}
        y={56.4839}
        width={330.644}
        height={265.49}
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation={30} result='effect1_foregroundBlur_316_414' />
      </filter>
      <filter
        id='filter1_f_316_414'
        x={-59.0376}
        y={-2.49241}
        width={330.644}
        height={265.49}
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation={30} result='effect1_foregroundBlur_316_414' />
      </filter>
      <filter
        id='filter2_f_316_414'
        x={134.984}
        y={-59.3095}
        width={330.644}
        height={265.49}
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation={30} result='effect1_foregroundBlur_316_414' />
      </filter>
    </defs>
  </svg>
);

const Memo = memo(GroupIcon);
export { Memo as GroupIcon };
