<template>
  <div id="app-projects">      
      <div class="projects__scene" ref="scene">
        <div class="projects__details">
          <div class="projects__details_right">
            <div class="projects__details_slide-dots">
              <span>{{details.slide}}</span>
              <i></i>
              <b>06</b>
            </div>  
          </div>          
          <div class="projects__details_photo">
            <div class="projects__details_photo-img peak" style="background-image: url('./dist/img/projects/4peak.jpg');"></div>
            <div class="projects__details_photo-img reaktivate" style="background-image: url('./dist/img/projects/reaktivate.jpg');"></div>
            <div class="projects__details_photo-img bonex" style="background-image: url('./dist/img/projects/vishegrad.jpg');"></div>
            <div class="projects__details_photo-img medical" style="background-image: url('./dist/img/projects/4peak.jpg');"></div>
            <div class="projects__details_photo-img vishegrad" style="background-image: url('./dist/img/projects/reaktivate.jpg');"></div>
            <div class="projects__details_photo-img floston" style="background-image: url('./dist/img/projects/vishegrad.jpg');"></div>
          </div>
        </div>
        <ul class="projects__list" ref="list">
          <li data-name="peak" data-slide='01'>
            <div class="project__hover-left" @mouseenter="projectHover"></div>
            <div class="project__hover-right" @mouseenter="projectHover"></div>
            <div class="left">            
              <h2>
                <div class="tech">
                  <b>ux</b>
                  <b>ui</b>                  
                </div>
                <span>4peak</span>
              </h2>
            </div>
            <div class="right">
              <h2>                
                <span>4peak</span>
              </h2>
            </div>
          </li>
          <li data-name="reaktivate" data-slide='02'>
            <div class="project__hover-left" @mouseenter="projectHover"></div>
            <div class="project__hover-right" @mouseenter="projectHover"></div>
            <div class="left">
              <h2>
                <div class="tech">
                  <b>ux</b>
                  <b>ui</b>
                  <b>lab</b>
                </div>
                <span>reactivate</span>
              </h2>
            </div>
            <div class="right">
              <h2>
                <span>reactivate</span>
              </h2>
            </div>
          </li>
          <li data-name="bonex" data-slide='03'>  
            <div class="project__hover-left" @mouseenter="projectHover"></div>
            <div class="project__hover-right" @mouseenter="projectHover"></div>          
            <div class="left">
              <h2>
                <div class="tech">                  
                  <b>ui</b>
                  <b>lab</b>
                </div>
                <span>bonex</span>
              </h2>
            </div>
            <div class="right">
              <h2>
                <span>bonex</span>
              </h2>
            </div>
          </li>
          <li data-name="medical" data-slide='04'>
            <div class="project__hover-left" @mouseenter="projectHover"></div>
            <div class="project__hover-right" @mouseenter="projectHover"></div>
            <div class="left">
              <h2>
                <div class="tech">                  
                  <b>ui</b>                  
                </div>
                <span>medical</span>
              </h2>
            </div>
            <div class="right">
              <h2>
                <span>medical</span>
              </h2>
            </div>
          </li>
          <li data-name="vishegrad" data-slide='05'>
            <div class="project__hover-left" @mouseenter="projectHover"></div>
            <div class="project__hover-right" @mouseenter="projectHover"></div>
            <div class="left">
              <h2>
                <div class="tech">                  
                  <b>ui</b>
                  <b>lab</b>
                </div>
                <span>vyshegrad</span>
              </h2>
            </div>
            <div class="right">
              <h2>
                <span>vyshegrad</span>
              </h2>
            </div>
          </li>
          <li data-name="floston" data-slide='06'>
            <div class="project__hover-left" @mouseenter="projectHover"></div>
            <div class="project__hover-right" @mouseenter="projectHover"></div>
            <div class="left">
              <h2>
                <div class="tech">
                  <b>ux</b>                  
                </div>
                <span>floston</span>
              </h2>
            </div>
            <div class="right">
              <h2>
                <span>floston</span>
              </h2>
            </div>
          </li>
        </ul>        
      </div>
  </div>    
</template>

