import {createContext,useEffect,useContext, useReducer} from 'react';
import reducer from './TodoDataReducer';

// let dummy = [
//     {
//       date: "2023-05-23",
//       id: 754,
//       amount: "120",
//       title: "yearly sub"
//     }
// ]

export let TodoContext = createContext()
const initialState = {
    inputedTodoData: {},
    filterYear: "all",
    filterData:[],
    globalArr: []
}

let TodoContextProvider = ({children}) =>{
    let [state,dispatch] = useReducer(reducer,initialState)
    // console.log("selected Year test 1",state.filterYear);

    // firebase
    let arr=[]   
    useEffect( ()=>{
        async function fetchData (){
            let url="https://submanagment-d0b66-default-rtdb.firebaseio.com/sub.json";
      try{
           let data= await fetch(url);
           let res= await data.json()
           console.log('this is my res fsrom firebase',res)
           for (let key in res)
           {
            arr.push(res[key])
           }
           console.log('arr for backend',arr)
           dispatch({type:"FETCH",payload:arr})
  
      }
  
      catch(e)
      {
        console.log(e)
  
      }

        }
        fetchData()
      
    },[])



useEffect(()=>{
    dispatch({type:"FILTER_DATA"})
},[state.filterYear,state.globalArr])

let filterYearData=(selectedYear)=>{
    console.log("selected Year", selectedYear);
    return dispatch({type:"SET_FILTER_YEAR",payload:selectedYear})
}

let setNewArray = (todoInputData)=>{
    console.log(" ====== data coming form as todoInputData", todoInputData);
    return dispatch({type:"SET_NEW_ARRAY",payload:todoInputData})
}


return(
    <TodoContext.Provider value={{...state,filterYearData,setNewArray}}>
        {children}
    </TodoContext.Provider>
)
}
// custm hook
export const useTodoHook=()=>{
    console.log("useTodoHook");
    return useContext(TodoContext)
}
export default TodoContextProvider;