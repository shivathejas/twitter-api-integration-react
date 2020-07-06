import React from 'react'
import {connect} from 'react-redux'
import {searchValue, fecthSearchs} from '../redux/search/searchAction'
import {Link} from 'react-router-dom'
import twitter from './twitter.png';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        top:"50%",
        left:"50%"    
    },
    class1:{
        marginLeft:"2%"
    },
    searchField:{width:500, padding:5,marginLeft:"27%",marginRight:"2%"},
    searchLink:{textDecoration:"none",backgroundColor:"#1A91DA",color:"white", padding:"5px 10px",alignItems:"center", textAlign:"center"}
  }));

function SearchContainer(props){
    const classes = useStyles();
    var handleCLick = ()=>{
        // console.log("input field value "+props.search)
        props.fecthSearchs(props.search);
    }
    var handleChange=(e)=>{
        props.searchValue(e.target.value)
        console.log(props.search)
    }
    return(
        <div>
            <div style={{marginTop:"17%",marginLeft:"35%"}}>
                    <h1 style={{float:"left"}}>Tweet </h1>
                    <img src={twitter} style={{float:"left",width:100,height:100}} alt="tweet"/> 
                    <h1 style={{float:"left"}}>Search</h1>
            </div>
            <br/><br/>
            <div>
                
                <input className={classes.searchField} placeholder="Search here...." name="searchFiled" 
                onChange={handleChange}/>
                <Link to="/searchResultPage" onClick={handleCLick} className={classes.searchLink}>Search</Link>
            </div>
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