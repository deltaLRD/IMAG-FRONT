import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useRouteData } from 'react-static';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';


const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: '100%'
  },
  table_container: {
    width: '1140px',
    margin:'0 auto',
    padding: '20px',
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

export default function Grants() {
  const classes = useStyles();

  const { grants } = useRouteData();
  console.log(grants);

  const rows = grants['data'];

  const rows_concat = [];

  for(let i = 0; i < rows.length; ++ i){
    rows_concat[i] = (i+1) + ". " + rows[i].pro_source+' "'+rows[i].name +'"'+ ", "
    if(rows[i].prog_num!="") rows_concat[i]+='(No.'+rows[i].prog_num+'), '
    rows_concat[i]+=+moment(rows[i].start_time).format("YYYY")+'-'+moment(rows[i].deadline).format("YYYY")+', '
    // if(rows[i].cost!='' && rows[i].cost!=null) rows_concat[i]+=rows[i].cost+'万, '
    // else rows_concat[i] += rows[i].fund + ' 万( 直接经费 ), '
    
    rows_concat[i]+=rows[i].role+'('+rows[i].principal+')'
  }

  return (
    <div className={classes.root}>
       <Typography variant="h4" style={{paddingTop:'30px'}}>
        Grants
      </Typography>
        <div className={classes.table_container}>
            {
              rows_concat.map((row,index) => (
                <div key={index}>
                  <Typography style={{color:"#000000", padding: "10px",lineHeight:'1.6',textAlign:'left'}}>
                    {row}
                  </Typography>
                </div>
              ))
            }
        </div>
    </div>
  );
}
