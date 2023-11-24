export enum RouteKeyEnum {
  DASHBOARD = 'dashboard',
  BANNER = 'banner',
  TERMS = 'terms',
  MEMBERS = 'members',
  COMPANY = 'company',
  MEMBERS_WITHDRAW = 'membersWithdraw',
  ADMINS = 'admins',
  ADMIN_DETAIL = 'adminDetail',
  ADMIN_ENROLL = 'adminEnroll',
  ADMIN_BOARD = 'adminBoard',
  REPORT = 'report',
  REPORT_DETAIL = 'reportDetail',
  POST_INTRO = 'postIntro',
  NOTIFICATIONS = 'notifications',
  NOTIFICATIONS_SEND = 'notificationsSend',
  CONSULTANT = 'consultant',
  CONSULTANT_ENROLL = 'consultantEnroll',
  CONSULTANT_DETAIL = 'consultantDetail',
  CONSULTING = 'consulting',
  CONSULTING_ENROLL = 'consultingEnroll',
  CONSULTING_DETAIL = 'consultingDetail',
  INQUIRES = 'inquires',
  INQUIRES_DETAIL = 'inquiresDetail',
  MALL_BOARD = 'mallBoard',
  CONSULTANT_APPLY = 'consultantApply',
  FAQS = 'faqs',
  FAQ_ENROLL = 'faqEnroll',
  SURVEY = 'survey',
  SURVEY_DETAIL = 'surveyDetail',
  SURVEY_ENROLL = 'surveyEnroll',
  SURVEY_RESULT = 'surveyResult',
  DINE_OUT_INFO = 'dineOutInfo',
  DINE_OUT_INFO_DETAIL = 'dineOutInfoDetail',
  DINE_OUT_INFO_ENROLL = 'dineOutInfoEnroll',
  NOTICES = 'notices',
  GOVERNMENT_SUPPORT = 'governmentSupport',
  GOVERNMENT_SUPPORT_ENROLL = 'governmentSupportEnroll',
  GOVERNMENT_SUPPORT_DETAIL = 'governmentSupportDetail',
  EDU_CENTER_VIDEO = 'eduCenterVideo',
  EDU_CENTER_VIDEO_ENROLL = 'eduCenterVideoEnroll',
  EDU_CENTER_VIDEO_DETAIL = 'eduCenterVideoDetail',
  EDU_CENTER_POST = 'eduCenterPost',
  EDU_CENTER_POST_ENROLL = 'eduCenterPostEnroll',
  EDU_CENTER_POST_DETAIL = 'eduCenterPostDetail',
  PRIVATE_CERTIFICATE = 'privateCertificate',
  PRIVATE_CERTIFICATE_ENROLL = 'privateCertificateEnroll',
  PRIVATE_CERTIFICATE_DETAIL = 'privateCertificateDetail',
  EDU_CENTER_VIDEO_PURCHASES = 'eduCenterVideoPurchases',
  MALL_BOARD_POST = 'mallBoardPost',
  MALL_BOARD_POST_ENROLL = 'mallBoardPostEnroll',
  MALL_BOARD_POST_DETAIL = 'mallBoardPostDetail',
  EDUCATION_POST = 'educationPost',
  EDUCATION_POST_ENROLL = 'educationPostEnroll',
  EDUCATION_POST_DETAIL = 'educationPostDetail',
  SECOND_HAND_CATEGORY = 'secondHandCategory',
  SECOND_HAND_PRODUCT = 'secondHandProduct',
  SECOND_HAND_PRODUCT_DETAIL = 'secondHandProductDetail',
  SECOND_HAND_PRODUCT_ENROLL = 'secondHandProductEnroll',
  JOB = 'job',
  JOB_DETAIL = 'jobDetail',
  JOB_ENROLL = 'jobEnroll',
}
export type TRouteUrl =
  | '/'
  | '/setting/banner'
  | '/setting/terms'
  | '/members'
  | '/members/withdraw'
  | '/company'
  | '/admins'
  | '/admins/enroll'
  | '/admins/[id]'
  | '/admins/board'
  | '/report'
  | '/report/[id]'
  | '/posts/introduce'
  | '/notifications'
  | '/notifications/send'
  | '/consulting/consultants'
  | '/consulting/consultants/enroll'
  | '/consulting/consultants/[id]'
  | '/consulting/consultings'
  | '/consulting/consultings/enroll'
  | '/consulting/consultings/[id]'
  | '/inquires'
  | '/inquires/[id]'
  | '/mall-board'
  | '/consultant-apply'
  | '/faq'
  | '/faq/[id]'
  | '/faq/enrollments'
  | '/survey'
  | '/survey/[id]'
  | '/survey/result/[id]'
  | '/survey/add'
  | '/posts/dine-out-info'
  | '/posts/dine-out-info/[id]'
  | '/posts/dine-out-info/enroll'
  | '/posts/notices'
  | '/posts/government-support'
  | '/posts/government-support/enroll'
  | '/posts/government-support/[id]'
  | '/education-center/video'
  | '/education-center/video/enroll'
  | '/education-center/video/[id]'
  | '/education-center/post'
  | '/education-center/post/enroll'
  | '/education-center/post/[id]'
  | '/education-center/video-purchases'
  | '/education-center/private-certificate'
  | '/education-center/private-certificate/enroll'
  | '/education-center/private-certificate/[id]'
  | '/posts/mall-board'
  | '/posts/mall-board/enroll'
  | '/posts/mall-board/[id]'
  | '/posts/educations'
  | '/posts/educations/enroll'
  | '/posts/educations/[id]'
  | '/second-hand/category'
  | '/second-hand/product'
  | '/second-hand/product/[id]'
  | '/second-hand/product/enroll'
  | '/job'
  | '/job/[id]'
  | '/job/enroll';

