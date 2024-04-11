import React from 'react';
import TodoTemplete from './components/TodoTemplate'
import TodoHeader from './components/TodoHeader'
import TodoInsert from './components/TodoInsert'
import TodoList from './components/TodoList'
import TodoFooter from './components/TodoFooter'

const App = () => {

  return (
    <TodoTemplete>
      <TodoHeader />
      <TodoInsert />
      <TodoList />
      <TodoFooter />
    </TodoTemplete>
  );
};

export default App;