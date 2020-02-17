import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import GameContainer from './containers/GameContainer'
import userActions from './redux/actions'
import Button from './components/Button'
function App() {
  const dispatch = useDispatch()
  
  useEffect(() => {
        
    dispatch(userActions.getWords())
    dispatch(userActions.getChoices())
        
  },    [dispatch])

  const [toggle, setToggle] = useState({
    gameStart: false,
    gameEnd: true
  })

  const { gameStart, gameEnd } = toggle

  const handleClick = e => {
    debugger
    setToggle({
      ...toggle,
      gameStart: !gameStart,
      gameEnd: !gameEnd
    })
  }
  
  const gameCondition = (toggle) => {
    console.log(toggle.gameStart)
    if(toggle.gameEnd === true){
      return(
        <div>
          <Button onClick={handleClick()} />  
        </div>
      )
    }
    else{
      return(
        <div>
          <GameContainer />
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
