import React from 'react'

import { makeStyles } from '@material-ui/core';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
    width: '1140px',
    margin:'0 auto',
    padding:'20px'
    },
    title: {
        padding: '20px'
    },
    content: {
        width: '50%',
        // display:'table-cell',
        margin:'0 auto',
        textAlign:'center',
        '& p':{
            fontSize:"20px",
            
        },
        '& img':{
            height:'200px',
            
        },
    },
  }));

function Contact(){
    const classes = useStyles();
    return (
        <div className={classes.root}>
           
                
                <div className={classes.content}>
                    
                        <p style={{color:"red",fontSize:"30px"}} >招收保研本科生和实习生</p>
                        <p >招聘博士后</p>
                        <p>招聘助理教授和助理研究员</p>
                        <img src='../static/contact/vx_contact.jpg'  style={{paddingTop:'20px',margin:'0 auto'}}></img>
                    
                    
                </div>
                
                    
                
        </div>
    )
}

export default Contact