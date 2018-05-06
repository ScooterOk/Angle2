<template>
  <div>
    <vue-scrollbar classes="my-scrollbar" ref="Scrollbar">
      <div class="scroll-me">
        {{msg}}
      </div>
    </vue-scrollbar>
  </div>
</template>

<script>

  import VueScrollbar from 'vue2-scrollbar';
  
  export default {
    components: { VueScrollbar },
    props : ['msg']    
  };

</script>

<style>
  .vue-scrollbar__wrapper {
    width: 50%;
    height: 500px;
  }
</style>