import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import GameContainer from './containers/GameContainer'
import userActions from './redux/actions'
import Button from './components/Button'
import { FaPlay } from 'react-icons/fa';
function App() {
  const dispatch = useDispatch()
  
  useEffect(() => {
        
    dispatch(userActions.getChoices())
    dispatch(userActions.getWords())
        
  },    [dispatch])

  const [toggle, setToggle] = useState({
    gameOn: false
    
  })

  const { gameOn } = toggle

  const handleClick = e => {
    console.log("hello")
    // dispatch(userActions.getChoices())
    // dispatch(userActions.getWords())
    setToggle({
      ...toggle,
      gameOn: !gameOn
    // //   // gameEnd: !gameEnd
    })
  }
  
  const gameCondition = (toggle) => {
    console.log(toggle.gameOn)
    if(toggle.gameOn === true){
  
      return(
        <div>
          <GameContainer />
        </div>
      )
      
    }
    else{
      return(
        <div className="container">
          <div className="welcome section">
            W E R D
          </div>
          
            <div className="section">
            <button onClick={handleClick} className="box circle icon"  >
              <FaPlay />
            </button>
            </div>
             
        </div>
      )
     
    }
  }

  return(
    <div>
      {gameCondition(toggle)}
    </div>
  )
}

export default App;
