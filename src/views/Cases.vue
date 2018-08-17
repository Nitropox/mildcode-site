<template>
    <section id="cases-page" class="cases-page center">
        <carousel-3d :controls-visible="showControls" :width="320" :height="h" :perspective="10" :display="9" :space="300"
        @after-slide-change="onAfterSlideChange" :controls-prev-html="'&#10092;'" :controls-next-html="'&#10093;'" 
               :controls-width="30" :controls-height="60" >
            <slide :index="0">
                  <div class="single-site">
                    <img class="pix" src="../assets/img/sites/sites-mildcode.png" alt="mildcode"/>
                </div>
                <figcaption>
                    <div class="information" :class="{infoshow: indx == 0, infohide: indx != 0 }">
                        <p>This site is built with Vue, Vuex and Vue-Router :]</p>
                        <p>Design: <a href="http://mildcode.com">mildcode</a></p>
                        <div class="center">
                            <div class="icon-wrap"><img class="info-icon" src="../assets/img/icons/icon-three.png" alt="html5-css3-js"/></div>
                             <div class="icon-wrap"><img class="info-icon" src="../assets/img/icons/vue.png" alt="vue"/></div>
                        </div>
                        <div>
                            <a class="visit center" href="https://github.com/Nitropox/mildcode-site" target="_blank">Git it!</a>
                        </div> 
                    </div>
                </figcaption>   
            </slide>
            <slide :index="1">
                 <div class="single-site">
                    <img class="pix" src="../assets/img/sites/sites-adamrosiak.png" alt="adam rosiak"/>
                </div>
                <figcaption>
                    <div class="information" :class="{infoshow: indx == 1, infohide: indx != 1 }">
                        <p>Did I mention that I am also a music composer and sound designer?</p>
                        <p>Design: <a href="http://mildcode.com">mildcode</a></p>
                        <div class="center">
                            <div class="icon-wrap"><img class="info-icon" src="../assets/img/icons/icon-three.png" alt="html5-css3-js"/></div>
                            <div class="icon-wrap"><img class="info-icon" src="../assets/img/icons/jq.png" alt="jquery"></div>
                            <div class="icon-wrap"><img class="info-icon" src="../assets/img/icons/bootstrap.png" alt="bootstrap"/></div>
                        </div>
                        <div>
                            <a class="visit center" href="http://adamrosiak.com" target="_blank">enter</a>
                        </div> 
                    </div>
                </figcaption>
            </slide>
            <slide :index="2">
                <div class="single-site">
                   <img class="pix" src="../assets/img/sites/sites-residial.png" alt="residial"/>
                </div>
                <figcaption>
                    <div class="information" :class="{infoshow: indx == 2, infohide: indx != 2 }">
                        <p>Custom RWD Wordpress theme, crafted for needs of private detective bureau.</p>
                        <p>Design: <a href="mailto:piotr.weiss@gmail.com">Weiss</a></p>
                        <div class="center">
                            <div class="icon-wrap"><img class="info-icon" src="../assets/img/icons/icon-three.png" alt="html5-css3-js"/></div>
                            <div class="icon-wrap"><img class="info-icon" src="../assets/img/icons/jq.png" alt="jquery"></div>
                            <div class="icon-wrap"><img class="info-icon" src="../assets/img/icons/php.png" alt="php"/></div>
                            <div class="icon-wrap"><img class="info-icon" src="../assets/img/icons/wordpress-icon.png" alt="wordperess"/></div>
                        </div>
                        <div>
                            <a class="visit center" href="http://residial.pl" target="_blank">enter</a>
                        </div> 
                    </div>
                </figcaption>
            </slide>
            <slide :index="3">
                <div class="single-site">
                   <img class="pix" src="../assets/img/sites/sites-koneczny.png" alt="koneczny"/>
                </div>
                <figcaption>
                    <div class="information" :class="{infoshow: indx == 3, infohide: indx != 3 }">
                        <p>Pure html RWD static site built from scratch.</p>
                        <p>Design: <a href="mailto:piotr.weiss@gmail.com">Weiss</a></p>
                        <div class="center">
                            <div class="icon-wrap"><img class="info-icon" src="../assets/img/icons/icon-three.png" alt="html5-css3-js"/></div>
                            <div class="icon-wrap"><img class="info-icon" src="../assets/img/icons/jq.png" alt="jquery"></div>
                        </div>
                        <div>
                            <a class="visit center" href="http://konecznyclinic.com" target="_blank">enter</a>
                        </div> 
                    </div>
                </figcaption>
            </slide>
            <slide :index="4">
                 <div class="single-site">
                  <img class="pix" src="../assets/img/sites/sites-drykier.png" alt="drykier"/>
                </div>
                <figcaption>
                    <div class="information" :class="{infoshow: indx == 4, infohide: indx != 4 }">
                        <p>This is my father's site. He is a very skilled artisan.</p>
                        <p>Design: <a href="http://mildcode.com">mildcode</a></p>
                        <div class="center">
                            <div class="icon-wrap"><img class="info-icon" src="../assets/img/icons/icon-three.png" alt="html5-css3-js"/></div>
                            <div class="icon-wrap"><img class="info-icon" src="../assets/img/icons/jq.png" alt="jquery"></div>
                            <div class="icon-wrap"><img class="info-icon" src="../assets/img/icons/bootstrap.png" alt="bootstrap"/></div>
                        </div>
                        <div>
                            <a class="visit center" href="http://drykier.com" target="_blank">enter</a>
                        </div> 
                    </div>
                </figcaption> 
            </slide>
            <slide :index="5">
                 <div class="single-site">
                    <img class="pix" src="../assets/img/sites/sites-brkrakus.png" alt="brkrakus"/>
                </div>
                <figcaption>
                    <div class="information" :class="{infoshow: indx == 5, infohide: indx != 5 }">
                        <p>Accounting office RWD onepage site.</p>
                        <p>Design: <a href="mailto:piotr.weiss@gmail.com">Weiss</a></p>
                        <div class="center">
                            <div class="icon-wrap"><img class="info-icon" src="../assets/img/icons/icon-three.png" alt="html5-css3-js"/></div>
                            <div class="icon-wrap"><img class="info-icon" src="../assets/img/icons/jq.png" alt="jquery"></div>
                            <div class="icon-wrap"><img class="info-icon" src="../assets/img/icons/php.png" alt="php"/></div>
                            <div class="icon-wrap"><img class="info-icon" src="../assets/img/icons/bootstrap.png" alt="bootstrap"/></div>
                        </div>
                        <div>
                            <a class="visit center" href="http://brkrakus.eu" target="_blank">enter</a>
                        </div> 
                    </div>
                </figcaption>    
            </slide>
            <slide :index="6">
                <div class="single-site">
                    <img class="pix" src="../assets/img/sites/sites-kraina.png" alt="kraina lipecka"/>
                </div>
                <figcaption>
                    <div class="information" :class="{infoshow: indx == 6, infohide: indx != 6 }">
                        <p>Have you ever been to Kraina Lipecka?</p>
                        <p>Design: <a href="mailto:piotr.weiss@gmail.com">Weiss</a></p>
                        <div class="center">
                            <div class="icon-wrap"><img class="info-icon" src="../assets/img/icons/icon-three.png" alt="html5-css3-js"/></div>
                            <div class="icon-wrap"><img class="info-icon" src="../assets/img/icons/jq.png" alt="jquery"></div>
                            <div class="icon-wrap"><img class="info-icon" src="../assets/img/icons/bootstrap.png" alt="bootstrap"/></div>
                        </div>
                        <div>
                            <a class="visit center" href="http://mildcode.com/krainalipecka.pl" target="_blank">enter</a>
                        </div> 
                    </div>
                </figcaption>  
            </slide>
            <slide :index="7">
                 <div class="single-site">
                   <img class="pix" src="../assets/img/sites/sites-fizjocoach.png" alt="fizjocoach"/>
                </div>
                <figcaption>
                    <div class="information" :class="{infoshow: indx == 7, infohide: indx != 7 }">
                        <p>If you need a physpiteraphist this site is for you!</p>
                        <p>Design: <a href="mailto:piotr.weiss@gmail.com">Weiss</a></p>
                        <div class="center">
                            <div class="icon-wrap"><img class="info-icon" src="../assets/img/icons/icon-three.png" alt="html5-css3-js"/></div>
                            <div class="icon-wrap"><img class="info-icon" src="../assets/img/icons/jq.png" alt="jquery"></div>
                            <div class="icon-wrap"><img class="info-icon" src="../assets/img/icons/php.png" alt="php"/></div>
                            <div class="icon-wrap"><img class="info-icon" src="../assets/img/icons/bootstrap.png" alt="bootstrap"/></div>
                        </div>
                        <div>
                            <a class="visit center" href="http://mildcode.com/fizjocoach.com" target="_blank">enter</a>
                        </div> 
                    </div>
                </figcaption> 
            </slide>
            <slide :index="8">
                  <div class="single-site">
                    <img class="pix" src="../assets/img/sites/sites-platige.png" alt="platige"/>
                </div>
                <figcaption>
                    <div class="information" :class="{infoshow: indx == 8, infohide: indx != 8 }">
                        <p>The deadline was set for tommorow. I did this site the very same day thx to bootstrap.</p>
                        <p>Design: <a href="https://platige.com">Platige Image</a></p>
                        <div class="center">
                            <div class="icon-wrap"><img class="info-icon" src="../assets/img/icons/icon-three.png" alt="html5-css3-js"/></div>
                            <div class="icon-wrap"><img class="info-icon" src="../assets/img/icons/jq.png" alt="jquery"></div>
                            <div class="icon-wrap"><img class="info-icon" src="../assets/img/icons/bootstrap.png" alt="bootstrap"/></div>
                        </div>
                        <div>
                            <a class="visit center" href="https://3dlivetheatre.com/" target="_blank">enter</a>
                        </div> 
                    </div>
                </figcaption>   
            </slide>
        </carousel-3d>
     
        </section>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';

