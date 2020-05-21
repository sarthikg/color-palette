import React, {Component} from 'react'
import { withStyles } from '@material-ui/core/styles'
import { SortableContainer } from 'react-sortable-hoc'

import DragColorBox from '../DragColorBox/DragColorBox'

const styles = {
    root: {
        height: "100%"
    }
}

class DragColorList extends Component {
    render() {
        return (
            <div className={this.props.classes.root}>
                {this.props.colors.map((color, index) => (
                    <DragColorBox index={index} color={color} key={color.color} removeColor={this.props.removeColor}/>
                ))}
            </div>
        )
    }
}

export default withStyles(styles)(SortableContainer(DragColorList))