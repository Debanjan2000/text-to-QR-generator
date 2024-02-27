import {React, useState, useEffect} from 'react'
import { useQRCode } from 'next-qrcode';
import BodyQR from './BodyQR'
import Input from './Input'
import './QR.css'
import './Input.css'

const QR = () => {
    
    const [color, SetColor] = useState('')
    const [charCount, SetCharCount] = useState(0)
    const [QRText, SetQRText] = useState('')
    const [showQR, SetShowQR] = useState(false)

    const { Canvas } = useQRCode();

    const makeQR = (e) => {
        SetQRText(e.target.value)
        SetCharCount(e.target.value.length)
        if(showQR === true){
            SetShowQR(false)
        }
    }

    const QRVisibility = () => {
        if(QRText !== ''){
            SetShowQR(true)
        } 
        
    }

    useEffect(() => {
        if(charCount === 300){
            SetColor('red')
        } else {
            SetColor('')
        }
    }, [charCount])

  return (
    <div>
        <h1>QR Code Generator</h1>
        <span className={color}>{charCount} / 300</span>
        <br />
        <br />
        <Input 
            makeQR={makeQR}
        />
        <br />
        <button onClick={QRVisibility}>Generate QR</button>
        <br />
        { 
            showQR && 
            <BodyQR 
                Canvas={Canvas}
                QRText={QRText}
            />
        }
    </div>
  )
}

export default QR