<template>
  <forum-list v-for="category in categories" :key="category.id" :forums="getForumCategories(category)"
  :category-name="category.name"
  :category-id="category.id" />
</template>

<script>
import ForumList from '@/components/ForumList'
import sourceData from '@/data.json'

export default {
  components: {
    ForumList
  },
  props: {
    categories: {
      required: true,
      type: Array
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
