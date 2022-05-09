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
      <p class="info" v-if="chapter_info">{{chapter_info.text}}</p>


    </section>
  </main>

</template>

<style>

</style>
