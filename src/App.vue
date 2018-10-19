<template>
    <div id="app" @mousemove="cursorRing" @touchstart="touchmove" @touchmove="touchmove" @touchend="touchmove" :class="global.page" @mousedown="longClick" @mouseup="longClick" @mousewheel="mousewheel">
        <div class="mobile-coming">
          <div>
            <img src="./assets/img/short_logo_white.svg" alt="">
            <h5>coming soon</h5>            
          </div>
        </div>
        <svg class="cursor-ring" width="60" height="60" @mouseenter="cursorRingHover">
            <circle class="progress-ring__circle" stroke="white" stroke-width="1" fill="transparent" r="24" cx="30" cy="30"/>
        </svg>
        <mobile-menu ref="menu" v-if="menu"></mobile-menu>
        <div class="preloader">
            <div>
              <span>{{preloaderPercent}}%</span>  
            </div>            
        </div>
        <header :class="menu ? 'menu':''">
            <div class="logo" @mouseenter="hoverLinks" @mouseleave="hoverLinks">
                <router-link to="/">
                  <svg version="1.1" id="logo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                     width="126px" height="21px" viewBox="0 0 126 21" style="enable-background:new 0 0 126 21;" xml:space="preserve">                  
                  <g>
                    <path class="st0" d="M41.4,0.4h6l0,20.2h-6l-9-10.8v10.8h-6.1V0.4h6.3l8.8,10.5L41.4,0.4z"/>
                    <path class="st0" d="M63.8,10.5h5.7l0,7.9c-1.1,0.8-2.5,1.4-4.2,1.9c-1.7,0.5-3.2,0.7-4.6,0.7c-2.1,0-4-0.5-5.6-1.4
                      c-1.7-0.9-3-2.2-3.9-3.8c-0.9-1.6-1.4-3.4-1.4-5.4c0-2,0.5-3.8,1.5-5.4c1-1.6,2.3-2.8,4-3.7S58.9,0,61.1,0c1.6,0,3.1,0.3,4.7,0.9
                      c1.6,0.6,2.9,1.3,4,2.3L66,7.7c-0.7-0.7-1.5-1.2-2.4-1.6c-0.9-0.4-1.8-0.6-2.6-0.6c-0.8,0-1.6,0.2-2.3,0.6c-0.7,0.4-1.2,1-1.6,1.8
                      c-0.4,0.7-0.6,1.6-0.6,2.5c0,1,0.2,1.8,0.6,2.6c0.4,0.8,0.9,1.3,1.6,1.8c0.7,0.4,1.5,0.6,2.3,0.6c0.7,0,1.6-0.2,2.6-0.7L63.8,10.5z
                      "/>
                    <path class="st0" d="M72.1,0.4h6.7V15h8.4v5.6H72.1V0.4z"/>
                    <path class="st0" d="M89.4,0.4h17.1v5.1H96.1v2.5h9.4V13h-9.4v2.5h10.7v5.1H89.4V0.4z"/>
                  </g>
                  <polygon class="st0" points="23.2,20.3 23.2,0.3 17.1,0.3 16.9,0.3 0,20.3 8.1,20.3 16.4,10.4 16.4,20.3 "/>
                  <path class="st0" d="M121.4,14.9l2.7-3.2c1.2-1.4,1.8-2.8,1.8-4.6c0-2.2-1-3.7-1.9-4.6C122.6,1,120.2,0,117.2,0
                    c-2.8,0-5.5,1-7.1,2.7c-1.1,1.2-1.8,3.1-1.9,5.2h7.1c0.1-0.5,0.2-1,0.4-1.3c0.2-0.2,0.6-0.6,1.3-0.6c0.5,0,0.9,0.1,1.2,0.4
                    c0.3,0.3,0.5,0.7,0.5,1.1c0,1.1-0.6,2-1.2,2.8L109,20.5h17v-5.7H121.4z"/>
                  </svg>
                </router-link>
            </div>
            <nav>
                <div class="process" @mouseenter="hoverLinks" @mouseleave="hoverLinks">
                    <router-link to="/process">Process</router-link>
                </div>
                <div class="projects" @mouseenter="hoverLinks" @mouseleave="hoverLinks">
                    <router-link to="/projects">Projects</router-link>
                </div>
                <div class="contact" @mouseenter="hoverLinks" @mouseleave="hoverLinks">
                  <router-link to="/contacts">Contact Us</router-link>
                </div>                
            </nav>
            <!--div class="lng" @mouseenter="hoverLinks" @mouseleave="hoverLinks">
              <a href="">Ukr</a>
            </div-->
            <div class="menu">
              <span @click="menuShow">{{menuText}}</span>
            </div>
        </header>
        <!-- <h1 style="position: fixed; top: 30px;">{{alpha}}</h1>
        <h1 style="position: fixed; top: 60px;">{{beta}}</h1>
        <h1 style="position: fixed; top: 90px;">{{gammaa}}</h1>
        <h1 style="position: fixed; top: 120px;">{{gamma}}</h1>-->
        <component ref="currentComponent" :is="global.currentComponent" :mobile="mobile" :gamma="gamma" :mouseX="global.mouseX" :mouseY="global.mouseY" :cursor="cursor" :resize="resize" :touch="global.touch" @longAnimatePermit="cursor.longAnimatePermit = $event" @scroll="scroll = $event"></component>
        <div class="g-pager">
          <div>
            <span>{{global.pager}}</span><b>04</b>
          </div>            
        </div>
        <div class="go-tonext" ref="goTonext">
          <div class="go-tonext__wrapper">
            <div>
              <span data-next="" @click="clickNext" @mouseenter="hoverLinks($event);hoverNext($event)" @mouseleave="hoverLinks($event);hoverNext($event)">go play</span>
            </div>
            <div>
              <span data-next="" @click="clickNext" @mouseenter="hoverLinks($event);hoverNext($event)" @mouseleave="hoverLinks($event);hoverNext($event)">outside</span>
            </div> 
          </div>                    
        </div>
        <div class="main-bg" ref="mainBg"></div>
        <div class="dda" ref="dda">            
          <div>
            <span>digital</span>
          </div>
          <div>
            <span>design</span>
          </div>
          <div>
            <span>agency</span>
          </div>          
        </div>
        <div class="follow-us">
            <div class="follow-us_title">
              <span>Follow Us</span>
            </div>
            <ul class="clearfix">
                <li class="be" @mouseenter="hoverLinks" @mouseleave="hoverLinks">
                    <a href="https://www.behance.net/Angle2" target="_blank">
                        <svg version="1.1" id="behance-logo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="22px" height="14px" viewBox="0 0 22 14" style="enable-background:new 0 0 22 14;" xml:space="preserve">
                        <path class="st0" d="M6.2,0.3c0.6,0,1.2,0.1,1.7,0.2s1,0.3,1.3,0.5c0.4,0.3,0.7,0.6,0.9,1s0.3,0.9,0.3,1.5c0,0.7-0.1,1.2-0.5,1.7C9.7,5.7,9.2,6,8.6,6.3c0.8,0.2,1.4,0.6,1.8,1.2C10.8,8.1,11,8.8,11,9.6c0,0.7-0.1,1.2-0.4,1.7c-0.3,0.5-0.6,0.9-1,1.2S8.7,13,8.1,13.2c-0.6,0.1-1.1,0.2-1.7,0.2H0V0.3H6.2z M5.8,5.6c0.5,0,0.9-0.1,1.3-0.4C7.5,5,7.6,4.6,7.6,4c0-0.3-0.1-0.6-0.2-0.8C7.3,3.1,7.2,2.9,7,2.8C6.8,2.7,6.6,2.6,6.4,2.6S5.9,2.5,5.7,2.5H2.9v3.1H5.8z M6,11.2c0.3,0,0.6,0,0.8-0.1C7.1,11,7.3,11,7.5,10.8c0.2-0.1,0.4-0.3,0.5-0.5c0.1-0.2,0.2-0.5,0.2-0.9C8.1,8.8,8,8.3,7.6,8S6.7,7.6,6.1,7.6H2.9v3.6H6z"/>
                        <path class="st0" d="M15.7,11.2c0.4,0.4,1,0.6,1.7,0.6c0.5,0,1-0.1,1.4-0.4c0.4-0.3,0.6-0.6,0.7-0.8h2.3c-0.4,1.1-0.9,2-1.7,2.5c-0.8,0.5-1.7,0.7-2.8,0.7c-0.8,0-1.4-0.1-2-0.4c-0.6-0.2-1.1-0.6-1.5-1s-0.7-1-1-1.6c-0.2-0.6-0.3-1.3-0.3-2s0.1-1.4,0.4-2c0.2-0.6,0.6-1.2,1-1.6c0.4-0.5,0.9-0.8,1.5-1.1s1.3-0.4,2-0.4c0.8,0,1.5,0.2,2.1,0.5s1.1,0.7,1.5,1.3c0.4,0.5,0.7,1.1,0.8,1.8C22,7.9,22,8.6,22,9.3h-6.9C15.1,10.1,15.3,10.8,15.7,11.2z M18.8,6.2c-0.3-0.3-0.8-0.5-1.5-0.5c-0.4,0-0.8,0.1-1,0.2C16,6,15.7,6.2,15.6,6.4c-0.2,0.2-0.3,0.4-0.4,0.7c-0.1,0.2-0.1,0.4-0.1,0.6h4.3C19.3,7,19.1,6.5,18.8,6.2z"/>
                        <rect x="14.6" y="1" class="st0" width="5.3" height="1.3"/></svg>
                    </a>
                </li>
                <!--li class="dr" @mouseenter="hoverLinks" @mouseleave="hoverLinks">
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
                <li class="fb" @mouseenter="hoverLinks" @mouseleave="hoverLinks">
                    <a href="https://www.facebook.com/angle2agency/" target="_blank">            
                        <svg version="1.1" id="facebook" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="9px" height="16px" viewBox="0 0 9 16" style="enable-background:new 0 0 9 16;" xml:space="preserve">
                            <g>
                                <path id="f_1_" class="st0" d="M5.7,16V8.7h2.4l0.4-2.8H5.7V4c0-0.8,0.2-1.4,1.4-1.4h1.5V0.1C8.4,0.1,7.5,0,6.5,0
                                C4.3,0,2.8,1.3,2.8,3.8v2.1H0.3v2.8h2.5V16H5.7z"/>
                            </g>
                        </svg>
                    </a>
                </li>
                <li class="ig" @mouseenter="hoverLinks" @mouseleave="hoverLinks">
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
    </div>    
