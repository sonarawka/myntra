import React from 'react'
import classes from './CancelStamp.module.css'
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';

const CancelStamp = () => {
  return (
    <div className={classes.stampDiv}>
        <div className={classes.innerStamp}>
    
            <PriorityHighIcon style={{color:"white", fontSize:"80px", backgroundImage: "linear-gradient(to right, rgb(193,87,30) , rgb(221,174,58))", borderRadius:"50%"}}/>
        </div>
            
    </div>
  )
}

export default CancelStamp