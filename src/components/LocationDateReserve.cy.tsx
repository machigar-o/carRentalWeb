import React from 'react'
import LocationDateReserve from './LocationDateReserve'

describe('<LocationDateReserve />', () => {

  let testObj:{dateHandler:Function, locationHandler:Function}

  beforeEach(()=>{
    testObj = {
      dateHandler: ()=>{},
      locationHandler: ()=>{}
    } 
    cy.spy(testObj, 'locationHandler').as("locationSpy")
  })

  it('Shoud select correct location', () => {
    cy.mount(<LocationDateReserve onDateChange={testObj.dateHandler} 
      onLocationChange={testObj.locationHandler}/>)
    cy.get('#location').parent().click().get('ul > li[data-value="CNX"]').click();
    cy.get("@locationSpy").should('be.calledOnce')
    cy.get("@locationSpy").should('be.calledWith', 'CNX')
  })
})