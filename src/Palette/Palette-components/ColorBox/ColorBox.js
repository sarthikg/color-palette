import React, {Component} from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import {Link} from 'react-router-dom'
import chroma from 'chroma-js'

import './ColorBox.css'

class ColorBox extends Component {

    state = {
        copied: false
    }

    changeCopyState = () => {
        this.setState({copied: true}, ()=> {
            setTimeout(() => this.setState({ copied: false }), 1500 )
        })
    }

    render() {

        const {hex, id, name, rgb, rgba} = this.props.color
        let {copied} = this.state
        let codec = rgb
        const isDarkColor = chroma(rgb).luminance() <=0.1
        const isLightColor = chroma(rgb).luminance() >= 0.7

        if(this.props.codec === 'rgb'){
            codec = rgb
        } else if(this.props.codec === 'rgba'){
            codec = rgba
        } else if (this.props.codec === 'hex'){
            codec = hex.substring(1)
        } else {
            codec = hex
        }

        let moreButton = ''
        if(this.props.more) {
            moreButton = <Link to={`/palette/${this.props.paletteId}/${id}`}><span className={`ColorBox-More ${isLightColor ? "DarkText" : ""}`}>More</span></Link>
        }


        return (
            <div className="ColorBox">
                <div className="ColorBox-Background" style={{background: rgb}}>
                    <div className="ColorBox-Copy">
                        <div className="ColorBox-Content">
                            <span className={isDarkColor ? "LightText": ""}>
                                {name}
                            </span>
                        </div>
                        <CopyToClipboard text={codec} onCopy={this.changeCopyState}>
                            <button className={`ColorBox-Copy-Button ${isLightColor ? "DarkText" : ""}`}>Copy</button>
                        </CopyToClipboard>
                    {moreButton}
                    </div>
                </div>
                <div className={`Color-Overlay-Background${copied ? " show" : ""}`} style={{background: rgb}}></div>
                <div className={`Color-Overlay-Text${copied ? " show" : ""}`}>
                    <h1>Copied!</h1>
                    <p className={isLightColor ? "DarkText" : ""}>{codec}</p>
                </div>
            </div>
        )
    }
}

export default ColorBox;