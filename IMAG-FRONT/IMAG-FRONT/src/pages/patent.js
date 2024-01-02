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

function Patent() {
  const classes = useStyles();
  const { patent, softwareCopyright } = useRouteData();
  return (
    <div className={classes.root}>
      <Typography variant="h4" style={{ paddingTop: '30px', paddingBottom: '50px' }} align="center">
        Patent
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>序号</TableCell>
              <TableCell align="center">专利名</TableCell>
              <TableCell align="center">专利权所有人</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {patent.data.map((row, index) => {
              return (<TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.patentee}</TableCell>
              </TableRow>)
            })}
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="h4" style={{ paddingTop: '30px', paddingBottom: '50px' }} align="center">
        SoftwareCopyright
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>序号</TableCell>
              <TableCell align="center">软著名</TableCell>
              <TableCell align="center">软著作者</TableCell>
              <TableCell align="center">时间</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {softwareCopyright.data.map((row, index) => {
              return (<TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.author}</TableCell>
                <TableCell align="center">{row.times}</TableCell>
              </TableRow>)
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Patent;