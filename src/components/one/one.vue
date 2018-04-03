<template>
  <div class='app'>
      <router-view></router-view>
  </div>
</template>

<script>
  export default {
       methods:{
          haha:function(){
              console.log(1)
          }
      },
       watch:{
    	$route(to,form){
    		if(to.path=='/one/index2'){
    		}
    	}
    },
  }
</script>

<style>
  
</style>
