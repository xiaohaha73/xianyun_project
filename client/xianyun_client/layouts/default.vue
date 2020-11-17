<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
import header from '../components/header.vue'
import footer from '../components/footer.vue'
export default {
  components: {
    Header: header,
    Footer: footer
  },
  data () {
    return {}
  },
  methods: {}
}
</script>
<style lang="less" scoped>
  * {
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }

</style>
