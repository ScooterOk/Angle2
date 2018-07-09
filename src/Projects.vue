<template>
  <div id="app-projects" @mousewheel="mousewheel" v-resize="onResize">
      <div class="projects__scene" ref="scene">
        <div class="projects__details__close" @click="closeDetails" @mouseenter="hoverLinks($event, '#2af8eb')" @mouseleave="hoverLinks($event, '#2af8eb')"><i class="l"></i><i class="r"></i></div>
        <div class="projects__details_client">
          <h4>
            <div>{{details.category.title}}</div>            
          </h4>
          <div class="projects__details_client-text" v-html="clientText"></div>
        </div>
        <div class="projects__details_output">
          <h4>
            <div>{{details.type.title}}</div>
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
        <section class="projects__list_next-preview" :style="{backgroundImage: 'url('+nextImgCase+')'}"></section>
        <div class="projects__details_content">
          <div class="projects__details_content-block">
            <h4>
              <div>{{details.caseDescription.title}}</div>
            </h4>
            <div class="projects__details_content-description" v-html="caseDescription"></div>
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
        <div class="case-next">
          <div>
            <span>next</span>
          </div>
          <div>
            <span>case</span>
          </div>          
        </div>        
        <ul class="projects__list" ref="list">
          <li v-for="(project, index) in projects" :data-name="project.dataName">
            <div class="left">            
              <h2 @mouseenter="projectHover($event, project.dataName, index+1)" @mouseleave="projectHover($event, project.dataName, index+1)" @click="showDetails" :data-name="project.dataName">
                <div class="tech">
                  <b v-for="tech in project.tech">{{tech}}</b>
                </div>
                <span v-html="project.name"></span>
              </h2>
            </div>
            <div class="right">
              <h2 @mouseenter="projectHover($event, project.dataName, index+1)" @mouseleave="projectHover($event, project.dataName, index+1)" @click="showDetails" :data-name="project.dataName">
                <span v-html="project.name"></span>
              </h2>
            </div>            
          </li>          
        </ul>        
      </div>
  </div>    
</template>

