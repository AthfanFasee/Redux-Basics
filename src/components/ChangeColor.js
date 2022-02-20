import React, {useState} from 'react'
import {useDispatch} from 'react-redux';
import {chnageColor} from '../features/themes';


function ChangeColor() {

    const [color, setColor] = useState("");

    const dispatch = useDispatch();

  return (
    <div>
        <input type="text" onChange={(event) => setColor(event.target.value)}/>
        <button onClick={() => dispatch(chnageColor(color))}>Chnage Color</button>
    </div>
  )
}

export default ChangeColor