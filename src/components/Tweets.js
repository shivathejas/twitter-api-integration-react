import React from 'react'


export default function Tweets(props){
    return(
        <div>
            {props.data.users.map(info=>{
                return(
                    <div>
                    <h1>{info.user.name}</h1>
                    <h2>{info.user.screen_name}</h2>
                    <h3>{info.created_at}</h3>
                </div>
                )
            })}
            {props.data.loading ? (
                    <h2>Loading....</h2>
                ) : props.data.error ? (
                    <h2>{props.data.error}</h2>
                ) : (
                    <div>
                        <h2>users list</h2>
                        <div>{props.data.users.map(data=> <p key={data.id}>{data.name}</p>)}</div>
                        {/* <div>{userData.users.name}</div> */}
                    </div>
                )}
        </div>
    )
}