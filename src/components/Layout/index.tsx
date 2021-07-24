import { ReactNode, VFC } from "react";

type Props = {
  children: ReactNode;
};

export const Layout: VFC<Props> = ({ children }) => {
  return (
    <div className="max-w-screen-sm m-auto">
      <div className="m-4">{children}</div>
    </div>
  );
};
