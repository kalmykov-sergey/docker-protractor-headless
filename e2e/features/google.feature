# language: en

@Ignore
Feature: Google last news

    Scenario: Should search successfully for last new in google
        Given I'm on google page
        When I input <last news>
        Then I see search results
