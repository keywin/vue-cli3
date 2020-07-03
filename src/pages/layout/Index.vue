<template>
  <div>
    <snow-header></snow-header>
    <router-view/>
  </div>
</template>

<script>
import snowHeader from './Header'
export default {
  components: {
    snowHeader
  }
}
</script>

<style lang="scss" scoped>

</style>