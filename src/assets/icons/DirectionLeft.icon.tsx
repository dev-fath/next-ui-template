import { IconProps } from '@assets/icons/IconBase';

const DirectionLeftIcon = (props: IconProps) => {
  const { width, height, color = '#374254' } = props;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 13 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.206 2.28818V0.390185C12.206 0.225676 12.0169 0.134828 11.8892 0.235498L0.820477 8.88081C0.726432 8.95395 0.650335 9.0476 0.597989 9.15462C0.545644 9.26164 0.518433 9.3792 0.518433 9.49833C0.518433 9.61747 0.545644 9.73503 0.597989 9.84205C0.650335 9.94907 0.726432 10.0427 0.820477 10.1159L11.8892 18.7612C12.0194 18.8618 12.206 18.771 12.206 18.6065V16.7085C12.206 16.5882 12.1495 16.4728 12.0562 16.3991L3.21691 9.49956L12.0562 2.59755C12.1495 2.52389 12.206 2.40849 12.206 2.28818Z"
        fill={color}
      />
    </svg>
  );
};

export default DirectionLeftIcon;
