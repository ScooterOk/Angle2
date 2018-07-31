<template>
  <div id="app-menu" v-resize="onResize" :class="album ? 'album' : ''">
    <div class="menu__bg_left"></div>
    <div class="menu__bg_right"></div>
    <ul class="link__list" ref="list">
      <li v-for="item in rows">
        <div class="left">            
          <h2>            
            <router-link :to="item.url">{{item.title}}</router-link>
          </h2>
        </div>
        <div class="right">
          <h2>
            <router-link :to="item.url">{{item.title}}</router-link>
          </h2>
        </div>            
      </li>          
    </ul>    
    <ul class="menu__social">
      <li class="be">
          <a href="https://www.behance.net/Angle2" target="_blank">
              <svg version="1.1" id="behance-logo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="22px" height="14px" viewBox="0 0 22 14" style="enable-background:new 0 0 22 14;" xml:space="preserve">
              <path class="st0" d="M6.2,0.3c0.6,0,1.2,0.1,1.7,0.2s1,0.3,1.3,0.5c0.4,0.3,0.7,0.6,0.9,1s0.3,0.9,0.3,1.5c0,0.7-0.1,1.2-0.5,1.7C9.7,5.7,9.2,6,8.6,6.3c0.8,0.2,1.4,0.6,1.8,1.2C10.8,8.1,11,8.8,11,9.6c0,0.7-0.1,1.2-0.4,1.7c-0.3,0.5-0.6,0.9-1,1.2S8.7,13,8.1,13.2c-0.6,0.1-1.1,0.2-1.7,0.2H0V0.3H6.2z M5.8,5.6c0.5,0,0.9-0.1,1.3-0.4C7.5,5,7.6,4.6,7.6,4c0-0.3-0.1-0.6-0.2-0.8C7.3,3.1,7.2,2.9,7,2.8C6.8,2.7,6.6,2.6,6.4,2.6S5.9,2.5,5.7,2.5H2.9v3.1H5.8z M6,11.2c0.3,0,0.6,0,0.8-0.1C7.1,11,7.3,11,7.5,10.8c0.2-0.1,0.4-0.3,0.5-0.5c0.1-0.2,0.2-0.5,0.2-0.9C8.1,8.8,8,8.3,7.6,8S6.7,7.6,6.1,7.6H2.9v3.6H6z"/>
              <path class="st0" d="M15.7,11.2c0.4,0.4,1,0.6,1.7,0.6c0.5,0,1-0.1,1.4-0.4c0.4-0.3,0.6-0.6,0.7-0.8h2.3c-0.4,1.1-0.9,2-1.7,2.5c-0.8,0.5-1.7,0.7-2.8,0.7c-0.8,0-1.4-0.1-2-0.4c-0.6-0.2-1.1-0.6-1.5-1s-0.7-1-1-1.6c-0.2-0.6-0.3-1.3-0.3-2s0.1-1.4,0.4-2c0.2-0.6,0.6-1.2,1-1.6c0.4-0.5,0.9-0.8,1.5-1.1s1.3-0.4,2-0.4c0.8,0,1.5,0.2,2.1,0.5s1.1,0.7,1.5,1.3c0.4,0.5,0.7,1.1,0.8,1.8C22,7.9,22,8.6,22,9.3h-6.9C15.1,10.1,15.3,10.8,15.7,11.2z M18.8,6.2c-0.3-0.3-0.8-0.5-1.5-0.5c-0.4,0-0.8,0.1-1,0.2C16,6,15.7,6.2,15.6,6.4c-0.2,0.2-0.3,0.4-0.4,0.7c-0.1,0.2-0.1,0.4-0.1,0.6h4.3C19.3,7,19.1,6.5,18.8,6.2z"/>
              <rect x="14.6" y="1" class="st0" width="5.3" height="1.3"/></svg>
          </a>
      </li>
      <!--li class="dr">
          <a href="">
              <svg version="1.1" id="dribbble" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16" style="enable-background:new 0 0 16 16;" xml:space="preserve">
                  <g>
                      <path class="st0" d="M8,0C3.6,0,0,3.6,0,8s3.6,8,8,8s8-3.6,8-8S12.4,0,8,0z M8,1.4c1.5,0,2.9,0.5,4,1.4c-0.8,1-1.9,1.9-3.3,2.5
                      C8,4,7.3,2.8,6.4,1.6C6.9,1.5,7.4,1.4,8,1.4z M5,2.1c0.9,1.2,1.7,2.4,2.4,3.6C5.8,6.2,3.8,6.4,1.6,6.4C2,4.5,3.3,3,5,2.1z M1.4,8
                      V7.8C4,7.8,6.2,7.5,8,6.9c0.2,0.3,0.3,0.6,0.4,1c-2.2,0.7-4,2.1-5.5,4.3C2,11.1,1.4,9.6,1.4,8z M3.9,13.2c1.3-2.1,3-3.4,5.1-4
                      c0.6,1.6,1.1,3.3,1.4,5C8.1,15,5.7,14.6,3.9,13.2z M11.7,13.5c-0.3-1.6-0.7-3.1-1.3-4.6C11.6,8.7,13,8.8,14.5,9
                      C14.2,10.9,13.2,12.5,11.7,13.5z M9.9,7.6C9.7,7.2,9.5,6.8,9.3,6.5c1.5-0.7,2.8-1.6,3.7-2.7c0.9,1.1,1.5,2.4,1.5,3.9
                      C12.9,7.3,11.3,7.3,9.9,7.6z"/>
                  </g>
              </svg>
          </a>
      </li-->
      <li class="fb">
          <a href="https://www.facebook.com/angle2agency/" target="_blank">            
              <svg version="1.1" id="facebook" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="9px" height="16px" viewBox="0 0 9 16" style="enable-background:new 0 0 9 16;" xml:space="preserve">
                  <g>
                      <path id="f_1_" class="st0" d="M5.7,16V8.7h2.4l0.4-2.8H5.7V4c0-0.8,0.2-1.4,1.4-1.4h1.5V0.1C8.4,0.1,7.5,0,6.5,0
                      C4.3,0,2.8,1.3,2.8,3.8v2.1H0.3v2.8h2.5V16H5.7z"/>
                  </g>
              </svg>
          </a>
      </li>
      <li class="ig">
          <a href="https://www.instagram.com/angle2agency/" target="_blank">
              <svg version="1.1" id="instagram" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16" style="enable-background:new 0 0 16 16;" xml:space="preserve">
                  <g>
                      <defs>
                          <rect id="SVGID_1_" width="16" height="16"/>
                      </defs>
                      <clipPath id="SVGID_2_">
                          <use xlink:href="#SVGID_1_"  style="overflow:visible;"/>
                      </clipPath>
                      <path class="st0" d="M8,1.4c2.1,0,2.4,0,3.2,0c0.8,0,1.2,0.2,1.5,0.3c0.4,0.1,0.6,0.3,0.9,0.6c0.3,0.3,0.5,0.5,0.6,0.9
                      c0.1,0.3,0.2,0.7,0.3,1.5c0,0.8,0,1.1,0,3.2c0,2.1,0,2.4,0,3.2c0,0.8-0.2,1.2-0.3,1.5c-0.1,0.4-0.3,0.6-0.6,0.9
                      c-0.3,0.3-0.5,0.5-0.9,0.6c-0.3,0.1-0.7,0.2-1.5,0.3c-0.8,0-1.1,0-3.2,0c-2.1,0-2.4,0-3.2,0c-0.8,0-1.2-0.2-1.5-0.3
                      c-0.4-0.1-0.6-0.3-0.9-0.6c-0.3-0.3-0.5-0.5-0.6-0.9c-0.1-0.3-0.2-0.7-0.3-1.5c0-0.8,0-1.1,0-3.2c0-2.1,0-2.4,0-3.2
                      c0-0.8,0.2-1.2,0.3-1.5c0.1-0.4,0.3-0.6,0.6-0.9c0.3-0.3,0.5-0.5,0.9-0.6C3.6,1.7,4,1.5,4.8,1.5C5.6,1.4,5.9,1.4,8,1.4 M8,0
                      C5.8,0,5.6,0,4.7,0c-0.9,0-1.4,0.2-1.9,0.4c-0.5,0.2-1,0.5-1.4,0.9C0.9,1.8,0.6,2.2,0.4,2.8C0.2,3.3,0.1,3.9,0,4.7C0,5.6,0,5.8,0,8
                      c0,2.2,0,2.4,0,3.3c0,0.9,0.2,1.4,0.4,1.9c0.2,0.5,0.5,1,0.9,1.4c0.4,0.4,0.9,0.7,1.4,0.9c0.5,0.2,1.1,0.3,1.9,0.4
                      c0.9,0,1.1,0,3.3,0c2.2,0,2.4,0,3.3,0c0.9,0,1.4-0.2,1.9-0.4c0.5-0.2,1-0.5,1.4-0.9c0.4-0.4,0.7-0.9,0.9-1.4
                      c0.2-0.5,0.3-1.1,0.4-1.9c0-0.9,0-1.1,0-3.3c0-2.2,0-2.4,0-3.3c0-0.9-0.2-1.4-0.4-1.9c-0.2-0.5-0.5-1-0.9-1.4
                      c-0.4-0.4-0.9-0.7-1.4-0.9c-0.5-0.2-1.1-0.3-1.9-0.4C10.4,0,10.2,0,8,0"/>
                      <path class="st0" d="M8,3.9C5.7,3.9,3.9,5.7,3.9,8c0,2.3,1.8,4.1,4.1,4.1c2.3,0,4.1-1.8,4.1-4.1C12.1,5.7,10.3,3.9,8,3.9 M8,10.7
                      c-1.5,0-2.7-1.2-2.7-2.7c0-1.5,1.2-2.7,2.7-2.7c1.5,0,2.7,1.2,2.7,2.7C10.7,9.5,9.5,10.7,8,10.7"/>
                      <path class="st0" d="M13.2,3.7c0,0.5-0.4,1-1,1c-0.5,0-1-0.4-1-1c0-0.5,0.4-1,1-1C12.8,2.8,13.2,3.2,13.2,3.7"/>
                  </g>
              </svg>
          </a>
      </li>
  </ul>
  </div>
