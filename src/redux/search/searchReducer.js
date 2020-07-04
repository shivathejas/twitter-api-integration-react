import {SEARCH_VALUE, FETCH_SEARCH_SUCESS,FETCH_SEARCH_REQUEST,FETCH_SEARCH_ERROR} from "./searchTypes"

var searchState = {
    loading:false,
    searchValue:"",
    users:[],
    error:''

}

var searchReducer = (state=searchState,action)=>{
    switch(action.type){
        case SEARCH_VALUE:{
            console.log(action.payload)
            return{
                ...state,
                searchValue:action.payload
            }}
        case FETCH_SEARCH_REQUEST:
            return{
                ...state,
                loading: true,
            }
        case FETCH_SEARCH_SUCESS:
            return{
                ...state,
                loading: false,
                users: action.payload,
                error:''
            }
        case FETCH_SEARCH_ERROR:
            return{
                ...state,
                loading: false,
                users:[],
                error: action.payload
            }
        default:
            return{
                ...state
            }
    }
}

export default searchReducer;