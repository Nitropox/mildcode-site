<template>
 <section id="about-page" class="starting-page">
            <div id="ab" :class="{ aboutIn: $store.state.activePage == '/about'}" class="about-text about-contener">
                <div id="about-child" class="about-child">
                     <h1 id="about-h1"></h1>
                     <p id="p1"></p>
                     <p id="p2"></p>
                     <p id="p3"></p>
                     <p id="p4"></p>
                     <p id="p5"></p>
                </div>
             </div>
             <div class="avideo-contener center unselectable">
                 <video class="vide" autoplay muted loop id="avideo" poster="../assets/video/video_coding/coding.jpg" :class="{ videoIn: $store.state.activePage == '/about'}">
                     <source src="../assets/video/video_coding/coding.mp4"  type="video/mp4">
                 </video>
             </div>
        </section>
</template>

<script>

export default {
  name: 'about',
 
  data(){
    return{
      tekst: 'Stymuluj',
      st1: null,
      st2: null,
      st3: null,
      st4: null,
      st5: null,
      st6: null,
    }
  },
   mounted(){
      this.st1 = setTimeout(function(){
        var tag="about-h1";
          var tekst="Hello!";
          var k=0;
          var spd=100;
          function typeW() {
            if (k < tekst.length && document.getElementById(tag) != null) { 
              document.getElementById(tag).innerHTML += tekst.charAt(k);
              k++;
              setTimeout(typeW,spd);
            }
          }
          typeW();
      },1500);
      this.st2 = setTimeout(function(){
          var tag="p1";
          var tekst="My name is Adam, I'am a web developer and programmer living in Warsaw, Poland.";
          var k=0;
          var spd=20;
          function typeW() {
            if (k < tekst.length && document.getElementById(tag) != null) { 
              document.getElementById(tag).innerHTML += tekst.charAt(k);
              k++;
              setTimeout(typeW,spd);
            }
          }
          typeW();
      },2000);
      this.st3 = setTimeout(function(){
          var tag="p2";
          var tekst="I enjoy building websites for small business and custom wordpress themes.";
          var k=0;
          var spd=20;
          function typeW() {
            if (k < tekst.length && document.getElementById(tag) != null) { 
              document.getElementById(tag).innerHTML += tekst.charAt(k);
              k++;
              setTimeout(typeW,spd);
            }
          }
          typeW();
      },3600);
      this.st4 = setTimeout(function(){
          var tag="p3";
          var tekst="I am passionate about computer technology and I constantly try to improve my skills.";
          var k=0;
          var spd=20;
          function typeW() {
            if (k < tekst.length && document.getElementById(tag) != null) { 
              document.getElementById(tag).innerHTML += tekst.charAt(k);
              k++;
              setTimeout(typeW,spd);
            }
          }
          typeW();
      },5100);
      this.st5 = setTimeout(function(){
          var tag="p4";
          var tekst="I am active student at Warsaw University of Technology at the departament of Electronics and Information Technology.";
          var k=0;
          var spd=20;
          function typeW() {
            if (k < tekst.length && document.getElementById(tag) != null) { 
              document.getElementById(tag).innerHTML += tekst.charAt(k);
              k++;
              setTimeout(typeW,spd);
            }
          }
          typeW();
      },6800);
      this.st6 = setTimeout(function(){
          var tag="p5";
          var tekst="Check out my portfolio and contact page if you wish to reach me :)";
          var k=0;
          var spd=20;
          function typeW() {
            if (k < tekst.length && document.getElementById(tag) != null) { 
              document.getElementById(tag).innerHTML += tekst.charAt(k);
              k++;
              setTimeout(typeW,spd);
            }
          }
          typeW();
      },8100);
    

  },
   beforeDestroy(){
    document.getElementById("ab").classList.add("aboutOut");
    document.getElementById("avideo").classList.remove("videoIn");
  },
  destroyed(){
    clearTimeout(this.st1);
    clearTimeout(this.st2);
    clearTimeout(this.st3);
    clearTimeout(this.st4);
    clearTimeout(this.st5);
    clearTimeout(this.st6);
    document.getElementById("about-h1").innerHTML = '';
    document.getElementById("p1").innerHTML = '';
    document.getElementById("p2").innerHTML = '';
    document.getElementById("p3").innerHTML = '';
    document.getElementById("p4").innerHTML = '';
    document.getElementById("p5").innerHTML = '';
  }
  
}
</script>

<style>
 .aboutIn{
    animation: aboutInAnim 1s;
    animation-delay: 0.5s;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
}

@keyframes aboutInAnim {
    0%   {width:0; height: 0; padding:0;}
    25%  {width: 100vw; height: 0; padding: 0}
    50%  {width: 100%; height: 384px; padding: 0}
    100% {padding: 20px;width: 100vw;height: 384px;}
}

.aboutOut{
  animation: aboutOutAnim 0.8s;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
}

@keyframes aboutOutAnim {
    0%   {width:100%; height: 384px; padding:20px;}
    50%  {width: 100%; height: 0; padding: 0px}
    75%  {width: 20%; height: 0; padding: 0px}
    100% {width: 0; height: 0; padding: 0}
}

.videoIn{
  animation: videoInAnim 1s;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
}

@keyframes videoInAnim {
    from {opacity: 0}
    to {opacity:100}
}


</style>