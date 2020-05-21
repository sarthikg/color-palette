import React, {Component} from 'react'
import {SortableElement} from 'react-sortable-hoc'
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete'

const styles = {
    root : {
        width: "20%",
        height: "25%",
        margin: "0 auto",
        position: "relative",
        display: "inline-block",
        cursor: "pointer",
        marginBottom: "-px",
        "&:hover svg" : {
            color: "white",
        }
    },
    DragColorBoxContent : {
        width: "100%",
        position: "absolute",
        left: "0px",
        bottom: "0px",
        padding: "10px",
        color: "black",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontSize: "12px",
        display: "flex",
        justifyContent: "space-between"
    },
    DeleteIcon : {
        color: "rgba(0,0,0,0.5)",
        transition: "all 0.3s ease-in-out",
        "&:hover" : {
            transform: "scale(1.3)"
        }
    }
}

class DragColorBox extends Component {

    removeColor = () => {
        this.props.removeColor(this.props.color.name)
    }

    render() {
        return (
            <div className={this.props.classes.root} style={{backgroundColor: this.props.color.color}}>
                <div className={this.props.classes.DragColorBoxContent}>
                    <span>
                        {this.props.color.name}
                    </span>
                    <DeleteIcon className={this.props.classes.DeleteIcon} onClick={this.removeColor} />
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(SortableElement(DragColorBox))