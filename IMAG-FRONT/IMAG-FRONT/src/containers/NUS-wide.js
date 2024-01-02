import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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

  const Datasets_introductions = ['(1) 269,648 images and the associated tags from Flickr, with a total number of 5,018 unique tags.','(2) Six types of low-level features extracted from these images, including 64-D color histogram, 144-D color correlogram, 73-D edge direction histogram, 128-D wavelet texture, 225-D block-wise color moments and 500-D bag of words based on SIFT descriptions.',
    '(3) Ground-truth for 128 concepts that can be used for evaluation.','(4) User information of 247,849 images.'];
  const Links_concat = ['ConceptsList.rar (downloads)','Groundtruth.rar (downloads)','Flickr/image data','ImageList.rar (downloads)','imgLabes.rar (downloads)','Low_Level_Features',
  'NUS_WID_Tags.rar (downloads)'];
  const Links_href=['../static/resource_file/ConceptsList.rar','../static/resource_file/Groundtruth.rar','https://pan.baidu.com/s/1kntqUK9a_OK31oZ_3rSbYQ','../static/resource_file/ImageList.rar'
,'../static/resource_file/imgLabes.rar','https://pan.baidu.com/s/1yl-yywIYHsEgUcEf3LD0KA','../static/resource_file/NUS_WID_Tags.zip']
  return (
    <div className={classes.root}>
        <Typography variant="h4" style={{paddingTop:'30px'}} align='center'>
        NUS-wide-128
      </Typography>
        <div className={classes.table_container}>
        <Typography variant="h5" style={{paddingTop:'30px',paddingBottom:'20px'}} align='left'>
        Introduction
      </Typography>
      <div style={{width:'100%',height:'2px',borderTop:'1px solid #999',clear:'both'}}></div>
      <p>NUW-WIDE-128: A Real-World Web Image Database. The dataset is based on <a href='http://lms.comp.nus.edu.sg/research/NUS-WIDE.htm'>NUS-WIDE</a> and includes:</p>
      <div style={{marginBottom:'150px'}}>
      {Datasets_introductions.map((item,index)=>(
          <p style={{lineHeight:'1.6',textAlign:'left'}}> {item}</p>
        ))}
        </div>
        <Typography variant="h5" style={{paddingTop:'30px',paddingBottom:'20px'}} align='left'>
        Download
      </Typography>
      <div style={{width:'100%',height:'2px',borderTop:'1px solid #999',clear:'both'}}></div>
      <div style={{marginBottom:'150px'}}>
      {Links_concat.map((item,index)=>(
          <p style={{lineHeight:'1.6',textAlign:'left'}}> <a  href={Links_href[index]}><strong>{item}</strong></a></p>
        ))}
        </div>
        </div>
        <Typography variant="h5" style={{paddingTop:'30px',paddingBottom:'20px'}} align='left'>
        Citation
      </Typography>
      <div style={{width:'100%',height:'2px',borderTop:'1px solid #999',clear:'both'}}></div>
      <p>If you make use of the NUS-WIDE-128 dataset in any form, please cite the following reference.</p>
      <div style={{lineHeight:'1.6',paddingBottom:'5px'}} dangerouslySetInnerHTML={{__html: '<p>@article{tang2017tri,<br>title={Tri-Clustered Tensor Completion for Social-Aware Image Tag Refinement},<br>author={Tang, Jinhui and Shu, Xiangbo and Qi, Guo-Jun and Li, Zechao and Wang, Meng and Yan, Shuicheng and Jain, Ramesh},<br>journal={IEEE Transactions on Pattern Analysis and Machine Intelligence},<br>year={2017},<br>doi={10.1109/TPAMI.2016.2608882},<br>publisher={IEEE}<br>}</p>'}}></div>
      <div style={{lineHeight:'1.6',paddingBottom:'20px'}} dangerouslySetInnerHTML={{__html: '<p>@article{tang2016generalized,<br>title={Generalized Deep Transfer Networks for Knowledge Propagation in Heterogeneous Domains},<br>author={Tang, Jinhui and Shu, Xiangbo and and Li, Zechao and Qi, Guo-Jun and Wang, Jingdong},<br>journal={ACM Transactions on Multimedia Computing, Communications, and Applications},<br>volume = {12},<br>number = {4s},<br>year={2016}<br>}</p>'}}></div>
    </div>
  );
}
