<template>
  <div id="app-start">
    <ul class="text portrait" v-if="portrait">
      <li class="left">
        <div class="text-wrapper">          
          <h2 ref="l1">{{text.mobile.row1}}</h2>
          <h2 ref="l2">{{text.mobile.row2}}</h2>
          <h2 ref="l3">{{text.mobile.row3}}</h2>
          <h2 ref="l4">{{text.mobile.row4}}</h2>
          <h2 ref="l5">{{text.mobile.row5}}</h2>
          <h2 ref="l6">{{text.mobile.row6}}</h2>
        </div>
      </li>
      <li class="right">
        <div class="text-wrapper">
          <h2 ref="r1">{{text.mobile.row1}}</h2>
          <h2 ref="r2">{{text.mobile.row2}}</h2>
          <h2 ref="r3">{{text.mobile.row3}}</h2>
          <h2 ref="r4">{{text.mobile.row4}}</h2>
          <h2 ref="r5">{{text.mobile.row5}}</h2>
          <h2 ref="r6">{{text.mobile.row6}}</h2>
        </div>
      </li>
    </ul>
    <ul class="text" v-else>
      <li class="left">
        <div class="text-wrapper">          
          <h2 ref="l1">{{text.desktop.row1}}</h2>
          <h2 ref="l2">{{text.desktop.row2}}</h2>
          <h2 ref="l3">{{text.desktop.row3}}</h2>
          <h2 ref="l4">{{text.desktop.row4}}</h2>
        </div>
      </li>
      <li class="right">
        <div class="text-wrapper">
          <h2 ref="r1">{{text.desktop.row1}}</h2>
          <h2 ref="r2">{{text.desktop.row2}}</h2>
          <h2 ref="r3">{{text.desktop.row3}}</h2>
          <h2 ref="r4">{{text.desktop.row4}}</h2>
        </div>
      </li>
    </ul>

  </div>    
</template>

