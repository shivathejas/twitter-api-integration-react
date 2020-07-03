import React from 'react'
import {connect} from 'react-redux'
import {searchValue} from '../redux/search/searchAction'
import {Link} from 'react-router-dom'
function SearchContainer(props){
    // var handleCLick = (e)=>{
    //     var data = e.target.value;
    //     props.searchValue(data)
    // }
    var handleChange=(e)=>{
        props.searchValue(e.target.value)
        console.log(props.search)
    }
    return(
        <div>
            <input placeholder="Enter here...." name="searchFiled" 
            onChange={handleChange}/>
            <Link to="/searchResultPage">Search</Link>
        </div>
    )
}

var mapSateToProps = (state)=>{
    return{
        search: state.search.searchValue
    }
}
var mapDispatchToProps = dispatch=>{
    return{
        searchValue: (value)=> dispatch(searchValue(value))
    }
}

export default connect(mapSateToProps,mapDispatchToProps)(SearchContainer);