<script>
import resize from 'vue-resize-directive';
import Vue2Scrollbar from './Scroller.vue';
export default {    
  props : ['mouseY'],
  mounted : function () {    
    this.enter();
  },  
  data () {
    return {      
      scrollListPermit : false,
      details : {
        slide : ''        
      }
    }    
  },
  watch : {
    mouseY : function (val, oldVal) {      
      if((val - 120) > 0)this.scrollList(val);        
    }      
  },
  computed : {    
    
  },
  methods : {
    scrollList : function(clientY){
      var app = this;      
      if(app.scrollListPermit){
        var y = clientY - 120;
        var sh = app.$refs.scene.clientHeight;
        var lh = app.$refs.list.clientHeight;
        var cp = 100 / (sh / y);
        var diff = (lh - sh);
        var yDiff = -(diff / 100) * cp;
        TweenMax.to(app.$refs.list, 0.5, {top : yDiff});  
      }      
    },
    projectHover : function(e){
      var app = this;
      if(app.scrollListPermit && e.target.parentNode.className != 'hover'){
        var slide = e.target.parentNode.getAttribute('data-slide');
        var name = '.projects__details_photo .'+e.target.parentNode.getAttribute('data-name');        
        TweenMax.set(document.querySelectorAll('.projects__details_photo-img:not(.current)'), {zIndex : '0'});
        TweenMax.set(document.querySelector('.projects__details_photo .current'), {zIndex : '1'});
        document.querySelectorAll('.projects__details_photo-img').forEach(function(e, i) {          
          e.classList.remove('current');
        });
        document.querySelector(name).classList.add('current');
        if(Number(slide) > Number(app.details.slide)){
          TweenMax.set('.projects__details_photo-img.current', {top : '0', bottom : 'auto'});
        }else{
          TweenMax.set('.projects__details_photo-img.current', {top : 'auto', bottom : '0'});
        }
        TweenMax.fromTo('.projects__details_photo-img.current', 0.5, {height : '0%'}, {height : '100%', ease: Power2.easeOut});

        app.details.slide = slide;
        
        document.querySelectorAll('.projects__list li').forEach(function(el, index) {
          if(el.className == 'hover'){
            TweenMax.to(el.querySelectorAll('.tech b'), 0.3, {x : '-100%', ease: Power4.easeOut});
            TweenMax.to(el.querySelectorAll('span'), 0.3, {left : '0', color : '#000000', opacity : 0.1, ease: Power4.easeOut});
            el.classList.remove('hover');
          }          
        });        
        e.target.parentNode.classList.add('hover');
        TweenMax.to(e.target.parentNode.querySelectorAll('.tech b'), 0.2, {x : '0%', ease: Power2.easeOut});
        TweenMax.to(e.target.parentNode.querySelector('.left span'), 0.2, {left : '6.2vw', color : '#ffffff', opacity : 1, ease: Power2.easeOut});
        TweenMax.to(e.target.parentNode.querySelector('.right span'), 0.2, {left : '6.2vw', color : '#000000', opacity : 1, ease: Power2.easeOut});
      }      
    },
    enter: function () {
      var app = this;
      var silde = document.querySelectorAll('.projects__list li')[0].getAttribute('data-slide');
      document.querySelectorAll('.projects__details_photo-img')[0].classList.add('current');
      app.details.slide = silde;      
      app.$emit('longAnimatePermit', false);
      var l = document.querySelectorAll('.projects__list li:nth-child(odd) span');
      var r = document.querySelectorAll('.projects__list li:nth-child(even) span');
      l.forEach( function(e, i) {
        var x = ((e.parentNode.clientWidth - 140) / 2) - (e.clientWidth / 2);        
        TweenMax.fromTo(e, 1.5, {x : -(e.clientWidth+100)}, {x : x, ease: Power4.easeOut, force3D:true});
      });
      r.forEach( function(e, i) {
        var x = ((e.parentNode.clientWidth - 140) / 2) - (e.clientWidth / 2);        
        TweenMax.fromTo(e, 1.5, {x : e.parentNode.clientWidth}, {x : x, ease: Power4.easeOut, force3D:true});
      });      
      TweenMax.fromTo('.projects__details', 0.7, {x : document.querySelector('.projects__details').clientWidth}, {x : 0, ease: Power4.easeIn, delay : 0.9,});
      TweenMax.to(l, 0.7, {x : 0, ease: Power4.easeIn, delay : 0.9, force3D:true});
      TweenMax.to(r, 0.7, {x : 0, ease: Power4.easeIn, delay : 0.9, force3D:true});

      TweenMax.to(document.querySelectorAll('.projects__list li:not(:first-child) span'), 0.9, {color : '#000000', delay : 1.2, onComplete : function(){
        
        document.querySelector('.projects__list li:first-child').classList.add('hover');
        TweenMax.to(document.querySelector('.projects__details_photo .current'), 0.7, {height : '100%', ease: Power3.easeOut});
        return false;
        TweenMax.to(document.querySelectorAll('.projects__list li:first-child .tech b'), 0.7, {x : '0%', ease: Power2.easeOut});
        TweenMax.to(document.querySelectorAll('.projects__list li:first-child span'), 0.7, {left : '6.2vw', ease: Power2.easeOut});
        TweenMax.to(document.querySelectorAll('.projects__list li:not(:first-child) span'), 0.7, {opacity : 0.1, ease: Power2.easeOut, onComplete : function(){
          app.scrollListPermit = true;
        }});
      }});
    }
  }
}
</script>

