import {SEARCH_VALUE, FETCH_SEARCH_ERROR, FETCH_SEARCH_REQUEST, FETCH_SEARCH_SUCESS} from "./searchTypes"
import axios from 'axios';
export var searchValue = (value)=>{
    return{
        type: SEARCH_VALUE,
        payload: value
    }
}

export function fecthSearchRequest(){
    return{
        type: FETCH_SEARCH_REQUEST,
    }
}
export function fecthSearchSucess(user){
    return{
        type:FETCH_SEARCH_SUCESS,
        payload: user
    }
}
export function fecthSearchError(error){
    return{
        type:FETCH_SEARCH_ERROR,
        payload: error
    }
}

export const fecthSearchs=(value)=>{
    return function(dispatch){
        let config={
            'headers':{
                'Access-Control-Request-Headers':'application/json',
                'Access-Control-Allow-Origin':'*',
                'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJpYXQiOjE1NzcwMTU1ODQsImV4cCI6MTU3NzEwMTk4NCwiYXVkIjoiaHR0cHM6Ly95b3VyZG9tYWluLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiNWRmZjU3YTI5NmI3YTY4MDY4NjE0YjkzIiwianRpIjoiOWNhNjAyN2EtMzlhNS00YWQ5LWE0YjctODM5MDdkNTdiMGUzIn0.7MnVYloQ9PYzDyVcfHorNUOBzELkp_KKu9fiFdp44iw'
            }
        }
        console.log("this is from fetch users function "+value)
        dispatch(fecthSearchRequest());
        var url=`https://api.twitter.com/1.1/search/tweets.json?q=${value}`;
        axios.get(url,config)
        .then(res=>{
            var users = res.data.statuses;
            console.log("aaaaaaaaaaaaaaaaaaa"+users)
            dispatch(fecthSearchSucess(users));
        })
        .catch(err=>{
            dispatch(fecthSearchError(err.message));
        })
    }
}