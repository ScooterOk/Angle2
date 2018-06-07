import {TweenMax, Power2, TimelineLite} from "gsap";
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Start from './Start.vue';
import Process from './Process.vue';
import Projects from './Projects.vue';

Vue.use(VueRouter);
router = new VueRouter({	
	routes : [
		{path: '/', name : 'home', component : Start },
		{path: '/process', name : 'process', component : Process },
		{path: '/projects', name : 'projects', component : Projects },
	]
});


app = new Vue({
  el: '#app',
  router : router,
  render: h => h(App)
})

