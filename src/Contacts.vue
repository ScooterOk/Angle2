<template>
  <div id="app-contacts" v-resize="onResize">
      <ul class="contacts__title">
        <li>
          <div class="left">
            <h1>
              <span v-html="title"></span>
            </h1>
          </div>
          <div class="right">
            <h1>
              <span v-html="title"></span>
            </h1>
          </div>            
        </li>          
      </ul>
      <article class="contacts__wrapper">
        <div class="contacts__wrapper_side">
          <ul class="contacts__wrapper_side-list">
            <li>
              <h2>
                <span>Our phone</span>
              </h2>
              <div class="contacts__wrapper_side-info">
                <span>+380 63 349 6219</span>
              </div>
            </li>
            <li>
              <h2>
                <span>>Our email</span>
                </h2>
              <div class="contacts__wrapper_side-info">
                <span>hi@angle2.com</span>
              </div>
            </li>
            <li>
              <h2>
                <span>Our skype</span>
              </h2>
              <div class="contacts__wrapper_side-info">
                <span>lazey.lazey</span>
              </div>
            </li>
          </ul>
        </div>
        <div class="contacts__wrapper_side form">
          <div class="contacts__from-name">
            <div class="contacts__from-input">
              <label>
                <span>Your name</span>
              </label>
              <input type="text" name="name">
              <i></i>
            </div>            
          </div>
          <div class="contacts__from-mail">
            <div class="contacts__from-input">
              <label>
                <span>Your e-mail</span>
              </label>
              <input type="text" name="name">
              <i></i>
            </div>            
          </div>
          <div class="contacts__from-message">
            <label>
              <span>Type your message</span>
            </label>
            <textarea></textarea>
            <i></i>
          </div>
          <div class="contacts__from-send">            
            <button>
              <div>
                <span>Send</span>
              </div>
            </button>
            <i></i>
          </div>
        </div>
      </article>
  </div>    
</template>

<script>
import resize from 'vue-resize-directive';
export default {    
  props : ['cursor'],
  directives: {
    resize
  },
  computed : {    
    
  },  
  mounted : function () {      
    this.enter();    
  },
  data () {
    return {      
      initDone : false,
      title : 'Let\'s meet'
    }    
  },  
  watch : {
    
  },  
  methods : {    
    
    
    
    
    
    
    onResize : function(e){
      var app = this;
      
    },
    enter: function () {
      var app = this; 
      app.$emit('longAnimatePermit', false);      
      TweenMax.set(document.querySelectorAll(['.contacts__wrapper_side-list h2 span', '.contacts__wrapper_side-info span', '.contacts__from-send button span']), {y : '100%'});
      TweenMax.set(document.querySelectorAll(['.contacts__from-name label', '.contacts__from-mail label', '.contacts__from-message label']), {opacity : 0});
      var t = document.querySelector('.contacts__title h1 span');      
      TweenMax.fromTo(document.querySelectorAll('.contacts__title h1 span'), 1.5, {x : -(t.clientWidth+100)}, {x : 0, ease: Power4.easeOut, onComplete : function(){
        TweenMax.staggerTo(document.querySelectorAll(['.contacts__wrapper_side-list li h2 span', '.contacts__wrapper_side-info span']), 0.3, {y : '0%', ease: Power3.easeOut}, 0.1, formInit);
        function formInit(){
          TweenMax.to(document.querySelectorAll(['.contacts__from-name i', '.contacts__from-mail i', '.contacts__from-message i']), 0.5, {width : '100%', onComplete : function(){
            TweenMax.to(document.querySelectorAll(['.contacts__from-name label', '.contacts__from-mail label', '.contacts__from-message label']), 0.5, {opacity : 1, onComplete : function(){

            }});            
          }})
          TweenMax.to('.contacts__from-send i', 0.5, {width : '100%', onComplete : function(){
            TweenMax.to('.contacts__from-send button span', 0.5, {y : '0%'});
          }});
        }
      }});      
    },
    leave: function () {
      
    }
  }
}
</script>

