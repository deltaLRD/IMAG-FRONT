import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Card } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { CardMedia } from '@material-ui/core';
import { useRouteData } from 'react-static';
import {Link} from 'react-router-dom'
import MyImage from '../components/Lazy_loading'
import 'react-lazy-load-image-component/src/effects/blur.css';
const useStyles = makeStyles((theme) => ({
  root: {
    display:'flex',
    flexDirection:'column',
    width:'1140px',
    margin:'0 auto',
    padding:'20px'
    
  },
  faculty: {
    width:'100%',
    margin:'0 auto',
  },
  
  facultyItemItem: {
    padding: '10px',
    height:'180px',
    width:'21%',
    display:'inline-block',
    float:'left'
  },
  studentItemItem: {
    padding: '10px',
    height:'180px',
    width:'18%',
    display:'inline-block',
    float:'left'
  },
  asso_faculty: {
    width: '100%',
    
  },
  PhD_Candidate: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  master_Candidate: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  img: {
    width: '100px',
    height: '100px',
  },
  card_root: {
    display: 'flex',
    height:'80%',
    alignItems:'center',

  },
  details: {
    // display: 'flex',
    flexDirection: 'column',
    // width:'55%',
    position:'relative',
    float:'right',
    margin:'0 auto'
  },
  content: {
    flex: '1 0 auto',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    padding:'0px',
    paddingTop:'15px',
    height:'50%',
    // position:'relative',
    // float:'right',
    margin:'auto',
    '& a':{
      fontSize:'16px'
    },
    // verticalAlign:'middle'
    // display:'flex'
  },
  stu_content: {
    flex: '1 0 auto',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    padding:'0px',
    height:'50%',
    margin:'auto',
    '& a':{
      fontSize:'16px'
    },
  },
  cover: {
    width: '45%',
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  avatar:{
    width:'45%',
    display:'block',
    // backgroundSize:'cover',
    // backgroundRepeat:'no-repeat',
    backgroundPosition:'center',
    '& img':{
      // paddingTop:'20px'
    },
  },
  stu_avatar:{
    width:'100px',
    height:'120px',
    backgroundPosition:'center',
    '& img':{
      paddingRight:'5px',
      paddingLeft:'5px'
    },
  }
}));
function People(){
    const classes = useStyles();

    const { people} = useRouteData();

    const faculty = people['Faculty'];
    console.log(faculty)
    const master = people['Master'];
    const phD = people['phD'];
    const asso_faculty = people['Associated_Faculty'];

    // console.log(people)
    // console.log(images)
    // console.log(imageList);
    // const srcs = {};

    // for(let i = 0; i < imageList.length; ++ i) {
    //   // console.log(imageList[i].split('/')[imageList[i].split('/').length - 1]);
    //   const src = Buffer.from(images[imageList[i].split('/')[imageList[i].split('/').length - 1]], "binary");
    //   srcs[imageList[i].split('/')[imageList[i].split('/').length - 1]] = src;
    // }
    // console.log(srcs)
    // console.log(imageList)
    // console.log(images)
    // console.log(faculty);
    // console.log(master)
    // console.log(asso_faculty);

    return (
      <div className={classes.root}>
        <div className={classes.title}>
          <div>
            <Typography gutterBottom variant="h4" style={{color:"#333333", paddingTop: "20px"}} align='center'>
              People
            </Typography>
          </div>
        </div>
        <div className={classes.faculty}>
          <div>
            <Typography gutterBottom variant="h5" style={{color:"#333333",paddingLeft:'10px'}}>
              Faculty
            </Typography>
          </div>
          <div className={classes.facultyItem}>
          {faculty.map(post => (
          <div className={classes.facultyItemItem} key={post.id}>
              <Card className={classes.card_root}>
                <div className={classes.stu_avatar}>
                <MyImage  image={`../static/avatar/${post.account}.jpg`} scrollPosition={typeof window !== 'undefined'?window.scrollY:''} width={100} height={120} tinyimage={`../static/tiny-avatar/${post.account}.jpg`}/>
                </div>
                <div className={classes.details}>
                  <CardContent className={classes.content}>
                  <Typography component="h6" variant="h5" align='center'>
                  <Link to={{ pathname:`/people/user/${post.account}`,state:{type:'cn'}}}>{post.name}</Link>
                    </Typography>
                    <Typography component="h6" variant="h5" align='center'>
                      <Link to={{pathname:`/people/user/${post.account}`,state:{type:'en'}}}>{post.Eng_name}</Link>
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary" align='center'>
                    {post.job_title}
                    </Typography>
                    {/* <a href={`/people/user/${post.account}`}>{post.Eng_name}</a><br/> */}
                    {/* <a>{post.name}</a> */}
                    {/* <Typography variant="subtitle1" color="textSecondary">
                      {post.name}
                    </Typography> */}
                    {/* <Typography variant="subtitle1" color="textSecondary" style={{paddingTop:'30px'}}> */}
                      
                    {/* </Typography> */}
                  </CardContent>
                  {/* <div style={{fontSize:'14px',margin:'0 auto',color:'#808080'}}>{post.job_title}</div> */}
                  <div className={classes.controls}>
                    
                  </div>
                </div>
              </Card>
            </div>
          ))}
          </div>
        </div>
        <div className={classes.faculty}>
          <div>
            <Typography gutterBottom variant="h5" style={{color:"#333333",paddingLeft:'10px'}}>
            Associated Faculty
            </Typography>
          </div>
          <div className={classes.facultyItem}>
          {asso_faculty.map(post => (
          <div className={classes.facultyItemItem} key={post.id}>
              <Card className={classes.card_root}>
                <div className={classes.stu_avatar}>
                <MyImage  image={`../static/avatar/${post.account}.jpg`} scrollPosition={typeof window !== 'undefined'?window.scrollY:''} width={100} height={120} tinyimage={`../static/tiny-avatar/${post.account}.jpg`}/>
                </div>
                <div className={classes.details}>
                  <CardContent className={classes.content}>
                  <Typography component="h6" variant="h5" align='center'>
                  <Link to={{ pathname:`/people/user/${post.account}`,state:{type:'cn'}}}>{post.name}</Link>
                    </Typography>
                    <Typography component="h6" variant="h5" align='center'>
                      <Link to={{pathname:`/people/user/${post.account}`,state:{type:'en'}}}>{post.Eng_name}</Link>
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary" align='center'>
                    {post.job_title}
                    </Typography>
                    {/* <a href={`/people/user/${post.account}`}>{post.Eng_name}</a><br/> */}
                    {/* <a>{post.name}</a> */}
                    {/* <Typography variant="subtitle1" color="textSecondary">
                      {post.name}
                    </Typography> */}
                    {/* <Typography variant="subtitle1" color="textSecondary" style={{paddingTop:'30px'}}> */}
                      
                    {/* </Typography> */}
                  </CardContent>
                  {/* <div style={{fontSize:'14px',margin:'0 auto',color:'#808080'}}>{post.job_title}</div> */}
                  <div className={classes.controls}>
                    
                  </div>
                </div>
              </Card>
            </div>
          ))}
          </div>
        </div>
        
        <div className={classes.asso_faculty}>
          <div>
            <Typography gutterBottom variant="h5" style={{color:"#333333", paddingTop:'20px',paddingLeft:'10px'}} >
              PhD
            </Typography>
          </div>
          <div className={classes.facultyItem}>
          {phD.map(post => (
          <div className={classes.studentItemItem} key={post.id}>
              <Card className={classes.card_root}>
                <div className={classes.stu_avatar}>
                <MyImage image={`../static/avatar/${post.account}.jpg`} scrollPosition={typeof window !== 'undefined'?window.scrollY:''} width={100} height={120}/>
                </div>
                <div className={classes.details}>
                  <CardContent className={classes.stu_content}>
                    <Typography component="h5" variant="subtitle1" align='center'>
                      {post.name}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary" align='center' style={{paddingLeft:'10px',wordBreak:'break-word'}}>
                    {post.Eng_name}
                    </Typography>
                  </CardContent>
                  <div className={classes.controls}>
                    
                  </div>
                </div>
              </Card>
            </div>
          ))}
          </div>
        </div>
        <div className={classes.asso_faculty}>
          <div>
            <Typography gutterBottom variant="h5" style={{color:"#333333", paddingTop:'20px',paddingLeft:'10px'}} >
              Master
            </Typography>
          </div>
          <div className={classes.facultyItem}>
          {master.map(post => (
          <div className={classes.studentItemItem} key={post.id}>
              <Card className={classes.card_root}>
                <div className={classes.stu_avatar}>
                <MyImage image={`../static/avatar/${post.account}.jpg`} scrollPosition={typeof window !== 'undefined'?window.scrollY:''} width={100} height={120}/>
                </div>
                <div className={classes.details}>
                  <CardContent className={classes.stu_content}>
                    <Typography component="h6" variant="subtitle1" align='center'>
                      {post.name}
                    </Typography> 
                    <Typography variant="subtitle1" color="textSecondary" align='center' style={{paddingLeft:'10px',wordBreak:'break-word'}}>
                      {post.Eng_name}
                    </Typography>
                  </CardContent>
                  <div className={classes.controls}>
                  </div>
                </div>
              </Card>
            </div>
          ))}
          </div>
        </div>
        

      
      </div>
    )
}

export default People