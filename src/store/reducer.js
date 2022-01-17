import { ADD_TODO_LOADING } from "./actionType";

const reducer =(state = { loading:false, todos:[] ,error:false } ,{type,payload})=>{

    switch(type){
      
        case ADD_TODO_LOADING:
            return{
                ...state,
                loading :true
            }
       
        default :
          return state   
    }
}

export {reducer}