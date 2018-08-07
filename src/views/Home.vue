<template>
  <div class="default-page center">
    <div class="logo-wrapper">                      
        <div id="mildcode" class="mildcode"></div> 
        <div id="redbox" class="redbox"></div>                  
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data(){
    return{
      myVar: null //id needed to clearInterval
    }
  },
  beforeMount(){
     //blinking cursor
  this.myVar = setInterval(function(){ setColor() }, 300);
  function setColor() {
      var x = document.getElementById("redbox");
      x.style.backgroundColor = x.style.backgroundColor == "transparent" ? "#45A29E" : "transparent";
  }
  //typewriter
  var i = 0;
  var txt = 'mildcode'; 
  var speed = 130; 

  function typeWriter() {
   
    if (i < txt.length) {
      document.getElementById("mildcode").innerHTML += txt.charAt(i);
      i++;    
      setTimeout(typeWriter, speed);
      if(i==8) {
        setTimeout(function(){
          document.getElementById("burger").classList.remove("anim-faded");
        }, 300); 
      }
    }
  }

setTimeout(typeWriter, 1000);
  },
  destroyed(){
    clearInterval(this.myVar);
  }
}
</script>

<style>
.default-page{
    height: 100vh;
    width: 100vw;
    display:flex;
    flex-direction: row;
    position: fixed;
    overflow: auto;
    }
</style>
