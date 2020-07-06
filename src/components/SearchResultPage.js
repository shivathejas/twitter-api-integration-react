import React from 'react'
import {connect} from 'react-redux';
import {fecthSearchs} from '../redux/search/searchAction'
import Tweets from './Tweets';

function SearchResultPage(props){    
    return props.search.loading?(<div>
        <h2>Loading....</h2>
    </div>):(
        <div>
            <Tweets data={props.search}></Tweets>
        </div>
    )
}

var mapSateToProps = (state)=>{
    return{
        search: state.search
    }
}
var mapDispatchToProps = dispatch=>{
    return{
        fecthSearchs: (value)=> dispatch(fecthSearchs(value))
    }
}

export default connect(mapSateToProps,mapDispatchToProps)(SearchResultPage)