import React from 'react'

function BodyQR({Canvas, QRText}) {
  return (
    <div>
        <Canvas
            text={`${QRText}`}
            options={{
                level: 'M',
                margin: 3,
                scale: 4,
                width: 200,
                color: {
                dark: '#010599FF',
                light: '#FFBF60FF',
                },
            }}
        />
    </div>
  )
}

export default BodyQR