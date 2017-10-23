<template>
  <v-layout row wrap>
    <v-flex xs12 sm12>
      <v-card flat>
        <v-card-media
          class="white--text"
          height="400px"
          src="/static/img/iceland/iceland.jpg"
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
            <h5 id="post-title" class="primary--text">Iceland</h5>
            <p id="known-for">Country in Europe + Volcanoes and more</p><br>
            <p id="post-preview">Also, whilest honeymooning we spent some time in incredible Iceland. Dramatic landscapes with volcanoes, geysers, hotsprings, northern lights and pretty expensive beers are a sample of things you will find here.</p>
          </div>
          <h5 id="places-visited" class="primary--text mt-5">Highlights</h5>
           <p id="post-preview">We hopped in a super jeep and went offroading through Thors Valley with <a href="https://adventures.is/" target="blank"> Artic Adventures.</a></p>
           <p id="post-preview">For a night we stayed in the 5 million star <a href="https://buubble.com" target="blank"> Buuble Hotel.</a></p>
           <p id="post-preview">We hiked the Solheimajokull glacier with <a href="https://adventures.is/iceland/day-tours/glacier-tours/glacier-tours-from-solheimajokull/glacier-experience/" target="blank"> Artic Adventures.</a></p>
           <p id="post-preview">We witnessed the majestical Northern Lights while hotubbing at <a href="http://grimsborgir.com" target="blank"> Hotel Grimsborgir.</a></p>
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
                        src="https://www.youtube.com/embed/WkGILhqpf0I"
                        frameborder="0"
                        autoplay="1"
                        modestbranding="1"></iframe>
               <v-card-title> Iceland Highlight Video
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
          { src: '/static/img/iceland/reykjavik.jpg', title: 'Reykjavik' },
          { src: '/static/img/iceland/buuble.jpg', title: 'Buuble Hotel' },
          { src: '/static/img/iceland/thors-valley.jpg', title: 'Thors Valley' },
          { src: '/static/img/iceland/black-sand-beach.jpg', title: 'Black Sand Beach' },
          { src: '/static/img/iceland/blue-lagoon.jpg', title: 'Blue Lagoon' },
          { src: '/static/img/iceland/waterfall.jpg', title: 'Selfoss' },
          { src: '/static/img/iceland/geysir.jpg', title: 'Geysir' },
          { src: '/static/img/iceland/glacier.jpg', title: 'Solheimajokull' }
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
