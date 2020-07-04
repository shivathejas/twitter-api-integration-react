import React from 'react'
import {connect} from 'react-redux'
import {searchValue, fecthSearchs} from '../redux/search/searchAction'
import {Link} from 'react-router-dom'

function SearchContainer(props){
    var handleCLick = ()=>{
        // var data = e.target.value;
        // props.searchValue(data)
        console.log("input field value "+props.search)
        props.fecthSearchs(props.search);
    }
    var handleChange=(e)=>{
        props.searchValue(e.target.value)
        console.log(props.search)
    }
    return(
        <div>
            <input placeholder="Enter here...." name="searchFiled" 
            onChange={handleChange}/>
            <Link to="/searchResultPage" onClick={handleCLick}>Search</Link>
        </div>
    )
}

var mapSateToProps = (state)=>{
    return{
        search: state.search.searchValue,
        userData: state.user
    }
}
var mapDispatchToProps = dispatch=>{
    return{
        searchValue: (value)=> dispatch(searchValue(value)),
        fecthSearchs: (value)=> dispatch(fecthSearchs(value)),
    }
}

export default connect(mapSateToProps,mapDispatchToProps)(SearchContainer);