import {
  ConsultantApplyStateEnum,
  MallBoardApplyStateEnum,
  NotificationAction,
  NotificationType,
  SurveyPostTypeEnum,
  UserCompanyState,
  UserRole,
  UserState,
} from '../gql/graphql';

export const memberRoleToValue: { [key in UserRole]: string } = {
  ADMIN: '관리자',
  ADMIN_PAC1: '교육관리자',
  ADMIN_PAC2: '지부관리자',
  MEMBER: '일반 사용자',
  SELF_EMPLOYED: '외식업체',
};

export const memberStateToValue: { [key in UserState]: string } = {
  ACTIVE: '활성',
  INACTIVE: '휴면',
  LEAVED: '탈퇴',
  PENDING: '가입 대기',
  SUSPENDED: '정지',
};

export const companyStateToValue: { [key in UserCompanyState]: string } = {
  ACTIVE: '활성',
  APPLY: '신청완료',
  REJECT: '등록거절',
  STOP: '정지',
};

export const notificationTypeToValue: { [key in NotificationType]: string } = {
  CHAT: '채팅',
  CONSULTING: '외식컨설팅',
  EDU_CENTER: '평생교육원',
  INQUIRE: '문의',
  MALL_BOARD: '부가혜택몰',
  MARKETING: '마케팅',
  MY_PAGE: '마이페이지',
  NOTICE: '공지사항',
  SECONDHAND: '중고거래',
  SURVEY: '패널설문조사',
};

export const notificationActionToValue: { [key in NotificationAction]: string } = {
  NONE: '없음',
  PAGE_MOVE: '페이지 이동',
};

export const surveyTypeToValue: { [key in SurveyPostTypeEnum]: string } = {
  INTERNAL: '내부',
  LINK: '외부',
};

export const mallBoardStateToValue: { [key in MallBoardApplyStateEnum]: string } = {
  APPLY: '신청완료',
  END: '상담완료',
};

export const consultantApplyStateToValue: { [key in ConsultantApplyStateEnum]: string } = {
  APPLY: '신청완료',
  END: '상담완료',
};
