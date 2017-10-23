<template>
  <v-container>
  <v-layout row wrap mt-5>
    <v-flex xs12 sm9 offset-sm2>
      <v-card>
        <v-card-media
          class="white--text"
          height="250px"
          src="/static/img/faroe/cover.jpg"
        >
        </v-card-media>
        <v-card-title>
          <div>
            <h5 id="post-title" class="primary--text">Faroe Islands</h5>
            <p id="known-for">Island Country + Lots of Sheep</p><br>
            <p class="primary--text" id="post-preview">For our honeymoon we traveled to the magical land of the Faroes, located between Iceland &amp; Norway in the North Atlantic Ocean. These 18 rugged islands are full of raw nature, interesting culture, and of course plenty of sheep.</p>
          </div>
        </v-card-title>
        <v-card-actions>
        <v-spacer></v-spacer><router-link style="text-decoration: none" to='/faroeIslands'>
          <v-tooltip left>
          <v-btn slot="activator" id="explore-button" fab small color="secondary">
            <v-icon style="color: #ffffff">send</v-icon>
          </v-btn>
          <span>explore more</span>
          </v-tooltip>
        </router-link></v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>

    <v-layout row wrap mt-5>
    <v-flex xs12 sm9 offset-sm2 mt-5>
      <v-card>
        <v-card-media
          class="white--text"
          height="250px"
          src="/static/img/iceland/iceland.jpg"
        >
        </v-card-media>
        <v-card-title>
          <div>
            <h5 id="post-title" class="primary--text">Iceland</h5>
            <p id="known-for">Volcanos, Glaciers, &amp; Beers, Oh My!</p><br>
            <p class="primary--text" id="post-preview">Also, whilest honeymooning we spent some time in incredible Iceland. Dramatic landscapes with volcanoes, geysers, hotsprings, northern lights and pretty expensive beers are a sample of things you will find here. </p>
          </div>
        </v-card-title>
        <v-card-actions>
        <v-spacer></v-spacer><router-link style="text-decoration: none" to='/iceland'>
          <v-tooltip left>
          <v-btn slot="activator" id="explore-button" fab small color="secondary">
            <v-icon style="color: #ffffff">send</v-icon>
          </v-btn>
          <span>explore more</span>
          </v-tooltip>
        </router-link></v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>

</v-container>
</template>

    

<script>

</script>

<style scoped>
#post-title {
  padding-bottom: 0px;
  overflow-wrap: break-word;
  font-size: 20px;
  line-height: 24px;
  margin: 8px 0 4px 0;
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
  line-height: 16px;
  margin: 0px;
}

#post-preview {
  line-height: 2em;
  font-size: 16px;
}

</style>
