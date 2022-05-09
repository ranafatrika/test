<script setup>
import Navbar from "../components/Navbar.vue";

</script>

<template>
 <navbar />
  <section class="tentang">

    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="src/assets/al6.jpg" class="d-block w-100" alt="1">
        </div>
        <div class="carousel-item">
          <img src="src/assets/rana1.png" class="d-block w-100" alt="2">
        </div>
        <div class="carousel-item">
          <img src="src/assets/rana2.png" class="d-block w-100" alt="3">
        </div>
      </div>
    </div>
  </section>
  <div class="accordion accordion-flush bg-light mt-5" id="accordionFlushExample">
    <div class="accordion-item bg-light">
      <h2 class="accordion-header" id="flush-headingOne">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
          Contact
        </button>
      </h2>
      <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">ig: ranaaa_ftka | fb: Rana Fatrika | twitter: Rana Fatrika | Call me: 081268223669</div>
      </div>
    </div>
    </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
.tentang{
  background: #87cefa;
}
.accordion-button{
  text-align: center;
}
.accordion-body{
  margin-top: 20px;
  text-align: center;
  color: blue;
}
</style>
