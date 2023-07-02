import styled from "styled-components";

type AddItemButtonProps = {
  dark?: boolean;
};

export const AppContainer = styled.div`
  background-color: #2e78b9;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 20px;
`;

export const ColumnContainer = styled.div`
  background-color: #ebebf0;
  min-height: 40px;
  width: 300px;
  margin-right: 20px;
  border-radius: 3px;
  padding: 8px 8px;
  flex-grow: 0;
`;

export const ColumnTitle = styled.div`
  font-weight: bold;
  padding: 6px 16px 12px;
`;

export const CardContainer = styled.div`
  background-color: #ffffff;
  cursor: pointer;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  max-width: 300px;
  border-radius: 3px;
  box-shadow: #091e4240 0px 1px 0px 0px;
`;

export const AddItemButton = styled.button<AddItemButtonProps>`
  background-color: #ffffff3d;
  border-radius: 3px;
  border: none;
  max-width: 300px;
  width: 100%;
  cursor: pointer;
  color: ${(props) => (props.dark ? "#000" : "#fff")};
  text-align: left;
  padding: 10px 12px;
  transition: background 85ms ease-in;
  &:hover {
    background-color: #ffffff52;
  }
`;

export const NewItemFormContainer = styled.div`
  max-width: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const NewItemButton = styled.button`
  background-color: #5ba842;
  border-radius: 3px;
  border: none;
  box-shadow: none;
  color: #fff;
  padding: 6px 12px;
  text-align: center;
`;

export const NewItemInput = styled.input`
  width: 100%;
  border-radius: 3px;
  border: none;
  box-shadow: #091e4240 0px 1px 0px 0px;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
`;
