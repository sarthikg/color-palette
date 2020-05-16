import React, {Component} from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

class NavSnackbar extends Component {

    state = {
        open: false
    }

    handleClose = () => {
        this.setState({open: false})
    }

    handleChanged = () => {
        this.setState({open: true})
    }

    render() {

        if(this.props.changed === true) {
            this.handleChanged()
        }

        return(
            <div className="NavSnackbar">
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={this.state.open}
                    onClose={this.handleClose}
                    autoHideDuration={3000}
                    message="Format Changed!"
                    action={
                            <IconButton size="small" aria-label="close" color="inherit" onClick={this.handleClose}>
                                <CloseIcon fontSize="small" />
                            </IconButton>
                            }
                />
            </div>
        )
    }
}

export default NavSnackbar