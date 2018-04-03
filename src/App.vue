<template>
  <div id="app">
    <div class='top'>我是头</div>
     <div class='view'>
       <router-view/>
     </div>
    <div class='box'> 
      <div class="btn1">1</div>
      <div class="btn2">2</div>
      <div class="btn3">3</div>
      <div class="btn4">4</div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        oneXb:'/index1'
      }
    },
    methods:{
      
    },
    mounted(){			
      let btn1=document.querySelector('.btn1');
      let btn2=document.querySelector('.btn2');
      let btn3=document.querySelector('.btn3');
      let btn4=document.querySelector('.btn4');
      btn1.onclick=()=>{
          this.$router.push({path:'/one'+ this.oneXb});  //这个是第一个点击按钮不一样的地方
          console.log(1)
      }
      btn2.onclick=()=>{
          this.$router.push({path:'/two'});
      }
      btn3.onclick=()=>{
          this.$router.push({path:'/three'});
      }
      btn4.onclick=()=>{
          this.$router.push({path:'/si'});
      }
    },    
    
    watch:{
    	$route(to,form){
    		if(to.path=='/one/index2'){    //这个是重点
    			this.oneXb = '/index2'
        }
        if(to.path=='/one/index1'){
    			this.oneXb = '/index1'
    		}
    	}
    }


  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.top{
  width: 100%;
  height: 60px;
  background: yellow; 
  text-align: center; 
  line-height: 60px;
}
.view{
  width: 100%;
  height: 500px;
  background: cadetblue
}
.box{
  width: 100%;
  height: 60px;
  background: #abcdef;
 
}
.box>div{
  width: 200px;
  margin: 0 10px;   
  height: 60px;
  background: red;
  float: left;
}
</style>
