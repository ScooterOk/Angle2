<template>
  <div id="app-projects">      
      <div class="projects__scene" ref="scene">
        <ul class="projects__list" ref="list">
          <li>
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
          <li>
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
          <li>  
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
          <li>
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
          <li>
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
          <li>
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
        <div class="projects__details"></div>
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
      scrollListPermit : false
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
      app.$emit('longAnimatePermit', false);
      var l = document.querySelectorAll('.projects__list li:nth-child(odd) span');
      var r = document.querySelectorAll('.projects__list li:nth-child(even) span');      
      TweenMax.fromTo(l, 1.5, {xPercent : 0, left:"-100%", opacity : 0}, {x : '-50%', left:"50%", opacity : 1, ease: Power4.easeOut, force3D:true});
      TweenMax.fromTo(r, 1.5, {xPercent : 0, left:"100%", opacity : 0}, {x : '-50%', left:"50%", opacity : 1, ease: Power4.easeOut, force3D:true});
      TweenMax.to(l, 0.7, {xPercent : 0, left:"0", ease: Power4.easeIn, delay : 0.9, force3D:true});
      TweenMax.to(r, 0.7, {xPercent : 0, left:"0", ease: Power4.easeIn, delay : 0.9, force3D:true, onComplete : function(){        
        
      }});
      TweenMax.to(document.querySelectorAll('.projects__list li:not(:first-child) span'), 0.9, {color : '#000000', delay : 1.2, onComplete : function(){
        document.querySelector('.projects__list li:first-child').classList.add('hover');
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
  padding: 7vw 0 6vw 0;
  position: relative;
}
.projects__list li {
  display: flex;    
  position: relative;
}
.project__hover-left {
  position: absolute;
  width: 50%;
  height: 8.2vw;
  left: 0;
  top: 0;
  transform: rotate(-15deg) skewX(-15deg) translateX(0.9vw);
  z-index: 2;  
}
.project__hover-right {
  position: absolute;
  width: 50%;
  height: 8.2vw;
  right: 0;
  top: 0;
  transform: rotate(15deg) skewX(15deg) translateX(-0.9vw);
  z-index: 2;  
}
.projects__list li .left {
  width: 50%;
  overflow: hidden;  
  color: #fff;
  transform: rotate(-15deg) skewX(-15deg) translateX(0.9vw);
  
}
.projects__list li .right {
  width: 50%;
  overflow: hidden;  
  color: #000;
  transform: rotate(15deg) skewX(15deg) translateX(-0.9vw);
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
  
}
.projects__list li .right h2 {
  margin-left: -100%;

}
.projects__list li h2 .tech {
  position: absolute;
  height: 100%;
  left: 70px;
  top: 0;
  font-size: 3vw;
  line-height: 2.4vw;
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
  width: 0;
  height: 0;
}
</style>
