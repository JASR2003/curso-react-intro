import './ToDoButton.css';

function ToDoButton(){
  return(
    <button className="CreateToDoButton" onClick={(event) =>{
      console.log('Click en el To Do Button');
      console.log(event);
      console.log(event.target)}}
      >+</button>
  );
}

export{ToDoButton};