var env=require('../../.env.js');
function QuestionPage(){
  'use strict';
  this.url='/question';
  this.get=function(){
    browser.get(env.baseUrl+'/#'+this.url);
  };
  this.makeGuessBtn=element(by.css('.question__btn'));
  this.guessField=element(by.model('guess.value'));
  this.fillGuessField=function(guess){
    this.guessField.sendKeys(guess);
  };
  this.clickSubmitGuessBtn=function(){
    this.makeGuessBtn.click();
  };

}
module.exports=new QuestionPage();
