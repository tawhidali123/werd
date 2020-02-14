import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import GameContainer from './containers/GameContainer'
import userActions from './redux/actions'
import Button from './components/Button'
function App() {
  const dispatch = useDispatch()

  useEffect(() => {
        
    dispatch(userActions.getWords(), userActions.getChoices())
        
  },    [dispatch])

  const [toggle, setToggle] = useState({
    gameStart: false,
    gameEnd: true
  })

  const handleClick = e => {
    setToggle({
      gameStart: !toggle.gameStart,
      gameEnd: !toggle.gameEnd
    })
  }
  
  const { gameStart, gameEnd } = toggle
  
  const gameCondition = (toggle) => {
    if(toggle.gameStart){
      return(
        <div>
          <GameContainer />
        </div>
      )
    }

    
    else{
      return(
        <div>
          <Button onClick={handleClick()} />
        </div>
      )
    }
  }

  return(
    gameCondition(toggle)
  )
}

export default App;
