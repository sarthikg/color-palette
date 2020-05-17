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

        let level = ''
        if(this.props.onChange) {
            level = <div className="Navbar-Level"><p>Level: {this.props.level}</p></div>
        }

        let slider = ''
        if(this.props.onChange) {
            slider = <div className="Navbar-Slider"><NavSlider onChange={this.props.onChange} level={this.props.level}/></div>
        }

        return (
            <div className="Navbar">
                <div className="Navbar-Logo">
                <Link to="/" id="Logo">ReactColorPicker</Link>
                </div>
                {level}
                {slider}
                <div className="Navbar-Dropdown">
                    <DropdownBox onChange={this.codecChange}/>
                </div>
                <NavSnackbar changed={this.state.changed}/>
            </div>
        )
    }
}

export default Navbar