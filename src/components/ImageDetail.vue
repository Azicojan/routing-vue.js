<template>
    <div class="image-detail">
      <img :src="image" alt="image detail">
    </div>
  </template>
  
  <script>
  export default {
    name: "ImageDetail",
    props: {
      id: {
        type: Number,
        required: true,
      },
    },
    computed: {
      image() {
        return this.$route.params.image;
      },
    },
    created() {
      console.log(this.$route.params);
    },
  };
  </script>
  
  <style>
    .image-detail {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
    .image-detail img {
      max-height: 100%;
      max-width: 100%;
    }
  </style>
  