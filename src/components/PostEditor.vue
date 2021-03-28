<template>
  <form @submit.prevent="save">
    <div class="form-group">
      <textarea class="form-input" name="" id="" cols="30" rows="10" v-model="text" ></textarea>
      <!-- v-model equivalent to :value="newPostText" @input="newPostText = $event.target.value" -->
    </div>
    <div class="form-actions">
      <button class="btn-blue">Submit Post</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      text: ''
    }
  },
  methods: {
    save() {
      const postId = 'sadkkjfh' + Math.random()
      const post = {
        id: postId,
        text: this.text,
        publishedAt: Math.floor(Date.now() / 1000),
        threadId: this.id,
        userId: 'Miej9zSGMRZKDvMXzfxjVOyv3RF3'
      }
      // custom event benefit of passing an object is don't need to remember the argument order
      this.$emit('save', { post })
      // this.posts.push(post)
      // this.thread.posts.push(postId)
      this.text = ''
    }
  }
}
</script>

<style>

</style>
