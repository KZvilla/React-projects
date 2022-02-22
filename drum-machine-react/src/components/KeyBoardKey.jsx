import { useEffect } from "react"

export const KeyBoardKey = ({ playSound, sounds: {id, keyTrigger, url, keyCode }}) => {
    const handleKeyDown = (e) => {
      if (e.keyCode === keyCode) {
        playSound(keyTrigger, id);
      }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown)
    },);
    
    return(
            <button id={keyCode} type='button' className={`drum-pad ${keyTrigger}`}  onClick={() => playSound(keyTrigger, id)}>
                <audio id={keyTrigger} className='clip' src={url} />
                {keyTrigger}
            </button>
    )
  }