import React, { createContext ,useContext,useEffect, useReducer } from "react";
import App from "./App";
import reducer from "./reducer";

const AppContext = createContext();

let Api = "http://hn.algolia.com/api/v1/search?";

const initialstate = {
    isLoading : true ,
    query : 'react' ,
    page : 5 ,
    nbPages: 0 ,
    hits : []
}

const AppProvider = () => {
  const [state , dispatch] = useReducer(reducer , initialstate)

  

  const fetchApi = async (url) => {
    dispatch( {
      type : 'SET_LOADING'
    })
    const response = await fetch(url);
    const data = await response.json();
    

    dispatch({
      type : 'GET_STORIES' ,
      isLoading : false,
      payload : {
        hits : data.hits,
      nbPages : data.nbPages
      }
    })
    console.log(data);
  };

  
  


  useEffect(() => {
    fetchApi(`${Api}query=${state.query}&page=${state.page}`)
    // fetchApi(Api);
  }, [state.query , state.page]);


  const removePost = (Id) =>{
    dispatch ({ type : 'REMOVE_POST' , payload : Id})
  }

  const Search_Post = (query) =>{
    dispatch ({type : 'SEARCH_POST' ,payload : query})
  }

  const getpreviousPage = () =>{
    dispatch({type: 'PreviousPage'})
  }

  const getNextPage = () =>{
    dispatch({type : 'NextPage'})
  }

  return (
    <AppContext.Provider value={{...state , removePost ,Search_Post , getNextPage , getpreviousPage}}>
      <App />
    </AppContext.Provider>
  );

  

};

const useGlobalContext = () =>{
  return useContext(AppContext)
}


export { AppContext, AppProvider , useGlobalContext};
