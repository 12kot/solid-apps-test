import { ReactElement } from "react";

interface IProtectedRoutesProps {
  children: ReactElement;
}

export const ProtectedRoute = ({
  children,
}: IProtectedRoutesProps): ReactElement | null => {
  return children;
};
