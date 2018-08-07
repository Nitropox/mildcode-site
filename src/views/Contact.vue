
 <template>
 <section class="starting-page">
            <div id="con" :class="{ aboutIn: $store.state.activePage == '/contact'}" class="about-text about-contener">
                <div id="about-child" class="about-child">
                    <h1>Contact me @:</h1>
                    <div class="center">
                         <a href="mailto:dev@mildcode.com"><img class="contact-icon" src="../assets/img/icons/mail.png" alt="mail"/></a>
                          <a href="https://github.com/Nitropox" target="_blank"> <img class="contact-icon" src="../assets/img/icons/git.png" alt="git"/></a>
                    </div>
                </div>
             </div>
             <div class="avideo-contener center unselectable">
                 <video class="vide" autoplay muted loop id="cvideo" poster="../assets/video/video_browsing/browsing.jpg" :class="{ videoIn: $store.state.activePage == '/contact'}">
                     <source src="../assets/video/video_browsing/browsing.mp4" type="video/mp4">
                 </video>
             </div>
        </section>
</template>


<script>
export default {
  name: 'contact',
    beforeDestroy(){
    document.getElementById("con").classList.add("aboutOut");
    document.getElementById("cvideo").classList.remove("videoIn");
  },
}
</script>

<style scoped>
.contact-icon{
    width: 100px !important;
    padding: 10px;
}

.contact-icon:hover{
    animation: contact 1s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
    cursor: pointer;
}

@keyframes contact {
   0%{transform: scale(1)}
   50%{transform: scale(1.1)}
   100%{transform: scale(1)}
}

</style>