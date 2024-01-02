import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { useRouteData } from 'react-static';
import Typography from '@material-ui/core/Typography';
import 'react-lazy-load-image-component/src/effects/blur.css';
import MyImage from '../components/Lazy_loading'
import 'react-photo-view/dist/react-photo-view.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { PhotoProvider, PhotoView } from 'react-photo-view';
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
  pic: {
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: '20px',
    '& img': {
      height: '100px',
      padding: '0 20px',
      margin: '0 auto'
    }
  }
}));

function Contact() {
  const { competition } = useRouteData()
  console.log(competition.data[0])
  // console.log(competition.data[0].pic.split('/').slice(-1)[0])
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h4" style={{ paddingTop: '30px', paddingBottom: '50px' }} align="center">
        Competitions
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>序号</TableCell>
              <TableCell align="center">获奖名称</TableCell>
              <TableCell align="center">获奖时间</TableCell>
              <TableCell align="center">获奖人员</TableCell>
              <TableCell align="center">获奖等级</TableCell>
              <TableCell align="center">指导教师</TableCell>
              <TableCell align="center">奖状</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {competition.data.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.year}</TableCell>
                <TableCell align="center">{row.participant}</TableCell>
                <TableCell align="center">{row.ranking}</TableCell>
                <TableCell align="center">{row.teachers}</TableCell>
                <TableCell align="center" >
                  <PhotoProvider maskOpacity={0.5} bannerVisible={false}>
                    <PhotoView src={`../static/competition_encd/${row.id}/${row.pic.split('/').slice(-1)[0]}`}>
                      <img style={{ height: '50px' }} src={`../static/competition_encd/${row.id}/tiny_${row.pic.split('/').slice(-1)[0]}`}></img>
                    </PhotoView>
                  </PhotoProvider>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Contact