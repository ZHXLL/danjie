<template>
  <div class='app'>
      <div class="left">
          <div class="btns" @click='zaodan'>
              立即体检
          </div>
      </div>
      <div class="right">
          
      </div>
  </div>
</template>

<script>
  export default {
      methods:{
          zaodan:function(){
              this.$router.push({path:'/one/index2'});
          }
      }
  }
</script>

<style>
  .app{
        width: 100%;
        height: 100%;
    }
    .left{
        width: 200px;
        height: 100%;
        background: #abcdab;
    }
    .btns{
        width: 100px;
        height: 20px;
        line-height: 20px;
        text-align: center;
        display: block;
        padding: 10px;
        background: deepskyblue;
    }
</style>
