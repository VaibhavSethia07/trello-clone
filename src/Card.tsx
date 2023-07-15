import { CardContainer } from "./styles";

type CardProps = React.PropsWithChildren<{
  id: string;
  text: string;
}>;

export const Card = ({ id, text }: CardProps) => {
  return <CardContainer key={id}>{text}</CardContainer>;
};
