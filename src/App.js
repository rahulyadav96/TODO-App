import { useState } from 'react';
import './App.css';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';

function App() {
  const [todoList, setTodoList] = useState([])
  const handleTodoList = (task)=>{

    setTodoList([...todoList,task])
  }
  return (
    <div className="App">
      <h1>TODO</h1>
      <TodoInput addTodo={handleTodoList}/>
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;
