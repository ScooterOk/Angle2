<template>
  <div class="tab-description__text">
    <vue-scrollbar classes="my-scrollbar" ref="Scrollbar">
      <div v-html="tabText"></div>
    </vue-scrollbar>
  </div>
</template>

<script>

  import VueScrollbar from 'vue2-scrollbar';
  
  export default {
    components: { VueScrollbar },
    props : ['msg'],
    computed : {
      tabText : function(){
        var text = this.msg.split(' ');
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
      }
    },
    mounted : function(){
      TweenMax.staggerFromTo(document.querySelectorAll('.tab-description__text span'), 0.4, {opacity : 0, x : -50,  y:100, scale : 0, rotationY: 45, rotationZ:45, transformOrigin : '0 50% 0'}, {opacity : 1, x : 0,  y:0, scale : 1, rotationY: 0, rotationZ:0, transformOrigin : '0 50% 0', ease: Power2.easeOut}, 0.005);      
      setTimeout(function(){
        TweenMax.to('.vue-scrollbar__scrollbar-vertical', 0.15, {x : 0,});  
      },500);      
    },
    methods : {
      changeTabStart : function(){
        var app = this;
        var promise = new Promise(function(resolve, reject){
          TweenMax.to('.vue-scrollbar__scrollbar-vertical', 0.15, {x : 2, ease: Power4.easeOut});
          var t = document.querySelectorAll('.tab-description__text span');
          t = Array.prototype.slice.call(t, 0);
          TweenMax.staggerTo(t.reverse(), 0.4, {opacity : 0, x : -50, y : 100,  scale : 0, rotationY: 45, rotationZ:45, transformOrigin : '0 50% 0', ease: Power2.easeOut}, 0.005, resolve);
        });
        return promise;        
      },      
      leave : function(){
        TweenMax.to('.vue-scrollbar__scrollbar-vertical', 0.15, {x : 2, ease: Power4.easeOut});
        var t = document.querySelectorAll('.tab-description__text span');
        t = Array.prototype.slice.call(t, 0);
        TweenMax.staggerTo(t.reverse(), 0.4, {opacity : 0, x : -50, y : 100,  scale : 0, rotationY: 45, rotationZ:45, transformOrigin : '0 50% 0', ease: Power2.easeOut}, 0.005);
      }
    }
  };

</script>

<style>
  .vue-scrollbar__wrapper {    
    background-color: transparent;
    padding-right: 10px;
  }
  .vue-scrollbar__scrollbar-vertical {
    width: 2px;
    overflow: hidden;
    transform: translateX(2px);    
  }  
  .vue-scrollbar__area {
    padding-left: 50px;
  }
  .vue-scrollbar__scrollbar-vertical .scrollbar {
    width: 2px; 
  }
  .vue-scrollbar__scrollbar-vertical .scrollbar, .vue-scrollbar__scrollbar-horizontal .scrollbar {
    background-color: #bababa;
  }
</style>