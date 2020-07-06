import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Container } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import RepeatIcon from '@material-ui/icons/Repeat';
import twitter from './twitter.png';
import {Link} from 'react-router-dom';
import {searchValue, fecthSearchs} from '../redux/search/searchAction'
import {connect} from 'react-redux'



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      
    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
        margin: 10,
        width:350
    },
    control: {
      padding: theme.spacing(2),
    },
    // inlineDisplay:{
    //     padding:theme.spacing(2)
    // },
    inlineDisplay:{
        display:"inline-block"
    },
    floatLeft:{
        float:'left'
    },
    imgDeimension:{
        width:100,
        height:100
    },
    displayRight:{
        float:"right"
    },
    searchField:{width:500, padding:5,marginLeft:"10%",marginRight:"2%", marginTop:"2.5%"},
    searchLink:{textDecoration:"none",backgroundColor:"#1A91DA",color:"white", padding:"5px 10px",alignItems:"center", textAlign:"center"}
  }));

function Tweets(props){
    const classes = useStyles();
    var handleCLick = ()=>{
        props.fecthSearchs(props.search);
    }
    var handleChange=(e)=>{
        props.searchValue(e.target.value)
        console.log(props.search)
    }
    return(
        <Container>
            <Grid item sm={12}>
                <Grid item sm={12} className={classes.gridStylerl}>
                        <h1 className={classes.floatLeft}>Tweet </h1>
                        <img src={twitter} style={{float:'left',width:100,height:100}} alt="tweet"/> 
                        <h1 className={classes.floatLeft}>Search</h1>
                </Grid>
                <Grid item sm={12}>
                    <input className={classes.searchField} placeholder="Search here...." name="searchFiled" 
                    onChange={handleChange}/>
                    <Link to="/searchResultPage" onClick={handleCLick} className={classes.searchLink}>Search</Link>
                </Grid>
            </Grid>
        <Grid container className={classes.root}>
                <Grid item container sm={12} justify="center">
                    {props.data.users.map((info) => {
                        var dateArr = info.created_at.split(" ");
                        return(
                            <Paper key={info.id} className={classes.paper}>
                                <Grid container item sm={12}>  
                                        <img className={classes.inlineDisplay} alt="user" src={info.user.profile_image_url_https}/>
                                        <div className={classes.inlineDisplay}>
                                            <div>  {info.user.name}</div>
                                            <div>  @{info.user.screen_name}</div>
                                        </div>
                                </Grid>
                                <Grid item sm={12}>
                                    <p>{info.text}</p>
                                </Grid>
                                <Grid item sm={12}>
                                    <FavoriteBorderIcon fontSize="small"/>
                                    <div style={{display:"inline",marginRight:5}}>{info.favorite_count}</div>
                                    <RepeatIcon fontSize="small"/>
                                    <div style={{display:"inline"}}>{info.retweet_count}</div>
                                </Grid>
                                <div className={classes.displayRight}>{dateArr[1]} {dateArr[2]} {dateArr[dateArr.length-1]}</div>
                                </Paper>
                        )})}
                </Grid>
            </Grid>
            </Container>
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

export default connect(mapSateToProps,mapDispatchToProps)(Tweets);