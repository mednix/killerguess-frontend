'use strict';
var questionPage=require('./pages/question.page.js');
var answerPage=require('./pages/answer.page.js');

describe('Module: Guess/Question ', function() {
  beforeEach(function () {
    questionPage.get();
  });

  it('should go to answer page when user submits a guess', function() {
    questionPage.fillGuessField(56);
    questionPage.clickSubmitGuessBtn();
    expect(browser.getLocationAbsUrl()).toMatch(answerPage.url);
  });
});