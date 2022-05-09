<script setup>
import Navbar from "../components/Navbar.vue";
</script>
<script>

export default {
  name: "Al Naba",
  data(){
    return{
      chapter: null,
      verses: [],
      translations: [],
      audio_file: null,
      chapter_info:null,
    }
  },
  methods: {
    getChapter(){
      fetch('https://api.quran.com/api/v4/chapters/78?language=id',{
        method: 'GET'
      })
          .then(response => {
            if(response.ok){
              return response.json();
            }
          })
          .then(json => {
            this.chapter = json.chapter;
          })
    },
    getVerses(){
      fetch('https://api.quran.com/api/v4/quran/verses/uthmani?chapter_number=78&juz_number=30', {
        method: 'GET'
      })
          .then(res =>{
            if(res.ok){
              return res.json()
            }
          })
          .then(json => {
            this.verses = json.verses;
          })
    },
    getTranslate() {
      fetch('https://api.quran.com/api/v4/quran/translations/33?chapter_number=78&juz_number=30', {
        method: 'GET'
      })
          .then(response => {
            if (response.ok) {
              return response.json();
            }
          })
          .then(json => {
            this.translations = json.translations;
          });
    },
    getAudio() {
      fetch('https://api.quran.com/api/v4/chapter_recitations/4/78', {
        method: 'GET'
      })
          .then(response => {
            if (response.ok) {
              return response.json();
            }
          })
          .then(json => {
            //console.log(json)
            this.audio_file = json.audio_file;
            //this.audio_file = this.getAudio(audio_file.audio.url);

          });
    },

    getInfo() {
      fetch('https://api.quran.com/api/v4/chapters/78/info?language=id', {
        method: 'GET'
      })
          .then(response => {
            if (response.ok) {
              return response.json();
            }
          })
          .then(json => {
            this.chapter_info=json.chapter_info;
          });
    },

  },



  mounted() {
    this.getChapter();
    this.getVerses();
    this.getTranslate();
    this.getAudio();
    this.getInfo();

  }
}
</script>

<template>
  <main>
    <Navbar/>
    <section class="heeder ">
      <div class="atas"></div>
      <div class="text">
        <p class="title text-black">
          QS. An Naba (Berita Besar)
        </p>
        <p class="subtitle text-center text-black">
          Surah ke 78
        </p>
      </div>
    </section>
    <hr>
    <section>
      <h1 class="namasurah text-start text-center" v-if="chapter">{{chapter.name_arabic}}
        <br>{{chapter.verses_count}} Ayat</h1>
      <hr>
     
      <div class="bismilah text-center mt-5">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيْم </div>
      <p v-if="audio_file" class="has-text-end">
        <audio controls>
          <source :src=audio_file.audio_url type="audio/mpeg">
          Your browser does not support the audio element.
        </audio>
      </p>
      <hr>
      <div v-for="verse in verses">
        <p class="ayat text-end">
          {{verse.text_uthmani}} {{verse.verse_key}}
        </p>
        <hr>
      </div>
      <h2 class="arti text-center">Terjemahan : </h2>
      <div v-for="translations in translations">
        <p class="translate text-start">
          {{translations.text}}
        </p>
        <hr>
      </div>

    </section>
  </main>

</template>
<style>

.ayat{
  font-weight: bold;
  font-size: 25px;
}
.heeder{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Bernard MT Condensed";
  box-shadow: 0 3px 20px rgba(0, 0, 0, 2);
}

.atas{
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #87cefa;
}
.text{
  margin-top: 3rem;
  z-index: 1;
  padding: 20px 25px;
  border: 4px solid #000000;
  font-size: 35px;
}

.bismilah{
  font-weight: bold;
  font-size: 30px;
  background-color: #87cefa;
}
.arti{
  font-weight: bold;
  font-size: 30px;
  background-color: #87cefa;
}
</style>
