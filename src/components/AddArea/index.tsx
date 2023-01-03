import { useState, KeyboardEvent } from "react";
import * as C from "./styles";
import AddIcon from '@material-ui/icons/Add';

type Props = {
  onEnter: (taskName: string) => void
}

export const AddArea = ({ onEnter }: Props) => {
  const [inputText, setInputText] = useState("");

  const handleKeyUp = (e: KeyboardEvent) => {
    if((e.code === "Enter" && inputText !== "") || (e.code === "NumpadEnter" && inputText!== "")){
      onEnter(inputText);
      setInputText("");
    }
  }

  const clickOnPlusButton = (inputText: string) => {
    if(inputText !== ""){
      onEnter(inputText);
      setInputText("");
    }
  }
  return (
    <C.Container>
      <AddIcon className="image" style={{cursor:"pointer", color:"green"}} onClick={() => clickOnPlusButton(inputText)}></AddIcon>
      <input 
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={inputText}
        onChange={event => setInputText(event.target.value)}
        onKeyUp={handleKeyUp}
      />
    </C.Container>
  );
}

