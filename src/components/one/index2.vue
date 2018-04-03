<template>
  <div class='app'>
     我是体检的表格
     <button  @click='zaodan2'> 返回 </button>
  </div>
</template>

<script>
  export default {
      methods:{
          zaodan2:function(){
              this.$router.push({path:'/one/index1'});
          }
      }
  }
</script>

<style>

</style>