<script>
export default {
  props : ['mouseX', 'gamma', 'mobile', 'resize'],  
  created : function(){
    this.orientation();
  },
  mounted : function () {
    var app = this;
    this.show = true;    
    this.enter();    
  },
  destroyed : function(){
    
  },
  data () {
    return {
      text : {
        desktop : {
          row1: 'look at your',
          row2: 'product from',
          row3: 'a different',
          row4: 'angle',    
        },
        mobile : {
          row1: 'look at ',          
          row2: 'your',
          row3: 'product',
          row4: 'from',
          row5 : 'a differ-',
          row6 : 'ent angle'
        },
      },
      portrait : undefined,
      mouseMove : true,
      show : false,
    }
  },
  watch : {
    resize : {
      handler: function (val, oldVal) {        
        this.onResize(val);
      },
      deep: true
    },
    mouseX : function (val, oldVal) {
      if(this.mouseMove){
        var rootX = -((window.innerWidth / 2) - val);
          document.querySelectorAll('#app-start .text h2').forEach(function(el, i, arr){
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
    },
    gamma : function (val, oldVal) {
      if(this.mouseMove){
        var rootX = -((window.innerWidth / 2) - val);
        document.querySelectorAll('.text h2').forEach(function(el, i, arr){
          var moveX = 100 / (45 / val);        
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
  methods : {    
    enter: function () {
        var app = this;        
        TweenMax.fromTo(document.querySelectorAll('.text .left h2:nth-child(odd)'), 1.5, {css : {transform : 'rotate(-15deg) skewX(-15deg) translateX(-100vw)', opacity : '0'}}, {opacity : 1, css : {transform : 'rotate(-15deg) skewX(-15deg) translateX(0)', opacity : '1'},ease: Power4.easeOut});
        TweenMax.fromTo(document.querySelectorAll('.text .right h2:nth-child(odd)'), 1.5, {css : {transform : 'rotate(15deg) skewX(15deg) translateX(-100vw)', opacity : '0'}}, {opacity : 1, css : {transform : 'rotate(15deg) skewX(15deg) translateX(0)', opacity : '1'},ease: Power4.easeOut});
        TweenMax.fromTo(document.querySelectorAll('.text .left h2:nth-child(even)'), 1.5, {css : {transform : 'rotate(-15deg) skewX(-15deg) translateX(100vw)', opacity : '0'}}, {opacity : 1, css : {transform : 'rotate(-15deg) skewX(-15deg) translateX(0)', opacity : '1'},ease: Power4.easeOut});
        TweenMax.fromTo(document.querySelectorAll('.text .right h2:nth-child(even)'), 1.5, {css : {transform : 'rotate(15deg) skewX(15deg) translateX(100vw)', opacity : '0'}}, {opacity : 1, css : {transform : 'rotate(15deg) skewX(15deg) translateX(0)', opacity : '1'},ease: Power4.easeOut});                
    },
    leave: function () {
      var app = this;
      return new Promise(function(resolve, reject) {
        resolve();
        app.mouseMove = false;
        TweenMax.to(document.querySelectorAll('.text .left h2:nth-child(odd)'), 0.6, {css : {transform : 'rotate(-15deg) skewX(-15deg) translateX(-100vw)'}, ease: Power2.easeIn});
        TweenMax.to(document.querySelectorAll('.text .right h2:nth-child(odd)'), 0.6, {css : {transform : 'rotate(15deg) skewX(15deg) translateX(-100vw)'}, ease: Power2.easeIn});
        TweenMax.to(document.querySelectorAll('.text .left h2:nth-child(even)'), 0.6, {css : {transform : 'rotate(-15deg) skewX(-15deg) translateX(100vw)'}, ease: Power2.easeIn});
        TweenMax.to(document.querySelectorAll('.text .right h2:nth-child(even)'), 0.6, {css : {transform : 'rotate(15deg) skewX(15deg) translateX(100vw)'}, ease: Power2.easeIn});
      });        
    },
    longLeave : function(){      
        this.mouseMove = false;
        TweenMax.to([this.$refs.l1, this.$refs.l3], 2.1, {css : {transform : 'rotate(-15deg) skewX(-15deg) translateX(-100vw)'}, ease: Power2.easeIn});
        TweenMax.to([this.$refs.r1, this.$refs.r3], 2.1, {css : {transform : 'rotate(15deg) skewX(15deg) translateX(-100vw)'}, ease: Power2.easeIn});
        TweenMax.to([this.$refs.l2, this.$refs.l4], 2.1, {css : {transform : 'rotate(-15deg) skewX(-15deg) translateX(100vw)'}, ease: Power2.easeIn});
        TweenMax.to([this.$refs.r2, this.$refs.r4], 2.1, {css : {transform : 'rotate(15deg) skewX(15deg) translateX(100vw)'}, ease: Power2.easeIn});
    },
    longLeaveCancel : function(){
        this.mouseMove = true;
        TweenMax.to([this.$refs.l1, this.$refs.l3], 0.7, {css : {transform : 'rotate(-15deg) skewX(-15deg) translateX(0)'}, ease: Power2.easeIn});
        TweenMax.to([this.$refs.r1, this.$refs.r3], 0.7, {css : {transform : 'rotate(15deg) skewX(15deg) translateX(0)'}, ease: Power2.easeIn});
        TweenMax.to([this.$refs.l2, this.$refs.l4], 0.7, {css : {transform : 'rotate(-15deg) skewX(-15deg) translateX(0)'}, ease: Power2.easeIn});
        TweenMax.to([this.$refs.r2, this.$refs.r4], 0.7, {css : {transform : 'rotate(15deg) skewX(15deg) translateX(0)'}, ease: Power2.easeIn});
    },
    goNext : function(e){
      this.show = false;
    },    
    onResize : function(w){
      var app = this;      
      app.orientation();
      if(app.mobile){
        TweenMax.set('.preloader', {height: 60, y : -50});
      }else{
        TweenMax.set('.preloader', {height: 90, y : -70});
      }
      
    },
    orientation: function() {        
      var app = this;            
      if(app.mobile){
        if(app.resize.w < app.resize.h){
          app.portrait = true;
        }else{
          app.portrait = false;
        }          
      }
    }
  }
}
</script>

<style scope>
  #app-start {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .text {
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    position: relative;
    transform: perspective(400px);    
}
.text li {    
    height: 100%;
    position: absolute;
    top: 0;
    overflow: hidden;    
}
.text li.left {
    width: 50%;
    left: 0;
}
.text li.right {
    width: 50%;
    right: 0;
}
#app-start .text li .text-wrapper {
    text-align: left;
    padding: 120px 5vw 0 5vw;
}
.text li .text-wrapper {
    width: 200%;
}
.text li.right .text-wrapper {
  margin-left: -100%;
}
.text-wrapper h2 {    
    font-size: 10.7vw;
    margin: 0;
    padding: 0;
    line-height: 8.2vw;
    text-transform: uppercase;
    font-weight: 900;
    letter-spacing: -.45vw;
    display: table;
    margin: auto;    
}
.portrait .text-wrapper h2 {
    font-size: 13.7vw;
    line-height: 10.5vw;
}
.text li.left .text-wrapper h2 {
    color: #2af8eb;
    transform: rotate(-15deg) skewX(-15deg) translateX(0px);
    
}
.text li.right .text-wrapper h2 {
    color: #000;
    transform: rotate(15deg) skewX(15deg) translateX(0px);
}

@media screen and (max-width: 800px) {
  #app-start .text li .text-wrapper {
    text-align: left;
    padding: 65px 5vw 0 5vw;
  }
  #app-start .text.portrait li .text-wrapper {
    text-align: left;
    padding: 120px 5vw 0 5vw;
  }
  #app-start .text-wrapper h2 {
    font-size: 8.7vw;    
    line-height: 6.7vw;    
  }
}
</style>
