const reducer = (state ,action) =>{
    switch(action.type){
        case 'SET_LOADING' :
            return {
                ...state ,
                isLoading : true
            }
        case 'GET_STORIES' :
            return {
                ...state ,
                isLoading : false,
                hits : action.payload.hits,
                nbPages : action.payload.nbPages
            }
        case 'REMOVE_POST' :
            return {
                ...state ,
                hits : state.hits.filter((curElem) =>
                    curElem.objectID !== action.payload
                )
            }
        case 'SEARCH_POST' :
            return {
                ...state ,
                query : action.payload
            }
        case 'NextPage' :
            let nextpageNum = state.page + 1
            if(nextpageNum >= state.nbPages){
                nextpageNum = 0
            }
            return {
                ...state ,
                page : nextpageNum
            }
        case 'PreviousPage' :
            let pageNum = state.page - 1;
            if(pageNum <= 0){
                pageNum = 0
            }
            return {
                ...state ,
                page : pageNum
            }
    }
    return state
}
export default reducer; 