import React, { Component } from 'react'

export default class Enes extends Component {
  render() {
    //enes componenteki tüm propsları consola yazdırır
    console.log(this.props)
    return (
      <div>
        {/*props olarak yolladığımız değerleri yazdırırız jsx formatta yazdırmak için küme parantezi içine yazılır */ }
        <h1>{this.props.baslik}</h1>
        <p>{this.props.aciklama}</p>
      </div>
    )
  }
}
