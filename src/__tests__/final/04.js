import * as React from 'react'
import {renderToggle, screen, userEvent} from '../../../test/utils'
import App from '../../final/04'

test('renders a toggle component', () => {
  const {toggleButton, toggle} = renderToggle(<App />)
  expect(toggleButton).not.toBeChecked()
  toggle()
  expect(toggleButton).toBeChecked()
  toggle()
  expect(toggleButton).not.toBeChecked()
})

test('can also toggle with the custom button', () => {
  const {toggleButton} = renderToggle(<App />)
  expect(toggleButton).not.toBeChecked()
  userEvent.click(screen.getByLabelText('custom-button'))
  expect(toggleButton).toBeChecked()
})