</template>

<script>
import Menu from './Menu.vue';
import Start from './Start.vue';
import Process from './Process.vue';
import Projects from './Projects.vue';
import Contacts from './Contacts.vue';
export default {
    name: 'app',  
    mounted : function () {
      var app = this;      
      if(window.DeviceOrientationEvent){
        window.addEventListener("deviceorientation", function(e){          
          app.alpha = e.alpha;
          app.beta = e.beta;
          app.gammaa = e.gamma;
          var w = window.innerWidth;
          var h = window.innerHeight;          
          if(w > h){
            if(window.orientation == 90){
              if(e.gamma < 0){
                if(e.beta < -45){
                  app.gamma = -45
                }else if(e.beta > 45){
                  app.gamma = 45
                }else{
                  app.gamma = e.beta;
                }
              }else{
                if(e.beta < 0){
                  if(e.beta > -135){
                    app.gamma = -45
                  }else{
                    app.gamma = -(e.beta + 180);
                  }  
                }else{
                  if(e.beta < 135){
                    app.gamma = 45
                  }else{
                    app.gamma = 180 - e.beta;
                  }  
                }              
              }
            }else if(window.orientation == -90){
              if(e.gamma > 0){
                if(e.beta > 45){
                  app.gamma = -45
                }else if(e.beta < -45){
                  app.gamma = 45
                }else{
                  app.gamma = -(e.beta);
                }
              }else{
                if(e.beta > 0){
                  if(e.beta < 135){
                    app.gamma = -45
                  }else{
                    app.gamma = e.beta - 180;
                  }  
                }else{
                  if(e.beta > -135){
                    app.gamma = 45
                  }else{
                    app.gamma = e.beta + 180;
                  }  
                }              
              }
            }
          }else{
            if(e.beta < 90){
              if(e.gamma < -45){
                app.gamma = -45
              }else if(e.gamma > 45){
                app.gamma = 45
              }else{
                app.gamma = e.gamma;
              }
            }else{
              if(e.gamma < -45){
                app.gamma = +45
              }else if(e.gamma > 45){
                app.gamma = -45
              }else{
                app.gamma = -e.gamma;
              }
            }
            
          }          
        }, true);
      }
      window.addEventListener("resize", app.onResize, false);
      this.init();
    },  
    components : {
      'mobile-menu' : Menu,
      'home' : Start,
      'process' : Process,
      'projects' : Projects,
      'contacts' : Contacts
    },    
    computed: {
        preloaderPercent: function() {
            return this.preloaderNumber.toFixed(0);
        }
    },
    methods : {
        init : function(e){
            var app = this;            
            console.log(app);
            if(window.innerWidth <= 800)app.mobile = true;
            app.resize.w = window.innerWidth;
            app.resize.h = window.innerHeight;
            TweenMax.set(['.logo', document.querySelectorAll('nav div'), 'header .lng', 'header .menu span', document.querySelectorAll('.follow-us li')], { y: 35});
            TweenMax.set('.follow-us_title span', { y: 10});
            TweenMax.set('.g-pager div', { x: -35});
            TweenMax.set(['header', '.g-pager', '.follow-us'], {opacity : 1});
            TweenMax.set('.cursor-ring', {x : (window.innerWidth / 2) - 30, y : (window.innerHeight / 2) -30});
            TweenMax.set([app.$refs.dda.querySelectorAll('span'), app.$refs.goTonext.querySelectorAll('span')], {css : {'letter-spacing': app.mobile ? '10px' : '20px', 'transition-timing-function' : 'cubic-bezier(0.895, 0.03, 0.685, 0.22)'}});
            TweenMax.set([app.$refs.dda.querySelectorAll('span'), app.$refs.goTonext.querySelectorAll('span')], {y : 12, opacity : 1});
            TweenMax.to('.preloader', 1.3, { height: '50%', ease: Power1.easeOut, onComplete : function(){
                TweenMax.to('.cursor-ring circle', 0.7, {css : {'stroke-dashoffset':'0'}, onComplete : function(){
                  app.cursor.initDone = true;
                  TweenMax.to(app.$data, 1.3, { preloaderNumber : 100, ease: Power1.easeOut});                            
                  TweenMax.to([app.$refs.dda.querySelectorAll('span'), app.$refs.goTonext.querySelectorAll('span')], 1, {y : 0, ease: Power1.easeOut});
                  TweenMax.to('.preloader', 1.3, { height: '100%', ease: Power1.easeOut, onComplete : function(){                    
                    var name = app.$route.name;
                    switch (name) {
                      case 'home':
                        app.home();
                        app.cursor.color = '#b6b6b6';
                        app.cursor.hoverColor = '#2af8eb';
                        break;
                      case 'process':
                        app.process();
                        app.cursor.color = '#b6b6b6';
                        app.cursor.hoverColor = '#2af8eb';
                        break;
                        case 'projects':
                        app.projects();
                        app.cursor.color = '#b6b6b6';
                        app.cursor.hoverColor = '#ffffff';
                        break;
                        case 'contacts':
                        app.contacts();
                        app.cursor.color = '#b6b6b6';
                        app.cursor.hoverColor = '#2af8eb';
                        break;
                      default:
                        // statements_def
                        break;
                    }                     
                    /*
                    TweenMax.to('.preloader span', 1.3, {y : 50});
                    app.global.currentComponent = 'home';
                    TweenMax.set([app.$refs.dda.querySelectorAll('span'), app.$refs.goTonext.querySelectorAll('span')], {css : {'letter-spacing': '0px', 'transition-timing-function': 'cubic-bezier(0.23, 1, 0.32, 1)'}});
                    TweenMax.to('.preloader', 1.3, {height: 90, y : -70, ease: Power3.easeOut, onComplete : function(){
                      TweenMax.to('.g-pager div', 0.4, {x : 0});
                      TweenMax.to('.logo', 0.4, {y : 0});
                      TweenMax.to('.follow-us_title span', 0.4, {y : 0, onComplete : function(){
                        TweenMax.staggerTo(['header .process', 'header .projects', 'header .contact', 'header .lng'], 0.3, {y : 0}, 0.1);
                        TweenMax.staggerTo(['.follow-us li.be', '.follow-us li.dr', '.follow-us li.fb', '.follow-us li.ig'], 0.3, {y : 0}, 0.1);  
                      }});
                    }});
                    */
                  }});
                }});
            }});
            TweenMax.to(app.$data, 1.3, { preloaderNumber : 50, ease: Power1.easeOut});
        },
        home : function(){
          var app = this;
          app.transitionPage = true;
          if(app.initDone){  
            if(app.mobile && app.menu){
                TweenMax.to('#app-menu', 0.7, {opacity : 0, onComplete : function(){
                  app.menu = false;
                  TweenMax.set('header .menu', {clearProps : 'color'});
                }});                
                TweenMax.to('header .menu span', 0.7, {y : 35, onComplete : function(){
                  app.menuText = 'Menu';
                  TweenMax.to('header .menu span', 0.7, {y : 0});
                }});
                TweenMax.to(document.querySelectorAll('.process header .logo #logo .st0, .process #behance-logo .st0, .process #dribbble .st0, .process #facebook .st0, .process #instagram .st0'), 0.7, {fill : '#000000'});
              }
            this.$refs.currentComponent.leave().then(function(){
              TweenMax.set(app.$refs.mainBg, {backgroundColor : '#ffffff', height : '100%', width : 0, x : 0});
              TweenMax.set([app.$refs.dda.querySelectorAll('span'), app.$refs.goTonext.querySelectorAll('span')], {css : {'letter-spacing': (app.mobile ? '10px' : '20px'), 'transition-timing-function' : 'cubic-bezier(0.505, 0.000, 0.735, 0.425)'}});
              TweenMax.to('.preloader', 0.7, {y : 0, height : '100%', ease: Power3.easeIn, onComplete : function(){
                TweenMax.to(app.$refs.mainBg, 0.7, {width : '100%', ease: Power3.easeIn});
                TweenMax.to(app.$refs.mainBg, 0.7, {css : {transform : 'translateX(-50vw)'}, ease: Power3.easeIn});              
                TweenMax.to('.preloader', 0.7, {backgroundColor : '#000000', ease: Power3.easeIn, onComplete : function(){
                  TweenMax.set(app.$el, {backgroundColor : '#ffffff'});
                  TweenMax.set(app.$refs.mainBg, {backgroundColor : 'transparent', width : 0, height : 0});
                  TweenMax.set([app.$refs.dda.querySelectorAll('span'), app.$refs.goTonext.querySelectorAll('span')], {css : {'letter-spacing': '0px', 'transition-timing-function': 'cubic-bezier(0.23, 1, 0.32, 1)'}});
                  TweenMax.to('.preloader', 0.7, {height: (app.mobile ? 60 : 90), y : (app.mobile ? -50 : -70), ease: Power3.easeOut});
                  app.global.currentComponent = 'home';
                  app.global.page = 'home';
                  app.global.pager = '01';
                  app.transitionPage = false;
                  app.cursor.hoverActive = false;
                  app.scroll = true;
                }});            
              }}); 
            });              
          }else{
            TweenMax.to('.preloader span', 1.3, {y : 50});
            app.global.currentComponent = 'home';
            app.global.page = 'home';
            TweenMax.set([app.$refs.dda.querySelectorAll('span'), app.$refs.goTonext.querySelectorAll('span')], {css : {'letter-spacing': '0px', 'transition-timing-function': 'cubic-bezier(0.23, 1, 0.32, 1)'}});
            TweenMax.to('.preloader', 1.3, {height: (app.mobile ? 60 : 90), y : (app.mobile ? -50 : -70), ease: Power3.easeOut, onComplete : function(){
              TweenMax.to('.g-pager div', 0.4, {x : 0});
              TweenMax.to('.logo', 0.4, {y : 0});
              TweenMax.to('.follow-us_title span', 0.4, {y : 0, onComplete : function(){
                  TweenMax.to('header .menu span', 0.3, {y : 0});
                  TweenMax.staggerTo(['header .process', 'header .projects', 'header .contact', 'header .lng'], 0.3, {y : 0}, 0.1);                
                TweenMax.staggerTo(['.follow-us li.be', '.follow-us li.dr', '.follow-us li.fb', '.follow-us li.ig'], 0.3, {y : 0}, 0.1);  
                app.initDone = true;
                app.transitionPage = false;
                app.scroll = true;
              }});
            }});
          }          
        },
        process : function(){
          var app = this;
          app.transitionPage = true;
          if(app.initDone){
            TweenMax.set(app.$refs.mainBg, {backgroundColor : '#000000', height : '100%', width : 0, x : 0});
            if(app.cursor.longAnimateDone){
              TweenMax.to(app.$refs.mainBg, 0.7, {width : '100%', ease: Power3.easeIn});
              TweenMax.to(app.$refs.mainBg, 0.7, {css : {transform : 'translateX(-50vw)'}, ease: Power3.easeIn});
              app.global.page = 'process';
              TweenMax.to('.preloader', 0.7, {backgroundColor : '#ffffff', ease: Power3.easeIn, onComplete : function(){
                TweenMax.set(app.$el, {backgroundColor : '#000000'});
                TweenMax.set(app.$refs.mainBg, {backgroundColor : 'transparent'});
                TweenMax.set([app.$refs.dda.querySelectorAll('span'), app.$refs.goTonext.querySelectorAll('span')], {css : {'letter-spacing': '0px', 'transition-timing-function': 'cubic-bezier(0.23, 1, 0.32, 1)'}});
                TweenMax.to('.preloader', 0.7, {height: (app.mobile ? 60 : 90), y : (app.mobile ? -50 : -70), ease: Power3.easeOut});
                app.global.currentComponent = 'process';
                app.global.pager = '02';
                app.transitionPage = false;
                app.scroll = true;
                app.cursor.longAnimateDone = false;
                TweenMax.to('.progress-ring__circle', 0.6, {strokeDashoffset : 0, stroke : app.cursor.color, ease: Power2.easeIn, onComplete : function(){                  
                  TweenMax.to('.cursor-ring', 0.2, {scale : 1});
                }});
              }});
            }else{
              if(app.mobile && app.menu){
                TweenMax.to('#app-menu', 0.7, {opacity : 0, onComplete : function(){
                  app.menu = false;
                  TweenMax.set('header .menu', {clearProps : 'color'});
                }});                
                TweenMax.to('header .menu span', 0.7, {y : 35, onComplete : function(){
                  app.menuText = 'Menu';
                  TweenMax.to('header .menu span', 0.7, {y : 0});
                }});
                TweenMax.to(document.querySelectorAll('.process header .logo #logo .st0, .process #behance-logo .st0, .process #dribbble .st0, .process #facebook .st0, .process #instagram .st0'), 0.7, {fill : '#ffffff'});
              }
              this.$refs.currentComponent.leave().then(function(){                
                TweenMax.set([app.$refs.dda.querySelectorAll('span'), app.$refs.goTonext.querySelectorAll('span')], {css : {'letter-spacing': (app.mobile ? '10px' : '20px'), 'transition-timing-function' : 'cubic-bezier(0.505, 0.000, 0.735, 0.425)'}});
                TweenMax.to('.preloader', 0.7, {y : 0, height : '100%', ease: Power3.easeIn, onComplete : function(){
                  TweenMax.to(app.$refs.mainBg, 0.7, {width : '100%', ease: Power3.easeIn});
                  TweenMax.to(app.$refs.mainBg, 0.7, {css : {transform : 'translateX(-50vw)'}, ease: Power3.easeIn});                  
                  TweenMax.to('.preloader', 0.7, {backgroundColor : '#ffffff', ease: Power3.easeIn, onComplete : function(){
                    TweenMax.set(app.$el, {backgroundColor : '#000000'});
                    TweenMax.set(app.$refs.mainBg, {backgroundColor : 'transparent'});
                    TweenMax.set([app.$refs.dda.querySelectorAll('span'), app.$refs.goTonext.querySelectorAll('span')], {css : {'letter-spacing': '0px', 'transition-timing-function': 'cubic-bezier(0.23, 1, 0.32, 1)'}});
                    TweenMax.to('.preloader', 0.7, {height: (app.mobile ? 60 : 90), y : (app.mobile ? -50 : -70), ease: Power3.easeOut});                    
                    app.global.currentComponent = 'process';
                    app.global.page = 'process';
                    app.global.pager = '02';
                    app.transitionPage = false;
                    app.scroll = true;
                  }});
                }});
              });              
            }            
          }else{
            TweenMax.set(app.$refs.mainBg, {backgroundColor : '#000000', height : '100%', width : 0, x : 0});
            TweenMax.to('.preloader span', 1.3, {y : 50});            
            TweenMax.to(app.$refs.mainBg, 0.7, {width : '100%', ease: Power3.easeIn});
            TweenMax.to(app.$refs.mainBg, 0.7, {css : {transform : 'translateX(-50vw)'}, ease: Power3.easeIn});            
            TweenMax.to('.preloader', 0.7, {backgroundColor : '#ffffff', ease: Power3.easeIn, onComplete : function(){
              TweenMax.set(app.$el, {backgroundColor : '#000000'});
              TweenMax.set(app.$refs.mainBg, {backgroundColor : 'transparent', width : 0, height : 0});
              TweenMax.set([app.$refs.dda.querySelectorAll('span'), app.$refs.goTonext.querySelectorAll('span')], {css : {'letter-spacing': '0px', 'transition-timing-function': 'cubic-bezier(0.23, 1, 0.32, 1)'}});
              TweenMax.to('.preloader', 0.7, {height: (app.mobile ? 60 : 90), y : (app.mobile ? -50 : -70), ease: Power3.easeOut, onComplete : function(){
                TweenMax.to('.g-pager div', 0.4, {x : 0});
                TweenMax.to('.logo', 0.4, {y : 0});
                TweenMax.to('.follow-us_title span', 0.4, {y : 0, onComplete : function(){
                  TweenMax.to('header .menu span', 0.3, {y : 0});
                  TweenMax.staggerTo(['header .process', 'header .projects', 'header .contact', 'header .lng'], 0.3, {y : 0}, 0.1);
                  TweenMax.staggerTo(['.follow-us li.be', '.follow-us li.dr', '.follow-us li.fb', '.follow-us li.ig'], 0.3, {y : 0}, 0.1);  
                  app.initDone = true;
                }});
              }});
              app.global.currentComponent = 'process';
              app.global.page = 'process';
              app.global.pager = '02';
              app.transitionPage = false;
              app.scroll = true;
            }});
          }          
        },
        projects : function(){
          var app = this;
          app.transitionPage = true;
          TweenMax.set(app.$refs.mainBg, {backgroundColor : '#2af8eb', height : '100%', width : 0, x : 0});
          if(app.initDone){
            if(app.cursor.longAnimateDone){
              TweenMax.to('.preloader span', 1.3, {y : 50});
              TweenMax.to(app.$refs.mainBg, 0.7, {width : '100%', ease: Power3.easeIn, onComplete : function(){
                app.global.currentComponent = 'projects';
              }});
              TweenMax.to(app.$refs.mainBg, 0.7, {css : {transform : 'translateX(-50vw)'}, ease: Power3.easeIn});
              TweenMax.to(app.$refs.goTonext.querySelectorAll('span'), 0.4, {y : 13, delay : 0.4});
              app.global.page = 'projects';
              TweenMax.to('.preloader', 0.7, {backgroundColor : '#000', ease: Power3.easeIn, onComplete : function(){
                TweenMax.set(app.$el, {backgroundColor : '#2af8eb'});
                TweenMax.set(app.$refs.mainBg, {backgroundColor : 'transparent', width : 0, height : 0});
                TweenMax.set(app.$refs.dda.querySelectorAll('span'), {css : {'letter-spacing': '0px', 'transition-timing-function': 'cubic-bezier(0.23, 1, 0.32, 1)'}});              
                TweenMax.to('.preloader', 0.7, {height: 0, y : 0, ease: Power3.easeOut, onComplete : function(){
                  TweenMax.to('.g-pager div', 0.4, {x : 0});
                  TweenMax.to('.logo', 0.4, {y : 0});
                  TweenMax.to('.follow-us_title span', 0.4, {y : 0, onComplete : function(){                  
                    TweenMax.to('header .menu span', 0.3, {y : 0});
                    TweenMax.staggerTo(['header .process', 'header .projects', 'header .contact', 'header .lng'], 0.3, {y : 0}, 0.1);
                    TweenMax.staggerTo(['.follow-us li.be', '.follow-us li.dr', '.follow-us li.fb', '.follow-us li.ig'], 0.3, {y : 0}, 0.1);  
                    app.initDone = true;
                  }});
                }});              
                app.global.pager = '03';
                app.transitionPage = false;
                app.cursor.longAnimateDone = false;
                TweenMax.to('.progress-ring__circle', 0.6, {strokeDashoffset : 0, stroke : app.cursor.color, ease: Power2.easeIn, onComplete : function(){                  
                  TweenMax.to('.cursor-ring', 0.2, {scale : 1});
                }});
              }});
            }else{
              if(app.mobile && app.menu){
                TweenMax.to('#app-menu', 0.7, {opacity : 0, onComplete : function(){
                  app.menu = false;
                  TweenMax.set('header .menu', {clearProps : 'color'});
                }});                
                TweenMax.to('header .menu span', 0.7, {y : 35, onComplete : function(){
                  app.menuText = 'Menu';
                  TweenMax.to('header .menu span', 0.7, {y : 0});
                }});
                TweenMax.to(document.querySelectorAll('.process header .logo #logo .st0, .process #behance-logo .st0, .process #dribbble .st0, .process #facebook .st0, .process #instagram .st0'), 0.7, {fill : '#ffffff'});
              }
              this.$refs.currentComponent.leave().then(function(){
                TweenMax.set([app.$refs.dda.querySelectorAll('span'), app.$refs.goTonext.querySelectorAll('span')], {css : {'letter-spacing': (app.mobile ? '10px' : '20px'), 'transition-timing-function' : 'cubic-bezier(0.505, 0.000, 0.735, 0.425)'}});
                TweenMax.to('.preloader', 0.7, {y : 0, height : '100%', ease: Power3.easeIn, onComplete : function(){
                  TweenMax.to(app.$refs.goTonext.querySelectorAll('span'), 0.4, {y : 13, delay : 0.4});
                  TweenMax.to(app.$refs.mainBg, 0.7, {width : '100%', ease: Power3.easeIn});
                  TweenMax.to(app.$refs.mainBg, 0.7, {css : {transform : 'translateX(-50vw)'}, ease: Power3.easeIn});
                  TweenMax.to('.preloader', 0.7, {backgroundColor : '#000000', ease: Power3.easeIn, onComplete : function(){
                    app.global.page = 'projects';
                    TweenMax.set(app.$el, {backgroundColor : '#2af8eb'});
                    TweenMax.set(app.$refs.mainBg, {backgroundColor : 'transparent', width : 0, height : 0});
                    TweenMax.set([app.$refs.dda.querySelectorAll('span'), app.$refs.goTonext.querySelectorAll('span')], {css : {'letter-spacing': '0px', 'transition-timing-function': 'cubic-bezier(0.23, 1, 0.32, 1)'}});
                    TweenMax.to('.preloader', 0.7, {height: 0, y : 0, ease: Power3.easeOut});
                    app.global.currentComponent = 'projects';
                    app.global.pager = '03';
                    app.transitionPage = false;
                    app.scroll = true;
                  }});
                }});
              });
            }
          }else{
            TweenMax.to('.preloader span', 1.3, {y : 50});            
            TweenMax.to(app.$refs.mainBg, 0.7, {width : '100%', ease: Power3.easeIn, onComplete : function(){
              app.global.currentComponent = 'projects';
            }});
            TweenMax.to(app.$refs.mainBg, 0.7, {css : {transform : 'translateX(-50vw)'}, ease: Power3.easeIn});
            TweenMax.to(app.$refs.goTonext.querySelectorAll('span'), 0.4, {y : 13, delay : 0.4});
            app.global.page = 'projects';
            TweenMax.to('.preloader', 0.7, {backgroundColor : '#000', ease: Power3.easeIn, onComplete : function(){
              TweenMax.set(app.$el, {backgroundColor : '#2af8eb'});
              TweenMax.set(app.$refs.mainBg, {backgroundColor : 'transparent', width : 0, height : 0});
              TweenMax.set(app.$refs.dda.querySelectorAll('span'), {css : {'letter-spacing': '0px', 'transition-timing-function': 'cubic-bezier(0.23, 1, 0.32, 1)'}});              
              TweenMax.to('.preloader', 0.7, {height: 0, y : 0, ease: Power3.easeOut, onComplete : function(){
                TweenMax.to('.g-pager div', 0.4, {x : 0});
                TweenMax.to('.logo', 0.4, {y : 0});
                TweenMax.to('.follow-us_title span', 0.4, {y : 0, onComplete : function(){                  
                  TweenMax.to('header .menu span', 0.3, {y : 0});
                  TweenMax.staggerTo(['header .process', 'header .projects', 'header .contact', 'header .lng'], 0.3, {y : 0}, 0.1);
                  TweenMax.staggerTo(['.follow-us li.be', '.follow-us li.dr', '.follow-us li.fb', '.follow-us li.ig'], 0.3, {y : 0}, 0.1);  
                  app.initDone = true;
                }});
              }});              
              app.global.pager = '03';
              app.transitionPage = false;
            }});
          }
        },
        contacts : function(){
          var app = this;
          app.transitionPage = true;
          TweenMax.set(app.$refs.mainBg, {backgroundColor : '#ffffff', height : '100%', width : 0, x : 0});
          if(app.initDone){
            if(app.mobile && app.menu){
              TweenMax.to('#app-menu', 0.7, {opacity : 0, onComplete : function(){
                app.menu = false;
                TweenMax.set('header .menu', {clearProps : 'color'});
              }});                
              TweenMax.to('header .menu span', 0.7, {y : 35, onComplete : function(){
                app.menuText = 'Menu';
                TweenMax.to('header .menu span', 0.7, {y : 0});
              }});
              TweenMax.to(document.querySelectorAll('.process header .logo #logo .st0, .process #behance-logo .st0, .process #dribbble .st0, .process #facebook .st0, .process #instagram .st0'), 0.7, {fill : '#ffffff'});
            }
            this.$refs.currentComponent.leave().then(function(){
              TweenMax.set([app.$refs.dda.querySelectorAll('span'), app.$refs.goTonext.querySelectorAll('span')], {css : {'letter-spacing': (app.mobile ? '10px' : '20px'), 'transition-timing-function' : 'cubic-bezier(0.505, 0.000, 0.735, 0.425)'}});
              TweenMax.to('.preloader', 0.7, {y : 0, height : '100%', ease: Power3.easeIn, onComplete : function(){
                TweenMax.to(app.$refs.goTonext.querySelectorAll('span'), 0.4, {y : 13, delay : 0.4});
                TweenMax.to(app.$refs.mainBg, 0.7, {width : '100%', ease: Power3.easeIn});
                TweenMax.to(app.$refs.mainBg, 0.7, {css : {transform : 'translateX(-50vw)'}, ease: Power3.easeIn});
                TweenMax.to('.preloader', 0.7, {backgroundColor : '#000000', ease: Power3.easeIn, onComplete : function(){
                  app.global.page = 'contacts';
                  TweenMax.set(app.$el, {backgroundColor : '#ffffff'});
                  TweenMax.set(app.$refs.mainBg, {backgroundColor : 'transparent', width : 0, height : 0});
                  var portrait = (window.innerWidth < window.innerHeight);                              
                  TweenMax.to(document.querySelectorAll(['.dda span']), 0.4, {y : 13});                  
                  TweenMax.to('.preloader', 0.7, {height: 0, y : 0, ease: Power3.easeOut});
                  app.global.currentComponent = 'contacts';
                  app.global.pager = '04';
                  app.transitionPage = false;
                  app.scroll = false;
                }});
              }});
            });
          }else{           
            TweenMax.to('.preloader span', 1.3, {y : 50});
            app.global.currentComponent = 'contacts';            
            
            //TweenMax.to(app.$refs.goTonext.querySelectorAll('span'), 0.4, {y : 13, delay : 0.4});
            app.global.page = 'contacts';            
            TweenMax.set(app.$el, {backgroundColor : '#ffffff'});
            TweenMax.set(app.$refs.mainBg, {backgroundColor : 'transparent', width : 0, height : 0});
            var portrait = (window.innerWidth < window.innerHeight);                        
            TweenMax.to(document.querySelectorAll(['.dda span']), 0.4, {y : 13});            
            TweenMax.to(app.$refs.goTonext.querySelectorAll('span'), 0.4, {y : 13});
            TweenMax.to('.preloader', 1.3, {height: 0, y : 0, ease: Power3.easeOut, onComplete : function(){
              TweenMax.to('.g-pager div', 0.4, {x : 0});
              TweenMax.to('.logo', 0.4, {y : 0});
              TweenMax.to('.follow-us_title span', 0.4, {y : 0, onComplete : function(){
                TweenMax.to('header .menu span', 0.3, {y : 0});
                TweenMax.staggerTo(['header .process', 'header .projects', 'header .contact', 'header .lng'], 0.3, {y : 0}, 0.1);
                TweenMax.staggerTo(['.follow-us li.be', '.follow-us li.dr', '.follow-us li.fb', '.follow-us li.ig'], 0.3, {y : 0}, 0.1);  
                app.initDone = true;
              }});
            }});              
            app.global.pager = '04';
            app.transitionPage = false; 
            app.scroll = false;           
          }
        },
        touchmove : function(e){
          var app = this;
          if(e.type == 'touchmove')e.preventDefault();
          if(!app.global.touch){
            app.global.touch = true;
            TweenMax.to('.progress-ring__circle', 0.7, {strokeDashoffset : 150.796});
          }
        },
        cursorRing : function(e){
          var app = this;          
          this.global.mouseX = e.pageX;
          this.global.mouseY = e.pageY;
          if(this.cursor.initDone && !app.global.touch){
            TweenMax.to('.cursor-ring', 0.5, {x : (e.clientX - 30), y : (e.clientY - 30)});
          }          
        },        
        cursorRingHover : function(e){
          e.preventDefault();
        },
        clickNext : function(){
          app.scroll = false;
          var name = this.global.page;
          switch (name) {
            case 'home':
              router.push({path : 'process'});
              break;
            case 'process':
              router.push({path : 'projects'});
              break;
            default:
              // statements_def
              break;
          } 
        },
        clickPrev : function(){
          app.scroll = false;
          var name = this.global.page;
          switch (name) {
            case 'home':
              app.scroll = true;
              return false;
              break;
            case 'process':
              router.push({path : '/'});
              break;
            default:
              // statements_def
              break;
          } 
        },
        hoverLinks : function(e){
          var app = this;
          if(app.global.touch)return false;
          if(app.initDone){
            if(e.type == 'mouseenter'){
              app.cursor.hoverActive = true;
              TweenMax.to('.cursor-ring', 0.2, {scale : 1.5});
              TweenMax.to('.progress-ring__circle', 0.2, {stroke : app.cursor.hoverColor});
            }else{
              app.cursor.hoverActive = false;
              TweenMax.to('.cursor-ring', 0.2, {scale : 1});
              TweenMax.to('.progress-ring__circle', 0.2, {stroke : app.cursor.color});
            }
          }
        },
        hoverNext : function(e){
          var app = this;
          if(app.global.touch)return false;
          if(app.initDone && !app.transitionPage){            
            if(e.type == 'mouseenter'){
              TweenMax.to('.preloader', 0.3, {height : 0});
            }else{              
              TweenMax.to('.preloader', 0.3, {height : 90});
            }
          }          
        },
        longClick : function(e){          
          var app = this;
          if(app.initDone && !app.cursor.hoverActive && !app.transitionPage && app.cursor.longAnimatePermit && !app.global.touch){
            if(e.type == 'mousedown'){              
              app.cursor.longAnimateDone = false;
              TweenMax.to('.cursor-ring', 0.2, {scale : 1.5});
              TweenMax.to('.progress-ring__circle', 0.2, {stroke : app.cursor.hoverColor});
              TweenMax.set([app.$refs.dda.querySelectorAll('span'), app.$refs.goTonext.querySelectorAll('span')], {css : {'transition-duration' : '3s','letter-spacing': '20px', 'transition-timing-function': 'cubic-bezier(0.23, 1, 0.32, 1)'}});
              TweenMax.to('.preloader', 2.8, {y : 0, height : '100%', onComplete : function(){
                app.cursor.longAnimateDone = true;
                var next;
                if(app.$route.name == 'home')next = 'process';
                if(app.$route.name == 'process')next = 'projects';
                console.log(next);
                router.push({ path: next });
              }});
              TweenMax.to('.progress-ring__circle', 3, {strokeDashoffset : 150.796, onComplete : function(){
                TweenMax.set([app.$refs.dda.querySelectorAll('span'), app.$refs.goTonext.querySelectorAll('span')], {css : {'transition-duration' : '0.9s'}});
              }});
              app.$refs.currentComponent.longLeave();
            }else{
              if(!app.cursor.longAnimateDone){
                TweenMax.set([app.$refs.dda.querySelectorAll('span'), app.$refs.goTonext.querySelectorAll('span')], {css : {'letter-spacing': '0px', 'transition-timing-function': 'cubic-bezier(0.23, 1, 0.32, 1)'}});
                TweenMax.to('.preloader', 0.6, {y : (app.mobile ? -50 : -70), height : '90px', ease: Power2.easeIn});
                TweenMax.to('.progress-ring__circle', 0.6, {strokeDashoffset : 0, ease: Power2.easeIn, onComplete : function(){
                  TweenMax.set([app.$refs.dda.querySelectorAll('span'), app.$refs.goTonext.querySelectorAll('span')], {css : {'transition-duration' : '0.9s'}});
                  TweenMax.to('.progress-ring__circle', 0.2, {stroke : app.cursor.color});
                  TweenMax.to('.cursor-ring', 0.2, {scale : 1});
                }});
                app.$refs.currentComponent.longLeaveCancel();  
              }              
            }
          }          
        },
        mousewheel : function(e){          
          var app = this;          
          app.cursor.mousewheel = e;          
          if(app.scroll && !app.transitionPage){
            if(e.deltaY > 0){
              app.clickNext();
            }else{
              app.clickPrev();
            }
          }else{
            e.preventDefault();
            return false;
          }
          e.preventDefault();
        },
        menuShow : function(e){
          var app = this;
          if(app.menu){
            app.$refs.menu.leave().then(function(){
              app.menu = false;
            });                        
            TweenMax.to('header .menu span', 0.7, {y : 35, onComplete : function(){              
              app.menuText = 'Menu';
              TweenMax.set('header .menu', {clearProps : 'color'});
              TweenMax.to('header .menu span', 0.7, {y : 0});
            }});
            if(app.global.page == 'process'){
                TweenMax.to(document.querySelectorAll('.process header .logo #logo .st0, .process #behance-logo .st0, .process #dribbble .st0, .process #facebook .st0, .process #instagram .st0'), 0.7, {fill : '#ffffff'});
              }else{
                TweenMax.to(document.querySelectorAll('.process header .logo #logo .st0, .process #behance-logo .st0, .process #dribbble .st0, .process #facebook .st0, .process #instagram .st0'), 0.7, {fill : '#000000'});
              }
          }else{
            app.menu = true;
            TweenMax.to('header .menu span', 0.7, {y : 35, onComplete : function(){
              app.menuText = 'Close';
              TweenMax.set('header .menu', {color : '#000'});
              TweenMax.to('header .menu span', 0.7, {y : 0});
              if(app.global.page == 'process'){
                TweenMax.to(document.querySelectorAll('.process header .logo #logo .st0, .process #behance-logo .st0, .process #dribbble .st0, .process #facebook .st0, .process #instagram .st0'), 0.7, {fill : '#000000'});
              }else{
                TweenMax.to(document.querySelectorAll('.process header .logo #logo .st0, .process #behance-logo .st0, .process #dribbble .st0, .process #facebook .st0, .process #instagram .st0'), 0.7, {fill : '#ffffff'});
              }
            }});
            
          }
        },
        onResize : function(){
          var app = this;          
          if(!app.initDone)return false;
          setTimeout(function(){            
            if(window.innerWidth <= 800){
             app.mobile = true; 
            }else{
             app.mobile = false;
            }
            app.resize.w = window.innerWidth;
            app.resize.h = window.innerHeight;
          }, 50);
        }        
    },
    watch : {
      $route : function(c, p){
        var app = this;        
        var name = c.name;
        console.log(c.name);
        switch (name) {
          case 'home':
            this.home();
            app.cursor.color = '#b6b6b6';
            app.cursor.hoverColor = '#2af8eb';            
            break;
          case 'process':
            this.process();
            app.cursor.color = '#b6b6b6';
            app.cursor.hoverColor = '#2af8eb';
            break;
          case 'projects':
            this.projects();
            app.cursor.color = '#b6b6b6';
            app.cursor.hoverColor = '#ffffff';
            break;
            case 'contacts':
            this.contacts();
            app.cursor.color = '#b6b6b6';
            app.cursor.hoverColor = '#2af8eb';
            break;
          default:
            // statements_def
            break;
        }
      }
    },
    data () {
        return {            
            preloaderNumber : 0,
            initDone : false,            
            transitionPage : false,
            scroll : false,
            mobile : false,
            menu : false,
            menuText : 'Menu',            
            gamma : 0,
            resize : {
              w : 0,
              h : 0
            },            
            global : {
                currentComponent : '',
                pager : '01',
                mouseX : 0,
                mouseY : 0,                
                page : '',
                touch : false
            },
            cursor : {
                initDone : false,
                click : '',
                color : '',
                hoverColor : '',
                hoverActive : false,
                longAnimateDone : false,
                longAnimatePermit : true                
            }
        }
    }
}
</script>

