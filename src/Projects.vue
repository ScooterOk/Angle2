<template>
  <div id="app-projects" @mousewheel="mousewheel">
      <div class="projects__scene" ref="scene">
        <div class="projects__details__close" @click="" @mouseenter="hoverLinks" @mouseleave="hoverLinks"><i class="l"></i><i class="r"></i></div>
        <div class="projects__details_client">
          <h4>
            <div>{{details.client.title}}</div>            
          </h4>
          <div class="projects__details_client-text" v-html="clientText"></div>
        </div>
        <div class="projects__details_output">
          <h4>
            <div>{{details.output.title}}</div>
          </h4>
          <div class="projects__details_output-text" v-html="outputText"></div>
        </div>
        <div class="projects__details_fields">
          <h4>
            <div>{{details.fields.title}}</div>
          </h4>
          <div class="projects__details_fields-text" v-html="fieldsText"></div>
        </div>
        <div class="projects__details_link">
          <a :href="details.caseLink.url" v-html="caseLink"></a>
          <i class="projects__details_link-border"></i>
        </div>

        <div class="projects__details">
          <div class="projects__details_right">
            <div class="projects__details_slide-dots">
              <span>{{details.slide}}</span>
              <i></i>
              <b>06</b>
            </div>              
          </div>          
          <div class="projects__details_photo">
            <div class="projects__details_photo-img" :data-name="photo.name" :style="{backgroundImage: 'url('+photo.url+')'}" v-for="photo in details.photos"></div>            
          </div>
        </div>
        <div class="case-study" ref="dda">            
          <div>
            <span>case</span>
          </div>
          <div>
            <span>study</span>
          </div>          
        </div>
        <ul class="projects__list" ref="list">
          <li v-for="(project, index) in projects">
            <div class="project__hover-left" @mouseenter="projectHover($event, project.dataName, index+1)" @click="showDetails"></div>
            <div class="project__hover-right" @mouseenter="projectHover($event, project.dataName, index+1)" @click="showDetails"></div>
            <div class="left">            
              <h2>
                <div class="tech">
                  <b v-for="tech in project.tech">{{tech}}</b>
                </div>
                <span v-html="project.name"></span>
              </h2>
            </div>
            <div class="right">
              <h2>                
                <span v-html="project.name"></span>
              </h2>
            </div>
          </li>          
        </ul>        
      </div>
  </div>    
</template>

