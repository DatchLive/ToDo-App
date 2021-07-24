import { Button } from "@vechaiui/react";
import { VFC, MouseEventHandler } from "react";

type Props = {
  size?: "sm" | "xs" | "md" | "lg" | "xl" | undefined;
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: string;
};

export const PrimaryButton: VFC<Props> = (props) => {
  const className = "border-2 cursor-pointer hover:opacity-50";
  return (
    //sizeのpropsが渡ったらToDo側のボタン、渡らなかったら認証関係ボタン
    <>
      {props.size ? (
        <Button size="sm" onClick={props.onClick} className={className}>
          {props.children}
        </Button>
      ) : (
        <Button type="submit" onClick={props.onClick} className={className}>
          {props.children}
        </Button>
      )}
    </>
  );
};
