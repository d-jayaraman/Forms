Feature: Web Demo

@CancelPending
Scenario: Verify Cancel Pending XML
  Given policy number is "110801104017001" for "Cancel Pending"
  Then verify policy number
  And verify company address
  And verify agency id
  And verify date of notice
  And verify canellation date
  And verify reason for cancellation
  And verify insured person details

  @Reinstate
Scenario: Verify Cancel Pending XML
  Given policy number is "110801104017001" for "Reinstate"
  Then verify Policy number
  And verify Insured person details
  And verify Expiration date
  And verify Effective date
