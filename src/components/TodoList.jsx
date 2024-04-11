import React from 'react';
import TodoListItem from './TodoListItem'
import styled from 'styled-components'
import {useSelector} from 'react-redux'

const TodoListBlock = styled.div`
    min-height:320px;
    max-height:513px;
    overflow-y:auto;
`

const TodoList = () => {
    const todos = useSelector(state=>state)
    return (
        <TodoListBlock>
            {
              todos.map((item, index)=><TodoListItem item={item} key={index} />)   
            }
        </TodoListBlock>
    );
};

export default TodoList;