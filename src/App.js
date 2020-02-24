import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import GameContainer from './containers/GameContainer'
import userActions from './redux/actions'
import Button from './components/Button'
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
        <div>
          <button onClick={handleClick}>hi </button> 
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
