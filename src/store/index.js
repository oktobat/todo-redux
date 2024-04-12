// 리덕스만 사용한 코드
// import { legacy_createStore as createStore } from 'redux'

// export const onInsert = (value)=>{
//     return {
//         type:"INSERT",
//         value
//     }
// }

// export const onToggle = (id)=>{
//     return {
//         type:"TOGGLE",
//         id
//     }
// }

// export const onRemove = (id)=>{
//     return {
//         type:"REMOVE",
//         id
//     }
// }

// export const onFinishRemove = ()=>{
//     return {
//         type:"FINISHREMOVE"
//     }
// }

// export const allRemove = ()=>{
//     return {
//         type:"ALLREMOVE"
//     }
// }

// const reducer = (state=[], action)=>{
//     switch(action.type){
//         case "INSERT" : return [{id:Date.now(), text:action.value, checked:false}, ...state];
//         case "TOGGLE" : return state.map(item=>item.id===action.id ? {...item, checked:!item.checked} : item);
//         case "REMOVE" : return state.filter(item=>item.id !== action.id);
//         case "FINISHREMOVE" : return state.filter(item => !item.checked);
//         case "ALLREMOVE" : return [];
//         default : return state;
//     }
// }

// const store = createStore(reducer)

// export default store


// 리덕스 툴킷 사용한 코드
import { createSlice, configureStore } from '@reduxjs/toolkit'

// createSlice = reducer + actions
// 기존 데이터를 mutation(변경)하는 메서드(push)는 return 문을 사용하면 안됨
// 기존 데이터를 mutation 하지 않는 메서드(concat, map, filter)는 return 문을 사용해야 함

const todosSlice = createSlice({
    name : "todosReducer",
    initialState:[],
    reducers : {
        // onInsert : (state, action)=>[{id:Date.now(), text:action.payload, checked:false}, ...state],
        // onInsert : (state, action)=>state.concat({id:Date.now(), text:action.payload, checked:false}),
        onInsert : (state, action)=>{ state.push({id:Date.now(), text:action.payload, checked:false}) },
        onToggle : (state, action)=>state.map(item=>item.id===action.payload ? {...item, checked:!item.checked} : item),
        onRemove : (state, action)=>state.filter(item=>item.id !== action.payload) ,
        onFinishRemove : (state)=>state.filter(item => !item.checked) ,
        allRemove : ()=>[]
    }
})

const store = configureStore({ reducer : todosSlice.reducer })
export const { onInsert, onToggle, onRemove, onFinishRemove, allRemove } = todosSlice.actions
export default store; 