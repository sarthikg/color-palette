import React, {Component} from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import NewPaletteDialogue from '../NewPaletteDialogue/NewPaletteDialogue'

import classNames from 'classnames'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Button from '@material-ui/core/Button'


const drawerWidth = 310;
const styles = theme => ({
    root: {
        display: 'flex'
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginLeft: 12,
      marginRight: 20,
    },
    hide: {
      display: 'none',
    },
    navBtns: {
      marginRight: "1rem",
      display: "flex",
      flexDirection: "row",
      "& a" : {
        textDecoration: "none"
      }
    },
    button: {
      margin: "0 0.5rem",
      height: "max-content",
    }
  });


class NewPaletteNav extends Component {

  state = {
    open: false
  }

  openDialogue = () => {
    if(this.state.open === false) {
      this.setState({open: true}, ()=> {
        this.setState({open: false})
      })
    }
    else {
      this.setState({open: false}, ()=> {
        this.setState({open: true})
      })
    }
  }

  addPalette = (palette) => {
    this.props.addPalette(palette)
  }

    render() {
        const {classes, open} = this.props
        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar color="default" position="fixed" className={classNames(classes.appBar, {[classes.appBarShift]: open})}>
                <Toolbar disableGutters={!open}>
                    <IconButton color="inherit" aria-label="Open drawer" onClick={this.props.handleDrawerOpen} className={classNames(classes.menuButton, open && classes.hide)}>
                    <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" noWrap>Create a Palette</Typography>
                </Toolbar>
                <div className={classes.navBtns}>
                  <Link to="/">
                        <Button variant="contained" color="secondary" className={classes.button}>Back</Button>
                  </Link>
                  <Button variant="contained" color="primary" onClick={this.openDialogue} className={classes.button}>Save</Button>
                </div>
                </AppBar> 
                <NewPaletteDialogue palette={this.props.palette} addPalette={this.addPalette} open={this.state.open}/>
            </div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(NewPaletteNav)