<style scope>
#app-projects {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.projects__scene {
  padding: 0;
  margin-top: 120px;  
  height: calc(100vh - 120px);  
}
.projects__list {
  list-style: none;
  margin: 0 -1.7vw 0 -1.7vw;
  padding: 12vw 0 6vw 0;
  position: relative;
}
.projects__list li {
  display: flex;    
  position: relative;
  height: 21.3vw;
  margin-top: -13vw;
}
.project__hover-left {
  position: absolute;
  width: 50%;
  height: 8.2vw;
  left: 0;
  top: 6.95vw;
  transform: rotate(-15deg) skewX(-15deg) translateX(0.9vw);
  z-index: 2;  
}
.project__hover-right {
  position: absolute;
  width: 50%;
  height: 8.2vw;
  right: 0;
  top: 6.95vw;
  transform: rotate(15deg) skewX(15deg) translateX(-0.9vw);
  z-index: 2;  
}
.projects__list li .left {
  width: 50%;
  overflow: hidden;  
  color: #fff;  
  
}
.projects__list li .right {
  width: 50%;
  overflow: hidden;  
  color: #000;
  
}
.projects__list li h2 {
  font-size: 10.7vw;
  margin: 0;
  padding: 0 70px;
  line-height: 8.2vw;
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: -.45vw;
  width: 200%;  
}
.projects__list li h2 span {
  display: inline-block;
  position: relative;
}
.projects__list li .left h2 {  
  transform: rotate(-15deg) skewX(-15deg);
}
.projects__list li .right h2 {
  margin-left: -100%;
  transform: rotate(15deg) skewX(15deg);
}
.projects__list li h2 .tech {
  position: absolute;
  height: 100%;
  left: 70px;
  top: 4px;
  font-size: 3vw;
  line-height: 2.65vw;
  letter-spacing: -1px;
  overflow: hidden;
}
.projects__list li h2 .tech b {
  display: block;  
  transform: translateX(-100%);
}
.projects__details {  
  position: fixed;
  right: 0;
  top: 152px;
  background: #fff;
  width: 70vw;
  height: 33.2vw;
  overflow: hidden;
}
.projects__details_photo {
  width: 59vw;
  height: 100%;
  position: relative;
  overflow: hidden;  
}
.projects__details_photo-img {
  width: 100%;  
  position: absolute;
  overflow: hidden;
  left: 0;
  top: 0;  
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
}
.projects__details_photo-img.current {
  z-index: 2!important;
}
.projects__details_right {
  width: 11vw;
  float: right;
  position: relative;
  height: 100%;
}
.projects__details_photo img {
  width: 100%;
}
.projects__details_slide-dots {
  position: absolute;
  right: 50%;
  top: 50%;
  transform: rotate(-90deg) translate(50%, -50%);
  transform-origin: 100% 0%;
  white-space: nowrap;
}
.projects__details_slide-dots span,
.projects__details_slide-dots b {
  display: inline-block;
  font-size: 10px;
  line-height: 12px;
  vertical-align: middle;
  width: 14px;
  text-align: center;
}
.projects__details_slide-dots i {
  display: inline-block;
  width: 40px;
  height: 1px;
  background-color: #000;
  margin: 0 3px;
  vertical-align: middle;
}
</style>