<style>
* {
  box-sizing: border-box;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;                                  
}
a {
  text-decoration: none;
  z-index: 11;
  position: relative;
}
b {
  font-weight: 800;
}
.clearfix:before,
.clearfix:after {
    content: " "; /* 1 */
    display: table; /* 2 */
}

.clearfix:after {
    clear: both;
}

.cursor-ring {
    z-index: 10;
    position: fixed;
    pointer-events: none;
}
.cursor-ring circle {
    stroke: #b6b6b6;
    stroke-dasharray : 150.796;
    stroke-dashoffset : 150.796;
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
}

.preloader {
    width: 1px;
    height: 0%;
    background-color: #000;
    position: fixed;
    bottom: 0;
    left: 50%; 
    margin-left: -1px;   
    z-index: 2;
}
.preloader div {
    overflow: hidden;
    position: absolute;
    top: 30px;
    right: -2px;
    transform: rotate(-90deg);
}
.preloader span {
    display: block;        
    font-size: 12px;
}

#app {
  font-family: 'Montserrat', sans-serif;  
  color: #1d1d1d;
  width: 100%;
  height: 100%;    
}
header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 70px 10px 70px;
  z-index: 5;
  opacity: 0;
  overflow: hidden;
}
header.menu {
  z-index: 10;
}
header .logo {
  margin-top: 60px;
  float: left;  
}
header .logo #logo {
  width: 126px;
  height: 21px;
}
header .logo #logo .st0 {
  fill: #000;
}
header nav {    
    margin-top: 66px;
    position: absolute;
    left: 50%;
    width: calc(50% - 5vw);
    display: flex;
    justify-content: space-between;
}
header nav div {  
  font-size: 18px;
  line-height: 1;
  font-weight: 300;  
  letter-spacing: -0.5px;
}
header nav div:first-child {
  margin-left: 0;
}
header .lng {
  position: absolute;
  margin-top: 66px;
  right: 70px;
}
header .menu {
  position: absolute;
  margin-top: 25px;
  right: 25px;
  font-size: 18px;
  line-height: 1;
  font-weight: 300;
  letter-spacing: -0.5px;
  overflow: hidden;
  display: none;
  color: #000;
}
header .menu span {
  display: inline-block;
}
header a {
  color: #1d1d1d;
  display: inline-block;
  position: relative;
}
header nav a::after,
header .lng a::after {
  content: "";
  display: block;
  height: 1px;
  width: 0;
  background-color: #2af8eb;
  position: absolute;
  left: initial;
  right: 0;
  bottom: -5px;
  transition: width 350ms ease;
}
header nav a:hover::after,
header .lng a:hover::after {
  width: 100%;
  left: 0;
  right: initial;
}

