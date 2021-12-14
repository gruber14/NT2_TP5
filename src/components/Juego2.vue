<template lang>

  <section class="src-components-juego-2">
    <Color :rgb="blue"></Color>
  </section>

</template>

<script lang="js">
  import Color from './Color2.vue'
  export default  {
    name: 'src-components-juego-2',
    components: {
      Color,
    },
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-juego-2 {
    color: black
  }
</style>
