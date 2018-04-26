import { defineSupportCode } from 'cucumber';
import { assert, expect } from 'chai';
import { browser, element, by } from 'protractor';

// ### CONFIGURATION
defineSupportCode(({ setDefaultTimeout }) => {
  setDefaultTimeout(30000);
});
// ###

defineSupportCode(({ Given, When, Then }) => {

  When('I\'m on angular-docs page', () => {
    return browser.get('/docs');
  });

  Then('I see the logo', () => {
    return element(by.css('[src="assets/images/logos/angular/shield-large.svg"]')).isPresent();
  });
});
