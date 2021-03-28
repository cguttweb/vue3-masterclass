<template>
<div class="col-full">
  <div class="category-list" v-for="category in categories" :key="category.id">

    <h2 class="list-title">
        <router-link :to="{ name: 'Category', params: { slug: category.slug }}" class="category-name">{{ category.name }}</router-link>
    </h2>

    <div class="forum-listing">
      <forum-list :forums="forums" />
       <div class="forum-details">
            <a class="text-xlarge" href="#">Pets</a>

            <p>All things pet related</p>

        </div>

        <div class="threads-count">
            <p class="count">1337</p> threads
        </div>

        <div class="last-thread">
            <img class="avatar" src="https://i.imgur.com/WPSrfGm.jpg" alt="">
            <div class="last-thread-details">
                <a href="#">What is the best animal joke y...</a>
                <p class="text-xsmall">By <a href="#">Blossom</a>, 16 hours ago</p>
            </div> 
        </div>

      </div>
   </div>
</div>
</template>

<script>
import ForumList from '@/components/ForumList'
export default {
  name: 'CategoryList',
  components: {
    ForumList
  },
  props: {
    categories: {
      required: true,
      type: Array
    }
  }
  // data() {
  //   return {
  //     forumCategories: sourceData.categories
  //   }
  // }
}

</script>

<style>

</style>
