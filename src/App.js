import { ToDoCounter } from './ToDoCounter';
import { ToDoSearch } from './ToDoSearch';
import { ToDoList } from './ToDoList';
import { ToDoItem } from './ToDoItem';
import { ToDoButton } from './ToDoButton';
import './App.css';

function App() {
  return (
    <div className="App">

      <ToDoCounter />

      <ToDoSearch />
      <ToDoButton />

      <ToDoList>
        <ToDoItem />
        <ToDoItem />
        <ToDoItem />
      </ToDoList>

    </div>
  );
}

export default App;
