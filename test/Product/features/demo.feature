Feature: Forms Automation

# @CancelPending
# Scenario: Verify Cancel Pending XML
#   Given policy number is "110801104017001" for "Cancel Pending"
#   Then verify policy number
#   And verify company address
#   And verify agency id
#   And verify date of notice
#   And verify canellation date
#   And verify reason for cancellation
#   And verify insured person details

  @Reinstate
Scenario: Verify Reinstate XML
  Given policy number is "110801104017001" for "Reinstate"
  Then verify policy number
  And verify insured person details
  And Verify name insured
  And verify expiration date
  And verify notice of cancellation previously forwarded effective date

@Reinstate__110791104015001
Scenario: Verify Reinstate XML
  Given policy number is "110791104015001" for "Reinstate"
  Then verify policy number
  And verify insured person details
  And Verify name insured
  And verify expiration date
  And verify notice of cancellation previously forwarded effective date
