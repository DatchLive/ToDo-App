import { VFC } from "react";
import { Input } from "@vechaiui/react";

type Props = {
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const InputFrom: VFC<Props> = (props) => {
  //labelタイトルの1文字目を大文字化
  const formTitle = props.type.charAt(0).toUpperCase() + props.type.slice(1);
  return (
    <div>
      <label htmlFor={props.type}>{formTitle}</label>
      <Input
        id={props.type}
        type={props.type}
        onChange={props.onChange}
        className="mb-4 border-2 hover:opacity-50"
      />
    </div>
  );
};
