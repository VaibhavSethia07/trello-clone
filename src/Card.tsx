import { CardContainer } from "./styles";

type CardProps = React.PropsWithChildren<{
  text: string;
}>;

export const Card = ({ text }: CardProps) => {
  return <CardContainer>{text}</CardContainer>;
};
