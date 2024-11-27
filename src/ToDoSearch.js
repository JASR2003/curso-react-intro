import React from 'react';
import './ToDoSearch.css'

function ToDoSearch(){
  const [searchValue,  setSearchValue] = React.useState('');
  return(
    <input placeholder="agrega tarea pendiente" className="ToDoSearch" value={searchValue} onChange={(event) =>{
      setSearchValue(event.target.value);
    }}/>
  );
}

export{ToDoSearch};