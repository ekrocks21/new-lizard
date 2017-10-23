<template>
  <v-layout row wrap>
    <v-flex xs12 sm12>
      <v-card flat>
        <v-card-media
          class="white--text"
          height="400px"
          src="/static/img/faroe/cover.jpg"
        >
        <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <v-btn  fab small flat to='/'>
                  <v-icon style="color: #ffffff; font-size: 28px">arrow_back</v-icon>
                </v-btn>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-media>
        <v-card-title>
          <v-container>
            <v-layout row wrap>
              <v-flex xs12 sm6 offset-sm2>
            <h5 id="post-title" class="primary--text">Faroe Islands</h5>
            <p id="known-for">Island Country + Lots of Sheep</p><br>
            <p id="post-preview">For our honeymoon we traveled to the magical land of the Faroes, located between Iceland &amp; Norway in the North Atlantic Ocean. These 18 rugged islands are full of raw nature, interesting culture, and of course plenty of sheep.</p>
          </div>
          <h5 id="places-visited" class="primary--text mt-5">Highlights</h5>
           <p id="post-preview">We embarked on a challenging hike from Saksun to Tjornuvik with Tummas, a guide from <a href="https://heimdaltours.com" target="blank"> Heimdal Tours.</a></p>
           <p id="post-preview">Feeling adventurous, we tested our palate with some traditional Faroese cuisine at <a href="http://raest.one" target="blank"> Raest.</a></p>
           <p id="post-preview">For an authentic Faroese souvenir we picked up sweaterd from <a href="https://www.gudrungudrun.com/" target="blank"> Gudrun &amp; Gudrun.</a></p>
           <p id="post-preview">At night, we rested our heads from the cliffs overlooking Torshavn at <a href="http://hotelforoyar.fo/en/" target="blank"> Hotel Foroyar.</a></p>
            </v-flex>
            </v-layout>
          </v-container>
        </v-card-title>

        <v-container>
          <v-layout row wrap>
            <v-flex xs12 sm6 offset-sm2>
              <v-card >
                 <iframe id="ytplayer" 
                        type="text/html" 
                        width="100%" 
                        height="300"
                        src="https://www.youtube.com/embed/B32JPpmT1cU"
                        frameborder="0"
                        autoplay="1"
                        modestbranding="1"></iframe>
               <v-card-title> Faroe Islands Highlight Video
               </v-card-title>         
              </v-card>
             </v-flex>
            </v-layout>  
        </v-container> 



<v-container>    
  <v-layout row wrap>
    <v-flex xs12 sm4 offset-sm2>
      <v-card flat mb-5>
        <h5 id="places-visited" class="primary--text">Places we visited</h5>
        <v-list three-line>
          <template v-for="item in items">
            <v-subheader v-if="item.header" v-text="item.header"></v-subheader>
            <v-list-tile avatar v-else v-bind:key="item.title">
              <v-list-tile>
                <img width="100px" v-bind:src="item.src"/>
              </v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title v-html="item.title"></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
  </v-container>
</v-card>



<v-card mt-5 flat>
<v-container>
  <v-carousel hide-controls mt-5>
    <v-carousel-item v-for="(item,i) in items" v-bind:src="item.src" :key="i"></v-carousel-item>
  </v-carousel>
  </v-container>
</v-card>  



    </v-flex>
  </v-layout>
</template>

    

<script>
  export default {
    data () {
      return {
        cycle: false,
        lazy: true,
        items: [
          { src: '/static/img/faroe/torshavn.jpg', title: 'Torshavn' },
          { src: '/static/img/faroe/mulafossar.jpg', title: 'Mulafossar Waterfall' },
          { src: '/static/img/faroe/gjorv.jpg', title: 'Gjorv' },
          { src: '/static/img/faroe/hotel-foroyar.jpg', title: 'Hotel Foroyar' },
          { src: '/static/img/faroe/liz.jpg', title: 'Gudrun & Gudrun' },
          { src: '/static/img/faroe/saksun.jpg', title: 'Saksun' },
          { src: '/static/img/faroe/tjornuvik.jpg', title: 'Tjornuvik' },
        ]
      }
    }
  }
</script>

<style scoped>
#post-title {
  padding-bottom: 0px;
  overflow-wrap: break-word;
  font-size: 34px;
  font-weight: 300;
  line-height: 24px;
  margin: 8px 0 4px 0;
  margin-bottom: 14px;
  color: #212121;
}

#places-visited {
  padding-bottom: 0px;
  overflow-wrap: break-word;
  font-size: 20px;
  font-weight: 300;
  line-height: 24px;
  margin: 8px 0 4px 0;
  margin-bottom: 5px;
  color: #212121;
}

#known-for {
  color: rgba(13,13,13,.38);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  height: 20px;
  font-weight: 400;
  font-size: 13px;
    line-height: 28px;
  margin: 0px;
}

#post-preview {
  padding-top: 36px;
  line-height: 2em;
  font-size: 16px;
  color: #737373;
}


</style>
