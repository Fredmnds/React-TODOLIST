import { listenerCount } from "process";
import { useState } from "react";
import * as Componentes from "./App.styles";
import { Item } from "./types/Item";
import { ListItem } from "./components/ListItem/index"
import { AddArea } from "./components/AddArea"
// import { Container, Area, Header }  from "./App.styles";


const App = () => {

  const [list, setList] = useState<Item[]>([]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });
    setList(newList);
  }

  const handleRemoveTask = (item: any) => {
    setList(list.filter((obj) => obj.id !== item.id));
  }

  return (
    <Componentes.Container>
      <Componentes.Area>
        <Componentes.Header>TODO List</Componentes.Header>

        <AddArea onEnter={handleAddTask} />

        {list.map((item, index) =>(
          <ListItem key={index} item ={item} onRemove={handleRemoveTask}/>
        ))}
      </Componentes.Area>
    </Componentes.Container>
  );
}

export default App;