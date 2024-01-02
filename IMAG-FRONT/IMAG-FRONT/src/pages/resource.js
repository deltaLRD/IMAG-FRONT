import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    width: '1140px',
    margin:'0 auto',
    padding: '20px',
},
table_container: {
    
},
  contact: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    backgroundColor: "#303440",
  },
  contact_item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: "20px"
  },
});

export default function Patent() {
  const classes = useStyles();

  const Datasets_concat = ['NUS-WIDE-128 Dataset','ACIP (downloads)'];
  const Datasets_href=['/resource/NUS-wide','https://pan.baidu.com/s/1gBJW-gM-AhrN3YkiKgjCvQ?pwd=happ']
  const Links_concat = ['媒体计算课件 (downloads)','DeepLearning AI','斯坦福大学机器学习公开课','OpenCV 教程','面向科学计算的MATLAB和Simulink – MathWorks','vlfeat使用教程','LIBLINEAR — A Library for Large Linear Classification','Distributed Machine Learning Common'];
  const Links_href=['../static/resource_file/媒体计算基础-课件.zip','https://www.coursera.org/specializations/deep-learning','https://www.coursera.org/specializations/machine-learning-introduction','https://opencv.org/'
,'https://ww2.mathworks.cn/','http://www.vlfeat.org/','https://www.csie.ntu.edu.tw/~cjlin/liblinear/','http://dmlc.ml/']
  return (
    <div className={classes.root}>
        <Typography variant="h4" style={{paddingTop:'30px'}} align='center'>
        Resource
      </Typography>
        <div className={classes.table_container}>
        <Typography variant="h5" style={{paddingTop:'30px'}} align='left'>
        Datasets
      </Typography>
      <div style={{width:'100%',height:'2px',borderTop:'1px solid #999',clear:'both'}}></div>
      <div style={{marginBottom:'150px'}}>
      {Datasets_concat.map((item,index)=>(
          <p style={{lineHeight:'1.6',textAlign:'left'}}> <a href={Datasets_href[index]} ><strong>{item}</strong></a></p>
        ))}
        </div>
        <Typography variant="h5" style={{paddingTop:'30px'}} align='left'>
        Links
      </Typography>
      <div style={{width:'100%',height:'2px',borderTop:'1px solid #999',clear:'both'}}></div>
      <div style={{marginBottom:'150px'}}>
      {Links_concat.map((item,index)=>(
          <p style={{lineHeight:'1.6',textAlign:'left'}}> <a  href={Links_href[index]} download={true}><strong>{item}</strong></a></p>
        ))}
        </div>
        </div>
        
    </div>
  );
}
