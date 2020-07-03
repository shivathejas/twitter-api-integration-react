import {SEARCH_VALUE} from "./searchTypes"

var searchState = {
    searchValue:""
}

var searchReducer = (state=searchState,action)=>{
    switch(action.type){
        case SEARCH_VALUE:{
            console.log(action.payload)
            return{
                ...state,
                searchValue:action.payload
            }}
        default:
            return{
                ...state
            }
    }
}

export default searchReducer;