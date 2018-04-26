# language: en

@Smoke
Feature: Check angular docs

    Scenario: Docs page should just work
        When I'm on angular-docs page
        Then I see the logo