export const routeGroup: Record<RouteKeyEnum, TRouteUrl> = {
  dashboard: '/',
  banner: '/setting/banner',
  terms: '/setting/terms',
  members: '/members',
  membersWithdraw: '/members/withdraw',
  company: '/company',
  admins: '/admins',
  adminDetail: '/admins/[id]',
  adminEnroll: '/admins/enroll',
  adminBoard: '/admins/board',
  report: '/report',
  reportDetail: '/report/[id]',
  postIntro: '/posts/introduce',
  notifications: '/notifications',
  notificationsSend: '/notifications/send',
  consultant: '/consulting/consultants',
  consultantEnroll: '/consulting/consultants/enroll',
  consultantDetail: '/consulting/consultants/[id]',
  consulting: '/consulting/consultings',
  consultingEnroll: '/consulting/consultings/enroll',
  consultingDetail: '/consulting/consultings/[id]',
  inquires: '/inquires',
  inquiresDetail: '/inquires/[id]',
  mallBoard: '/mall-board',
  consultantApply: '/consultant-apply',
  faqs: '/faq',
  faqEnroll: '/faq/enrollments',
  survey: '/survey',
  surveyDetail: '/survey/[id]',
  surveyEnroll: '/survey/add',
  surveyResult: '/survey/result/[id]',
  dineOutInfo: '/posts/dine-out-info',
  dineOutInfoDetail: '/posts/dine-out-info/[id]',
  dineOutInfoEnroll: '/posts/dine-out-info/enroll',
  notices: '/posts/notices',
  governmentSupport: '/posts/government-support',
  governmentSupportEnroll: '/posts/government-support/enroll',
  governmentSupportDetail: '/posts/government-support/[id]',
  eduCenterVideo: '/education-center/video',
  eduCenterVideoEnroll: '/education-center/video/enroll',
  eduCenterVideoDetail: '/education-center/video/[id]',
  eduCenterPost: '/education-center/post',
  eduCenterPostEnroll: '/education-center/post/enroll',
  eduCenterPostDetail: '/education-center/post/[id]',
  eduCenterVideoPurchases: '/education-center/video-purchases',
  privateCertificate: '/education-center/private-certificate',
  privateCertificateEnroll: '/education-center/private-certificate/enroll',
  privateCertificateDetail: '/education-center/private-certificate/[id]',
  mallBoardPost: '/posts/mall-board',
  mallBoardPostEnroll: '/posts/mall-board/enroll',
  mallBoardPostDetail: '/posts/mall-board/[id]',
  educationPost: '/posts/educations',
  educationPostEnroll: '/posts/educations/enroll',
  educationPostDetail: '/posts/educations/[id]',
  secondHandCategory: '/second-hand/category',
  secondHandProduct: '/second-hand/product',
  secondHandProductEnroll: '/second-hand/product/enroll',
  secondHandProductDetail: '/second-hand/product/[id]',
  job: '/job',
  jobDetail: '/job/[id]',
  jobEnroll: '/job/enroll',
};

const DASHBOARD = '대시보드';
const BASE_SETTING = '기본 설정';
const MEMBERS = '회원 관리';
const ADMIN = '관리자 관리';
const REPORT = '신고 관리';
const POST = '게시물 관리';
const CONSULTING = '외식컨설팅';
const QNA = '상담관리';
const MALL_BOARD = '부가혜택몰 신청 관리';
const CONSULTANT = '컨설턴트 신청 관리';
const FAQ = '자주 묻는 질문';
const SURVEY = '패널 설문조사 관리';
const NOTIFICATIONS = '알림 관리';
const EDUCATION_CENTER = '평생교육원';
const JOB = '구인';
const SECOND_HAND = '중고거래';

