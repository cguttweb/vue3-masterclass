<template>
  <div class="col-full text-center">
    <h1>Page not found...</h1>
    <router-link :to="{ name: 'Home' }">Go back to home</router-link>
    <!-- Caveat using this sort of functionality is known as soft 404 becuase the response given is ok 304 not 404 could cause issues with bots/crawlers -->
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
