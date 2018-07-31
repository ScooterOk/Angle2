import './assets/css/normalize.css';
import './assets/css/vue2-scrollbar.css';
import {TweenMax, Power2, TimelineLite} from "gsap";
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource'
import Menu from './Menu.vue';
import App from './App.vue';
import Start from './Start.vue';
import Process from './Process.vue';
import Projects from './Projects.vue';
import Contacts from './Contacts.vue';

console.log(Menu);
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.http.options.emulateJSON = true;
router = new VueRouter({
	routes : [
		{path: '/', name : 'home', component : Start },
		{path: '/process', name : 'process', component : Process },
		{path: '/projects', name : 'projects', component : Projects },
		{path: '/contacts', name : 'contacts', component : Contacts }
	]
});


app = new Vue({
  el: '#app',
  router : router,
  render: h => h(App)
})

