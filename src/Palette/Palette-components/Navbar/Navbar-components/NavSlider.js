import React, {Component} from 'react'
import Slider from 'rc-slider'

import 'rc-slider/assets/index.css'
import './NavSlider.css'

class NavSlider extends Component {

    handleChange = (level) => {
        this.props.onChange(level)
    }

    render() {
        return (
            <div className="NavSlider">
                <Slider defaultValue={500} min={100} max={900} step={100} onChange={this.handleChange}/>
            </div>
        )
    }
}

export default NavSlider