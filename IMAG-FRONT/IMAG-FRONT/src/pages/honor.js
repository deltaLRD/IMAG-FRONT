import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useRouteData } from 'react-static';
import Typography from '@material-ui/core/Typography';
import TableRow from '@mui/material/TableRow';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
const useStyles = makeStyles(() => ({
  root: {
    width: '1140px',
    margin: '0 auto',
  },
  title: {
    padding: '20px'
  },
  content: {
    width: '25%',
    float: 'left',
    marginTop: '50px',
    alignItems: 'center',
    height: '200px'
  },
}));

export default function Honor() {
  const classes = useStyles();
  const { honor } = useRouteData();
  return (
    <div className={classes.root}>
      <Typography variant="h4" style={{ paddingTop: '30px', paddingBottom: '50px' }} align="center">
        Honor
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>序号</TableCell>
              <TableCell align="center">荣誉</TableCell>
              <TableCell align="center">姓名</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {honor.data.map((row, index) => {
              return (<TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell align="center">{row.title}</TableCell>
                <TableCell align="center">{row.name}</TableCell>
              </TableRow>)
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
};