<script>
import resize from 'vue-resize-directive';
export default {    
  props : ['mouseY', 'cursor'],
  directives: {
    resize
  },
  computed : {    
    clientText : function(){      
      var text = this.details.category.name;
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
      var text = this.details.type.name;
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
      var text = this.details.fields.name.split(' ');
      var t = '';
      for(var i in text){        
          t += '<span>'+text[i]+'&nbsp</span>';
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
    },
    caseDescription : function(){
      var text = this.details.caseDescription.name.split(' ');
      var t = '';
      for(var i in text){        
        t += '<span>'+text[i]+' </span>';
      }
      return t;
    },
    nextImgCase : function(){
      if(this.details.current){
        var next = document.querySelector('.projects__list li[data-name="'+this.details.current+'"]+li').getAttribute('data-name');
        var img = 'хуй';
        for(var i in this.projects){
          if(this.projects[i].dataName == next)img = this.projects[i].url;          
        }
      }
      return img;
    }
  },  
  mounted : function () {  
    this.projectsListText();
    this.enter();
    console.log(this.projects);
  },
  data () {
    return {      
      initDone : false,
      scrollListPermit : false,
      scrollDetailsPermit : false,
      detailsActive : false,
      listTop : 0,
      sceneTop : 0,      
      projects : [
        {
          name : '4peak',
          dataName : '4peak',
          tech : ['ux', 'ui'],
          url : 'dist/img/projects/4peak.jpg'          
        },
        {
          name : 'reactivate',
          dataName : 'Reaktivate',
          tech : ['ux', 'ui', 'lab'],
          url : 'dist/img/projects/reaktivate.jpg'
        },
        {
          name : 'bonex',
          dataName : 'Bonex',
          tech : ['ui', 'lab'],
          url : 'dist/img/projects/bonex.jpg'
        },
        {
          name : 'bikepack',
          dataName : 'BikePack',
          tech : ['ui'],
          url : 'dist/img/projects/medical.jpg'
        },
        {
          name : 'vyshegrad',
          dataName : 'Vyshegrad',
          tech : ['ui', 'lab'],
          url : 'dist/img/projects/vishegrad.jpg'
        },
        {
          name : 'floston',
          dataName : 'Floston',          
          tech : ['ux'],
          url : 'dist/img/projects/floston.jpg'
        }
      ],
      details : {
        slide : '01',
        current : null,
        caseTransition : false,
        preloadPhotos : [
          {
            name : '4peak',
            url : 'dist/img/projects/4peak.jpg'
          },
          {
            name : 'Reaktivate',
            url : 'dist/img/projects/reaktivate.jpg'
          },
          {
            name : 'Bonex',
            url : 'dist/img/projects/bonex.jpg'
          },
          {
            name : 'BikePack',
            url : 'dist/img/projects/medical.jpg'
          },
          {
            name : 'Vyshegrad',
            url : 'dist/img/projects/vishegrad.jpg'
          },
          {
            name : 'Floston',
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
            name : 'bikepack',
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
        category : {
          title : 'Category',
          name : ''
        },
        type : {
          title : 'Type of project',
          name : ''
        },
        fields : {
          title : 'Creative Fields',
          name : ''
        },
        caseLink : {
          name : 'View full case',
          url : ''
        },
        caseDescription : {
          title : 'quvick words',
          name : ''
        },
        detailsCases : {
          '4peak' : {
            'category' : 'Tourism',
            'type' : 'SaaS, dashboard',
            'fields' : 'UI/UX',
            'fullCase' : '',
            'description' : 'The owner of software for ski resorts addressed us for the improvement of usability of the dashboard. We were requested to identify the problems of usability, update the structure, refine the functionality, modernize. Make it more convenient for each persona.<br><br>4Peak is a management system for ski resorts (lifts schedules, etc.) and its marketing campaigns. Data for analysis is collected from the mobile application, which users use for check-ins, rankings and lifts schedule. Also, users receive useful information about working hours of different objects in the resort and beneficial marketing offers.'
          },
          'Reaktivate' : {
            'category' : 'Outsource',
            'type' : 'Promotional site',
            'fields' : 'UI/UX, Interactions',
            'fullCase' : 'https://www.behance.net/gallery/65836341/Reaktivate',
            'description' : 'Reaktivate is development outsourcing company founded in 2001. It\'s a team of professionals who build great products. They have a website which was outdated long time ago and didn\'t represent their brand, skills and experience in a proper way. So we created a smart but simple solution for a promotional website. We looking forward to the website launch!'
          },
          'Bonex' : {
            'category' : 'Business',
            'type' : 'Landing page',
            'fields' : 'Webdesign, UI/UX, Interactions',
            'fullCase' : 'https://www.behance.net/gallery/61059879/Bonex-Landing-Page',
            'description' : 'A landing page for a product that is currently at the development stage. The main objective of this launch is to get an insight into the reaction of the target audience, conduct additional research and gather the contact information of people who have shown preliminary interest.<br><br>Bonex offers totally new opportunities for business. It enables clients to work with shares, discounts, and bonuses. Clients can add information about discounts, customize the way in which they are demonstrated by locations and categories, give bonuses on every purchase, and collect statistics about customer activity.'
          },
          'BikePack' : {
            'category' : 'Tourism',
            'type' : 'WebPortal',
            'fields' : 'Webdesign, UI/UX',
            'fullCase' : '',
            'description' : 'Bikepack is a website for bikepackers community.'
          },
          'Vyshegrad' : {
            'category' : 'Hotel',
            'type' : 'Landing page',
            'fields' : 'UI/UX, Interactions, Development',
            'fullCase' : 'https://www.behance.net/gallery/65409181/Vyshegrad-hotel',
            'description' : 'The client had an urgent need to create a simple but appealing page for their hotel. We have accepted this challenge and launch landing page with a booking system for a family hotel business.<br>On the webpage, users can find all vital information about services and type of rooms with photos and videos, read about core values and features, find contact sections and, of course, book a room for a visit.'
          },
          'Floston' : {
            'category' : 'Transport',
            'type' : 'Saas, dashboard',
            'fields' : 'UI/UX',
            'fullCase' : 'https://www.behance.net/gallery/67313069/Fleet-management-software',
            'description' : 'The fleet management solution for small and medium-sized businesses.<br>When we met the client, service was already launched but has had many drawbacks and lack of usability. So we made research, found bottlenecks, suggested functionality improvements. And create a new design for a system.'
          }
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
        app.listTop = yDiff;
        TweenMax.to(app.$refs.list, 0.6, {y : yDiff,});
      }      
    },
    projectHover : function(e, name, slide){
      var app = this;      
      if(!app.detailsActive){
        if(app.scrollListPermit && e.target.parentNode.className != 'hover'){
          name = '.projects__details_photo [data-name="'+name+'"]';
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
          app.details.slide = slide < 10 ? '0'+slide : slide;
          document.querySelectorAll('.projects__list li').forEach(function(el, index) {
            if(el.className == 'hover'){
              TweenMax.to(el.querySelectorAll('.tech b'), 0.3, {x : '-100%', ease: Power3.easeInOut});
              TweenMax.to(el.querySelectorAll('span'), 0.3, {x : 0, color : '#000000', opacity : 0.1, ease: Power3.easeInOut});
              el.classList.remove('hover');
            }          
          });        
          e.target.parentNode.parentNode.classList.add('hover');        
          TweenMax.to(e.target.parentNode.parentNode.querySelectorAll('.tech b'), 0.3, {x : '0%', ease: Power3.easeInOut});
          TweenMax.to(e.target.parentNode.parentNode.querySelector('.left span'), 0.3, {x : window.innerWidth / 100 * 6.2, color : '#ffffff', opacity : 1, ease: Power3.easeInOut});
          TweenMax.to(e.target.parentNode.parentNode.querySelector('.right span'), 0.3, {x : window.innerWidth / 100 * 6.2, color : '#000000', opacity : 1, ease: Power3.easeInOut});
        } 
      }else{
        if(!e.currentTarget.parentNode.parentNode.classList.contains('hover') && !app.details.caseTransition){
          if(e.type == 'mouseenter'){            
            TweenMax.to('.projects__list_next-preview', 0.5, {x : -document.querySelector('.projects__list_next-preview').clientWidth, ease: Power2.easeOut});
            console.log('mouseenter');
          }else{            
            TweenMax.to('.projects__list_next-preview', 0.5, {x : 0, ease: Power2.easeOut});
            console.log('mouseleave');
          }          
        }        
      }
    },
    showDetails : function(e){
      var app = this;
      var currentTarget = e.currentTarget;      
      var name = currentTarget.getAttribute('data-name');
      console.log(app.detailsActive);
      if(!app.detailsActive){
        console.log('Open');
        if(!app.initDone || app.initDone && (app.detailsActive && currentTarget.parentNode.parentNode.className == 'hover'))return false;
        app.detailsActive = true;
        app.details.caseTransition = true;
        var data = app.details.detailsCases[name];
        var next = document.querySelector('.projects__list li[data-name="'+name+'"]+li');

        if(next){
          app.details.current = name;
        }else{
          app.details.current = null;
        }
        app.details.category.name = data.category;
        app.details.type.name = data.type;
        app.details.fields.name = data.fields;
        app.details.caseLink.url = data.fullCase;
        app.details.caseDescription.name = data.description;      
        app.scrollListPermit = false;
        var y = currentTarget.parentNode.parentNode.offsetTop - (120 - document.querySelector('.projects__list').offsetTop - app.listTop);
        TweenMax.set(document.querySelectorAll(['.dda span', '.case-study span', '.case-next span']), {css : {'transition-duration' : '0.7s', 'letter-spacing': '20px', 'transition-timing-function' : 'cubic-bezier(0.895, 0.03, 0.685, 0.22)'}});
        TweenMax.to(document.querySelectorAll(['.dda span', '.case-study span']), 0.4, {y : 13, delay : 1, onComplete : function(){
          TweenMax.to(document.querySelectorAll('.case-study span'), 0.4, {y : 0, opacity : 1, onComplete : function(){
            TweenMax.set(document.querySelectorAll('.case-study span'), {css : {'transition-duration' : '0.7s', 'letter-spacing': '0px', 'transition-timing-function' : 'cubic-bezier(0.895, 0.03, 0.685, 0.22)'}});
          }});
        }});
        TweenMax.to(document.querySelectorAll('.projects__list li:not(.hover) span'), 0.3, {y : '100%', ease: Power1.easeOut, onComplete : function() {
          TweenMax.set(document.querySelectorAll('.projects__list li:not(.hover)'), {visibility : 'hidden'});
          TweenMax.to(currentTarget.parentNode.parentNode, 0.8, {y : -y, ease: Power2.easeInOut, onComplete : function(){          
            TweenMax.staggerTo(['.follow-us li.ig', '.follow-us li.fb', '.follow-us li.dr', '.follow-us li.be'], 0.3, {y : 35}, 0.1,);
            TweenMax.to('.follow-us_title span', 0.5, { y: 10, delay : 0.5});
            TweenMax.to('.g-pager div', 0.4, {x : -35, delay : 0.5});
            TweenMax.to(currentTarget.querySelectorAll('.tech b'), 0.3, {x : '-100%', ease: Power1.easeOut});
            TweenMax.to(currentTarget.parentNode.parentNode.querySelectorAll('span'), 0.3, {x : 0, ease: Power1.easeOut});

            
            var iList = [].slice.call(currentTarget.parentNode.parentNode.querySelectorAll('.left span i'), 0).reverse();
            TweenMax.staggerTo(iList, 0.5, {color : '#000000', ease: Power2.easeOut}, 0.03);
            


            TweenMax.to(['.projects__details_slide-dots span', '.projects__details_slide-dots b'], 0.35, {y : '100%', ease: Power1.easeOut, onComplete : function(){
              TweenMax.to('.projects__details_slide-dots i', 0.35, {width : '0', ease: Power1.easeOut});  
              TweenMax.set('.projects__details__close', {visibility : 'visible'});
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
              
            TweenMax.set('.projects__details_content-description span', {opacity : 0});
            TweenMax.to('.projects__details', 0.7, {width : '85vw', ease: Power1.easeOut, onComplete : function(){
              var hd = 200 + ((window.innerWidth / 100) * 33.2);
              var hc = document.querySelector('.projects__details_content-block').offsetHeight;
              TweenMax.to('.projects__details_content', 0.7, {height : hc, onComplete : function(){
                app.scrollDetailsPermit = true;
                TweenMax.set('.projects__details_content-block', {visibility : 'visible'});
                TweenMax.fromTo('.projects__details_content-block h4 div', 0.5, {y : '100%'}, {y : '0%', onComplete : function(){                  
                  TweenMax.staggerFromTo(document.querySelectorAll('.projects__details_content-description span'), 0.2, {opacity : 0, x : -50,  y:75, scale : 0, rotationY: 90, rotationZ:90, transformOrigin : '0 50% 0'}, {opacity : 1, x : 0,  y:0, scale : 1, rotationY: 0, rotationZ:0, transformOrigin : '0 50% 0', ease: Power2.easeOut}, 0.03);
                }});              

                if(next){
                  var nextY = (document.querySelector('.projects__details').clientHeight + 152) + (document.querySelector('.projects__details_content').clientHeight + 55) + ((window.innerWidth / 100) * 20) - document.querySelector('.projects__list').getBoundingClientRect().top - next.offsetTop;
                  var naxtCaseY = (document.querySelector('.projects__details').clientHeight + 152) + (document.querySelector('.projects__details_content').clientHeight + 55) + ((window.innerWidth / 100) * 20);
                  var naxtCaseImg = document.querySelector('.projects__details').clientHeight + document.querySelector('.projects__details_content').clientHeight + 205;
                  TweenMax.set(next, {y : nextY, visibility : 'visible'});

                  TweenMax.set(document.querySelector('.projects__list_next-preview'), {display : 'block', y : naxtCaseImg});


                  TweenMax.set('.case-next', {top : naxtCaseY});

                  TweenMax.to(document.querySelectorAll('.case-next span'), 0.4, {y : 13, delay : 1, onComplete : function(){
                    TweenMax.to(document.querySelectorAll('.case-next span'), 0.4, {y : 0, opacity : 1, onComplete : function(){
                      TweenMax.set(document.querySelectorAll('.case-next span'), {css : {'transition-duration' : '0.7s', 'letter-spacing': '0px', 'transition-timing-function' : 'cubic-bezier(0.895, 0.03, 0.685, 0.22)'}});
                    }});
                  }});
                  TweenMax.set(next.querySelectorAll('.left span'), {color : '#ffffff'})
                  TweenMax.to(next.querySelectorAll('h2 span'), 0.3, {y : '0%', opacity : 1, ease: Power1.easeOut, onComplete : function(){
                    app.details.caseTransition = false;
                  }});
                }else{                                    
                  app.projects.push({
                    name : 'Contact Us',
                    dataName : 'contacts'
                  });
                  setTimeout(function(){
                    next = document.querySelector('.projects__list li[data-name="contacts"]');
                    var nextY = (document.querySelector('.projects__details').clientHeight + 152) + (document.querySelector('.projects__details_content').clientHeight + 55) + ((window.innerWidth / 100) * 20) - document.querySelector('.projects__list').getBoundingClientRect().top - next.offsetTop;
                    var naxtCaseY = (document.querySelector('.projects__details').clientHeight + 152) + (document.querySelector('.projects__details_content').clientHeight + 55) + ((window.innerWidth / 100) * 20);                  
                    TweenMax.set(next, {y : nextY, visibility : 'visible'});
                  }, 50);                  
                }
              }});
              TweenMax.to('.projects__details', 0.7, {height : hd, onComplete : function(){
                TweenMax.set(document.querySelectorAll('.projects__details_fields-text span'), {clearProps : 'all'});
                TweenMax.set(['.projects__details_fields', '.projects__details_link'], {visibility : 'visible'});
                TweenMax.set(document.querySelectorAll('.projects__details_link span'), {opacity : 0});
                TweenMax.fromTo('.projects__details_fields h4 div', 0.5, {y : '100%'}, {y : '0%', onComplete : function(){
                  console.log('хуй');
                  TweenMax.staggerFromTo(document.querySelectorAll('.projects__details_fields-text span'), 0.4, {opacity : 0, x : -50,  y:75, scale : 0, rotationY: 90, rotationZ:90, transformOrigin : '0 50% 0'}, {opacity : 1, x : 0,  y:0, scale : 1, rotationY: 0, rotationZ:0, transformOrigin : '0 50% 0', ease: Power2.easeOut}, 0.08);
                }});
                TweenMax.fromTo('.projects__details_link-border', 0.5, {width : '0'}, {width : '100%', onComplete : function(){
                  TweenMax.staggerFromTo(document.querySelectorAll('.projects__details_link span'), 0.15, {opacity : 0,  y:150, scale : 0, rotationY: 45, rotationZ:-45}, {opacity : 1,  y:0, scale : 1, rotationY: 0, rotationZ:0, ease: Power3.easeInOut}, 0.03);
                }});
              }});
            }})
          }});
        }});
      }else{        
        if(currentTarget.parentNode.parentNode.classList.contains('hover')) return false;
        app.details.caseTransition = true;
        app.scrollDetailsPermit = false;
        var nextSlide = Number(app.details.slide)+1;
        app.details.slide = nextSlide < 10 ? '0'+nextSlide : nextSlide;
        var next = document.querySelector('.projects__list li[data-name="'+name+'"]+li');
        TweenMax.to('.projects__details__close i.l', 0.4, {rotationZ : 0, ease: Power3.easeIn});              
        TweenMax.to('.projects__details__close i.r', 0.4, {rotationZ : 0, ease: Power3.easeIn, onComplete : function(){
          TweenMax.set(['.projects__details__close i.l', '.projects__details__close i.r'], {left : 'auto', right : 0});         
          TweenMax.to(['.projects__details__close i.l', '.projects .projects__details__close i.r'], 0.7, {width : '0', opacity : 0, ease: Power4.easeIn});
        }});        
        TweenMax.to(document.querySelectorAll('.projects__list li.hover span'), 0.5, {opacity : 0.1, y : '100%'});        
        TweenMax.to(['.projects__details_client', '.projects__details_output', '.projects__details_fields', '.projects__details_link', '.projects__details_content', '.projects__details'], 0.5, {opacity : 0, onComplete : function(){
          TweenMax.set('.projects__details_content', {height : 0, opacity : 1});
          TweenMax.set('.projects__details_content-block', {visibility : 'hidden'});
          TweenMax.set(['.projects__details_client', '.projects__details_output', '.projects__details_fields', '.projects__details_link'], {clearProps: "all"});
          

          
          var currentImg = '.projects__details_photo [data-name="'+name+'"]';          
          TweenMax.set(document.querySelectorAll('.projects__details_photo-img:not(.current)'), {zIndex : '0'});
          TweenMax.set(document.querySelector('.projects__details_photo .current'), {zIndex : '1'});
          document.querySelectorAll('.projects__details_photo-img').forEach(function(e, i) {
            if(e.className.indexOf('current') > -1){
              e.classList.remove('current');  
            }          
          });
          document.querySelector(currentImg).classList.add('current');
          TweenMax.set('.projects__details_photo-img.current', {y : '0%'});
          TweenMax.set('.projects__details', {width : '70vw', height : '33.2vw'});

          var y = currentTarget.parentNode.parentNode.offsetTop - (120 - document.querySelector('.projects__list').offsetTop - app.listTop);
          TweenMax.to(currentTarget.parentNode.parentNode, 0.8, {y : -y, ease: Power2.easeInOut});
          TweenMax.to('.projects__list_next-preview', 0.8, {y : 0, ease: Power2.easeInOut});
          TweenMax.to('.projects__scene', 0.8, {y : 0, ease: Power2.easeInOut, onComplete : function(){
            app.sceneTop = 0;
            TweenMax.set('.projects__details', {opacity : 1});
            TweenMax.set('.projects__list_next-preview', {x : 0});
            if(next){
              app.details.current = name;
            }else{
              app.details.current = null;  
            }
            
            var iList = [].slice.call(currentTarget.parentNode.parentNode.querySelectorAll('.left span i'), 0).reverse();
            TweenMax.staggerTo(iList, 0.5, {color : '#000000', ease: Power2.easeOut}, 0.03);
            TweenMax.set('.projects__details__close', {visibility : 'visible'});
            TweenMax.set(['.projects__details__close i.l', '.projects__details__close i.r'], {left : 0, right : 'auto'});
            TweenMax.fromTo(['.projects__details__close i.l', '.projects .projects__details__close i.r'], 0.7, {width : '0'}, {width : '100%', opacity : 1, ease: Power4.easeIn, onComplete : function(){
              TweenMax.to('.projects__details__close i.l', 0.4, {rotationZ : 45, ease: Power3.easeIn});              
              TweenMax.to('.projects__details__close i.r', 0.4, {rotationZ : -45, ease: Power3.easeIn});
            }});
            TweenMax.to('.projects__details', 0.7, {width : '85vw', ease: Power1.easeOut, onComplete : function(){
              TweenMax.set(['.projects__details_client', '.projects__details_output'], {visibility : 'visible'});            
              TweenMax.fromTo('.projects__details_client h4 div', 0.5, {y : '100%'}, {y : '0%', onComplete : function(){
                TweenMax.staggerFromTo(document.querySelectorAll('.projects__details_client-text span'), 0.2, {opacity : 0, x : -50,  y:75, scale : 0, rotationY: 90, rotationZ:90, transformOrigin : '0 50% 0'}, {opacity : 1, x : 0,  y:0, scale : 1, rotationY: 0, rotationZ:0, transformOrigin : '0 50% 0', ease: Power2.easeOut}, 0.03);
              }});
              TweenMax.fromTo('.projects__details_output h4 div', 0.5, {y : '100%'}, {y : '0%', onComplete : function(){
                TweenMax.staggerFromTo(document.querySelectorAll('.projects__details_output-text span'), 0.2, {opacity : 0, x : -50,  y:75, scale : 0, rotationY: 90, rotationZ:90, transformOrigin : '0 50% 0'}, {opacity : 1, x : 0,  y:0, scale : 1, rotationY: 0, rotationZ:0, transformOrigin : '0 50% 0', ease: Power2.easeOut}, 0.03);
              }});          
              var hd = 200 + ((window.innerWidth / 100) * 33.2);
              var hc = document.querySelector('.projects__details_content-block').offsetHeight;
              TweenMax.set('.projects__details_content-description span', {opacity : 0});              
              TweenMax.to('.projects__details_content', 0.7, {height : hc, onComplete : function(){
                app.scrollDetailsPermit = true;
                TweenMax.set('.projects__details_content-block', {visibility : 'visible'});
                TweenMax.fromTo('.projects__details_content-block h4 div', 0.5, {y : '100%'}, {y : '0%', onComplete : function(){
                  TweenMax.staggerFromTo(document.querySelectorAll('.projects__details_content-description span'), 0.2, {opacity : 0, x : -50,  y:75, scale : 0, rotationY: 90, rotationZ:90, transformOrigin : '0 50% 0'}, {opacity : 1, x : 0,  y:0, scale : 1, rotationY: 0, rotationZ:0, transformOrigin : '0 50% 0', ease: Power2.easeOut}, 0.03);
                }});

                if(next){
                  var nextY = (document.querySelector('.projects__details').clientHeight + 152) + (document.querySelector('.projects__details_content').clientHeight + 55) + ((window.innerWidth / 100) * 20) - document.querySelector('.projects__list').getBoundingClientRect().top - next.offsetTop;
                  var naxtCaseY = (document.querySelector('.projects__details').clientHeight + 152) + (document.querySelector('.projects__details_content').clientHeight + 55) + ((window.innerWidth / 100) * 20);
                  var naxtCaseImg = document.querySelector('.projects__details').clientHeight + document.querySelector('.projects__details_content').clientHeight + 205;
                  TweenMax.set(next, {y : nextY, visibility : 'visible'});
                  TweenMax.set(document.querySelector('.projects__list_next-preview'), {display : 'block', y : naxtCaseImg});
                  TweenMax.set('.case-next', {top : naxtCaseY});
                  app.details.caseTransition = false;
                  TweenMax.to(document.querySelectorAll('.case-next span'), 0.4, {y : 13, delay : 1, onComplete : function(){
                    TweenMax.to(document.querySelectorAll('.case-next span'), 0.4, {y : 0, opacity : 1, onComplete : function(){
                      TweenMax.set(document.querySelectorAll('.case-next span'), {css : {'transition-duration' : '0.7s', 'letter-spacing': '0px', 'transition-timing-function' : 'cubic-bezier(0.895, 0.03, 0.685, 0.22)'}});
                    }});
                  }});
                  TweenMax.set(next.querySelectorAll('.left span'), {color : '#ffffff'})
                  TweenMax.to(next.querySelectorAll('h2 span'), 0.3, {y : '0%', opacity : 1, ease: Power1.easeOut});
                }else{                                    
                  app.projects.push({
                    name : 'Contact Us',
                    dataName : 'contacts'
                  });
                  setTimeout(function(){
                    next = document.querySelector('.projects__list li[data-name="contacts"]');
                    var nextY = (document.querySelector('.projects__details').clientHeight + 152) + (document.querySelector('.projects__details_content').clientHeight + 55) + ((window.innerWidth / 100) * 20) - document.querySelector('.projects__list').getBoundingClientRect().top - next.offsetTop;
                    var naxtCaseY = (document.querySelector('.projects__details').clientHeight + 152) + (document.querySelector('.projects__details_content').clientHeight + 55) + ((window.innerWidth / 100) * 20);                  
                    TweenMax.set(next, {y : nextY, visibility : 'visible'});
                  }, 50);                  
                }
              }});
              TweenMax.to('.projects__details', 0.7, {height : hd, onComplete : function(){
                TweenMax.set(['.projects__details_fields', '.projects__details_link'], {visibility : 'visible'});
                TweenMax.set(document.querySelectorAll('.projects__details_link span'), {opacity : 0});
                TweenMax.fromTo('.projects__details_fields h4 div', 0.5, {y : '100%'}, {y : '0%', onComplete : function(){
                  TweenMax.staggerFromTo(document.querySelectorAll('.projects__details_fields-text span'), 0.4, {opacity : 0, x : -50,  y:75, scale : 0, rotationY: 90, rotationZ:90, transformOrigin : '0 50% 0'}, {opacity : 1, x : 0,  y:0, scale : 1, rotationY: 0, rotationZ:0, transformOrigin : '0 50% 0', ease: Power2.easeOut}, 0.08);
                }});
                TweenMax.fromTo('.projects__details_link-border', 0.5, {width : '0'}, {width : '100%', onComplete : function(){
                  TweenMax.staggerFromTo(document.querySelectorAll('.projects__details_link span'), 0.15, {opacity : 0,  y:150, scale : 0, rotationY: 45, rotationZ:-45}, {opacity : 1,  y:0, scale : 1, rotationY: 0, rotationZ:0, ease: Power3.easeInOut}, 0.03);
                }});
              }});
            }})
          }});

          var data = app.details.detailsCases[name];          
          app.details.category.name = data.category;
          app.details.type.name = data.type;
          app.details.fields.name = data.fields;
          app.details.caseLink.url = data.fullCase;
          app.details.caseDescription.name = data.description;
          //TweenMax.set(document.querySelectorAll('.projects__list li.hover .left span'), {color : '#ffffff'});
          TweenMax.set(document.querySelectorAll('.projects__list li.hover .left span i'), {clearProps : 'all'});
          document.querySelector('.projects__list li.hover').classList.remove('hover');
          currentTarget.parentNode.parentNode.classList.add('hover');


        }});        
      }
      
    },
    closeDetails : function(e){
      var app = this;      
      TweenMax.to('.projects__scene', 0.5, {y : 0});
      app.scrollDetailsPermit = false;
      TweenMax.set(document.querySelectorAll(['.dda span', '.case-study span', '.case-next span']), {css : {'transition-duration' : '0.7s', 'letter-spacing': '20px', 'transition-timing-function' : 'cubic-bezier(0.895, 0.03, 0.685, 0.22)'}});      
      TweenMax.to(document.querySelectorAll(['.dda span', '.case-study span', '.case-next span']), 0.4, {y : 13, delay : 1, onComplete : function(){
        TweenMax.to(document.querySelectorAll('.dda span'), 0.4, {y : 0, opacity : 1, onComplete : function(){
          TweenMax.set(document.querySelectorAll('.dda span'), {css : {'transition-duration' : '0.7s', 'letter-spacing': '0px', 'transition-timing-function' : 'cubic-bezier(0.895, 0.03, 0.685, 0.22)'}});
        }});
      }});

      TweenMax.to(['.projects__details_client', '.projects__details_output', '.projects__details_fields', '.projects__details_link', '.projects__details_content'], 0.5, {opacity : 0, onComplete : function(){
        TweenMax.set('.projects__details_content', {height : '0', opacity : 1});        
        TweenMax.set(['.projects__details_client', '.projects__details_output', '.projects__details_fields', '.projects__details_link', '.projects__details_content-block'], {opacity : 1, visibility : 'hidden'});
        TweenMax.to('.projects__details__close i.l', 0.4, {rotationZ : 0, ease: Power3.easeIn});              
        TweenMax.to('.projects__details__close i.r', 0.4, {rotationZ : 0, ease: Power3.easeIn, onComplete : function(){
          TweenMax.set(['.projects__details__close i.l', '.projects__details__close i.r'], {left : 'auto', right : 0});         
          TweenMax.to(['.projects__details__close i.l', '.projects .projects__details__close i.r'], 0.7, {width : '0', opacity : 0, ease: Power4.easeIn, onComplete : function(){
            TweenMax.set('.projects__details__close', {visibility : 'hidden'});
          }});
        }});
        TweenMax.to('.projects__details', 0.7, {height : '33.2vw', onComplete : function(){
          TweenMax.to('.projects__details', 0.7, {width : '70vw', ease: Power1.easeOut, onComplete : function(){            
            TweenMax.to('.follow-us_title span', 0.5, { y: 0, onComplete : function(){
              TweenMax.staggerTo(['.follow-us li.be', '.follow-us li.ig', '.follow-us li.fb', '.follow-us li.dr'], 0.3, {y : 0}, 0.1,);
            }});
            TweenMax.to('.g-pager div', 0.4, {x : 0});
            TweenMax.to('.projects__details_slide-dots i', 0.35, {width : '40px', ease: Power1.easeOut, onComplete : function(){
              TweenMax.to(['.projects__details_slide-dots span', '.projects__details_slide-dots b'], 0.35, {y : '0%', ease: Power1.easeOut});
            }});            
            if(app.details.slide < document.querySelectorAll('.projects__list li').length){
              TweenMax.set(document.querySelector('.projects__list li.hover+li'), {y : 0, visibility : 'hidden'});
              if(document.querySelectorAll('.projects__list li[data-name="contacts"]').length){
                app.projects.pop();
              }
            }
            TweenMax.to('.projects__list li.hover', 0.8, {y : 0, ease: Power2.easeInOut, onComplete : function(){
              TweenMax.set('.projects__list li:not(.hover)', {y : 0, visibility : 'visible'});
              TweenMax.set(document.querySelectorAll('.projects__list li:not(.hover) span'), {y : '100%', opacity : 0.1, color : '#000000'});
              TweenMax.set(document.querySelectorAll('.projects__list li.hover span i'), {clearProps: "all"});              
              TweenMax.to(document.querySelectorAll('.projects__list li:not(.hover) span'), 0.3, {y : '0%', ease: Power1.easeOut, onComplete : function(){
                app.scrollListPermit = true;
                app.detailsActive = false;
                TweenMax.set(document.querySelectorAll('.projects__list li'), {clearProps: "all"});
              }});
            }});            
          }});
          TweenMax.staggerTo(document.querySelectorAll('.projects__list li.hover .left span i'), 0.5, {color : '#ffffff', ease: Power2.easeOut}, 0.03);
          TweenMax.to(document.querySelectorAll('.projects__list li.hover .tech b'), 0.3, {x : '0%', ease: Power1.easeOut});
          TweenMax.to(document.querySelector('.projects__list li.hover .left span'), 0.3, {x : window.innerWidth / 100 * 6.2, color : '#ffffff', opacity : 1, ease: Power3.easeInOut});
          TweenMax.to(document.querySelector('.projects__list li.hover .right span'), 0.3, {x : window.innerWidth / 100 * 6.2, color : '#000000', opacity : 1, ease: Power3.easeInOut});
        }});        
      }})      
    },
    hoverLinks : function(e, color){
      var app = this;      
      if(!color)color = app.cursor.hoverColor;      
      if(e.type == 'mouseenter'){        
        TweenMax.to('.cursor-ring', 0.2, {scale : 1.5});
        TweenMax.to('.progress-ring__circle', 0.2, {stroke : color});
      }else{        
        TweenMax.to('.cursor-ring', 0.2, {scale : 1});
        TweenMax.to('.progress-ring__circle', 0.2, {stroke : app.cursor.color});
      }      
    },
    mousewheel : function (val) {
      var app = this;
      var min = 0;
      var max = ((document.querySelector('.projects__details').clientHeight + 152) + (document.querySelector('.projects__details_content').clientHeight + 155)) - window.innerHeight; + 50;
      if(Number(app.details.slide) < document.querySelectorAll('.projects__list li').length)max = max + ((window.innerWidth / 100) * 24) + ((window.innerWidth / 100) * 21.3);
      
      if(app.scrollDetailsPermit){
        if((app.sceneTop <= 0 && val.deltaY < 0) || (app.sceneTop >= max && val.deltaY > 0))return false;
        if(app.sceneTop < 0)app.sceneTop = 0;
        if(app.sceneTop >= 0 && app.sceneTop <= max){
          app.sceneTop += (val.deltaY / 2);
        }else if(app.sceneTop > max){
          app.sceneTop = max;
        }
        console.log(val.deltaY);
        TweenMax.to('.projects__scene', 0.7, {y : -app.sceneTop});
      }      
    },
    onResize : function(e){
      var app = this;
      if(app.detailsActive){
        var hd = 200 + ((window.innerWidth / 100) * 33.2);
        var yCurrent = document.querySelector('.projects__list li.hover').offsetTop - (120 - document.querySelector('.projects__list').offsetTop - app.listTop);      
        var hc = document.querySelector('.projects__details_content-block').offsetHeight;
        var next = document.querySelector('.projects__list li.hover+li');
        if(next){
          var nextY = (document.querySelector('.projects__details').clientHeight + 152) + (document.querySelector('.projects__details_content').clientHeight + 55) + ((window.innerWidth / 100) * 20) - app.listTop - next.offsetTop;
          TweenMax.set(next, {y : nextY});
        }
        var naxtCaseY = (document.querySelector('.projects__details').clientHeight + 152) + (document.querySelector('.projects__details_content').clientHeight + 55) + ((window.innerWidth / 100) * 20);
        var naxtCaseImg = document.querySelector('.projects__details').clientHeight + document.querySelector('.projects__details_content').clientHeight + 205;
        TweenMax.set(document.querySelector('.projects__list_next-preview'), {y : naxtCaseImg});
        TweenMax.set('.projects__details_content', {height : hc});
        TweenMax.set('.case-next', {top : naxtCaseY});        
        TweenMax.set('.projects__details', {height : hd});
        TweenMax.set(document.querySelector('.projects__list li.hover'), {y : -yCurrent});
      }else{
        TweenMax.to(app.$refs.list, 0.6, {y : 0,});
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
          app.initDone = true;
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
  height: 100vh;
  transform: translate3d(0, 0, 0);
}
.projects__list {
  list-style: none;
  margin: 0 -1.7vw 0 -1.7vw;  
  padding-top: calc(12vw + 120px);
  padding-bottom: 6vw;
}
.projects__list li {
  display: flex;    
  position: relative;
  height: 21.3vw;
  margin-top: -13vw;
}
.projects__list li[data-name="contacts"] {
  visibility: hidden;
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
  cursor: pointer;
  overflow: hidden;  
  position: relative;
  z-index: 1;
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
.projects__list_next-preview {
  background: #fff;
  width: 70vw;
  height: 33.2vw;
  position: absolute;
  display: none;
  right: -70vw;
  top: 152px;
  background-repeat: no-repeat;
  background-position: left center;
  background-size: 59vw 100%;  

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
.projects__details_content {
  width: 74vw;
  position: fixed;
  right: 11vw;
  height: 0;
  background-color: #fff;
  overflow: hidden;  
  top: calc(1vw * 33.2 + 152px + 200px + 55px);  
}
.projects__details_content-block {
  font-size: 18px;
  line-height: 30px;
  padding: 120px 140px 120px 15vw;
  visibility: hidden;
}
.projects__details_content-block h4 {
  margin: 0 0 10px 0;
  padding: 0;
  font-size: 10px;
  line-height: 1;
  font-weight: normal;
  color: #000;
  text-transform: uppercase;
  overflow: hidden;  
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
.case-next {
  width: 56px;
  font-size: 10px;
  line-height: 12px;
  font-weight: 400;
  text-transform: uppercase;
  transform: rotate(270deg);
  position: fixed;
  left: 59px;
  top: 0;
  letter-spacing: -0.2px;
  z-index: 5;    
}
.case-next > div {
  overflow: hidden;
  width: 200px;  
}
.case-next > div > span {
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
  right: 5.5vw;
  cursor: pointer;
  transform: translateX(50%);
  z-index: 1;
  visibility: hidden;
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
