// Compound Components
// 💯 Support non-toggle children
// http://localhost:3000/isolated/exercise/02.extra-1.js

import * as React from 'react'
import {Switch} from '../switch'

// 💬 create a variable for allow children: `const allowedTypes = [ToggleOn, ToggleOff, ToggleButton]`
// 💬 then change the return function: if `allowedTypes.includes(child.type)` return clone element, otherwise return child
function Toggle({children}) {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

  return React.Children.map(children, child =>
    typeof child.type === 'function' // 💬 if type === 'string' return child, otherwise return clone element
      ? React.cloneElement(child, {on, toggle})
      : child,
  )
}

const ToggleOn = ({on, children}) => (on ? children : null)

const ToggleOff = ({on, children}) => (on ? null : children)

const ToggleButton = ({on, toggle}) => <Switch on={on} onClick={toggle} />

function App() {
  return (
    <div>
      <Toggle>
        <ToggleOn>The button is on</ToggleOn>
        <ToggleOff>The button is off</ToggleOff>
        <span>Hello</span>
        <ToggleButton />
      </Toggle>
    </div>
  )
}

export default App
