<template>
  <div id='app'>
    <router-view>
      
    </router-view>
  </div>
</template>

<script>
import jsonp from 'jsonp';
  export default {
    data() {
      return {

      }
    },
    mounted() {
      let url = '/static/sea_config.js?v=202005091600';
      jsonp(url,(err,res)=> {
        let {alias} = res;
        console.log(alias);
      });
    },
  }
</script>

<style lang="scss" scoped>

</style>