import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { withStyles } from '@material-ui/styles'

import MiniPalette from './PaletteList-components/MiniPalette'

const styles = {
    root: {
        backgroundColor: "blue",
        height: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center"
    },
    container: {
        width: "50%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap"
    },
    nav: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        color: "white"
    },
    palettes: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3,30%)",
        gridGap: "5%"
    }
}

class PaletteList extends Component{
    render(){
        const {classes} = this.props
        return(
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1>React Colors</h1>
                    </nav>
                    <div className={classes.palettes}>
                        {this.props.palettes.map(palette=> (
                            <div>
                                <MiniPalette palette={palette}/>
                                {/* <Link to={`/palette/${palette.id}`}>{palette.id}</Link> */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(PaletteList)