import styled from "styled-components";

type ContainerProps = {
  done : boolean;
}

export const Container = styled.div(({ done}: ContainerProps) => (
  `
  display: flex;
  background-color: #20212c;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  align-items: center;
  
  input {
    width: 25px;
    height: 25px;
    margin-right: 10px;
  }

  label {
    color:#fff;
    font-size: 22px;
    text-decoration: ${done ? "line-through" : "initial"};
  }
  .removeicon{
    color:red;
    float:right;
    margin-top:3px;
    border: 1px solid #f3f3f3;
    border-radius: 5px;
    cursor: pointer;
  }

`
));