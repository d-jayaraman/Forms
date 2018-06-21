Feature: Web Demo

@CancelPending
Scenario: Verify Cancel Pending XML
  Given Policy number is "110801104017001" for "Cancel Pending"
  Then Verify Policy number
  And Verify company address
  And Verify Agency ID
  And Verify Date of Notice
  And Verify canellation date
  And Verify reason for cancellation
  And Verify Insured person details
