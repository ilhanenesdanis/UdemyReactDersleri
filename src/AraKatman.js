import React, { Component } from 'react'
import Enes from './Enes'

 class AraKatman extends Component {
  render() {
    const element= this.props.dizi.map(dizim=>
        <Enes baslik={dizim.title} aciklama={dizim.description} key={dizim.Id} />
        )
    return (
      <div>
        {/*
        javascript ile array dönem
        map fonksiyonu ile gelen array değerlerini döneriz
        
        */ }
        {
           element
        }
      </div>
    )
  }
}
export default AraKatman