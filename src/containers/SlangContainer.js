import React from 'react'
import { useSelector } from 'react-redux'
import Slang from '../components/Slang'

const SlangContainer = (props) => {
    console.log(props)
        return(
            <>
                <div>
                    <Slang slang={props.slang} />
                </div>
            </>
        )
}

export default SlangContainer