<style scope>
#app-contacts {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.contacts__title {
  list-style: none;
  margin: 0 -1.7vw 0 -1.7vw;
  padding-top: 120px;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
}
.contacts__title li {
  display: flex;
  position: relative;
  height: 21.3vw;  
}
.contacts__title li .left {
  width: 50%;
  overflow: hidden;
  color: #2af8eb;
}
.contacts__title li .right {
  width: 50%;
  overflow: hidden;
  color: #000;
}
.contacts__title li h1 {
  font-size: 10.7vw;
  margin: 0;
  padding: 0 70px;
  line-height: 8.2vw;
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: -.45vw;
  width: 200%;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  z-index: 1;
}
.contacts__title li .left h1 {
  transform: translate3d(0, 0, 0) rotate(-15deg) skewX(-15deg);
}
.contacts__title li .right h1 {
  margin-left: -100%;
  transform: translate3d(0, 0, 0) rotate(15deg) skewX(15deg);
}
.contacts__title li h1 span {
  display: inline-block;
}
.contacts__wrapper {
  display: flex;
  margin: 0 70px;
  align-items: flex-start;
}
.contacts__wrapper_side {
  width: 50%;
  display: flex;
  flex-wrap: wrap;
}
.contacts__wrapper_side.form {  
  justify-content: space-between;
}
.contacts__wrapper_side-list {
  list-style: none;
  margin: 0 0 0 auto;
  padding: 0;
  width: 50%;
}
.contacts__wrapper_side-list li {
  margin-bottom: 40px;
}
.contacts__wrapper_side-list li h2 {
  font-size: 10px;
  line-height: 1;
  margin: 0 0 12px 0;
  padding: 0;
  font-weight: normal;
  overflow: hidden;
}
.contacts__wrapper_side-list li h2 span {
  display: inline-block;
}
.contacts__wrapper_side-info {
  font-size: 18px;
  line-height: 1;
  font-weight: 300;
  overflow: hidden;
}
.contacts__wrapper_side-info span {
  display: inline-block;
}
.contacts__from-input {
  position: relative;
}
.contacts__from-name {
  width: 50%;
  padding-right: 1.73vw;  
}
.contacts__from-name input {
  width: 100%;
  border: none;
  background: transparent;
  position: relative;
  z-index: 2;
  outline: none;
  height: 45px;
  font-size: 18px;
  line-height: 45px;
  font-weight: 300;
  color: #000;
}
.contacts__from-name label {
  display: block;
  font-size: 18px;
  line-height: 1;
  font-weight: 300; 
  color: #979797;
  overflow: hidden;
  position: absolute;
  top: 13px;
  left: 0;
  z-index: 1;  
}
.contacts__from-name label span {
  display: inline-block;
}
.contacts__from-name i {
  display: block;
  height: 1px;
  width: 0%;
  background: #000;
  position: absolute;
  left: 0;
  bottom: 0;
}
.contacts__from-mail {
  width: 50%;
  padding-left: 1.73vw;  
}
.contacts__from-mail input {
  width: 100%;
  border: none;
  background: transparent;
  position: relative;
  z-index: 2;
  outline: none;
  height: 45px;
  font-size: 18px;
  line-height: 45px;
  font-weight: 300;
  color: #000;
}
.contacts__from-mail label {
  display: block;
  font-size: 18px;
  line-height: 1;
  font-weight: 300; 
  color: #979797;
  overflow: hidden;
  position: absolute;
  top: 13px;
  left: 0;
  z-index: 1;  
}
.contacts__from-mail label span {
  display: inline-block;
}
.contacts__from-mail i {
  display: block;
  height: 1px;
  width: 0%;
  background: #000;
  position: absolute;
  left: 0;
  bottom: 0;
}
.contacts__from-message {
  width: 83%;
  margin-top: 35px;
  position: relative; 
  height: 45px; 
}
.contacts__from-message label {
  display: block;
  font-size: 18px;
  line-height: 1;
  font-weight: 300; 
  color: #979797;
  overflow: hidden;
  position: absolute;
  top: 13px;
  left: 0;
  z-index: 1; 
}
.contacts__from-message label span {
  display: inline-block;
}
.contacts__from-message textarea {
  background: transparent;
  padding: 0;
  font-size: 18px;
  line-height: 45px;
  font-weight: 300;
  color: #000;
  width: 100%;  
  resize: none;
  border: none;
  height: 100%;
  outline: none;
  position: relative;
  z-index: 2;
}
.contacts__from-message i {
  display: block;
  height: 1px;
  width: 0%;
  background: #000;
  position: absolute;
  left: 0;
  bottom: 0;
}
.contacts__from-send {
  align-self: flex-end;
  position: relative;
}
.contacts__from-send button {
  width: 45px;
  height: 45px;
  background: none;
  border: none;  
  color: #000;
  padding: 0;
  text-align: center;
}
.contacts__from-send button div {
  font-size: 18px;
  line-height: 1;
  font-weight: 300;
  overflow: hidden;
}
.contacts__from-send button span {
  display: inline-block;
}
.contacts__from-send i {
  display: block;
  height: 1px;
  width: 0%;
  background: #2af8eb;
  position: absolute;
  left: 0;
  bottom: 0;
}
</style>
