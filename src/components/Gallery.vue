




<template>
  <div class="gallery">
    <h1>Gallery</h1>
    <div class="slider">
      <div class="slide" v-for="(image, index) in images" :key="index">
        <img :src="image" alt="slide image">
      </div>
      <button class="prev" @click="prevSlide">&#10094;</button>
      <button class="next" @click="nextSlide">&#10095;</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        'https://picsum.photos/id/130/500/500',
        'https://picsum.photos/id/110/500/500',
        'https://picsum.photos/id/111/500/500',
        'https://picsum.photos/id/112/500/500',
        'https://picsum.photos/id/118/500/500'
      ],
      currentSlide: 0
    };
  },
  methods: {
    prevSlide() {
      this.currentSlide--;
      if (this.currentSlide < 0) {
        this.currentSlide = this.images.length - 1;
      }
      this.showSlide();
    },
    nextSlide() {
      this.currentSlide++;
      if (this.currentSlide > this.images.length - 1) {
        this.currentSlide = 0;
      }
      this.showSlide();
    },
    showSlide() {
      let slides = document.getElementsByClassName("slide");
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slides[this.currentSlide].style.display = "block";
    }
  },
  mounted() {
    this.showSlide();
  }
};
</script>

<style>
.gallery {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
}
h1 {
  font-size: 2rem;
  margin-bottom: 30px;
}
.slider {
  width: 70%;
  position: relative;
  margin-bottom: 30px;
}
.slide {
  display: none;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.slide img {
  width: 100%;
  height: auto;
}
.prev,
.next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2rem;
  border: none;
  outline: none;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 15px 20px;
  cursor: pointer;
}
.prev {
  left: 0;
  border-radius: 0 10px 10px 0;
}
.next {
  right: 0;
  border-radius: 10px 0 0 10px;
}
</style>