</template>

<script>
import resize from 'vue-resize-directive';
export default {  
  directives: {
      resize
  },
  mounted : function () {    
    this.show = true;
    this.orientation();
    this.enter();

  },
  destroyed : function(){
    
  },
  data () {
    return {
      rows : [
        {
          title: 'Home',
          url : '/'
        },
        {
          title: 'Process',
          url : '/process'
        },
        {
          title: 'Projects',
          url : '/projects'
        },
        {
          title: 'Contact Us',
          url : '/contacts'
        }
      ],      
      album : false
    }
  },
  watch : {    
    
  },  
  methods : {    
    enter: function () {
      var app = this;      
      TweenMax.set(document.querySelectorAll('.menu__social li'), { y: 35});  
      TweenMax.to(['.menu__bg_left', '.menu__bg_right'], 0.7, {x : '0%', ease: Power3.easeIn, onComplete : function(){
        var l = document.querySelectorAll('#app-menu .link__list li:nth-child(odd) a');
        var r = document.querySelectorAll('#app-menu .link__list li:nth-child(even) a');
        l.forEach( function(e, i) {
          var x = ((e.parentNode.clientWidth - 50) / 2) - (e.clientWidth / 2);        
          TweenMax.fromTo(e, 1.5, {x : -(e.clientWidth+100)}, {x : x, visibility : 'visible', ease: Power4.easeOut});
        });
        r.forEach( function(e, i) {
          var x = ((e.parentNode.clientWidth - 50) / 2) - (e.clientWidth / 2);        
          TweenMax.fromTo(e, 1.5, {x : e.parentNode.clientWidth}, {x : x, visibility : 'visible', ease: Power4.easeOut});
        });
        TweenMax.staggerTo(document.querySelectorAll('#app-menu .link__list .left a'), 0.7, {x : 0, ease: Power4.easeInOut, delay : 0.9}, 0.09);
        TweenMax.staggerTo(document.querySelectorAll('#app-menu .link__list .right a'), 0.7, {x : 0, ease: Power4.easeInOut, delay : 0.9}, 0.09);
        TweenMax.staggerTo(['.menu__social li.be', '.menu__social li.dr', '.menu__social li.fb', '.menu__social li.ig'], 0.3, {y : 0, delay : 0.9}, 0.1);  
      }});      
      
      
      
        /*        
        TweenMax.fromTo([this.$refs.l1, this.$refs.l3], 1.5, {css : {transform : 'rotate(-15deg) skewX(-15deg) translateX(-100vw)', opacity : '0'}}, {opacity : 1, css : {transform : 'rotate(-15deg) skewX(-15deg) translateX(0)', opacity : '1'},ease: Power4.easeOut});
        TweenMax.fromTo([this.$refs.r1, this.$refs.r3], 1.5, {css : {transform : 'rotate(15deg) skewX(15deg) translateX(-100vw)', opacity : '0'}}, {opacity : 1, css : {transform : 'rotate(15deg) skewX(15deg) translateX(0)', opacity : '1'},ease: Power4.easeOut});
        TweenMax.fromTo([this.$refs.l2, this.$refs.l4], 1.5, {css : {transform : 'rotate(-15deg) skewX(-15deg) translateX(100vw)', opacity : '0'}}, {opacity : 1, css : {transform : 'rotate(-15deg) skewX(-15deg) translateX(0)', opacity : '1'},ease: Power4.easeOut});
        TweenMax.fromTo([this.$refs.r2, this.$refs.r4], 1.5, {css : {transform : 'rotate(15deg) skewX(15deg) translateX(100vw)', opacity : '0'}}, {opacity : 1, css : {transform : 'rotate(15deg) skewX(15deg) translateX(0)', opacity : '1'},ease: Power4.easeOut});
        */
    },
    leave: function () {
      var app = this;
      return new Promise(function(resolve, reject) {
        TweenMax.to('.menu__bg_left', 0.7, {x : '-100%', ease: Power3.easeIn});
        TweenMax.to('.menu__bg_right', 0.7, {x : '100%', ease: Power3.easeIn, onComplete : function(){
          resolve();
        }});
        TweenMax.to(document.querySelectorAll('#app-menu .link__list'), 0.7, {opacity : 0});
        TweenMax.to(document.querySelectorAll('#app-menu .menu__social li'), 0.7, {y : 35});
        app.mouseMove = false;        
      });        
    },
    onResize : function(e){      
      var app = this;
      app.orientation();
    },
    orientation: function() {        
      var app = this;
      var w = window.innerWidth;
      var h = window.innerHeight;
      if(w > h){
        app.album = true;          
      }else{
        app.album = false;          
      }
    }
  }
}
</script>

