import React from 'react'
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Card } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { useRouteData } from 'react-static';
import MyImage from '../components/Lazy_loading'
import { useLocation} from 'react-router-dom';
import moment from 'moment';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      width: '1140px',
      margin:'0 auto',
    },
    facultyItemItem: {
      display:'inline-block',
      
    },
    card_root: {
      width: "900px",
      minHeight:'240px',
      alignItems:'center',
      verticalAlign: 'top',
      display:'inline-block',

    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
      alignItems: "space-between",
    },
    cover: {
      width: 240,
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 38,
      width: 38,
    },
    avatar:{
      paddingLeft:'5px',
      display:'inline-block',

    }
  }));

function User(){
    const classes = useStyles();
    const { userInfo } = useRouteData()
    // console.log(userInfo)
    const stateparams=useLocation()
    // console.log(stateparams)
    const type= stateparams.state!=undefined?stateparams.state.type:'cn'
    // console.log('type' in stateparams.state)
    let journals=userInfo;
    const info = userInfo['info'];
    console.log(info)
    const profile = info['info']['profile'];
    const profile_c = info['info']['profile_c'];
    let journals_display=[]
    const journals_map = userInfo['info']['journal'];
    for(let i = 0; i < journals_map.length; ++ i){
      if ('conf_name' in journals_map[i]){
        journals_display[i] =  journals_map[i].name+'. '+ journals_map[i].author + ". (" + journals_map[i].conf_name + ") ." +journals_map[i].authors;
      }
      else{
        journals_display[i] = journals_map[i].name+'. '+ journals_map[i].author + ". (" + journals_map[i].jn_name + ") ." +journals_map[i].authors;
      }
      // if ('dat' in rows[i]&&rows[i].dat!=''&&rows[i].dat!=null){
      //     rows_concat[i]+='('+rows[i].dat+')'
      // }
    }
    console.log(journals_display)
    const projects_map = userInfo['info']['project'];
    console.log(projects_map)
    let projects_display=[]
    let display_item
    for(let i=0;i<projects_map.length;++i){
      display_item=projects_map[i].pro_source+' "'+projects_map[i].name+'", '
      if(projects_map[i].prog_num!="") display_item+='(No.'+projects_map[i].prog_num+'), '
      display_item+=moment(projects_map[i].start_time).format("YYYY")+'-'+moment(projects_map[i].deadline).format("YYYY")+', '
      // if (projects_map[i].cost!=''&&projects_map[i].cost!=None) display_item+=projects_map[i].cost+'万'
      // else display_item+=projects_map[i].fund+' 万( 直接经费 ), '
      if(projects_map[i].principal==info['info'].name) display_item+=projects_map[i].role
      else display_item+='参与'
      projects_display[i]=display_item
    }
    // console.log(projects_display)
    const honors_map = journals['info']['honor'];
    // console.log(honors_map)
    const [chinese, setChinese] = useState(type=='cn'?'true':'false');
    // console.log(chinese)
    const c_str = "中文版";
    const e_str = "English Version";

    const handleClick = () => {
      let change = (chinese == 'true') ? 'false' : 'true';
      setChinese(change);
    }

    return (
        <div className={classes.root}>
          <Typography component="h1" variant="h5" align='center' style={{paddingBottom:'20px',paddingTop:'20px'}}>
                      {chinese=='true'?info.info.name:info.info.Eng_name}
          </Typography>
          
            <div className={classes.facultyItemItem}>
            <div className={classes.avatar}>
                <MyImage image={`../../../static/avatar/${userInfo.id}.jpg`} width={200} height={240} />
          </div>
              <Card className={classes.card_root}>
                <div className={classes.details}>
                  <CardContent className={classes.content}>
                    <Typography variant="subtitle1" color="textSecondary" style={{}}>
                      {chinese == 'true' ? profile_c:profile}
                      {/* <Link to={{ pathname:`/people/user/${userInfo.id}`,state:{type:type=='cn'?'cn':'en'}}}>{chinese == 'false'? c_str : e_str}</Link> */}
                      <a href='javascript:void(0)' onClick={handleClick}>{chinese == 'false'? c_str : e_str}</a>
                    </Typography>
                  </CardContent>
                  <div className={classes.controls}> 
                  </div>
                </div>
              </Card>
            </div>
            <div className={classes.table_container}>
              {journals_display&&journals_display.length>0? <Typography component="h1" variant="h5" align='left' style={{paddingBottom:'20px',paddingTop:'20px'}}>
                      {'论文'}
                    </Typography>:''}
            {journals_display&&journals_display.length>0?journals_display.map((journal,index) => (
              <li key={index} style={{padding:'10px',color:"#000000"}}>
                    {journal}
              </li>
            )):''}
            {projects_display&&projects_display.length>0? <Typography component="h1" variant="h5" align='left' style={{paddingBottom:'20px',paddingTop:'20px'}}>
                      {'项目'}
                    </Typography>:''}
            {projects_display&&projects_display.length>0? projects_display.map((journal,index) => (
              <li key={index} style={{padding:'10px',color:"#000000"}}>
                    {journal}
              </li>
            )):''}
            {/* {honors_map&&honors_map.length>0? <Typography component="h1" variant="h5" align='left' style={{paddingBottom:'20px',paddingTop:'20px'}}>
                      {'荣誉'}
                    </Typography>:''}
            {honors_map&&honors_map.length>0? honors_map.map((journal,index) => (
              <div key={index}>
                <Typography style={{color:"#000000", padding: "10px"}}>
                    {journal}
                </Typography>
              </div>
            )):''}  */}
          </div>
        </div>
    )
}

export default User