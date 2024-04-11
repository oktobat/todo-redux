import React from 'react';
import cn from 'classnames'
import styled from 'styled-components'
import { MdRemoveCircleOutline, MdCheckBox, MdCheckBoxOutlineBlank} from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { onToggle, onRemove } from '../store'

const TodoListItemBlock = styled.div`
    display:flex; padding:1rem; 
    &:nth-child(even) { background:#f8f9fa }
    .list { flex:1; display:flex; align-items:center; 
        .red { color:#f00 }
        .text { margin-left:0.5rem; 
            &.checked { text-decoration:line-through; color:#f00 }
        }
    }
    .remove { color:#ff6b6b;
        cursor:pointer;
        font-size:1.5rem; }
`

const TodoListItem = ({item}) => {
    const dispatch = useDispatch()
    const {id, text, checked } = item

    return (
        <TodoListItemBlock>
            <div className="list" onClick={ ()=>{ dispatch(onToggle(id)) }  }>
                { checked ? <MdCheckBox className="red" /> : <MdCheckBoxOutlineBlank /> }
                <div className={cn("text", {checked})}>{id}. { text }</div>
            </div>
            <div classs="remove" onClick={ ()=>{ dispatch(onRemove(id))  } }><MdRemoveCircleOutline /></div>
        </TodoListItemBlock>
    );
};

export default TodoListItem;