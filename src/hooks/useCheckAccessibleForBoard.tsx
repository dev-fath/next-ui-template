import { useCallback } from 'react';

import { TRouteUrl, routeInfo } from '@constants/route';

import { UserRole, useBoardAuthsForAdminQuery } from 'gql/graphql';

const useCheckAccessibleForBoard = (meRoll?: UserRole) => {
  const { data } = useBoardAuthsForAdminQuery();

  const accessCheckerByBoardName = (boardName: string) => {
    if (meRoll === UserRole.Admin) {
      return true;
    }

    if (meRoll === UserRole.AdminPac1 || meRoll === UserRole.AdminPac2) {
      const board = data?.boardAuthsForAdmin.filter((board) => board.boardName === boardName);

      if (board && board.length > 0) {
        return board[0][meRoll === UserRole.AdminPac1 ? 'pac1' : 'pac2'];
      }
    }

    return false;
  };

  const accessCheckerByRoute = useCallback(
    (route: TRouteUrl) => {
      if (meRoll === UserRole.Admin) {
        return true;
      }

      if (route === '/') {
        return true;
      }

      if (meRoll === UserRole.AdminPac1 || meRoll === UserRole.AdminPac2) {
        const accessibleBoards = data?.boardAuthsForAdmin.filter((board) => {
          return (
            board[meRoll === UserRole.AdminPac1 ? 'pac1' : 'pac2'] &&
            routeInfo[route]?.includes(board.boardName)
          );
        });

        return accessibleBoards && accessibleBoards.length > 0;
      }

      return false;
    },
    [data?.boardAuthsForAdmin, meRoll],
  );

  return { accessCheckerByBoardName, accessCheckerByRoute };
};

export default useCheckAccessibleForBoard;
