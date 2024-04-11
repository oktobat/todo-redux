import { legacy_createStore as createStore } from 'redux'

export const onInsert = (value)=>{
    return {
        type:"INSERT",
        value
    }
}

export const onToggle = (id)=>{
    return {
        type:"TOGGLE",
        id
    }
}

export const onRemove = (id)=>{
    return {
        type:"REMOVE",
        id
    }
}

export const onFinishRemove = ()=>{
    return {
        type:"FINISHREMOVE"
    }
}

export const allRemove = ()=>{
    return {
        type:"ALLREMOVE"
    }
}

const reducer = (state=[], action)=>{
    switch(action.type){
        case "INSERT" : return [{id:Date.now(), text:action.value, checked:false}, ...state];
        case "TOGGLE" : return state.map(item=>item.id===action.id ? {...item, checked:!item.checked} : item);
        case "REMOVE" : return state.filter(item=>item.id !== action.id);
        case "FINISHREMOVE" : return state.filter(item => !item.checked);
        case "ALLREMOVE" : return [];
        default : return state;
    }
}

const store = createStore(reducer)

export default store