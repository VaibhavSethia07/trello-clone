import { ChangeEvent, useState } from "react";
import { NewItemFormContainer, NewItemInput, NewItemButton } from "./styles";

type NewItemFormProps = {
  onAdd(text: string): void;
};

export const NewItemForm = ({ onAdd }: NewItemFormProps) => {
  const [text, setText] = useState("");

  return (
    <NewItemFormContainer>
      <NewItemInput
        value={text}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
      />
      <NewItemButton onClick={() => onAdd(text)}>Create</NewItemButton>
    </NewItemFormContainer>
  );
};