.g-pager {
  font-size: 10px;
  line-height: 12px;
  overflow: hidden;
  transform: rotate(270deg);  
  position: fixed;
  bottom: 79px;
  left: 60px;
  z-index: 5;
  opacity: 0;
  overflow: hidden;
}
.g-pager span {
  display: inline-block;
  margin-right: 6px;
  float: left;
}
.g-pager b {
  display: inline-block;
}
.dda {
  width: 56px;
  font-size: 10px;
  line-height: 12px;
  font-weight: 400;
  text-transform: uppercase;
  transform: rotate(270deg);
  position: fixed;
  left: 59px;
  top: 141px;
  letter-spacing: -0.2px;
  z-index: 5;    
}
.dda > div {
  overflow: hidden;
  width: 200px;  
}
.dda > div > span {
  display: block;
  opacity: 0;  
  transition-property: letter-spacing;
  transition-duration: 0.9s;
}
.go-tonext {
  width: 200px;
  font-size: 10px;
  line-height: 12px;  
  position: fixed;
  bottom: 158px;
  left: 50%;
  font-weight: 400;
  text-transform: uppercase;
  transform: rotate(270deg);
  margin-left: -117px;
  padding-bottom: 0px;  
  z-index: 4;
}
.go-tonext__hover {
  height: 1px;
  width: 0;
  background-color: #000;
  position: absolute;
  bottom: -5px;
  right: 110px;
}
.go-tonext__wrapper {
  width: 55px;
}
.go-tonext__wrapper > div {
  overflow: hidden;
  width: 200px;
}
.go-tonext__wrapper > div > span {
  display: inline-block;
  cursor: pointer;
  opacity: 1;
  transition-property: letter-spacing;
  transition-duration: 0.9s;  
}
.follow-us {
  position: fixed;
  right: 70px;
  bottom: 70px;
  z-index: 5;
  opacity: 0;
  overflow: hidden;
}
.main-bg {  
  position: fixed;
  width: 0;
  height: 0;
  z-index: 1;  
  left: 50%;
  bottom: 0;
  
  overflow: hidden;
}
.follow-us_title {
  font-size: 10px;
  line-height: 1;
  font-weight: 400;
  text-transform: uppercase;
  text-align: right;
  overflow: hidden;
}
.follow-us_title span {
  display: block;
}
.follow-us ul {
  list-style: none;
  margin: 20px 0 0 0;
  padding: 0;
}
.follow-us ul li {
  float: left;
  margin-left: 24px;
}
#behance-logo {
  width: 22px;
  height: 14px;
}
#dribbble {
  width: 16px;
  height: 16px;
}
#facebook {
  width: 9px;
  height: 16px;
}
#instagram {
  width: 16px;
  height: 16px;
}
#behance-logo .st0,
#dribbble .st0,
#facebook .st0,
#instagram .st0 {
  fill:#1D1D1D;
}