export const routeInfo: Record<TRouteUrl, string[]> = {
  '/': [DASHBOARD],
  '/setting/banner': [BASE_SETTING, '배너 관리'],
  '/setting/terms': [BASE_SETTING, '약관 관리'],
  '/members': [MEMBERS, '회원 목록'],
  '/company': [MEMBERS, '외식기업 신청 관리'],
  '/members/withdraw': [MEMBERS, '탈퇴관리'],
  '/admins': [ADMIN],
  '/admins/[id]': [ADMIN, '상세 보기'],
  '/admins/enroll': [ADMIN, '등록'],
  '/admins/board': [ADMIN, '게시판 권한 설정'],
  '/report': [REPORT],
  '/report/[id]': [REPORT, '상세 보기'],
  '/posts/introduce': [POST, '한국외식산업 연구원 소개'],
  '/notifications': [NOTIFICATIONS],
  '/notifications/send': [NOTIFICATIONS, '알림 발송'],
  '/consulting/consultants': [CONSULTING, '외식 컨설턴트 소개'],
  '/consulting/consultants/enroll': [CONSULTING, '외식 컨설턴트 소개', '외식 컨설턴트 등록'],
  '/consulting/consultants/[id]': [CONSULTING, '외식 컨설턴트 소개', '외식 컨설턴트 상세'],
  '/consulting/consultings': [CONSULTING, '외식 컨설팅 소개'],
  '/consulting/consultings/enroll': [CONSULTING, '외식 컨설팅 소개', '외식 컨설팅 등록'],
  '/consulting/consultings/[id]': [CONSULTING, '외식 컨설팅 소개', '외식 컨설팅 상세'],
  '/inquires': [QNA, '질문과 답변'],
  '/inquires/[id]': [QNA, '질문과 답변', '상세 보기'],
  '/survey': [SURVEY],
  '/survey/[id]': [SURVEY, '설문조사 상세'],
  '/survey/add': [SURVEY, '설문조사 등록'],
  '/survey/result/[id]': [SURVEY, '설문조사 결과'],
  '/posts/dine-out-info': [POST, '외식 정보'],
  '/posts/dine-out-info/[id]': [POST, '외식 정보', '상세 보기'],
  '/posts/dine-out-info/enroll': [POST, '외식 정보', '게시물 등록'],
  '/posts/notices': [POST, '알림마당'],
  '/posts/government-support': [POST, '정부 지원'],
  '/posts/government-support/enroll': [POST, '정부 지원', '게시물 등록'],
  '/posts/government-support/[id]': [POST, '정부 지원', '상세 보기'],
  '/posts/educations': [POST, '교육'],
  '/posts/educations/enroll': [POST, '교육', '게시물 등록'],
  '/posts/educations/[id]': [POST, '교육', '상세 보기'],
  '/education-center/video': [EDUCATION_CENTER, '교육 동영상'],
  '/education-center/video/enroll': [EDUCATION_CENTER, '교육 동영상', '등록'],
  '/education-center/video/[id]': [EDUCATION_CENTER, '교육 동영상', '상세 보기'],
  '/education-center/post': [EDUCATION_CENTER, '교육 게시글'],
  '/education-center/post/enroll': [EDUCATION_CENTER, '교육 게시글', '등록'],
  '/education-center/post/[id]': [EDUCATION_CENTER, '교육 게시글', '상세 보기'],
  '/education-center/video-purchases': [EDUCATION_CENTER, '교육영상 결제내역'],
  '/education-center/private-certificate': [EDUCATION_CENTER, '민간자격증'],
  '/education-center/private-certificate/enroll': [EDUCATION_CENTER, '민간자격증', '등록'],
  '/education-center/private-certificate/[id]': [EDUCATION_CENTER, '민간자격증', '상세 보기'],
  '/faq': [FAQ],
  '/faq/[id]': [FAQ, '상세 보기'],
  '/faq/enrollments': [FAQ, 'FAQ 등록'],
  '/posts/mall-board': [POST, '부가혜택몰'],
  '/posts/mall-board/enroll': [POST, '부가혜택몰', '게시물 등록'],
  '/posts/mall-board/[id]': [POST, '부가혜택몰', '상세 보기'],
  '/mall-board': [MALL_BOARD],
  '/consultant-apply': [CONSULTANT],
  '/second-hand/category': [SECOND_HAND, '상품카테고리 관리'],
  '/second-hand/product': [SECOND_HAND, '상품리스트 관리'],
  '/second-hand/product/[id]': [SECOND_HAND, '상품리스트 관리', '상세 보기'],
  '/second-hand/product/enroll': [SECOND_HAND, '상품리스트 관리', '등록 '],
  '/job': [JOB],
  '/job/[id]': [JOB, '상세 보기'],
  '/job/enroll': [JOB, '등록'],
};
