import { useState } from "react";
import * as C from "./styles";
import { Item } from "../../types/Item";

import Grid from '@mui/material/Grid'; // Grid version 1

import RemoveIcon from '@mui/icons-material/Remove';

type Props = {
  item: Item,
  onRemove: (item: any)  => void,
}

export const ListItem = ({ item, onRemove }: Props) => {
  
  const [isChecked, setIsChecked] = useState(item.done);
  
  return (
    <C.Container done={isChecked}>
      <Grid container>
        <Grid xs={11}>
          <input 
          type="checkbox" 
          checked={isChecked}
          onChange={event => setIsChecked(event.target.checked)}
          />
          <label>{item.name}</label>
        </Grid>
        <Grid xs={1}>
          <RemoveIcon className="removeicon" onClick={() => {onRemove(item)}}></RemoveIcon>
        </Grid>
      </Grid>
    </C.Container>
  )
}