<script>
export default {    
  props : ['mouseY', 'cursor'],
  computed : {    
    clientText : function(){      
      var text = this.details.client.name;
      var t = '';
      for(var i in text){
        if(text[i] == ' '){
          t += '<span>&nbsp</span>';
        }else{
          t += '<span>'+text[i]+'</span>';          
        }        
      }
      return t;
    },
    outputText : function(){      
      var text = this.details.output.name;
      var t = '';
      for(var i in text){
        if(text[i] == ' '){
          t += '<span>&nbsp</span>';
        }else{
          t += '<span>'+text[i]+'</span>';          
        }        
      }
      return t;
    },
    fieldsText : function(){
      var text = this.details.fields.name;
      var t = '';
      for(var i in text){
        if(text[i] == ' '){
          t += '<span>&nbsp</span>';
        }else{
          t += '<span>'+text[i]+'</span>';          
        }        
      }
      return t;
    },
    caseLink : function(){
      var text = this.details.caseLink.name;
      var t = '';
      for(var i in text){
        if(text[i] == ' '){
          t += '<span>&nbsp</span>';
        }else{
          t += '<span>'+text[i]+'</span>';          
        }        
      }
      return t;
    },
    peakText : function(){
      var text = this.details.caseLink.name;
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
  mounted : function () {  
    this.projectsListText();
    this.enter();    
  },
  data () {
    return {      
      scrollListPermit : false,
      projects : [
        {
          name : '4peak',
          dataName : '4peak',
          tech : ['ux', 'ui'],          
        },
        {
          name : 'reactivate',
          dataName : 'reactivate',
          tech : ['ux', 'ui', 'lab']
        },
        {
          name : 'bonex',
          dataName : 'bonex',
          tech : ['ui', 'lab']
        },
        {
          name : 'medical',
          dataName : 'medical',
          tech : ['ui']
        },
        {
          name : 'vyshegrad',
          dataName : 'vyshegrad',
          tech : ['ui', 'lab']
        },
        {
          name : 'floston', 
          dataName : 'floston',          
          tech : ['ux']
        },
      ],
      details : {
        slide : '01',
        preloadPhotos : [
          {
            name : '4peak',
            url : 'dist/img/projects/4peak.jpg'
          },
          {
            name : 'reactivate',
            url : 'dist/img/projects/reaktivate.jpg'
          },
          {
            name : 'bonex',
            url : 'dist/img/projects/bonex.jpg'
          },
          {
            name : 'medical',
            url : 'dist/img/projects/medical.jpg'
          },
          {
            name : 'vyshegrad',
            url : 'dist/img/projects/vishegrad.jpg'
          },
          {
            name : 'floston',
            url : 'dist/img/projects/floston.jpg'
          }
        ],
        photos : [
          {
            name : '4peak',
            url : ''
          },
          {
            name : 'reactivate',
            url : ''
          },
          {
            name : 'bonex',
            url : ''
          },
          {
            name : 'medical',
            url : ''
          },
          {
            name : 'vyshegrad',
            url : ''
          },
          {
            name : 'floston',
            url : ''
          }
        ],
        client : {
          title : 'client',
          name : '4PEAK'
        },
        output : {
          title : 'output',
          name : 'Website, Copy'
        },
        fields : {
          title : 'creative fields',
          name : 'UI/UX, Strategy, Interaction Design, Animation'
        },
        caseLink : {
          name : 'Full case on Behance',
          url : ''
        }
      }      
    }    
  },  
  watch : {
    mouseY : function (val, oldVal) {      
      if((val - 120) > 0)this.scrollList(val);        
    }      
  },  
  methods : {
    projectsListText : function(){
      var projects = [];
      for(var i in this.projects){
        i = Number(i)
        var text = this.projects[i].name;
        var t = '';
        for(var s in text){
          if(text[s] == ' '){
            t += '<i>&nbsp</i>';
          }else{
            t += '<i>'+text[s]+'</i>';
          }        
        }        
        this.$set(this.projects[i], 'name', t);        
      }
      
    },
    mousewheel : function(e){      
      console.log(e.wheelDeltaY);
      console.log(e.deltaY);
    },
    scrollList : function(clientY){      
      var app = this;      
      var sh = document.querySelector('.projects__scene').clientHeight;
      var lh = document.querySelector('.projects__list').clientHeight;
      if(app.scrollListPermit && lh > sh){
        var y = clientY - 120;
        var sh = app.$refs.scene.clientHeight;
        var lh = app.$refs.list.clientHeight;
        var cp = 100 / (sh / y);
        var diff = (lh - sh);
        var yDiff = -(diff / 100) * cp;
        TweenMax.to(app.$refs.list, 0.6, {top : yDiff,});  

      }      
    },
    projectHover : function(e, name, slide){

      var app = this;
      if(app.scrollListPermit && e.target.parentNode.className != 'hover'){        
        name = '.projects__details_photo [data-name="'+name+'"]';
        console.log(name);        
        TweenMax.set(document.querySelectorAll('.projects__details_photo-img:not(.current)'), {zIndex : '0'});
        TweenMax.set(document.querySelector('.projects__details_photo .current'), {zIndex : '1'});
        document.querySelectorAll('.projects__details_photo-img').forEach(function(e, i) {
          if(e.className.indexOf('current') > -1){
            e.classList.remove('current');  
          }          
        });
        document.querySelector(name).classList.add('current');
        if(Number(slide) > Number(app.details.slide)){
          TweenMax.fromTo('.projects__details_photo-img.current', 0.5, {y : '-100%'}, {y : '0%', ease: Power2.easeOut});
        }else{
          TweenMax.fromTo('.projects__details_photo-img.current', 0.5, {y : '100%'}, {y : '0%', ease: Power2.easeOut});
        }
        

        app.details.slide = slide;



        document.querySelectorAll('.projects__list li').forEach(function(el, index) {
          if(el.className == 'hover'){
            TweenMax.to(el.querySelectorAll('.tech b'), 0.3, {x : '-100%', ease: Power3.easeInOut});
            TweenMax.to(el.querySelectorAll('span'), 0.3, {x : 0, color : '#000000', opacity : 0.1, ease: Power3.easeInOut});
            el.classList.remove('hover');
          }          
        });        
        e.target.parentNode.classList.add('hover');
        TweenMax.to(e.target.parentNode.querySelectorAll('.tech b'), 0.3, {x : '0%', ease: Power3.easeInOut});
        TweenMax.to(e.target.parentNode.querySelector('.left span'), 0.3, {x : window.innerWidth / 100 * 6.2, color : '#ffffff', opacity : 1, ease: Power3.easeInOut});
        TweenMax.to(e.target.parentNode.querySelector('.right span'), 0.3, {x : window.innerWidth / 100 * 6.2, color : '#000000', opacity : 1, ease: Power3.easeInOut});
      }      
    },
    showDetails : function(e){
      var app = this;
      app.scrollListPermit = false;
      var y = e.target.parentNode.offsetTop - (120 - document.querySelector('.projects__list').offsetTop);
      TweenMax.set(document.querySelectorAll(['.dda span', '.case-study span']), {css : {'transition-duration' : '0.7s', 'letter-spacing': '20px', 'transition-timing-function' : 'cubic-bezier(0.895, 0.03, 0.685, 0.22)'}});
      TweenMax.to(document.querySelectorAll(['.dda span', '.case-study span']), 0.4, {y : 13, delay : 1, onComplete : function(){
        TweenMax.to(document.querySelectorAll('.case-study span'), 0.4, {y : 0, opacity : 1, onComplete : function(){
          TweenMax.set(document.querySelectorAll('.case-study span'), {css : {'transition-duration' : '0.7s', 'letter-spacing': '0px', 'transition-timing-function' : 'cubic-bezier(0.895, 0.03, 0.685, 0.22)'}});
        }});
      }});      
      TweenMax.to(document.querySelectorAll('.projects__list li:not(.hover) span'), 0.3, {y : '100%', ease: Power1.easeOut, onComplete : function() {
        TweenMax.set(document.querySelectorAll('.projects__list li:not(.hover)'), {visibility : 'hidden'});
        TweenMax.to(e.target.parentNode, 0.8, {y : -y, ease: Power2.easeInOut, onComplete : function(){
          TweenMax.set([e.target.parentNode.querySelector('.project__hover-left'), e.target.parentNode.querySelector('.project__hover-right')], {cursor : 'default'});
          TweenMax.staggerTo(['.follow-us li.ig', '.follow-us li.fb', '.follow-us li.dr', '.follow-us li.be'], 0.3, {y : 35}, 0.1,);
          TweenMax.to('.follow-us_title span', 0.5, { y: 10, delay : 0.5});
          TweenMax.to('.g-pager div', 0.4, {x : -35, delay : 0.5});
          TweenMax.to(e.target.parentNode.querySelectorAll('.tech b'), 0.3, {x : '-100%', ease: Power1.easeOut});
          TweenMax.to(e.target.parentNode.querySelectorAll('span'), 0.3, {x : 0, ease: Power1.easeOut});

          
          var iList = [].slice.call(e.target.parentNode.querySelectorAll('.left span i'), 0).reverse();          
          TweenMax.staggerTo(iList, 0.5, {color : '#000000', ease: Power2.easeOut}, 0.03);
          


          TweenMax.to(['.projects__details_slide-dots span', '.projects__details_slide-dots b'], 0.35, {y : '100%', ease: Power1.easeOut, onComplete : function(){
            TweenMax.to('.projects__details_slide-dots i', 0.35, {width : '0', ease: Power1.easeOut});  
            TweenMax.set(['.projects__details__close i.l', '.projects__details__close i.r'], {left : 0, right : 'auto'});
            TweenMax.fromTo(['.projects__details__close i.l', '.projects .projects__details__close i.r'], 0.7, {width : '0'}, {width : '100%', opacity : 1, ease: Power4.easeIn, onComplete : function(){
              TweenMax.to('.projects__details__close i.l', 0.4, {rotationZ : 45, ease: Power3.easeIn});              
              TweenMax.to('.projects__details__close i.r', 0.4, {rotationZ : -45, ease: Power3.easeIn});
            }});
          }});

          // details_client output_client 
          TweenMax.set(['.projects__details_client', '.projects__details_output'], {visibility : 'visible'});            
          TweenMax.fromTo('.projects__details_client h4 div', 0.5, {y : '100%'}, {y : '0%', onComplete : function(){
            TweenMax.staggerFromTo(document.querySelectorAll('.projects__details_client-text span'), 0.2, {opacity : 0, x : -50,  y:75, scale : 0, rotationY: 90, rotationZ:90, transformOrigin : '0 50% 0'}, {opacity : 1, x : 0,  y:0, scale : 1, rotationY: 0, rotationZ:0, transformOrigin : '0 50% 0', ease: Power2.easeOut}, 0.03);
          }});
          TweenMax.fromTo('.projects__details_output h4 div', 0.5, {y : '100%'}, {y : '0%', onComplete : function(){
            TweenMax.staggerFromTo(document.querySelectorAll('.projects__details_output-text span'), 0.2, {opacity : 0, x : -50,  y:75, scale : 0, rotationY: 90, rotationZ:90, transformOrigin : '0 50% 0'}, {opacity : 1, x : 0,  y:0, scale : 1, rotationY: 0, rotationZ:0, transformOrigin : '0 50% 0', ease: Power2.easeOut}, 0.03);
          }});
            
          TweenMax.to('.projects__details', 0.7, {width : '87vw', ease: Power1.easeOut, onComplete : function(){
            var h = 200 + ((window.innerWidth / 100) * 33.2);           
            
            TweenMax.to('.projects__details', 0.7, {height : h, onComplete : function(){

              TweenMax.set(['.projects__details_fields', '.projects__details_link'], {visibility : 'visible'});
              TweenMax.fromTo('.projects__details_fields h4 div', 0.5, {y : '100%'}, {y : '0%', onComplete : function(){
                TweenMax.staggerFromTo(document.querySelectorAll('.projects__details_fields-text span'), 0.2, {opacity : 0, x : -50,  y:75, scale : 0, rotationY: 90, rotationZ:90, transformOrigin : '0 50% 0'}, {opacity : 1, x : 0,  y:0, scale : 1, rotationY: 0, rotationZ:0, transformOrigin : '0 50% 0', ease: Power2.easeOut}, 0.03);
              }});
              TweenMax.fromTo('.projects__details_link-border', 0.5, {width : '0'}, {width : '100%', onComplete : function(){
                TweenMax.staggerFromTo(document.querySelectorAll('.projects__details_link span'), 0.15, {opacity : 0,  y:150, scale : 0, rotationY: 45, rotationZ:-45}, {opacity : 1,  y:0, scale : 1, rotationY: 0, rotationZ:0, ease: Power3.easeInOut}, 0.03);
              }});
            }});
          }})
        }});
      }});

      return false;
      
      console.log(e);
    },
    hoverLinks : function(e){
      console.log(e);
      var app = this;      
      if(e.type == 'mouseenter'){        
        TweenMax.to('.cursor-ring', 0.2, {scale : 1.5});
        TweenMax.to('.progress-ring__circle', 0.2, {stroke : app.cursor.hoverColor});
      }else{        
        TweenMax.to('.cursor-ring', 0.2, {scale : 1});
        TweenMax.to('.progress-ring__circle', 0.2, {stroke : app.cursor.color});
      }      
    },
    enter: function () {
      var app = this;      
      document.querySelectorAll('.projects__details_photo-img')[0].classList.add('current');
      TweenMax.set(document.querySelectorAll('.projects__details_photo-img'),{y : '-100%', ease: Power3.easeOut});
      
      app.$emit('longAnimatePermit', false);
      var l = document.querySelectorAll('.projects__list li:nth-child(odd) span');
      var r = document.querySelectorAll('.projects__list li:nth-child(even) span');
      l.forEach( function(e, i) {
        var x = ((e.parentNode.clientWidth - 140) / 2) - (e.clientWidth / 2);        
        TweenMax.fromTo(e, 1.5, {x : -(e.clientWidth+100)}, {x : x, ease: Power4.easeOut});
      });
      r.forEach( function(e, i) {
        var x = ((e.parentNode.clientWidth - 140) / 2) - (e.clientWidth / 2);        
        TweenMax.fromTo(e, 1.5, {x : e.parentNode.clientWidth}, {x : x, ease: Power4.easeOut});
      });            


      TweenMax.fromTo('.projects__details', 0.7, {x : document.querySelector('.projects__details').clientWidth}, {x : 0, ease: Power4.easeIn, delay : 2, onComplete : function(){        
        TweenMax.to(document.querySelector('.projects__details_photo .current'), 0.7, {y : '0%', ease: Power3.easeOut});
      }});
      
      TweenMax.staggerTo(document.querySelectorAll('.projects__list .left span'), 0.7, {x : 0, ease: Power4.easeInOut, delay : 0.9}, 0.09);
      TweenMax.staggerTo(document.querySelectorAll('.projects__list .right span'), 0.7, {x : 0, ease: Power4.easeInOut, delay : 0.9}, 0.09, droveOn);
      //TweenMax.to(l, 0.7, {x : 0, ease: Power4.easeIn, delay : 0.9});
      //TweenMax.to(r, 0.7, {x : 0, ease: Power4.easeIn, delay : 0.9});
      
      function droveOn(){
        app.details.photos =  app.details.preloadPhotos;
        document.querySelector('.projects__list li:first-child').classList.add('hover');
        TweenMax.to(document.querySelectorAll('.projects__list li:first-child .tech b'), 0.7, {x : '0%', ease: Power2.easeOut, delay : 0.3});
        TweenMax.to(document.querySelectorAll('.projects__list li:first-child span'), 0.7, {x : (window.innerWidth / 100 * 6.2), ease: Power2.easeOut, delay : 0.3});
        TweenMax.to(document.querySelectorAll('.projects__list li:not(:first-child) span'), 0.7, {opacity : 0.1, color : '#000000', ease: Power2.easeOut, delay : 0.3, onComplete : function(){
          
          
          app.scrollListPermit = true;
        }});
      }      
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
  cursor: pointer;
}
.project__hover-right {
  position: absolute;
  width: 50%;
  height: 8.2vw;
  right: 0;
  top: 6.95vw;
  transform: rotate(15deg) skewX(15deg) translateX(-0.9vw);
  z-index: 2;  
  cursor: pointer;
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
  overflow: hidden;  
}
.projects__list li h2 span {
  display: inline-block;
}
.projects__list li h2 span i {
  display: inline-block;
  font-style: normal;
}
.projects__list li .left h2 {  
  transform: translate3d(0, 0, 0) rotate(-15deg) skewX(-15deg);
}
.projects__list li .right h2 {
  margin-left: -100%;
  transform: translate3d(0, 0, 0) rotate(15deg) skewX(15deg);
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
}
.projects__details_photo {
  width: 59vw;
  height: 33.2vw;
  position: relative;
  overflow: hidden;  
  float: right;
}
.projects__details_photo-img {
  width: 100%;    
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top ;
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
  overflow: hidden;
  line-height: 10px;
}
.projects__details_slide-dots span,
.projects__details_slide-dots b {
  display: inline-block;
  font-size: 10px;
  line-height: 10px;
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
.case-study {
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
.case-study > div {
  overflow: hidden;
  width: 200px;  
}
.case-study > div > span {
  display: block;
  opacity: 0;  
  transition-property: letter-spacing;
  transition-duration: 0.9s;
}
.projects__details__close {
  width: 42px;
  height: 42px;  
  position: fixed;
  top: 210px;
  right: 5vw;
  cursor: pointer;
  transform: translateX(50%);
  z-index: 1;
}
.projects__details__close i {
  display: block;
  height: 1px;
  width: 42px;
  background-color: #000;
  position: absolute;
  left: 0px;
  top: 50%;
  opacity: 0;
}
.projects__details_client {
  position: fixed;
  top: calc(152px + 33.2vw);
  left: 5vw;
  z-index: 1;
  transform: translateY(-100%);
  visibility: hidden;
}
.projects__details_client h4 {
  margin: 0 0 10px 0;
  padding: 0;
  font-size: 10px;
  line-height: 1;
  font-weight: normal;
  color: #000;
  text-transform: uppercase;
  overflow: hidden;
}
.projects__details_client-text {
  font-size: 18px;
  line-height: 1;
  font-weight: 400;
  color: #000;
  text-transform: uppercase;  
}
.projects__details_client-text span {
  display: inline-block;
  opacity: 0;
}
.projects__details_output {
  position: fixed;
  top: calc(152px + 33.2vw + 45px);
  left: 5vw;
  z-index: 1;
  visibility: hidden;
}
.projects__details_output h4 {
  margin: 0 0 10px 0;
  padding: 0;
  font-size: 10px;
  line-height: 1;
  font-weight: normal;
  color: #000;
  text-transform: uppercase;
  overflow: hidden;
}
.projects__details_output-text {
  font-size: 1;
  line-height: 1;
  font-weight: 400;
  color: #000;    
}
.projects__details_output-text span {
  display: inline-block;
  opacity: 0;
}
.projects__details_fields {
  position: fixed;
  top: calc(152px + 33.2vw + 45px);
  left: 30vw;
  z-index: 1;
  visibility: hidden;
}
.projects__details_fields h4 {
  margin: 0 0 10px 0;
  padding: 0;
  font-size: 10px;
  line-height: 1;
  font-weight: normal;
  color: #000;
  text-transform: uppercase;
  overflow: hidden;
}
.projects__details_fields-text {
  font-size: 18px;
  line-height: 1;
  font-weight: 400;
  color: #000;    
}
.projects__details_fields-text span {
  display: inline-block;
  opacity: 0;
}
.projects__details_link {
  position: fixed;    
  top: calc(152px + 33.2vw + 49px);
  right: 11vw;
  z-index: 1;
  margin-top: 10px;
  visibility: hidden;
}
.projects__details_link a {
  font-size: 18px;
  line-height: 30px;
  color: #000;
  display: inline-block;
  overflow: hidden;
}
.projects__details_link a span {
  display: inline-block;
  opacity: 0;
}
.projects__details_link-border {
  display: block;
  height: 1px;
  width: 100%;
  background-color: #90f8eb;
  position: absolute;
  left: 0;  
  bottom: 0;
}

</style>
