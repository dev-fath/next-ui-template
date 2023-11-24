import { IconProps } from '@assets/icons/IconBase';

const ArrowLeftIcon = (props: IconProps) => {
  const { width, height, color = '#374254' } = props;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 36 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="rotate-180"
    >
      <path
        d="M19.8536 2L33.9878 16.878L20.5975 32.5"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32 17L2.00002 16.878"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowLeftIcon;
