import React from 'react';
import { makeStyles } from '@material-ui/core/styles';;
import Typography from '@material-ui/core/Typography';
import { useRouteData } from 'react-static';
// import p1 from '../public\static\news\1.png'
const useStyles = makeStyles((theme) => ({
  root: {
    width: '1140px',
    margin:'0 auto',
    padding:'20px'
  },
  news: {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    '& li':{
      lineHeight:'2',
      fontSize:'22px'
    }
  },
}));


function Home(){
    const classes = useStyles();
    const  { detail_news } = useRouteData();
    const display = detail_news["news"];
    // const display=[
    //   {dat:2020-1-1,title:'南京理工大学南京理工大学南京理工大学南京理工大学',content:'11月3日上午，电光学院“回顾三十年历程展望新时代征程”并系建院30周年发展座谈会在科技11月3日上午，电光学院“回顾三十年历程展望新时代征程”并系建院30周年发展座谈会在科技11月3日上午，电光学院“回顾三十年历程展望新时代征程”并系建院30周年发展座谈会在科技'},
    //   {dat:2020-1-1,title:'南京理工大学南京理工大学南京理工大学南京理工大学',content:'11月3日上午，电光学院“回顾三十年历程展望新时代征程”并系建院30周年发展座谈会在科技11月3日上午，电光学院“回顾三十年历程展望新时代征程”并系建院30周年发展座谈会在科技11月3日上午，电光学院“回顾三十年历程展望新时代征程”并系建院30周年发展座谈会在科技'},
    //   {dat:2020-1-1,title:'南京理工大学南京理工大学南京理工大学南京理工大学',content:'11月3日上午，电光学院“回顾三十年历程展望新时代征程”并系建院30周年发展座谈会在科技11月3日上午，电光学院“回顾三十年历程展望新时代征程”并系建院30周年发展座谈会在科技11月3日上午，电光学院“回顾三十年历程展望新时代征程”并系建院30周年发展座谈会在科技'},
    //   // {dat:2020-1-1,title:'南京理工大学南京理工大学南京理工大学南京理工大学',},
      
    // ]
    return (
      <div className={classes.root}>
        <div className={classes.news}>
          <div>
          <Typography gutterBottom variant="h4" style={{color:"#333333", padding: "20px"}}>
              News
            </Typography>
          </div>
          <ul>
              {display.map((post,index) => (
              <li key={index} style={{display:'inline-block'}} >
                <div style={{display:'inline-block',backgroundColor:'#f5d2b3',borderRadius:'10px 0px',width:'70px',fontSize:'12px',lineHeight:'25px',marginBottom:'13px',textAlign:'center'}}>{post.dat}</div>
                <div style={{display:'inline-block',textAlign:'center',height:'100%'}}><a style={{marginLeft:'20px',color:'#3b3b3b',fontSize:'16px',marginBottom:'10px',textAlign:'center'}} href={"/news/info/"+post.id} >{post.title}</a></div> 
              </li>
              ))}
            </ul>
          </div>
      </div>
    )
}

export default Home