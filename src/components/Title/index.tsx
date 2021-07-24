import type { VFC } from "react";

type Props = {
  title: string;
};

export const Title: VFC<Props> = (props) => {
  return (
    <h1 className="mb-4 text-xl font-bold text-center">
      <span className="border-b-2 border-black ">{props.title}</span>
    </h1>
  );
};
