import React, {useEffect} from 'react'
import {fetchTweets} from '../redux/searchResult/searchResultAction'
import {connect} from 'react-redux';


function SearchResultPage(props){
    useEffect(() => {
        var value = props.search;
        fetchTweets(value)
       console.log(props.tweet)
    })
    return(
        <div>
            hi , it is routed {props.search}
            <p>{props.tweet}</p>
        </div>
    )
}

var mapSateToProps = (state)=>{
    return{
        tweet: state.tweets.data,
        search: state.search.searchValue
    }
}
var mapDispatchToProps = dispatch=>{
    return{
        fetchTweets: (value)=>dispatch(fetchTweets(value))
    }
}

export default connect(mapSateToProps,mapDispatchToProps)(SearchResultPage)