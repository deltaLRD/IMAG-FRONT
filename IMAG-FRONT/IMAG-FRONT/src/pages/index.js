import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useRouteData } from 'react-static';
const useStyles = makeStyles(() => ({
  root: {
    paddingTop:'30px',
    paddingBottom:'20px',
    backgroundColor:'#ffffff'
  },
  introduction: {
    width: '1140px',
    margin:'0 auto',
    paddingTop:'20px'
    
  },
  news: {
    display: 'flex',
    flexDirection: 'column',
    marginTop:'40px',
    '& li':{
      lineHeight:'2',
      fontSize:'22px'
    }
  },
}));


function Home(){
    const classes = useStyles();
    const  news_data  = useRouteData()
    let len=news_data.detail_news.news.length
    const news = news_data.detail_news.news.slice(0,Math.min(len,3))
    console.log(news)
    return (
      <div className={classes.root}>

        <div className={classes.introduction}>
          
            <div style={{fontSize:'34px',lineHeight:1.2,paddingBottom:'18px',color:'#333333'}}>
            IMAG@NJUST
            </div>
         
          <div style={{lineHeight:'1.6',marginBottom:'15px',display:'block',fontFamily:'Open Sans' ,color:'#444444'}}>
          <p>Welcome to Intelligent Media Analysis Group (IMAG) in School of Computer Science, Nanjing University of Science and Technology. Our team focuses on analyzing the big media and aims to develop frontier technologies to address the analysis, understanding and management tasks of the big multimedia data. Besides, we also pay attention to the real-world applications, such as multimedia retrieval, face recognition and recommendation. For more information about our work, please refer to the publication page.</p>
          </div>
        

        <div className={classes.news}>
          <div>
            <div style={{fontSize:'34px',lineHeight:1.2,paddingBottom:'18px',color:'#333333', display:'inline-block'}}>
            Latest News
            </div>
            <a style={{display:'inline-block',fontSize:'20px',float:'right',color:'#57247b'}} href="/news">更多</a>
          </div>
          <div>
            
            <ul style={{display:'inline-block'}}>
            {news.map((post,index)=>
              <li key={index} style={{margin:'0 20px',padding:'10px',boxShadow:'1px 1px 6px 2px #cccccc',display:'inline-block',width:'27%',float:'left'}}>
                <a href={"/news/info/"+post.id} target='_blank'>
                <img src='../static/news/1.png' style={{height:'180px',margin:'10px 0'}}></img>
                <div style={{display:'inline-block',width:'100%',fontSize:'15px',height:'20px',margin:'5px 0',lineHeight:'20px',}}><a style={{color:'#282828'}}href={"/news/info/"+post.id}>{post.title}</a></div>
                <div style={{fontSize:'10px',lineHeight:'15px',textOverflow:'ellipsis',overflow:'hidden',display:'-webkit-box',WebkitLineClamp:'3',WebkitBoxOrient:'vertical',color:'#777777'}} dangerouslySetInnerHTML={{ __html: post.content }}></div>
                <div style={{display:'inline-block',fontSize:'12px',color:'#d19e70'}} > {post.dat}</div>
                </a>
                </li>
              )}
          </ul>
          </div>
        </div>
      </div>
      </div>
    )
}

export default Home