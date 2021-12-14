<template lang>

  <section class="src-components-color-2">
    <div class="cuadrado" :style="{'background-color': rgb}"></div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-color-2',
    props: ['rgb'],
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
  .src-components-color-2 {
    color:black
  }
    .cuadrado{
    height:100px;
    width:100px;
    margin: 10px;
    border: black;}
</style>
