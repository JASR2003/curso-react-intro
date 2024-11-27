import './ToDoSearch.css'

function ToDoSearch(){
  return(
    <input placeholder="agrega tarea pendiente" className="ToDoSearch" onChange={(event) =>{
      console.log('escribiste en el To Do Search');
      console.log(event);
      console.log(event.target.value);
    }}/>
  );
}

export{ToDoSearch};