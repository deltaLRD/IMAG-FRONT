import React from 'react';
import {makeStyles } from '@material-ui/core/styles';
import { useRouteData } from 'react-static';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
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

export default function Conference() {
  const classes = useStyles();
  const { publication } = useRouteData()
  const rows = publication['data'];
  const rows_concat = [];

  for(let i = 0; i < rows.length; ++ i){
    if ('conf_name' in rows[i]){
        rows_concat[i] = "[" + (rows.length-i) + "] " + rows[i].author + ". " + rows[i].name + "." + rows[i].conf_name+'. '+rows[i].page;
    }
    else{
        rows_concat[i] = "[" + (rows.length-i) + "] " + rows[i].author + ".  " + rows[i].name + " " + rows[i].jn_name+'. '+rows[i].page;
    }
    if ('dat' in rows[i]&&rows[i].dat!=''&&rows[i].dat!=null){
        rows_concat[i]+='('+rows[i].dat+')'
    }
  }
//   console.log(rows_concat)
 
  
  return (
    <div className={classes.root}>
      <Typography variant="h4" style={{paddingTop:'30px'}} align='center'>
        Publications
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
