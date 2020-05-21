import React, {Component} from 'react'
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator'

import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

class NewPaletteDialogue extends Component {

    state = {
        open: false,
        paletteName: "",
    }

    componentDidMount() {
        ValidatorForm.addValidationRule("UniquePaletteName", (value) => 
              this.props.palette.every(
                ({paletteName}) => paletteName.toLowerCase() !== value.toLowerCase()
                )
        )
    }
    changePaletteName = (event) => {
        this.setState({paletteName: event.target.value})
    }
    addPalette = () => {
        this.props.addPalette(this.state.paletteName)
    }
    handleClickOpen = () => {
        this.setState({ open: true });
    }
    handleClose = () => {
        this.setState({ open: false });
    }
    checkStatus = () => {
        let status = this.props.open
        if (status === true){
            this.setState({ open: true })
        }
    }

    render() {
        this.checkStatus()
        return (
            <div>
                <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <ValidatorForm onSubmit={this.addPalette}>
                        <DialogTitle id="form-dialog-title">Name your Palette</DialogTitle>
                        <DialogContent>
                            <DialogContentText>Add a catchy name for your newly created palette. Make sure its a unique name!</DialogContentText>
                                <TextValidator margin="dense" fullWidth autoFocus value={this.state.paletteName} onChange={this.changePaletteName} label="Palette Name" validators={["required","UniquePaletteName"]} errorMessages={["Enter a Name","Palette Name taken!"]}/>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleClose} color="primary">Cancel</Button>
                            <Button variant="contained" color="primary" type="submit">Save</Button>
                        </DialogActions>
                    </ValidatorForm>
                </Dialog>
            </div>
        )
    }
}

export default NewPaletteDialogue