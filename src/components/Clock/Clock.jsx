import React , {useState,useEffect} from 'react'
import moment from "moment"
function Clock() {
    const currentTime = moment().format('HH:mm:ss')
    const [time,setTime]=useState(currentTime)
    useEffect(()=>{
        const timeInterval=setInterval(()=>{
          setTime(moment().format('HH:mm:ss'))
        },1000)
        return(()=>{
            clearInterval(timeInterval)
        })
    },[])
  return (
    <div>{time}</div>
  )
}

export default Clock