export const initialStore=()=>{
  return{
      people: [],
      planets: [],
      vehicles: []
    }  
  }

  export default function storeReducer(store, action = {}) {
   
  if (action.type == "set-people"){
    return{
      ...store, 
      people: action.payload
    }
  }

  if (action.type == "set-planets"){
    return{
      ...store, 
      planets: action.payload
    }
  }

  if (action.type == "set-vehicles"){
    return{
      ...store, 
      vehicles: action.payload
    }

  }
}


