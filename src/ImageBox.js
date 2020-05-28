import React from 'react'

function ImageBox (props) {
  const {url, index} = props.image
  return (

        <img src={url} id={index}></img>

  )
}

export default ImageBox;
