

<template>
  <div>
    <nav>
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/gallery">Gallery</router-link>
        </li>
        <li>
          <router-link to="/contacts">Contacts</router-link>
        </li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
nav {
  display: flex;
  justify-content: center;
  margin: 1rem;
}
nav ul {
  display: flex;
  list-style: none;
}
nav ul li {
  margin-right: 1rem;
}
nav ul li a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}
</style>
