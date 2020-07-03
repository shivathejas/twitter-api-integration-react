import {FETCH_TWEETS_REQUEST, FETCH_TWEETS_SUCCESS, FETCH_TWEETS_ERROR} from "./searchResultTypes"

const tweetsState={
    loading:false,
    tweet:'',
    error:''
}

const tweetsReducer=(state=tweetsState,action)=>{
    switch(action.type){
        case FETCH_TWEETS_SUCCESS:{
            console.log(action.payload)
            return{
                loading:false,
                tweet:action.payload,
                error:''
            }}
        case FETCH_TWEETS_ERROR:
            return{
                loading: false,
                tweet:'',
                error: action.payload                
            }
        case FETCH_TWEETS_REQUEST:{
            console.log("requested")
            return{
                ...state,
                loading: true,
            }}
        default:
            return{
                ...state
            }
    }
}
export default tweetsReducer;