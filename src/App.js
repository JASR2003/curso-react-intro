import { ToDoCounter } from './ToDoCounter';
import { ToDoSearch } from './ToDoSearch';
import { ToDoList } from './ToDoList';
import { ToDoItem } from './ToDoItem';
import { ToDoButton } from './ToDoButton';
import './index.css';
import React from 'react';

const defaultToDo = [
  {text: 'Hacer partidos de squad battles', completed : true},
  {text: 'completar desafío de DCP', completed : false},
  {text: 'Ganar 3 partidos de Rush', completed : true},
  {text: 'Jugar primer FUT Champions', completed : false}
]

function App() {
  return (
    <React.Fragment>

      <ToDoCounter completed={8} total={15}/>

      <ToDoSearch />

      <ToDoList>
        {defaultToDo.map(ToDo =>
          <ToDoItem key={ToDo.text} text={ToDo.text} completed={ToDo.completed}/>
        )}
      </ToDoList>

      <ToDoButton />

    </React.Fragment>
  );
}

export default App;
