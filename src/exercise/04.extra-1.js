// Prop Collections and Getters
// 💯 prop getters
// http://localhost:3000/isolated/exercise/04.extra-1.js

import * as React from 'react'
import {Switch} from '../switch'

function useToggle() {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

  const getTogglerProps = ({onClick, ...props} = {}) => ({
    'aria-pressed': on,
    onClick: () => {
      toggle()
      if (onClick) onClick()
    },
    ...props,
  })

  return {on, toggle, getTogglerProps}
}

function App() {
  const {on, getTogglerProps} = useToggle()
  return (
    <div>
      <Switch {...getTogglerProps({on})} />
      <hr />
      <button
        {...getTogglerProps({
          'aria-label': 'custom-button',
          onClick: () => console.info('onButtonClick'),
          id: 'custom-button-id',
        })}
      >
        {on ? 'on' : 'off'}
      </button>
    </div>
  )
}

export default App
