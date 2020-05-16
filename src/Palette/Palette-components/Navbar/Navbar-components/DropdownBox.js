import React, {Component} from 'react'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

class DropdownBox extends Component {

    state = {
        colorCodec : "rgb"
    }

    handleChange = (event) => {
        this.props.onChange(event.target.value)
        this.setState({colorCodec: event.target.value})
    }

    render(){
        return(
            <div className="DropdownBox">
                <Select value={this.state.colorCodec}  onChange={this.handleChange}>
                    <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
                    <MenuItem value="rgba">RGBA - rgba(255,255,255,1)</MenuItem>
                    <MenuItem value="hex">HEX - 1234EF</MenuItem>
                    <MenuItem value="#hex">HEX - #1234EF</MenuItem>
                </Select>
            </div>
        )
    }
}

export default DropdownBox