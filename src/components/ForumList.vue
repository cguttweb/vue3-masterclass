<template>
  <div class="col-full forum-list">
    <h2 class="list-title">
      <router-link v-if="categoryId" :to="{ name: 'Category', params: { id: categoryId }}">{{ categoryName }}</router-link>
      <span v-else>{{ categoryName }}</span>
      </h2>

    <div class="forum-listing" v-for="forum in forums" :key="forum.id">
        <div class="forum-details">
            <router-link :to="{ name: 'Forum', params: { id: forum.id }}" class="forum-name">{{ forum.name }}</router-link>

            <p class="forum-description ">{{ forum.description }}</p>
        </div>

        <div class="threads-count">
            <p class="count text-lead">{{ forum.threads?.length }}</p> 
            <!-- v1: {{ forum.threads?.length > 1 ? 'threads' : 'thread'}} -->
            <!-- v2 with additional ternary operator -->
            <!-- { forum.threads?.length ? forum.threads?.length > 1 ? 'threads' : 'thread' : '0 threads' }} -->
            {{ forumThreadsWords(forum) }}
        </div>
        <!-- es2020 has optional chaining deeply nested properties using ? above if doesnt exist it returns undefined rather than 0 -->

        <div class="last-thread">
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'ForumList',
  props: {
    forums: {
      required: true,
      type: Array
    },
    categoryName: {
      type: String,
      default: 'Forums'
    },
    categoryId: {
      required: false,
      type: String
    }
  },
  methods: {
    forumThreadsWords(forum) {
      if (forum.threads?.length) {
        return forum.threads.length > 1 ? 'threads' : 'thread'
      } else {
        return '0 threads'
      }
    }
  }
}
</script>

<style>

</style>
