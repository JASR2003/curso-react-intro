import './ToDoCounter.css';

function ToDoCounter({ total , completed}){
  return(
    <h1 className="title">Has completado <b>{completed}</b> de <b>{total}</b> To Do</h1>
  );
}

export{ToDoCounter};