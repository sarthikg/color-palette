import React, {Component} from 'react'
import NewPaletteDrawer from './NewPaletteDrawer/NewPaletteDrawer'

class NewPaletteForm extends Component {

  addPalette = (palette) => {
    console.log(palette)
    this.props.addPalette(palette)
  }

  render() {
    return(
      <div className="NewPaletteForm">
        <NewPaletteDrawer addPalette={this.addPalette} history={this.props.history} palette={this.props.palette}/>
      </div>
    )
  }
}

export default NewPaletteForm

