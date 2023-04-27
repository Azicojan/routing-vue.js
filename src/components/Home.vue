
<template>
    <div class="home">
      <h1>Welcome to my site!</h1>
      <p>
        This is a multi-page site built with Vue.js 3 and Vue Router. Use the
        navigation menu to explore the site.
      </p>
        
      <img src="https://picsum.photos/id/116/500/500" alt="Home Image" />
    </div>
  </template>
  
  <script>
  export default {
    name: "Home",
  };
  </script>
  
  <style>
  .home {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
  }
  
  .home h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  .home p {
    font-size: 1.2rem;
    text-align: center;
    max-width: 800px;
    margin-bottom: 2rem;
  }
  
  .home img {
    max-width: 100%;
    height: auto;
    border-radius: 0.5rem;
  }
  </style>
  