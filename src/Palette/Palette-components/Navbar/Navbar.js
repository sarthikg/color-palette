import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import NavSlider from './Navbar-components/NavSlider'
import DropdownBox from './Navbar-components/DropdownBox'
import NavSnackbar from './Navbar-components/NavSnackbar'

import './Navbar.css'

class Navbar extends Component {

    state = {
        codec : 'rgb',
        changed: false
    }

    codecChange = (codec) => {
        this.props.onCodecChange(codec)
        this.setState({codec: codec, changed: true}, this.changeDefault)
    }

    changeDefault = () => {
        this.setState({changed:false})
    }

    render() {
        return (
            <div className="Navbar">
                <div className="Navbar-Logo">
                <Link to="/" id="Logo">ReactColorPicker</Link>
                </div>
                <div className="Navbar-Level">
                    <p>Level: {this.props.level}</p>
                </div>
                <div className="Navbar-Slider">
                    <NavSlider onChange={this.props.onChange} level={this.props.level}/>
                </div>
                <div className="Navbar-Dropdown">
                    <DropdownBox onChange={this.codecChange}/>
                </div>
                <NavSnackbar changed={this.state.changed}/>
            </div>
        )
    }
}

export default Navbar