export default {
  name: 'cases',
  components: {
    Carousel3d,
    Slide
  },
  data(){
    return{
        slides: 9,
        indx: 0,   //needed to show figcaptions on current slide  
        windowHeight: 0,
        windowWidth: 0, 
        h: 0, // needed for responsive carousel slide height
        showControls: true  
    }
  },
  methods:{
    onAfterSlideChange(index) {
        this.indx = index;
    },
     getWindowHeight(event) {
        this.windowHeight = document.documentElement.clientHeight;
        if(this.windowHeight<600){
            this.h = 0.9*this.windowHeight;
        }else {
            this.h = 640;
        }
      },
      getWindowWidth(event) {
        this.windowWidth = document.documentElement.clientWidth;
        if(this.windowWidth < 600){
            this.showControls = false;
        }else{
            this.showControls = true;
        }
      },
  },
  mounted() {
    this.$nextTick(function() {
        window.addEventListener('resize', this.getWindowHeight);
        window.addEventListener('resize', this.getWindowWidth);
        //Init
        this.getWindowHeight();
        this.getWindowWidth();
  })},
}


</script>

<style lang="scss">
.default-page{
    height: 100vh;
    width: 100vw;
    display:flex;
    flex-direction: row;
    position: fixed;
    overflow: auto;
    }

.carousel-3d-container figcaption {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.9);
    color: #fff;
    bottom: 0;
    padding: 15px;
    min-width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
}

@font-face {
    font-family: "pi";
    src: url(../assets/fonts/test6.OTF); }


.information{
    font-family: 'pi', sans-serif;
    font-size: 1em;
    height: 0;
     transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.infoshow{
   height: 220px;
}

.infohide{
   height: 0;
}
.information a{
    color:#66FCF1;
}

.icon-wrap{
    width: 70px;
    margin-bottom: 30px;
}
 .info-icon{
    display: block;
    width: 70px !important;
    height: auto;
    padding: 0 10px;
 }



</style>
