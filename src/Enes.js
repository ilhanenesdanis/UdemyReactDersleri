import React, { Component } from 'react'

export default class Enes extends Component {
  render() {
    //enes componenteki tüm propsları consola yazdırır
    console.log(this.props)
    //propstan gelen değerleri değişken oluşturup atarız
     const{baslik,aciklama}=this.props;
    return (
      <div>
        {/*props olarak yolladığımız değerleri yazdırırız jsx formatta yazdırmak için küme parantezi içine yazılır */ }
        <h1>{baslik}</h1>
        <p>{aciklama}</p>
      </div>
    )
  }
}
