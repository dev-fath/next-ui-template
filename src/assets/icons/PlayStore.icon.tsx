import { IconProps } from '@assets/icons/IconBase';

const PlayStoreIcon = (props: IconProps) => {
  const { width, height } = props;

  return (
    <svg width={width} height={height} viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.75 4.648v30.703a0.338 0.338 0 0 0 0.576 0.24L20.313 20 4.326 4.408A0.338 0.338 0 0 0 3.75 4.648Z" />
      <path d="M27.016 13.594 6.97 2.55l-0.013 -0.007c-0.345 -0.188 -0.673 0.28 -0.391 0.552l15.713 15.025Z" />
      <path d="M6.569 36.905c-0.284 0.272 0.044 0.739 0.391 0.552l0.013 -0.007L27.016 26.406l-4.735 -4.527Z" />
      <path d="m35.108 18.047 -5.598 -3.083L24.247 20l5.263 5.034L35.108 21.953c1.523 -0.841 1.523 -3.065 0 -3.906Z" />
    </svg>
  );
};

export default PlayStoreIcon;
