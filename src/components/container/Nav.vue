<template>
  <nav>
    <ul>
      <li>
        <h2><router-link :to="{ name: 'CRUD' }">CRUD</router-link></h2>
      </li>
      <li>
        <h2><router-link :to="{ path: '/search' }">Search</router-link></h2>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss"></style>
