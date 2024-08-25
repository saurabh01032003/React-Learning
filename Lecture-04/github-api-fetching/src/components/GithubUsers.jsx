import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function GithubUsers({username}) {
    let [user,setUser] = useState({
        imgUrl:"",
        followers: 0,
        following: 0
    })

    // useEffect : We use thi to perform side effects(i.e fetch, setTimeout,setInterval etc) -> Accepts two argument => 1.) Callback Function  2.) Dependency array
    useEffect(()=>{ // Hum ish wale call back function ko kabhi -> async function nahi banate hai
        async function callApi(username){ // upar wale function ko async nahi bana sakte isliye isko banana pada
            let resp =  await fetch(`https://api.github.com/users/${username}`);
            let data = await resp.json(); // hume sirf meta data mila tha=> to get complete data resp.json() karte hai // ab hame object mil gaya hai complete data ka
            let {avatar_url, followers, following} = data; // data se jo cheez chahiye wo destructure karlo
            setUser(()=>{
                return {
                    imgUrl : avatar_url,
                    followers: followers,
                    following // key-value same hai toh ek baar hi likho -> followers ke case me bhi ek baar likhne se kaam ho jayega
                }
            })
        } 
        callApi(username);
    },[]) 

  return (
    <figure>
        <img src={user.imgUrl} alt=""></img>
        <p>Username : {username}</p>
        <p>Followers : {user.followers} </p>
        <p>Following : {user.following} </p>
    </figure>
  )
}

export default GithubUsers