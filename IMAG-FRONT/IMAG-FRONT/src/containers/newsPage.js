import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useRouteData } from 'react-static';
const useStyles = makeStyles(() => ({
    root: {
      width: '1140px',
      margin:'0 auto',
      padding: '20px',
    },
    sub_title:{
      borderBottom:'1px solid #ececec',
      fontSize:'14px',
      padding:'10px 0',
      textAlign:'center'
    },
    content:{
      '& p':{
        fontSize:'16px',
        lineHeight:'2',
        textIndent: '2em',
        textAlign: 'justify',
        color:'#000',
        '& img':{
          width:'70%',
          paddingTop:'10px',
          paddingBottom:'10px',
          paddingLeft:`calc(15% - 32px)`
        }
      }
    }
    
  }));
export default function newsPage() {
    const news=useRouteData().newItem
    // console.log(news)
    const classes=useStyles()

  return (
    <div className={classes.root}> 
          <h1 style={{textAlign:'center'}}>{news.title}</h1>
          <div className={classes.sub_title}>
          <span style={{margin:'0 10px'}}>发布时间：{news.dat}</span><span style={{margin:'0 10px'}}>作者：{news.publisher}</span>
          </div>
          <div className={classes.content} dangerouslySetInnerHTML={{ __html: news.content }}>
        </div>
    </div>
  )
}
