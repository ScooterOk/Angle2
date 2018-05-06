<template>
  <div id="app-start">
      <ul class="text">
        <li class="left">
          <div class="text-wrapper">
            <h2 ref="l1">              
                <span>
                  <i>{{row1}}</i>
                </span>
            </h2>
            <h2 ref="l2" class="l2">
              <span class="dash">&mdash;</span>
              <span @mouseenter="spanEnter" class="ux" @mouseleave="spanLeave" @click="activeTabs">
                <i>ux</i>
              </span>
              <span @mouseenter="spanEnter" class="ui" @mouseleave="spanLeave" @click="activeTabs">
                <i>ui</i>
              </span>
              <span @mouseenter="spanEnter" class="lab" @mouseleave="spanLeave" @click="activeTabs">
                <i>lab</i>
              </span>
            </h2>
          </div>
        </li>
        <li class="right">
          <div class="text-wrapper">
            <h2 ref="r1">
              <span>
                  <i>{{row1}}</i>
              </span>
            </h2>
            <h2 ref="r2" class="r2">
              <span class="dash">&mdash;</span>
              <span @mouseenter="spanEnter" class="ux" @mouseleave="spanLeave" @click="activeTabs">
                <i>ux</i>
              </span>
              <span @mouseenter="spanEnter" class="ui" @mouseleave="spanLeave" @click="activeTabs">
                <i>ui</i>
              </span>
              <span @mouseenter="spanEnter" class="lab" @mouseleave="spanLeave" @click="activeTabs">
                <i>lab</i>
              </span>
            </h2>
          </div>
        </li>
      </ul>
      <section class="tab-description">                  
        <div class="tab-description__text">
          <components ref="currentComponent" :msg="tabs.ux.text" :is="currentTab"></components>
        </div>      
        
        <div class="tab-description__link">
          <a href="" v-html="tabLinkText"></a>
          <i class="tab-description__link_border"></i>
        </div>
        <div class="tab-description__close" @click="closeTabs"><i class="l"></i><i class="r"></i></div>
      </section>
  </div>    
</template>

