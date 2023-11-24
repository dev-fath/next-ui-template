import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';

import type { AppDispatch, RootState } from 'redux/store';

/** useDispatch는 thunkAction에 대해서 타입에러를 발생시키므로 커스터 마이징해서 사용합니다. */
export const useAppDispatch: () => AppDispatch = useDispatch;
/** useSelector를 사용할 경우, 매번 state의 타입을 지정해줘야 하기 때문에 커스터 마이징해서 사용합니다. */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

/**
 *
 * useAppDispatch 와 useAppSelector 를 사용하는 이유는 Redux 공식 문서에서 권장하는 방식으로, 매번 state 의 타입을 지정해야하는 경우와, 불필요한 타입 에러를 없엔다.
 */
