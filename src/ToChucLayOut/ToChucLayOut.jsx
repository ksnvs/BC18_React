import React, { Component } from 'react'
import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderComponent'
import ProducstListComponent from './ProducstListComponent'
import SliderComponent from './SliderComponent'

export default class ToChucLayOut extends Component {
  render() {
    return (<div>
 <HeaderComponent/>
 <SliderComponent/>
 <ProducstListComponent/>
 <FooterComponent/>
    </div>
    
     
    )
  }
}
