import AppleIcon from '@assets/icons/Apple.icon';
import ArrowLeftIcon from '@assets/icons/ArrowLeft.icon';
import ArrowRightIcon from '@assets/icons/ArrowRight.icon';
import ArrowTopIcon from '@assets/icons/ArrowTop.icon';
import CloseIcon from '@assets/icons/Close.icon';
import DirectionLeftIcon from '@assets/icons/DirectionLeft.icon';
import DirectionRightIcon from '@assets/icons/DirectionRight.icon';
import DownloadIcon from '@assets/icons/Download.icon';
import HamburgerIcon from '@assets/icons/Hamburger.icon';
import InstagramIcon from '@assets/icons/Instagram.icon';
import PlayStoreIcon from '@assets/icons/PlayStore.icon';
import PlusIcon from '@assets/icons/Plus.icon';
import SearchIcon from '@assets/icons/Search.icon';
import YoutubeIcon from '@assets/icons/Youtube.icon';

interface IconBaseProps {
  icon: IconNameType;
  iconStyle: IconProps;
}

export interface IconProps {
  width: number | string;
  height: number | string;
  color?: string;
}

const getIcon = (props: IconProps) => {
  const { width = 24, color = 'black', height = 24 } = props;

  const iconProps = { width, color, height };

  return {
    hamburger: <HamburgerIcon {...iconProps} />,
    youtube: <YoutubeIcon {...iconProps} />,
    instagram: <InstagramIcon {...iconProps} />,
    close: <CloseIcon {...iconProps} />,
    plus: <PlusIcon {...iconProps} />,
    playStore: <PlayStoreIcon {...iconProps} />,
    download: <DownloadIcon {...iconProps} />,
    apple: <AppleIcon {...iconProps} />,
    arrowRight: <ArrowRightIcon {...iconProps} />,
    arrowLeft: <ArrowLeftIcon {...iconProps} />,
    arrowTop: <ArrowTopIcon {...iconProps} />,
    search: <SearchIcon {...iconProps} />,
    directionRight: <DirectionRightIcon {...iconProps} />,
    directionLeft: <DirectionLeftIcon {...iconProps} />,
  };
};

const extractedIcon = getIcon({ color: 'black', height: 24, width: 24 });

export type IconNameType = keyof typeof extractedIcon;

const IconBase = (props: IconBaseProps) => {
  const { iconStyle, icon } = props;
  const iconList = getIcon(iconStyle);

  return iconList[icon];
};

export default IconBase;