header a,
.dda,
.g-pager,
.go-tonext,
header .logo #logo .st0,
header .menu,
#behance-logo .st0,
#dribbble .st0,
#facebook .st0,
#instagram .st0,
 {
  transition: color 1s ease, fill 1s ease;
}
#behance-logo:hover .st0,
#dribbble:hover .st0,
#facebook:hover .st0,
#instagram:hover .st0 {  
  fill: #2af8eb!important;
  transition-duration: 350ms!important;
}
.projects #behance-logo:hover .st0,
.projects #dribbble:hover .st0,
.projects #facebook:hover .st0,
.projects #instagram:hover .st0 {  
  fill: #fff!important;
  transition-duration: 350ms!important;
}
.process header a,
.process .dda,
.process .g-pager,
.process .go-tonext,
.process .menu {
  color: #fff;
}
.process header .logo #logo .st0,
.process #behance-logo .st0,
.process #dribbble .st0,
.process #facebook .st0,
.process #instagram .st0 {
  fill: #fff;
}

.mobile-coming {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;  
  z-index: 100;
  background: #000;
  display: none;
  text-align: center;
  flex-wrap: wrap;
  align-items: center;  
}
.mobile-coming > div {
  width: 100%;
  text-align: center;
}
.mobile-coming h5 {
  width: 100%;
  color: #fff;
  margin: 5vw 0 0 0;
  padding: 0;
  text-align: center;
  font-size: 10vw;
  text-transform: uppercase;
  opacity: 0.7;
}
.mobile-coming img {
  width: 45vw;
  opacity: 0.7;
}

/*
@media screen and (max-width: 1024px) {
  .mobile-coming {
    display: flex;
  }
}
*/
@media screen and (max-width: 800px) {
  header nav,
  .g-pager,
  .follow-us {
    display: none;
  }
  header {    
    padding: 0 25px 10px 25px;    
  }
  header .logo {
    margin-top: 25px;
  }
  header .menu {
    display: block;
  }
  .dda {    
    left: 14px;
    top: 70px;    
  }
  .go-tonext {    
    bottom: 138px;    
  }
}

</style>