<script>
import Vue2Scrollbar from './Scroller.vue';
export default {
  props : ['mouseX'],
  components: {
      'ux': Vue2Scrollbar
    },
  mounted : function () {    
    this.enter();
  },  
  data () {
    return {
      row1: 'our focus',
      mouseMove : true,
      tabsActive : false,
      tabsanimated : false,
      currentTab : '',
      tabs : {
        current : {
          text : '',
          linkText : '',
          linkHref : ''
        },
        ux : {
          text : 'User Experience (UX) refers to a person\'s emotions and attitudes about using a particular product, system or service. It includes the practical, experiential, affective, meaningful and valuable aspects of human–computer interaction and product ownership. Additionally, it includes a person’s perceptions of system aspects such as utility, ease of use and efficiency. <br/> <br/> User experience may be considered subjective in nature to the degree that it is about individual perception and thought with respect to the system. User experience is dynamic as it is constantly modified over time due to changing usage circumstances and changes to individual systems as well as the wider usage context in which they can be found. In the end user experience is about how the user interacts with and experiences the product.',
          linkText : 'Our UX Presentation',
          linkHref : ''
        }
      }
    }
  },
  watch : {
    mouseX : function (val, oldVal) {
      if(this.mouseMove){
        var rootX = -((window.innerWidth / 2) - val);
        document.querySelectorAll('.text h2').forEach(function(el, i, arr){
          var moveX = 100 / ((window.innerWidth / 2) / rootX);        
          var x = ((window.innerWidth -  el.clientWidth ) / 2) * (moveX/100);

          if(el.parentElement.parentElement.className == 'left'){
            TweenMax.to(el, 1, {
              css : {transform : 'rotate(-15deg) skewX(-15deg) translateX('+x+'px)'}          
            });  
          }else{
            TweenMax.to(el, 1, {
              css : {transform : 'rotate(15deg) skewX(15deg) translateX('+x+'px)'}          
            });
          }        
        });              
      }
    }      
  },
  computed : {
    tabText : function(){
      var text = this.tabs.current.text.split(' ');
      var t = '';
      for(var i in text){
        if(text[i] == '<br/>'){
          t+=text[i];
        }else{
          t += '<span>'+text[i]+'</span>';
          t += ' ';  
        }        
      }
      return t;
    },
    tabLinkText : function(){
      var text = this.tabs.current.linkText;
      var t = '';
      for(var i in text){
        if(text[i] == ' '){
          t += '<span>&nbsp</span>';
        }else{
          t += '<span>'+text[i]+'</span>';          
        }        
      }
      return t;
    }
  },
  methods : {    
    spanEnter : function(e){
      var app = this;      
      var c = e.currentTarget.className;      
      if(app.tabsActive){
        if(!app.tabsanimated){          
          if(app.currentTab != c){
            TweenMax.to('.text span:not(.'+c+')', 0.2, {color : '#292929', ease: Power1.easeIn});
            TweenMax.to('.text span.'+c, 0.2, {color : '#fff', ease: Power1.easeIn});
          }
        }        
      }else{
        if(!app.tabsanimated){
          TweenMax.to(document.querySelectorAll('.text span:not(.'+c+')'), 0.2, {color : '#292929', ease: Power2.easeOut});
        }
      }        
    },
    spanLeave : function(e){
      var app = this;
      var c = e.currentTarget.className;
      if(app.tabsActive){
        if(!app.tabsanimated && app.currentTab != c){
          TweenMax.to(document.querySelectorAll('.text span:not(.'+c+')'), 0.2, {color : '#fff', ease: Power1.easeIn});
          TweenMax.to(document.querySelectorAll('.text span.'+app.currentTab), 0.2, {color : '#2af8eb', ease: Power1.easeIn});  
          TweenMax.to(document.querySelectorAll('.text span.dash'), 0.2, {color : '#2af8eb', ease: Power1.easeIn});  
        }        
      }else{
        if(!app.tabsanimated){
          TweenMax.to(document.querySelectorAll('.text .left span:not(.'+c+')'), 0.2, {color : '#fff', ease: Power1.easeIn});
          TweenMax.to(document.querySelectorAll('.text .right span:not(.'+c+')'), 0.2, {color : '#2af8eb', ease: Power1.easeIn});
        }
      }
      
    },
    activeTabs : function(e){
      var app = this;
      var c = e.currentTarget.classList[0];      
      console.log(app.tabsActive);
      if(app.tabsActive){
        
      }else{
        app.tabsActive = true;        
        app.mouseMove = false;
        app.tabsanimated = true;
        app.currentTab = c;
        app.tabs.current.text = app.tabs[app.currentTab].text;
        app.tabs.current.linkText = app.tabs[app.currentTab].linkText;
        var dash = {
          x : document.querySelector('.text h2 .dash').getClientRects()[0].x,
          y : document.querySelector('.text h2 .dash').getClientRects()[0].y
        };
        var ux = {
          x : document.querySelector('.text h2 .ux').getClientRects()[0].x,
          y : document.querySelector('.text h2 .ux').getClientRects()[0].y
        };
        var ui = {
          x : document.querySelector('.text h2 .ui').getClientRects()[0].x,
          y : document.querySelector('.text h2 .ui').getClientRects()[0].y
        };
        var lab = {
          x : document.querySelector('.text h2 .lab').getClientRects()[0].x,
          y : document.querySelector('.text h2 .lab').getClientRects()[0].y
        };
        TweenMax.to('.g-pager div', 0.3, {x : '-100%', ease: Power4.easeIn});
        TweenMax.to(document.querySelectorAll('.go-tonext span'), 0.3, {y : '100%', ease: Power4.easeIn, onComplete : function(){
          TweenMax.to('.preloader', 0.8, {height : 0, ease: Power4.easeInOut})
        }});
        TweenMax.to(document.querySelectorAll('.text h2 span:not(.'+c+'):not(.dash) i'), 0.3, {y : '100%', ease: Power4.easeIn, onComplete : function(){          
          TweenMax.to(document.querySelectorAll('.text span:not(.'+c+'):not(.dash)'), 0.25, {color : '#fff'});
          TweenMax.to('.text h2 .dash', 0.8, {css : {transform : 'translateX(-'+(dash.x - 70)+'px)'}, ease: Power2.easeInOut, onComplete : function(){        
          var m;
          if(c == 'ui'){
            m = window.innerWidth * 0.085;
          }else if(c == 'lab'){
            m = window.innerWidth * 0.17;
          }else{
            m = 0;
          }           
          TweenMax.to(this.target, 0.4, {y: -(dash.y - 175 - m), ease: Power4.easeInOut, onComplete : function(){
            app.tabsanimated = false;            
            TweenMax.set('.tab-description', {display : 'block'});
            TweenMax.staggerFromTo(document.querySelectorAll('.tab-description__text span'), 0.4, {opacity : 0, x : -150,  y:300, scale : 0, rotationY: 45, rotationZ:45, transformOrigin : '0 50% 0'}, {opacity : 1, x : 0,  y:0, scale : 1, rotationY: 0, rotationZ:0, transformOrigin : '0 50% 0', ease: Power2.easeOut}, 0.005);
            TweenMax.set(['.tab-description__link_border', '.process .tab-description__close i.l', '.process .tab-description__close i.r'], {left : 0, right : 'auto'});
            TweenMax.fromTo(['.tab-description__link_border', '.process .tab-description__close i.l', '.process .tab-description__close i.r'], 0.7, {width : '0'}, {width : '100%', ease: Power4.easeIn, onComplete : function(){
              TweenMax.to('.process .tab-description__close i.l', 0.4, {rotationZ : 45, ease: Power3.easeIn});              
              TweenMax.to('.process .tab-description__close i.r', 0.4, {rotationZ : -45, ease: Power3.easeIn});
            }});
            TweenMax.staggerFromTo(document.querySelectorAll('.tab-description__link span'), 0.15, {opacity : 0,  y:150, scale : 0, rotationY: 45, rotationZ:-45}, {opacity : 1,  y:0, scale : 1, rotationY: 0, rotationZ:0, ease: Power3.easeInOut}, 0.03);
          }});
          TweenMax.staggerTo(['.text .ux i', '.text .ui i', '.text .lab i'], 0.3, {y : '0%', ease: Power4.easeOut, delay : 0.4}, 0.1);
        }});
        TweenMax.to('.text h2 .ux', 0.8, {css : {transform : 'translateX(-'+(ux.x - 70 - (window.innerWidth * 0.12))+'px)'}, ease: Power4.easeInOut, onComplete : function(){
          TweenMax.to(this.target, 0.4, {y: -(dash.y - 175), ease: Power4.easeInOut})
        }});
        TweenMax.to('.text h2 .ui', 0.8, {css : {transform : 'translateX(-'+(ui.x - 70 - (window.innerWidth * 0.11))+'px)'}, ease: Power4.easeInOut, onComplete : function(){
          TweenMax.to(this.target, 0.4, {y: -(dash.y - 175 - (window.innerWidth * 0.085)), ease: Power4.easeInOut})
        }});
        TweenMax.to('.text h2 .lab', 0.8, {css : {transform : 'translateX(-'+(lab.x - 70 - (window.innerWidth * 0.11))+'px)'}, ease: Power4.easeInOut, onComplete : function(){
          TweenMax.to(this.target, 0.4, {y: -(dash.y - 175 - (window.innerWidth * 0.17)), ease: Power4.easeInOut})
        }});
        }});
        TweenMax.to(['.text .dash', '.text h2 .'+c], 0.15, {color : '#2af8eb'});
      }      
    },
    closeTabs : function(){
      var app = this;
      app.tabsanimated = true;      
      TweenMax.to(document.querySelectorAll('.process .tab-description__close i'), 0.4, {rotationZ : 0, ease: Power3.easeInOut, onComplete : function(){
        var t = document.querySelectorAll('.tab-description__text span');
        t = Array.prototype.slice.call(t, 0);
        TweenMax.staggerTo(t.reverse(), 0.4, {opacity : 0, x : 300,  scale : 0, rotationY: 45, rotationZ:45, transformOrigin : '0 50% 0', ease: Power2.easeOut}, 0.005);        
        TweenMax.set(document.querySelectorAll('.process .tab-description__close i'), {right : 0, left : 'auto'});
        TweenMax.set('.process .tab-description__link_border', {right : 0, left : 'auto'});
        TweenMax.to(document.querySelectorAll('.process .tab-description__close i'), 0.6, {width : '0%', ease: Power3.easeInOut})
        TweenMax.to('.process .tab-description__link_border', 0.4, {width : '0%', ease: Power4.easeIn});        
        TweenMax.staggerTo(document.querySelectorAll('.tab-description__link span'), 0.15, {opacity : 0,  y:150, scale : 0, rotationY: 45, rotationZ:-45, ease: Power1.easeOut}, 0.03);
        t = document.querySelectorAll('.text h2.l2 span:not(.'+app.currentTab+'):not(.dash) i, .text h2.r2 span:not(.'+app.currentTab+'):not(.dash) i');        
        t = Array.prototype.slice.call(t, 0);
        TweenMax.staggerTo(t.reverse(), 0.2, {y : '-100%', ease: Power4.easeIn}, 0.1);
        TweenMax.to(document.querySelectorAll('.text h2 span'), 0.4, {y: 0, ease: Power4.easeInOut, delay : 0.5, onComplete : function(){
          TweenMax.to(document.querySelectorAll('.text h2 span'), 0.8, {css : {transform : 'translateX(0px)'}, ease: Power2.easeInOut, onComplete : function(){              
            TweenMax.set(document.querySelectorAll('.text .left span'), {color : '#fff', ease: Power1.easeInOut});
            TweenMax.set(document.querySelectorAll('.text .right span'), {color : '#2af8eb', ease: Power1.easeInOut});
            TweenMax.to(document.querySelectorAll('.text h2 span i'), 0.3, {y : '0%', ease: Power3.easeInOut, onComplete : function(){
              TweenMax.set('.tab-description', {display : 'none'});
              app.mouseMove = true;
              app.tabsActive = false;
              app.tabsanimated = false;
            }});      
          }});
        }})

      }});      

      /*
      TweenMax.to(document.querySelectorAll('.text h2 span:not(.'+app.currentTab+'):not(.dash) i'), 0.3, {y : '100%', ease: Power3.easeIn, onComplete : function(){          
        TweenMax.to(document.querySelectorAll('.text h2 span'), 0.4, {y: 0, ease: Power4.easeIn, onComplete : function(){
          TweenMax.to(document.querySelectorAll('.text h2 span'), 0.8, {css : {transform : 'translateX(0px)'}, ease: Power2.easeIn, onComplete : function(){              
            TweenMax.set(document.querySelectorAll('.text .left span'), {color : '#fff', ease: Power1.easeIn});
            TweenMax.set(document.querySelectorAll('.text .right span'), {color : '#2af8eb', ease: Power1.easeIn});
            TweenMax.to(document.querySelectorAll('.text h2 span i'), 0.3, {y : '0%', ease: Power3.easeIn, onComplete : function(){                
              app.tabsActive = false;
              app.tabsanimated = false;
            }});      
          }});
        }})
      }});
      */
    },
    enter: function () {
      console.log(this);
        var app = this; 
        app.$refs.l2.style.textAlign = 'right';
        app.$refs.r2.style.textAlign = 'right';
        TweenMax.fromTo([this.$refs.l1, this.$refs.l3], 0.9, {css : {transform : 'rotate(-15deg) skewX(-15deg) translateX(-100vw)', opacity : '0'}}, {opacity : 1, css : {transform : 'rotate(-15deg) skewX(-15deg) translateX(0)', opacity : '1'},ease: Power3.easeOut});
        TweenMax.fromTo([this.$refs.r1, this.$refs.r3], 0.9, {css : {transform : 'rotate(15deg) skewX(15deg) translateX(-100vw)', opacity : '0'}}, {opacity : 1, css : {transform : 'rotate(15deg) skewX(15deg) translateX(0)', opacity : '1'},ease: Power3.easeOut});
        TweenMax.fromTo([this.$refs.l2, this.$refs.l4], 0.9, {css : {transform : 'rotate(-15deg) skewX(-15deg) translateX(100vw)', opacity : '0'}}, {opacity : 1, css : {transform : 'rotate(-15deg) skewX(-15deg) translateX(0)', opacity : '1'},ease: Power3.easeOut});
        TweenMax.fromTo([this.$refs.r2, this.$refs.r4], 0.98, {css : {transform : 'rotate(15deg) skewX(15deg) translateX(100vw)', opacity : '0'}}, {opacity : 1, css : {transform : 'rotate(15deg) skewX(15deg) translateX(0)', opacity : '1'},ease: Power3.easeOut});
    },
    leave: function () {
        this.mouseMove = false;
        TweenMax.to([this.$refs.l1, this.$refs.l3], 2, {css : {transform : 'rotate(-15deg) skewX(-15deg) translateX(-100vw)'},ease: Power3.easeOut});        
        TweenMax.to([this.$refs.r1, this.$refs.r3], 2, {css : {transform : 'rotate(15deg) skewX(15deg) translateX(-100vw)'},ease: Power3.easeOut});
        TweenMax.to([this.$refs.l2, this.$refs.l4], 2, {css : {transform : 'rotate(-15deg) skewX(-15deg) translateX(100vw)'},ease: Power3.easeOut});
        TweenMax.to([this.$refs.r2, this.$refs.r4], 2, {css : {transform : 'rotate(15deg) skewX(15deg) translateX(100vw)'},ease: Power3.easeOut});
    }    
  }
}
</script>

