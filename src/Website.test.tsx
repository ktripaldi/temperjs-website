import React from 'react'
import { render, RenderResult } from '@testing-library/react'
import Website from './Website'

describe('Forecast Result index page', () => {
  let component: RenderResult
  beforeEach(() => {
    component = render(<Website />)
  })

  it('should match the snapshot', () => {
    expect(component.asFragment()).toMatchSnapshot()
  })
})
