import {FETCH_TWEETS_ERROR, FETCH_TWEETS_SUCCESS, FETCH_TWEETS_REQUEST} from "./searchResultTypes"
import axios from "axios"

export function fetchTweetsRequest(){
    return{
        type: FETCH_TWEETS_REQUEST
    }
}
 export function fetchTweetsSuccess(tweet){
     console.log("entered")
     return{
         type: FETCH_TWEETS_SUCCESS,
         payload: tweet
     }
 }

 export function fetchTweetsError(error){
     return{
         type: FETCH_TWEETS_ERROR,
         payload: error
     }
 }

 export function fetchTweets(value){
     console.log("request received"+value)
     return (dispatch)=>{
        let config={
            headers:{
                'Authorization':'Bearer AAAAAAAAAAAAAAAAAAAAAE8NFgEAAAAAcqQONf1Ob%2BkV3uigIG1TIROHZBw%3D65bNDLn78wjhaoHzSysRqsCVJiTuSQhvpEd7WFnWeUpA2DVpZp'
            }
        }
        dispatch(fetchTweetsRequest());
        var url = `https://api.twitter.com/1.1/search/tweets.json?q=${value}`
        console.log(url)
        axios.get(url,config)
        .then(res=> {
            var tweets = res.data;
            dispatch(fetchTweetsSuccess(tweets))
        })
        .catech(err=>{
            dispatch(fetchTweetsError(err))
        })
        
     }
 }