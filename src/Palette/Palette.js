import React, {Component} from 'react'

import Colorbox from './Palette-components/ColorBox/ColorBox'
import Navbar from './Palette-components/Navbar/Navbar'
import Footer from './Palette-components/Footer/Footer'

import './Palette.css'


class Palette extends Component {

    state = {
        level: 500,
        codec: 'rgb'
    }

    changeLevel = (level) => {
        this.setState({level:level})
    }

    changeCodec = (codec) => {
        this.setState({codec:codec})
    }

    render() {

        var Colorboxes = this.props.palette.colors[this.state.level].map((color) => (
            <Colorbox color={color} key={color.hex} codec={this.state.codec}/>
        ))

        return (
            <div className="Palette">
                <div className="Palette-Nav">
                    <Navbar onChange={this.changeLevel} level={this.state.level} onCodecChange={this.changeCodec}/>
                </div>
                <div className="Palette-Colorbox">
                    {Colorboxes}
                </div>
                <div className="Palette-footer">
                    <Footer name={this.props.palette.paletteName} emoji={this.props.palette.emoji}/>
                </div>
            </div>
        )
    }
}

export default Palette