<style scope>
  #app-menu {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9;
  }
  .menu__bg_left {
    width: 50%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    transform: translate(-100%, 0);
    background-color: #2af8eb;
  }
  .menu__bg_right {
    width: 50%;
    height: 100%;
    position: fixed;
    right: 0;
    top: 0;
    transform: translate(100%, 0);
    background-color: #2af8eb;
  }
  .link__list {
  list-style: none;
  margin: 0 -1.7vw 0 -1.7vw;  
  padding-top: calc(12vw + 120px);
  padding-bottom: 6vw;
  padding-left: 0;
  padding-right: 0;
}
.album .link__list {
  padding-top: 16vw;
}
.link__list li {
  display: flex;    
  position: relative;
  height: 22.9vw;
  margin-top: -13vw;
}
.album .link__list li {
  height: 19.8vw;
}
.link__list li .left {
  width: 50%;
  overflow: hidden;  
  color: #fff;
}
.link__list li .left a {
  color: #fff;
}
.link__list li .right {
  width: 50%;
  overflow: hidden;  
  color: #000;  
}
.link__list li .right a {
  color: #000;   
}
.link__list li h2 {
  font-size: 12.7vw;
  margin: 0;
  padding: 0 25px;
  line-height: 10.2vw;
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: -.45vw;
  width: 200%;
  cursor: pointer;
  overflow: hidden;  
  position: relative;
  z-index: 1;
}
.album .link__list li h2 {
  font-size: 8.7vw;
  line-height: 8.2vw;
}
.link__list li h2 a {
  display: inline-block;
  visibility: hidden;
  cursor: default;
}
.link__list li .left h2 {  
  transform: translate3d(0, 0, 0) rotate(-15deg) skewX(-15deg);
}
.link__list li .right h2 {
  margin-left: -100%;
  transform: translate3d(0, 0, 0) rotate(15deg) skewX(15deg);
}
.menu__social {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  position: fixed;
  bottom: 53px;
  left: 50%;
  transform: translate(-50%, 0);
  overflow: hidden;
}
.menu__social li {
  margin-right: 30px;
}
.menu__social li:last-child {
  margin-right: 0;
}


@media screen and (min-width: 1700px) {
 
}
</style>
