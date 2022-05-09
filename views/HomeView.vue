<script setup>
import Navbar from "../components/Navbar.vue";

</script>

<template>
  <navbar />
  <section class="judul">
    <div class="container py-5">
      <div class="row">
        <div class="">
          <div class="col-lg-12 text-center">
            <h1>
             Tugas UTS mata kuliah Pemrograman Web
            </h1>
            <p>
              بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
            </p>
            <button type="button" class="btn btn-primary" data-bs-toggle="tooltip" data-bs-html="true" title="Al Qur'an" href ="">
              Mulai
            </button>
            <div class="ratio ratio-16x9">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/8GBLBWbEM7w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
    </div>
        </div>
        </div>
        </div>
  </section>
</template>

<style scoped>

.judul{
  background: #87cefa;
  font-weight: 20;
}
.judul h1{
  margin-top: 20px;
  font-family: "poppins";
  font-size: 20px;
}
.judul h2 {
  text-align: center;
  font-size: 8rem;
  font-family: "Segoe UI";
  font-style: italic;
}
button{
  font-family: "poppins";
  color: #090808;
}
.ratio{
  margin-top: 30px;
  margin-bottom: 100%;
}
</style>
