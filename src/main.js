import {TweenMax, Power2, TimelineLite} from "gsap";
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Start from './Start.vue';
import Process from './Process.vue';

Vue.use(VueRouter);
router = new VueRouter({	
	routes : [
		{path: '/', name : 'Home', component : Start },
		{path: '/process', name : 'Process', component : Process },
	]
});


app = new Vue({
  el: '#app',
  router : router,
  render: h => h(App)
})

