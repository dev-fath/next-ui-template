import { IconProps } from '@assets/icons/IconBase';

const CloseIcon = (props: IconProps) => {
  const { width, height, color } = props;

  return (
    <svg width={width} height={height} viewBox="0 0 17 16" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 0.5L15.5 15.5" stroke={color} />
      <path d="M1 15.25L16 0.749999" stroke={color} />
    </svg>
  );
};

export default CloseIcon;
