import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'

import seedColors from './Helper-files/seedColors'
import { generatePalette } from "./Helper-files/colorHelpers"
import Palette from './Palette/Palette'
import PaletteList from './PaletteList/PaletteList'
import SingleColorPalette from './Palette/Palette-components/SingleColorPalette/SingleColorPalette'

class App extends Component{

  findPalette = (id) => {
    return seedColors.find(function(palette){
      return palette.id === id
    })
  }

  render() {
    return(
      <div className="App">
        <Switch>
          <Route exact path='/' render={(routeProps) => (<PaletteList palettes={seedColors} {...routeProps}/>)}/>
          <Route exact path="/palette/:id" render={(routeProps) => (<Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />)}/>
          <Route exact path="/palette/:paletteId/:ColorId" render={(routeProps)=> (<SingleColorPalette {...routeProps} colorId = {routeProps.match.params.ColorId} palette={generatePalette(this.findPalette(routeProps.match.params.paletteId))}/>)} />
          <Route exact path="/test" render={() => (<SingleColorPalette/>)}/>
        </Switch>
      </div>
    )
  }
}

export default App;