<style scope>
.process .text {
  z-index: 2;  
}
.process .text li .text-wrapper {
  padding: 12vw 0 0 0;
}
.process .text-wrapper h2 {  
  transition: color 250ms ease;
  width: 85%;  
  padding-left: 0;
  padding-right: 0; 
  margin-bottom: 6vw;
}
.process .text-wrapper h2 span {  
  margin-right: 2.5vw;
  display: inline-block;
  overflow: hidden;
}
.process .text-wrapper h2 span i {
  font-style: normal;
  display: inline-block;
  padding: 0 5px;
}
.process .text span.ux,
.process .text span.ui,
.process .text span.lab {
  cursor: pointer;
}
.process .text-wrapper h2 span:last-child {
  margin-right: 0;
}
.process .text li.left .text-wrapper h2 {
    color: #fff;    
}
.process .text li.right .text-wrapper h2 {
    color: #2af8eb;    
}
.process .span-hover .text li.left .text-wrapper h2 {
    color: #292929;    
}
.process  .span-hover .text li.right .text-wrapper h2 {
    color: #292929;    
}
.process .text li.left .text-wrapper h2 .current {
    color: #fff;
}
.process .text li.right .text-wrapper h2 .current {
    color: #2af8eb;
}
.process .tab-description {
    position: fixed;
    top: 200px;
    left: 50%;
    width: calc(100vw / 2 - 140px);    
    z-index: 3;
    
}
.process .tab-description__text {
    font-size: 18px;
    line-height: 30px;
    color: #bababa;
    perspective: 400px;
    max-height: calc(100vh - 200px - 130px);
    overflow: auto;
}
.process .tab-description__text span {
  display: inline-block;
}
.process .tab-description__link {
  position: fixed;
  bottom: 63px;

}
.process .tab-description__link a {
  font-size: 18px;
  line-height: 30px;
  color: #fff;
  display: inline-block;
  overflow: hidden;
}
.process .tab-description__link_border {
  display: block;
  height: 1px;
  width: 100%;
  background-color: #90f8eb;
  position: absolute;
  left: 0;  
  bottom: 0;
}
.process .tab-description__link a span {
  display: inline-block;
}
.process .tab-description__close {
  width: 42px;
  height: 42px;  
  position: fixed;
  top: 165px;
  right: 70px;
  cursor: pointer;
}
.process .tab-description__close i {
  display: block;
  height: 1px;
  width: 42px;
  background-color: #fff;
  position: absolute;
  left: 0px;
  top: 50%;
}
</style>
