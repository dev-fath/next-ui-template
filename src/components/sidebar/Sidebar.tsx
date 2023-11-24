import { useEffect, useMemo, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

// import { changeUserId } from 'redux/userSlice';

import { LogoImage } from '@assets/images';

import NotificationDropdown from '@components/common/drop-downs/TableDropdown';
import UserDropdown from '@components/common/drop-downs/UserDropdown';

import { RouteKeyEnum, TRouteUrl, routeGroup } from '@constants/route';

import { useAppDispatch } from '@hooks/redux/reduxHook';
// import useCheckAccessibleForBoard from '@hooks/useCheckAccessibleForBoard';

import SideBarItem from './SideBarItem';

import { UserRole } from 'gql/graphql';

export enum MenuTitleActionEnum {
  LINK = 'LINK',
  DROP_DOWN = 'DROP_DOWN',
}

type TNormalTitle =
  | 'dashboard'
  | 'baseSetting'
  | 'admins'
  | 'users'
  | 'reports'
  | 'notifications'
  | 'consultings'
  | 'survey'
  | 'posts';

type TMainTitle = 'consultings' | 'educationCenter' | 'deal' | 'job';

export interface IMenu {
  route: string;
  title: string;
  icon: string;
}
export interface IBaseMenuTitleInfo {
  route: string;
  title: string;
  icon: string;
  action: MenuTitleActionEnum;
}

export interface INormalMenuTitleInfo extends IBaseMenuTitleInfo {
  key: TNormalTitle;
}

export interface IMainMenuTitleInfo extends IBaseMenuTitleInfo {
  key: TMainTitle;
}

const POST_MANAGEMENT = '게시물 관리';

const normalMenuTitles: INormalMenuTitleInfo[] = [
  //대시보드
  { key: 'dashboard', route: '/', title: '대시보드', icon: '', action: MenuTitleActionEnum.LINK },
  //기본 설정
  {
    key: 'baseSetting',
    route: '/',
    title: '기본 설정',
    icon: '',
    action: MenuTitleActionEnum.DROP_DOWN,
  },
  //관리자 관리
  {
    key: 'admins',
    route: '',
    title: '관리자 관리',
    icon: '',
    action: MenuTitleActionEnum.DROP_DOWN,
  },
  //회원 관리
  { key: 'users', route: '/', title: '회원 관리', icon: '', action: MenuTitleActionEnum.DROP_DOWN },
  //신고 관리
  {
    key: 'reports',
    route: routeGroup[RouteKeyEnum.REPORT],
    title: '신고 관리',
    icon: '',
    action: MenuTitleActionEnum.LINK,
  },
  //알림 관리
  {
    key: 'notifications',
    route: routeGroup[RouteKeyEnum.NOTIFICATIONS],
    title: '알림 관리',
    icon: '',
    action: MenuTitleActionEnum.LINK,
  },
  //상담 관리
  {
    key: 'consultings',
    route: '/',
    title: '상담 관리',
    icon: '',
    action: MenuTitleActionEnum.DROP_DOWN,
  },
  //패널 설문조사 관리
  {
    key: 'survey',
    route: '/survey',
    title: '패널 설문조사 관리',
    icon: '',
    action: MenuTitleActionEnum.LINK,
  },
  //게시믈 관리
  {
    key: 'posts',
    route: '/',
    title: POST_MANAGEMENT,
    icon: '',
    action: MenuTitleActionEnum.DROP_DOWN,
  },
];

const normalMenus: Record<TNormalTitle, IMenu[]> = {
  //대시보드
  dashboard: [{ route: '/', title: 'Dashboard', icon: '' }], // 타이틀만
  //기본 설정
  baseSetting: [
    { route: routeGroup[RouteKeyEnum.BANNER], title: '배너 관리', icon: '' },
    { route: routeGroup[RouteKeyEnum.TERMS], title: '약관 관리', icon: '' },
  ],
  //관리자 관리
  admins: [
    { route: routeGroup[RouteKeyEnum.ADMINS], title: '관리자 목록', icon: '' },
    { route: routeGroup[RouteKeyEnum.ADMIN_BOARD], title: '전체 게시판 권한 설정', icon: '' },
  ],
  //회원 관리
  users: [
    { route: routeGroup[RouteKeyEnum.MEMBERS], title: '회원 목록', icon: '' },
    { route: routeGroup[RouteKeyEnum.COMPANY], title: '외식기업 신청 관리', icon: '' },
    { route: routeGroup[RouteKeyEnum.MEMBERS_WITHDRAW], title: '탈퇴 관리', icon: '' },
  ],
  //신고 관리
  reports: [{ route: '/', title: '신고 관리', icon: '' }], // 타이틀만
  //알림 관리
  notifications: [{ route: '/notifications', title: '알림 관리', icon: '' }], // 타이틀만
  //상담 관리
  consultings: [
    { route: routeGroup[RouteKeyEnum.INQUIRES], title: '질문과 답변', icon: '' },
    { route: routeGroup[RouteKeyEnum.MALL_BOARD], title: '부가혜택몰 신청 관리', icon: '' },
    { route: routeGroup[RouteKeyEnum.CONSULTANT_APPLY], title: '컨설턴트 신청 관리', icon: '' },
    { route: routeGroup[RouteKeyEnum.FAQS], title: 'FAQ 관리', icon: '' },
  ],
  //패널 설문조사 관리
  survey: [{ route: routeGroup[RouteKeyEnum.SURVEY], title: '패널설문조사 관리', icon: '' }], // 타이틀만
  //게시믈 관리
  posts: [
    { route: routeGroup[RouteKeyEnum.POST_INTRO], title: '한국외식산업 연구원 소개', icon: '' },
    { route: routeGroup[RouteKeyEnum.DINE_OUT_INFO], title: '외식정보', icon: '' },
    { route: routeGroup[RouteKeyEnum.NOTICES], title: '알림마당', icon: '' },
    { route: routeGroup[RouteKeyEnum.GOVERNMENT_SUPPORT], title: '정부지원', icon: '' },
    { route: routeGroup[RouteKeyEnum.EDUCATION_POST], title: '교육', icon: '' },
    { route: routeGroup[RouteKeyEnum.MALL_BOARD_POST], title: '부가혜택몰', icon: '' },
  ],
};

const mainMenuTitles: IMainMenuTitleInfo[] = [
  // 외식 컨설팅*인증
  {
    key: 'consultings',
    route: '/',
    title: '외식컨설팅',
    icon: '',
    action: MenuTitleActionEnum.DROP_DOWN,
  },
  //평생교육원
  {
    key: 'educationCenter',
    route: '/',
    title: '평생교육원',
    icon: '',
    action: MenuTitleActionEnum.DROP_DOWN,
  },
  // 중고거래
  { key: 'deal', route: '/', title: '중고거래', icon: '', action: MenuTitleActionEnum.DROP_DOWN },
  // 구인
  {
    key: 'job',
    route: routeGroup[RouteKeyEnum.JOB],
    title: '구인',
    icon: '',
    action: MenuTitleActionEnum.LINK,
  },
];
const mainMenus = {
  // 외식 컨설팅*인증
  consultings: [
    { route: routeGroup[RouteKeyEnum.CONSULTING], title: '외식컨설팅 소개', icon: '' },
    { route: routeGroup[RouteKeyEnum.CONSULTANT], title: '외식컨설턴트 소개', icon: '' },
  ],
  //평생교육원
  educationCenter: [
    { route: routeGroup[RouteKeyEnum.EDU_CENTER_VIDEO], title: '교육동영상', icon: '' },
    {
      route: routeGroup[RouteKeyEnum.EDU_CENTER_VIDEO_PURCHASES],
      title: '교육영상 결제내역',
      icon: '',
    },
    { route: routeGroup[RouteKeyEnum.EDU_CENTER_POST], title: '교육게시글', icon: '' },
    { route: routeGroup[RouteKeyEnum.PRIVATE_CERTIFICATE], title: '민간자격증(EXAM)', icon: '' },
  ],
  // 중고거래
  deal: [
    { route: routeGroup[RouteKeyEnum.SECOND_HAND_PRODUCT], title: '상품리스트 관리', icon: '' },
    { route: routeGroup[RouteKeyEnum.SECOND_HAND_CATEGORY], title: '상품카테고리 관리', icon: '' },
  ],
};

export default function Sidebar() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  // const { data: meData } = useMeQuery({
  //   onCompleted: ({ me }) => {
  //     dispatch(changeUserId(me.id));
  //   },
  // });

  // const { accessCheckerByBoardName, accessCheckerByRoute } = useCheckAccessibleForBoard(
  //   meData?.me.role,
  // );

  const [collapseShow, setCollapseShow] = useState('hidden');

  // const isAccessibleRoute = useMemo(() => {
  //   if (meData?.me) {
  //     return accessCheckerByRoute(router.route as TRouteUrl);
  //   }
  // }, [accessCheckerByRoute, meData?.me, router.route]);

  // useEffect(() => {
  //   if (isAccessibleRoute === false) {
  //     router.push('/');
  //   }
  // }, [isAccessibleRoute, router]);

  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow('bg-white m-2 py-3 px-6')}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Logo */}
          <Link href={'/'}>
            <Image src={LogoImage} width={200} height={40} alt="한국외식산업연구원" />
          </Link>
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <NotificationDropdown />
            </li>
            <li className="inline-block relative">
              <UserDropdown />
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              'md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded ' +
              collapseShow
            }
          >
            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              {normalMenuTitles.map((titleData) => {
                // if (
                //   meData?.me.role === UserRole.AdminPac1 ||
                //   meData?.me.role === UserRole.AdminPac2
                // ) {
                  if (titleData.title === POST_MANAGEMENT) {
                    return (
                      <SideBarItem
                        key={titleData.title}
                        titleData={titleData}
                        dropDownMenuData={normalMenus[titleData.key].filter((menu) => {}
                          // accessCheckerByBoardName(menu.title),
                        )}
                      />
                    );
                  }
                // } else {
                //   return (
                //     <SideBarItem
                //       key={titleData.title}
                //       titleData={titleData}
                //       dropDownMenuData={normalMenus[titleData.key]}
                //     />
                //   );
                // }
              })}
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              주력페이지 관리
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              {mainMenuTitles.map((titleData) => {
                // if (accessCheckerByBoardName(titleData.title)) {
                  return (
                    <SideBarItem
                      key={titleData.title}
                      titleData={titleData}
                      dropDownMenuData={
                        titleData.key !== 'job' ? mainMenus[titleData.key] : undefined
                      }
                    />
                  );
                // }
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
