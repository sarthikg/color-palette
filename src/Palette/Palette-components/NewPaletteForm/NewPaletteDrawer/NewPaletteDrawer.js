import React, {Component} from 'react'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import Button from '@material-ui/core/Button'

import { arrayMove } from 'react-sortable-hoc'

import DragColorList from '../DragColorList/DragColorList'
import NewPalatteNav from '../NewPaletteNav/NewPaletteNav'
import ColorPickerForm from '../ColorPickerForm/ColorPickerForm'

const drawerWidth = 310;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    display: "flex",
    alignItems: "center"
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    width: "100%",
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    height: "calc(100vh - 84px)",
    flexGrow: 1,
    padding: 0,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  container : {
    width: "90%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%"
  },
  buttons: {
    width: "100%"
  },
  button: {
    width: "50%",
    fontSize: "0.7rem"
  }
});


class NewPaletteDrawer extends Component {

    state = {
        open: true,
        colors: []
      };

      handleDrawerOpen = () => {
        this.setState({ open: true });
      };
    
      handleDrawerClose = () => {
        this.setState({ open: false });
      };

      addColor = (colorCode, colorName) => {
        this.setState({ colors: [...this.state.colors, {"color": colorCode, "name": colorName}] })
      }

      removeColor = (colorName) => {
        this.setState({colors: this.state.colors.filter(color => color.name !== colorName)})
      }

      clearPalette = () => {
        this.setState({ colors: [] })
      }

      randomColor = () => {
        const allColors = this.props.palette.map(p => p.colors).flat()
        var rand =  Math.floor(Math.random()*allColors.length)
        const randColor = allColors[rand]
        this.setState({colors: [...this.state.colors, randColor]})
      }

      addPalette = (paletteName) => {
        let newName = paletteName
        const Palette = {
          colors: this.state.colors,
          paletteName: newName,
          id: newName.toLowerCase().replace(' ', '-')
        }
        this.props.addPalette(Palette)
        this.props.history.push('/')
      }

      onSortEnd = ({oldIndex, newIndex}) => {
        this.setState(({colors}) => ({
          colors: arrayMove(colors, oldIndex, newIndex),
        }));
      }

      render() {
          const { classes} = this.props;
          const { open } = this.state;
          const maxColors = 20
          let isFull = this.state.colors.length >= maxColors


          return(
              <div className="NewPaletteDrawer">
                <h1>This is the New Palette Form</h1>
                <div className={classes.root}>
                  <NewPalatteNav open = {open} palette={this.props.palette} paletteName={this.state.paletteName} addPalette={this.addPalette} handleDrawerOpen={this.handleDrawerOpen}/>
                  <Drawer className={classes.drawer} variant="persistent" anchor="left" open={open} classes={{paper: classes.drawerPaper}}>
                    <div className={classes.drawerHeader}>
                      <IconButton onClick={this.handleDrawerClose}>
                        {<ChevronLeftIcon />}
                      </IconButton>
                    </div>
                    <Divider />
                    <div className={classes.container}>
                      <Typography variant="h5" gutterBottom>Design your Palette</Typography>
                      <div className={classes.buttons}>
                        <Button variant="contained" color="secondary" onClick={this.clearPalette} className={classes.button}>Clear Palette</Button>
                        <Button variant="contained" color="primary" onClick={this.randomColor} disabled={isFull} className={classes.button}>{isFull ? "Palette Full" : "Random Color"}</Button>
                      </div>
                      <ColorPickerForm isFull={isFull} addColor={this.addColor} colors={this.state.colors}/>
                      </div>
                  </Drawer>
                      <main className={classNames(classes.content, {[classes.contentShift]: open})}>
                        <DragColorList colors={this.state.colors} removeColor={this.removeColor} axis='xy' onSortEnd={this.onSortEnd} />
                      </main>
                </div>
              </div>
          )
      }
} 

export default withStyles(styles, { withTheme: true })(NewPaletteDrawer)