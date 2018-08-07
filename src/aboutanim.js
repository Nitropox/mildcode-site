export default {
    delay(fn, t) {
        // private instance variables
        var queue = [], self, timer;
        
        function schedule(fn, t) {
            timer = setTimeout(function() {
                timer = null;
                fn();
                if (queue.length) {
                    var item = queue.shift();
                    schedule(item.fn, item.t);
                }
            }, t);            
        }
        self = {
            delay: function(fn, t) {
                // if already queuing things or running a timer, 
                //   then just add to the queue
                if (queue.length || timer) {
                    queue.push({fn: fn, t: t});
                } else {
                    // no queue or timer yet, so schedule the timer
                    schedule(fn, t);
                }
                return self;
            },
            cancel: function() {
                clearTimeout(timer);
                queue = [];
                return self;
            }
        };
        return self.delay(fn, t);
    },
      //end delay util fn
     about_text_animation(){
      //document.getElementById("burger").classList.add("anim-faded");
        this.delay(function(){
          var tag="about-h1";
          var tekst="Hello!";
          var k=0;
          var spd=100;
          function typeW() {
            if (k < tekst.length) { 
              document.getElementById(tag).innerHTML += tekst.charAt(k);
              k++;
              setTimeout(typeW,spd);
            }
          }
          typeW();
        },1500).delay(function(){
          var k=0;
          var tag="p1";
          var spd=20;
          var tekst="My name is Adam, I'am a web developer and programmer living in Warsaw, Poland.";
          
          function typeW() {
            if (k < tekst.length) { 
              document.getElementById(tag).innerHTML += tekst.charAt(k);
              k++;
              setTimeout(typeW,spd);
            }
          }
          typeW();
        },500).delay(function(){
          var k=0;
          var spd=20;
          var tag="p2";
          var tekst="I enjoy building websites for small business and custom wordpress themes.";
         
          function typeW() {
            if (k < tekst.length) {
              document.getElementById(tag).innerHTML += tekst.charAt(k);
              k++;
              setTimeout(typeW,spd);
            }
          }
          typeW();
        },1600).delay(function(){
          var k=0;
          var spd=20;
          var tag="p3";
          var tekst="I am passionate about computer technology and I constantly try to improve my skills.";
         
          function typeW() {
            if (k < tekst.length) { 
              document.getElementById(tag).innerHTML += tekst.charAt(k);
              k++;
              setTimeout(typeW,spd);
            }
          }
          typeW();
       },1500).delay(function(){
          var k=0;
          var spd=20;
          var tag="p4";
          var tekst="I am active student at Warsaw University of Technology at the departament of Electronics and Information Technology.";
         
          function typeW() {
            if (k < tekst.length) {
              document.getElementById(tag).innerHTML += tekst.charAt(k);
              k++;
              setTimeout(typeW,spd);
            }
          }
          typeW();
      },1700).delay(function(){
        var k=0;
        var spd=20;
        var tag="p5";
        var tekst="Check out my portfolio and contact page if you wish to reach me :)";
       
        function typeW() {
          if (k < tekst.length) {
            document.getElementById(tag).innerHTML += tekst.charAt(k);
            k++;
            setTimeout(typeW,spd);
          }
        }
        typeW();
      },2400).delay(function(){
        document.getElementById("burger").classList.remove("anim-faded");
      },1300); 
      }      
};