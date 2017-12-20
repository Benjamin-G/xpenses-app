import React from 'react'
import { shallow } from 'enzyme'

import { LoginPage } from '../../components/LoginPage'

let startGoogleLogin, startFacebookLogin , wrapper

beforeEach(() => {
  startGoogleLogin = jest.fn()
  startFacebookLogin = jest.fn()
  wrapper = shallow(<LoginPage startGoogleLogin={startGoogleLogin} startFacebookLogin={startFacebookLogin} />)
})

test('should render Login Page correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should call startGoogleLogin on button click', () => {
  wrapper.findWhere(ele => ele.type() === 'button' && ele.contains('Login with Google')).simulate('click')
  expect(startGoogleLogin).toHaveBeenCalled()
})

test('should call startFacebookLogin on button click', () => {
  wrapper.findWhere(ele => ele.type() === 'button' && ele.contains('Login with Facebook')).simulate('click')
  expect(startFacebookLogin).toHaveBeenCalled()
})