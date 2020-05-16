import React, {Component} from 'react'

import './Footer.css'

class Footer extends Component {
    render(){
        return(
            <div className="Footer">
                <footer className="Footer-Text">
                    {this.props.name}
                    {/* <span>{this.props.emoji}</span> */}
                </footer>
            </div>
        )
    }
}

export default Footer