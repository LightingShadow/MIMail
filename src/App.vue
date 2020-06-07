<template>
  <div id='app'>
    <router-view>

    </router-view>
    <div v-for="(item,index) in items" :key = index>
      {{item}}
    </div>
    <button @click='addItem'>添加元素</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [1,2,3,4,5,6]
      }
    },
    methods: {
      addItem() {
        
      }
    },
    mounted() {

    },
    computed: {
    
    }
  }
</script>

<style lang="scss">
@import './assets/scss/reset.scss'
</style>