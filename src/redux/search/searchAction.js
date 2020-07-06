import {SEARCH_VALUE, FETCH_SEARCH_ERROR, FETCH_SEARCH_REQUEST, FETCH_SEARCH_SUCESS} from "./searchTypes"
import axios from 'axios';
import {AUTHORIZATION_TOKEN} from '../../AppConstants'
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
<<<<<<< HEAD
                'Authorization':AUTHORIZATION_TOKEN
=======
                'Access-Control-Request-Headers':'application/json',
                'Access-Control-Allow-Origin':'*',
                'Authorization':'Bearer ELkp_KKu9fiFdp44iw'
>>>>>>> 79ff60925be851cca19ff2206fcd89af2c6aea84
            }
        }
        dispatch(fecthSearchRequest());
        var url=`https://cors-anywhere.herokuapp.com/https://api.twitter.com/1.1/search/tweets.json?q=${value}&lang=en`;
        axios.get(url,config)
        .then(res=>{
            var users = res.data.statuses;
            dispatch(fecthSearchSucess(users));
        })
        .catch(err=>{
            dispatch(fecthSearchError(err.message));
        })
    }
}
