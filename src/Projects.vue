<template>
  <div id="app-projects">
      <div class="projects__scene">
        <ul class="projects__list">
          <li>
            <div class="left">
              <h2>
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
            <div class="left">
              <h2>
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
            <div class="left">
              <h2>
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
            <div class="left">
              <h2>
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
            <div class="left">
              <h2>
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
            <div class="left">
              <h2>
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
  mounted : function () {    
    //this.enter();
  },  
  data () {
    return {      
      name : 'хуй',
      name2 : '2 хуя'
    }    
  },
  watch : {
    
  },
  computed : {    
    
  },
  methods : {
    enter: function () {
      var app = this;
      var l = document.querySelectorAll('.projects__list li:nth-child(odd) span');
      var r = document.querySelectorAll('.projects__list li:nth-child(even) span');
      
      TweenMax.fromTo(l, 1.5, {xPercent : 0, left:"-100%", opacity : 0}, {xPercent : -50, left:"50%", opacity : 1, ease: Power4.easeOut});
      TweenMax.fromTo(r, 1.5, {xPercent : 0, left:"100%", opacity : 0}, {xPercent : -50, left:"50%", opacity : 1, ease: Power4.easeOut});
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
  z-index: 2;
  position: relative;  
}
.projects__list {
  list-style: none;
  margin: 0 -1.7vw 0 -1.7vw;
  padding: 7vw 0 6vw 0;
  background: red;
}
.projects__list li {
  display: flex;  
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
</style>
