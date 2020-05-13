<template>
  <div id='app'>
    <router-view>

    </router-view>
  </div>
</template>

<script>
import storage from './storage/index';
  export default {
    data() {
      return {

      }
    },
    mounted() {
     storage.setItem('a',1,'user')
    }
  }
</script>

<style lang="scss" scoped>

</style>