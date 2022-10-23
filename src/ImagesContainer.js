import React from 'react'

function ImagesContainer() {
  return (
    <div className="images-container">
      <div>
        <img src="{require('./images/IMG_2189.JPEG')}" alt="obr" />
      </div>
      <div>
        <img src="{require('./images/')}" alt="obr" />
      </div>
    </div>
  )
}

export default ImagesContainer
