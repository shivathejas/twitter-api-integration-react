import {SEARCH_VALUE} from "./searchTypes"

export var searchValue = (value)=>{
    return{
        type: SEARCH_VALUE,
        payload: value
    }
}