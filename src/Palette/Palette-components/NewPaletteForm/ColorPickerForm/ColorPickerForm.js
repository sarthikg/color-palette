import React, {Component} from 'react'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'

import { ChromePicker } from 'react-color'
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator'

const styles = theme => ({
  picker : {
    width: "100% !important",
    marginTop: "2rem",
  },
  addColor : {
    width: "100%",
    padding: "1rem",
    marginTop: "1rem",
    fontSize: "1rem"
  },
  colorInput : {
    width: "100%",

  }
  });

class ColorPickerForm extends Component {

    state = {
        colorCode: "#ffeeee",
        colorName: ""
    }

    componentDidMount() {
        ValidatorForm.addValidationRule("UniqueColorCode", (value) => 
          this.props.colors.every(
            ({name}) => name.toLowerCase() !== value.toLowerCase()
          ))
        ValidatorForm.addValidationRule("UniqueColorName", (value) =>
            this.props.colors.every(
              ({color}) => color !== value
          ))
      }

    changeColorCode = (color) => {
        this.setState({ colorCode: color.hex })
      }

    changeColorName = (event) => {
    this.setState({ colorName: event.target.value})
    }

    addColor = () => {
        this.props.addColor(this.state.colorCode, this.state.colorName)
    }

    render() {

        const {isFull, classes} = this.props

        return (
            <div className={classes.root}>
                <ChromePicker color={this.state.colorCode} onChange={this.changeColorCode} className={classes.picker}/>
                <ValidatorForm onSubmit={this.addColor}>
                    <TextValidator label="Color Name" value={this.state.colorName} onChange={this.changeColorName} validators={['UniqueColorCode', 'UniqueColorName']} errorMessages={['Color is taken!','Color Name is taken!']}  className={classes.colorInput} variant="filled" margin="normal"/>
                    <Button type="submit" variant="contained" style={{backgroundColor: this.state.colorCode}} disabled={isFull} className={classes.addColor}>{isFull ? "Palette Full" : "Add Color"}</Button>
                </ValidatorForm>
            </div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(ColorPickerForm)