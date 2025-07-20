import React, { useRef } from 'react'
import './VedioPlayer.css'
import video from '../../assets/college-video-6XtGR-D3.mp4'

const VedioPlayer = ({playState, setPlayState}) => {

    const player = useRef(null);

    const closePlayer = (e) => {
        if(e.target === player.current){
            setPlayState(false)
        }
    }

  return (
    <div className={`video-player ${playState?'':'hide'}`} ref={player} onClick={closePlayer}>
        <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default VedioPlayer