import { useRef, useState } from 'react';

import { usePathname, useRouter } from 'next/navigation';

import { IMainMenuTitleInfo, INormalMenuTitleInfo, MenuTitleActionEnum } from './Sidebar';

import classNames from 'classnames';

interface ISideBarItemProps {
  titleData: INormalMenuTitleInfo | IMainMenuTitleInfo;
  dropDownMenuData?: {
    route: string;
    title: string;
    icon: string;
  }[];
}

const SideBarItem = ({ titleData, dropDownMenuData }: ISideBarItemProps) => {
  const router = useRouter();
  const pathName = usePathname()
  const basePath = process.env.basePath;

  const btnDropdownRef = useRef<HTMLButtonElement>(null);
  const popoverDropdownRef = useRef<HTMLDivElement>(null);

  const { route, title, action } = titleData;

  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const onClickButton = () => {
    if (action === MenuTitleActionEnum.LINK) {
      if (pathName === route) {
        router.replace(basePath ?? '/');
      } else {
        router.push(route);
      }
    } else {
      setIsDropDownOpen((pre) => !pre);
    }
  };

  const onClickDropDownMenu = (route: string) => () => {
    if (pathName === route) {
      router.replace(basePath ?? '/');
    } else {
      router.push(route);
    }
  };

  return (
    <>
      <button
        className="items-center flex justify-between"
        onClick={onClickButton}
        ref={btnDropdownRef}
        style={{ outline: 'none' }}
      >
        <div
          className={
            'text-xs uppercase py-3 font-bold block text-blueGray-700 hover:text-blueGray-500'
          }
        >
          <i className={'fas fa-tv mr-2 text-sm text-blueGray-300'} />
          {title}
        </div>
        {action === MenuTitleActionEnum.DROP_DOWN && (
          <i
            className={classNames({
              'fa fa-chevron-down': !isDropDownOpen,
              'fa fa-chevron-up': isDropDownOpen,
            })}
          />
        )}
      </button>
      {dropDownMenuData && (
        <div
          ref={popoverDropdownRef}
          className={
            (isDropDownOpen ? 'block ' : 'hidden ') +
            'bg-blueGray-100 text-base z-50 float-left py-2 list-none text-left rounded   min-w-48 '
          }
        >
          {dropDownMenuData.map((menu) => (
            <div
              key={menu.title}
              className={
                'px-6 text-xs uppercase py-3 font-bold block text-blueGray-700 hover:text-blueGray-500 '
              }
            >
              <button onClick={onClickDropDownMenu(menu.route)} style={{ outline: 'none' }}>
                {menu.title}
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default SideBarItem;
