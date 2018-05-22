# language: en

Feature: Check angular docs

    @Smoke
    Scenario: Docs page should just work
        When I'm on angular-docs page
        Then I see the logo
