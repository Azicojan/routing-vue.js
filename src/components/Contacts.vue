<template>
    <div class="contacts">
      <h1>Contact Us</h1>
      <p>
        Feel free to contact us with any questions or feedback using the form
        below.
      </p>
      <form @submit.prevent="submitForm">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" />
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" />
        <label for="message">Message:</label>
        <textarea id="message" v-model="message"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: "Contacts",
    data() {
      return {
        name: "",
        email: "",
        message: "",
      };
    },
    methods: {
      submitForm() {
        
        console.log(this.name, this.email, this.message);
      },
    },
  };
  </script>
  
  <style>
  .contacts {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
  }
  
  .contacts h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  .contacts p {
    font-size: 1.2rem;
    text-align: center;
    max-width: 800px;
    margin-bottom: 2rem;
  }
  
  .contacts form {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 600px;
  }
  
  .contacts form label {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  
  .contacts form input,
  .contacts form textarea {
    width: 100%;
    margin-bottom: 1rem;
    padding: 0.5rem;
    font-size: 1rem;
  }
  
  .contacts form button {
    padding: 0.5rem;
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 0.5rem;
    font-size: 1rem;
    cursor: pointer;
  }
  
  .contacts form button:hover {
    background-color: #555;
  }
  </style>
  