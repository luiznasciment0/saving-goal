describe('Saving Goal', () => {
  it('Should allow only numbers in money input', () => {
    cy.visit('/')

    cy.get('[data-cy=money-input]').type('teste').should('have.value', '')
  })

  it('Should format currency', () => {
    cy.visit('/')

    cy.get('[data-cy=money-input]')
      .type('100000')
      .should('have.value', '1,000.00')
  })

  it('Should not allow to navigate to a date before the minimum date', () => {
    cy.visit('/')

    cy.get('[data-cy=button-left]').click()

    cy.get('[data-cy=date-values]').contains('March2021')
  })

  it('Should calculate monthly amount correctly', () => {
    cy.visit('/')

    cy.get('[data-cy=money-input]')
      .type('100000')
      .should('have.value', '1,000.00')

    cy.get('[data-cy=button-right]').click()

    cy.get('[data-cy=date-values]').contains('April2021')

    cy.get('[data-cy=monthly-amount]').contains('$500.00')

    cy.get('[data-cy=monthly-amount-details]').contains(
      'You’re planning 2 monthly deposits to reach your $1,000.00 goal by April 2021.'
    )

    cy.get('[data-cy=button-right]').click()

    cy.get('[data-cy=date-values]').contains('May2021')

    cy.get('[data-cy=monthly-amount]').contains('$333.33')

    cy.get('[data-cy=monthly-amount-details]').contains(
      'You’re planning 3 monthly deposits to reach your $1,000.00 goal by May 2021.'
    )

    cy.get('[data-cy=button-left]').click()

    cy.get('[data-cy=date-values]').contains('April2021')

    cy.get('[data-cy=monthly-amount]').contains('$500.00')

    cy.get('[data-cy=monthly-amount-details]').contains(
      'You’re planning 2 monthly deposits to reach your $1,000.00 goal by April 2021.'
    )
  })
})
