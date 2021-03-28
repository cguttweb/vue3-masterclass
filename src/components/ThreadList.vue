<template>
<div class="col-full">
  <div class="thread-list">

    <h2 class="list-title">Threads</h2>

      <div class="thread" v-for="thread in threads" :key="thread.id">
        <div>
            <p>
                <router-link :to="{name: 'ThreadShow', params: { id: thread.id }}">{{ thread.title }}</router-link>
            </p>
            <p class="text-faded text-xsmall">
                By <a href="#">{{ userById(thread.userId).name }}</a>, <base-date :timestamp="thread.publishedAt" />
            </p>
        </div>

        <div class="activity">
            <p class="replies-count">
                {{ thread.posts.length }}
            </p>

            <img class="avatar-medium" :src="userById(thread.userId).avatar" alt="">

            <div>
                <p class="text-xsmall">
                    <a href="#">{{ userById(thread.userId).name }}</a>
                </p>
                <p class="text-xsmall text-faded"><base-date :timestamp="thread.publishedAt" /></p>
            </div>
        </div>
      </div>
  </div>
</div>

</template>

<script>
import sourceData from '@/data.json'

export default {
  props: {
    threads: {
      require: true,
      type: Array
    }
  },
  data() {
    return {
      posts: sourceData.posts,
      users: sourceData.users
    }
  },
  methods: {
    postById(postId) {
      return this.posts.find(post => post.id === postId)
    },
    userById(userId) {
      return this.users.find(post => post.id === userId)
    }
  }
}
</script>

<style>

</style>
