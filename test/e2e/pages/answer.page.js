var env=require('../../.env.js');
function QuestionPage(){
  'use strict';
  this.get=function(){
    browser.get(env.baseUrl+'/#/answer');
  };
  this.result=element(by.css('.answer__result'));
  this.anotherQuestionBtn=element(by.css('.answer__btn'));

  this.clickAnotherQuestionBtn=function(){
    this.anotherQuestionBtn.click();
  };

}
module.exports=new QuestionPage();
