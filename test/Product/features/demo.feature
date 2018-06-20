Feature: Web Demo

@CancelPending
Scenario: Verify Cancel Pending XML
  Given Policy number is "110801104017001" for "Cancel Pending"
  Then Verify Policy number
  And Verify company name is "Infinity"
