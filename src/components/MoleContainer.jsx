import React from 'react'
import { useState } from 'react'
import Mole from './Mole'
import EmptySlot from './EmptySlot'

export default function MoleContainer(props) {
    const[displayMole, setDisplayMole] = useState(true)
    
    function bop() {
        props.setScore(props.score + 1)
        setDisplayMole(false)
    }



    return (
    <div>
        {displayMole ? <Mole bop={bop} setDisplayMole={setDisplayMole} /> : <EmptySlot setDisplayMole={setDisplayMole} />}
    </div>
  )
}
