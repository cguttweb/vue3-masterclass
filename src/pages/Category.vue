<template>
    <div class="col-full push-top">
    <h1>{{ category.name }}</h1>
    <div class="forum-list">
      <forum-list :title="category.name" :forums="getForumCategories(category)" />
    </div>

  </div>
</template>

<script>
import ForumList from '@/components/ForumList.vue'
import sourceData from '@/data.json'
export default {
  components: {
    ForumList
  },
  props: {
    id: {
      required: true,
      type: String
    }
  },
  computed: {
    category() {
      return sourceData.categories.find(category => category.id === this.id)
    }
  },
  methods: {
    getForumCategories(category) {
      return sourceData.forums.filter(forum => forum.categoryId === category.id)
    }
  }
}
</script>

<style>

</style>
