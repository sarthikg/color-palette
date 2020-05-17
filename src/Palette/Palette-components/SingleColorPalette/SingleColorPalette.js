import React, {Component} from 'react'
import {Link} from "react-router-dom"

import ColorBox from '../ColorBox/ColorBox'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

import './SingleColorPalette.css'

class SingleColorPalette extends Component {

    state = {
        codec: 'rgb'
    }

    changeCodec = (codec) => {
        this.setState({codec:codec})
    }

    render() {

        let shades = []
        for(let key in this.props.palette.colors) {
            shades = shades.concat(
                this.props.palette.colors[key].filter(color => color.id === this.props.colorId)
            )
        }
        shades = shades.slice(1)

        return (
            <div className="SingleColorPalette">
                <div className="Palette-Nav">
                    <Navbar onCodecChange={this.changeCodec}/>
                </div>
                <div className="SingleColorPalette-Colorbox">
                    {shades.map(color => (
                        <ColorBox color={color} key={color.hex} codec={this.state.codec}/>
                    ))}
                    <div className="Back-Button ColorBox">
                        <Link className="Back" to={`/palette/${this.props.palette.id}`}>Go Back</Link>
                    </div>
                </div>
                <Footer name={this.props.palette.paletteName} emoji={this.props.palette.emoji}/>
            </div>
        )
    }
}

export default SingleColorPalette