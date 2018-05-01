<template>
  <div id="app-start" >    
    <transition v-on:enter="enter" v-on:leave="leave">
      <ul class="text" ref='scooterok' v-show="show">
        <li class="left">
          <div class="text-wrapper">
            <h2 ref="l1">{{row1}}</h2>
            <h2 ref="l2">{{row2}}</h2>
            <h2 ref="l3">{{row3}}</h2>
            <h2 ref="l4">{{row4}}</h2>
          </div>
        </li>
        <li class="right">
          <div class="text-wrapper">
            <h2 ref="r1">{{row1}}</h2>
            <h2 ref="r2">{{row2}}</h2>
            <h2 ref="r3">{{row3}}</h2>
            <h2 ref="r4">{{row4}}</h2>
          </div>
        </li>
      </ul>
    </transition>    
  </div>    
</template>

<script>
export default {
  props : ['mouseX'],
  mounted : function () {
    this.show = true;
  },
  data () {
    return {
      row1: 'look at your',
      row2: 'product from',
      row3: 'a different',
      row4: 'angle',
      show : false,
      startDone : true

    }
  },
  watch : {
    mouseX : function (val, oldVal) {
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
  },
  methods : {
    liqydText : function(e){
      
    },    
    enter: function (el, done) {
        var app = this;        
        TweenMax.fromTo([this.$refs.l1, this.$refs.l3], 1.5, {css : {transform : 'rotate(-15deg) skewX(-15deg) translateX(-100vw)', opacity : '0'}}, {opacity : 1, css : {transform : 'rotate(-15deg) skewX(-15deg) translateX(0)', opacity : '1'},ease: Power4.easeOut, onComplete : function(){
          done();
        }});
        TweenMax.fromTo([this.$refs.r1, this.$refs.r3], 1.5, {css : {transform : 'rotate(15deg) skewX(15deg) translateX(-100vw)', opacity : '0'}}, {opacity : 1, css : {transform : 'rotate(15deg) skewX(15deg) translateX(0)', opacity : '1'},ease: Power4.easeOut, onComplete : function(){
          done();
        }});
        TweenMax.fromTo([this.$refs.l2, this.$refs.l4], 1.5, {css : {transform : 'rotate(-15deg) skewX(-15deg) translateX(100vw)', opacity : '0'}}, {opacity : 1, css : {transform : 'rotate(-15deg) skewX(-15deg) translateX(0)', opacity : '1'},ease: Power4.easeOut, onComplete : function(){
          done();
        }});
        TweenMax.fromTo([this.$refs.r2, this.$refs.r4], 1.5, {css : {transform : 'rotate(15deg) skewX(15deg) translateX(100vw)', opacity : '0'}}, {opacity : 1, css : {transform : 'rotate(15deg) skewX(15deg) translateX(0)', opacity : '1'},ease: Power4.easeOut, onComplete : function(){          
          app.startDone = true;          
          done();          
        }});
    },
    leave: function (el, done) {
        var app = this;
        app.startDone = false;
        TweenMax.to([this.$refs.l1, this.$refs.l3], 2, {css : {transform : 'rotate(-15deg) skewX(-15deg) translateX(-100vw)'},ease: Power3.easeOut, onComplete : function(){
          done();
        }});        
        TweenMax.to([this.$refs.r1, this.$refs.r3], 2, {css : {transform : 'rotate(15deg) skewX(15deg) translateX(-100vw)'},ease: Power3.easeOut, onComplete : function(){
          done();
        }});
        TweenMax.to([this.$refs.l2, this.$refs.l4], 2, {css : {transform : 'rotate(-15deg) skewX(-15deg) translateX(100vw)'},ease: Power3.easeOut, onComplete : function(){
          done();
        }});
        TweenMax.to([this.$refs.r2, this.$refs.r4], 2, {css : {transform : 'rotate(15deg) skewX(15deg) translateX(100vw)'},ease: Power3.easeOut, onComplete : function(){
          app.startDone = true;          
          done();          
        }});
    },
    goNext : function(e){
      this.show = false;
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
    z-index: 1;
    background-color: #fff;    
}
.text li.right {
    width: 100%;
    left: 0;
}
.text li .text-wrapper {
    text-align: left;
    padding: 120px 5vw 0 5vw;
}
.text li.left .text-wrapper {
    width: 200%;
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
.text li.left .text-wrapper h2 {
    color: #2af8eb;
    transform: rotate(-15deg) skewX(-15deg) translateX(0px);
    
}
.text li.right .text-wrapper h2 {
    color: #000;
    transform: rotate(15deg) skewX(15deg) translateX(0px);
}

@media screen and (min-width: 1700px) {
  .text li .text-wrapper {
      padding-top: 90px;
  }
}
</style>
