import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'

import seedColors from './Helper-files/seedColors'
import { generatePalette } from "./Helper-files/colorHelpers"
import Palette from './Palette/Palette'
import PaletteList from './PaletteList/PaletteList'
import NewPaletteForm from './Palette/Palette-components/NewPaletteForm/NewPaletteForm'
import SingleColorPalette from './Palette/Palette-components/SingleColorPalette/SingleColorPalette'

class App extends Component{

  state = {
    palettes : seedColors
  }

  findPalette = (id) => {
    return this.state.palettes.find(function(palette){
      return palette.id === id
    })
  }

  addPalette = (palette) => {
    console.log(palette)
    console.log('This is from the App')
    this.setState({palettes: [...this.state.palettes, palette]})
  }

  syncLocalStorage = () => {
    
  }

  render() {
    return(
      <div className="App">
        <Switch>
          <Route exact path='/' render={(routeProps) => (<PaletteList palettes={this.state.palettes} {...routeProps}/>)}/>
          <Route exact path='/palette/new' render={(routeProps) => (<NewPaletteForm addPalette={this.addPalette} {...routeProps} palette={this.state.palettes}/>)}/>
          <Route exact path="/palette/:id" render={(routeProps) => (<Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />)}/>
          <Route exact path="/palette/:paletteId/:ColorId" render={(routeProps)=> (<SingleColorPalette {...routeProps} colorId = {routeProps.match.params.ColorId} palette={generatePalette(this.findPalette(routeProps.match.params.paletteId))}/>)} />
          <Route exact path="/test" render={() => (<SingleColorPalette/>)}/>
        </Switch>
      </div>
    )
  }
}

export default App;