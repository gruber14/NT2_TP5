<template lang>

  <section class="src-components-color">
    <button type="button" class="cuadrado" :style="{'background-color': rgb}"></button>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-color',
    props: ['rgb',],
    mounted () {

    },
    data () {
      return {
      }
    },
    methods: {
      devolverRgb(){
        console.log("devolverRgb desde Color",this.rgb);
        return this.rgb;
      },
      devolverColorAleatorio(){
        let val1= Math.floor(Math.random() * 256);
        let val2= Math.floor(Math.random() * 256);
        let val3= Math.floor(Math.random() * 256);
        this.rgb= "rgb("+val1+", "+ val2+", "+val3+")";
      },
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-color {
    color: black
  }
  .cuadrado{
    height:100px;
    width:100px;
    margin: 10px;
    border: none;
  }
</style>
