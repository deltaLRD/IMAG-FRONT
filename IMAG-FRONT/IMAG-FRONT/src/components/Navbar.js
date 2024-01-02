import {
  AppBar,
  makeStyles,
  Toolbar,
  Typography,
  Button,
  Grid,
} from "@material-ui/core";
import { Link } from 'components/Router'
import { useState } from "react";
import React from "react";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#57247b",
    height: '60px',
    '& .MuiToolbar-gutters': {
      width: '1200px',
      margin: '0 auto',
      height: '60px',
    }
  },
  logoLg: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-start',
    width: '100%',
  },
  toolbar_left: {
    flex: 1,
  },
  toolbar_mid: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flex: 4,
  },
  toolbar_mid_item: {

  },
  toolbar_right: {
    display: 'flex',
    justifyContent: 'flex-end',
    flex: 1,
  },
}));
const itemsPre = ['HOME', 'PEOPLE', 'NEWS']
const pathsPre = ['/', 'people', 'news']
const itemsNext = ['PUBLICATIONS', 'COMPETITIONS', 'GRANTS', 'PATENTS', 'HONOR', 'RESOURCE', 'CONTACT']
const pathsNext = ['publication', 'competition', 'grants', 'patent', 'honor', 'resource', 'contact']
const Navbar = () => {
  const classes = useStyles({ open });
  const [isHovering, setIsHovering] = useState(0);
  // const navStyle = {
  //   paddingLeft:'20px',
  //   paddingRight:'20px',
  //   lineHeight:'45px'
  // }

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  // const handleToggle = () => {
  //   setOpen((prevOpen) => !prevOpen);
  //   if(isHovering===-1) setIsHovering(3)
  //   // else setIsHovering(3)
  // };

  // const handleClose = (event) => {
  //   if (anchorRef.current && anchorRef.current.contains(event.target)) {
  //     return;
  //   }

  //   setOpen(false);
  // };


  // function handleListKeyDown(event) {
  //   if (event.key === 'Tab') {
  //     event.preventDefault();
  //     setOpen(false);
  //   }
  // }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <div className={classes.toolbar}>
          <div className={classes.toolbar_mid}>
            {itemsPre.map((item, key) => (
              <div key={key} style={{ backgroundColor: isHovering == key ? "white" : '' }} onMouseEnter={() => setIsHovering(key)} onMouseLeave={() => setIsHovering(-1)} onClick={() => setIsHovering(key)}>
                <Link to={pathsPre[key]} style={{ color: isHovering == key ? '#57247b' : 'white', paddingLeft: '20px', paddingRight: '20px', lineHeight: '64px', display: 'block' }}>{item}</Link>
              </div>
            ))}
            {/* 
              <Button
                ref={anchorRef}
                style={{top:'-2px',fontSize:'16px',fontWeight:'bold',paddingLeft:'20px',paddingRight:'20px', lineHeight:'46px' ,backgroundColor:isHovering==3?"white":'',color:isHovering==3?'#57247b':'white'}}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                onMouseEnter={handleToggle} 
                // onMouseLeave={handleToggle}
              >
                PUBLICATION
              </Button> */}
            {/* <Popper open={open} anchorEl={anchorRef.current} role={undefined}  transition disablePortal>
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown} style={{paddingTop:'10px'}} >
                          <MenuItem value="0" onClick={handleToggle} onMouseEnter={()=>setIsHovering(3)} ><Link to='/conference'>Conference</Link></MenuItem>
                          <MenuItem value="1" onClick={handleToggle} onMouseEnter={()=>setIsHovering(3)} ><Link to='/journal'>Journal</Link></MenuItem>
                          <MenuItem value="2" onClick={handleToggle} onMouseEnter={()=>setIsHovering(3)} ><Link to='/patent'>Patent</Link></MenuItem>
                          <MenuItem value="3" onClick={handleToggle} onMouseEnter={()=>setIsHovering(3)} ><Link to='/software'>Software</Link></MenuItem>
                          <MenuItem value="4" onClick={handleToggle} onMouseEnter={()=>setIsHovering(3)} ><Link to='/monograph'>Monograph</Link></MenuItem>
                         
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper> */}

            {itemsNext.map((item, key) => (
              <div key={key + 4} style={{ backgroundColor: isHovering == key + 4 ? "white" : '' }} onMouseEnter={() => setIsHovering(key + 4)} onMouseLeave={() => setIsHovering(-1)} onClick={() => setIsHovering(key + 4)}>
                <Link to={pathsNext[key]} style={{ color: isHovering == key + 4 ? '#57247b' : 'white', paddingLeft: '20px', paddingRight: '20px', lineHeight: '64px', display: 'block' }}>{item}</Link>
              </div>
            ))}
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
