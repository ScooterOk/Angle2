<template>
  <div id="app-start">        
    <ul class="text" ref='scooterok'>
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
  </div>    
</template>

<script>
export default {
  props : ['mouseX'],
  mounted : function () {    
    this.show = true;
    this.enter();
  },
  destroyed : function(){
    
  },
  data () {
    return {
      row1: 'look at your',
      row2: 'product from',
      row3: 'a different',
      row4: 'angle',
      mouseMove : true
    }
  },
  watch : {
    mouseX : function (val, oldVal) {
      if(this.mouseMove){
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
    }
  },
  methods : {    
    enter: function () {
        var app = this;        
        TweenMax.fromTo([this.$refs.l1, this.$refs.l3], 1.5, {css : {transform : 'rotate(-15deg) skewX(-15deg) translateX(-100vw)', opacity : '0'}}, {opacity : 1, css : {transform : 'rotate(-15deg) skewX(-15deg) translateX(0)', opacity : '1'},ease: Power4.easeOut});
        TweenMax.fromTo([this.$refs.r1, this.$refs.r3], 1.5, {css : {transform : 'rotate(15deg) skewX(15deg) translateX(-100vw)', opacity : '0'}}, {opacity : 1, css : {transform : 'rotate(15deg) skewX(15deg) translateX(0)', opacity : '1'},ease: Power4.easeOut});
        TweenMax.fromTo([this.$refs.l2, this.$refs.l4], 1.5, {css : {transform : 'rotate(-15deg) skewX(-15deg) translateX(100vw)', opacity : '0'}}, {opacity : 1, css : {transform : 'rotate(-15deg) skewX(-15deg) translateX(0)', opacity : '1'},ease: Power4.easeOut});
        TweenMax.fromTo([this.$refs.r2, this.$refs.r4], 1.5, {css : {transform : 'rotate(15deg) skewX(15deg) translateX(100vw)', opacity : '0'}}, {opacity : 1, css : {transform : 'rotate(15deg) skewX(15deg) translateX(0)', opacity : '1'},ease: Power4.easeOut});
    },
    leave: function () {
        this.mouseMove = false;
        TweenMax.to([this.$refs.l1, this.$refs.l3], 0.6, {css : {transform : 'rotate(-15deg) skewX(-15deg) translateX(-100vw)'}, ease: Power2.easeIn});
        TweenMax.to([this.$refs.r1, this.$refs.r3], 0.6, {css : {transform : 'rotate(15deg) skewX(15deg) translateX(-100vw)'}, ease: Power2.easeIn});
        TweenMax.to([this.$refs.l2, this.$refs.l4], 0.6, {css : {transform : 'rotate(-15deg) skewX(-15deg) translateX(100vw)'}, ease: Power2.easeIn});
        TweenMax.to([this.$refs.r2, this.$refs.r4], 0.6, {css : {transform : 'rotate(15deg) skewX(15deg) translateX(100vw)'}, ease: Power2.easeIn});
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
.text li .text-wrapper {
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
