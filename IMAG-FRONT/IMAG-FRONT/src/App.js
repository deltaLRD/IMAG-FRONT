import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
import { Link, Router } from 'components/Router'
import Navbar from './components/Navbar'
import Dynamic from './containers/Dynamic'
import { useState } from 'react'
import Typography from '@material-ui/core/Typography';
import {
  makeStyles,
} from "@material-ui/core";


import './app.css'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

const useStyles = makeStyles((theme) => ({
  grid: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'column',
    alignItems: 'center',
  },

  page: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-start',
    //alignContent: 'space-around',
    // alignItems: 'flex-end',
    // width: '100%',
    // height: '870px',
  },

  header: {
    width: '1140px',
    margin: '0 auto'
  },
  title: {
    padding: '20px 0 25px',
    '& .content': {
      float: 'left',
      paddingRight: '20px'
    }
  },

  content: {
    flex: 1,
    minHeight: "700px"
    // height: '100vh',
  },

  navbar: {
    // display: 'flex',
  },

  contact: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    backgroundColor: "#57247b",
    marginTop: '50px'
  },
  contact_item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: "20px"
  },

}));

function App() {
  const [open, setOpen] = useState(false);
  const classes = useStyles({ open });

  return (
    <Root>
      <div className="App">
        <div className={classes.page}>
          <div className={classes.header}>
            <div className={classes.title}>
              <div className='content' >
                <div>
                  <Typography align='center' variant="h3" style={{ color: "#57247b", height: "80%" }}>
                    南京理工大学智能媒体分析实验室
                  </Typography>
                </div>
                <div>
                  <Typography gutterBottom style={{ color: "#666666", marginBottom: '25px' }}>
                    Intelligent Media Analysis Group (IMAG), School of Computer Science, Nanjing University of Science and Technology
                  </Typography>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.navbar}>
            <Navbar />
          </div>

          <div className={classes.content}>
            <React.Suspense fallback={<em>Loading...</em>}>
              <Router>
                <Dynamic path="dynamic" />
                <Routes path="*" />
              </Router>
            </React.Suspense>
          </div>
        </div>
      </div>
      <div className={classes.contact}>
        <div className={classes.contact_item}>
          <div>
            <Typography style={{ color: "#ffffff" }}>
              Copyright © 2022 南京理工大学智能媒体分析实验室. All rights reserved.
            </Typography>
          </div>
          <div>
            <Typography gutterBottom style={{ color: "#ffffff" }}>
              Theme: ColorMag by ThemeGrill. Powered by WordPress.
            </Typography>
          </div>
        </div>

      </div>
    </Root>
  );
}

export default App
