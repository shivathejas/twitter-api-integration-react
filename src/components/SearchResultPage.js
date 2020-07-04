import React from 'react'
import {connect} from 'react-redux';
import {fecthSearchs} from '../redux/search/searchAction'
import Tweets from './Tweets';

function SearchResultPage(props){
    
    console.log("tweer value")
    console.log(props.tweet);
    return(
        <div>
            hi , it is routed {props.search.searchValue}
            {/* <p>{props.tweet.tweet.map(data=><h6>{data.name}</h6>)}</p> */}
            <h2>users list</h2>
            <div>{props.search.users.map(data=> <p key={data.id}>{data.name}</p>)}</div>
            <Tweets data={props.search}></Tweets>
        </div>
    )
}

var mapSateToProps = (state)=>{
    return{
        tweet: state.tweets,
        search: state.search
    }
}
var mapDispatchToProps = dispatch=>{
    return{
        fecthSearchs: (value)=> dispatch(fecthSearchs(value))
    }
}

export default connect(mapSateToProps,mapDispatchToProps)(SearchResultPage)