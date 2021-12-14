<template lang>

  <section class="src-components-juego">
    {{"Contador: "+this.contador}}
    <br>
    {{this.colorElegido}}
    {{this.colores.length}}
    <div class="tabla">
    <tr>
    <td><Color ref="color1" :rgb=devolverColorAleatorio() v-on:click.native="verRgb($refs.color1.devolverRgb())"></Color></td>
    <td><Color ref="color2" :rgb=devolverColorAleatorio() v-on:click.native="verRgb($refs.color2.devolverRgb())"></Color></td>
    <td><Color ref="color3" :rgb=devolverColorAleatorio() v-on:click.native="verRgb($refs.color3.devolverRgb())"></Color></td>
    </tr>
    <tr>
    <td><Color ref="color4" :rgb=devolverColorAleatorio() v-on:click.native="verRgb($refs.color4.devolverRgb())"></Color></td>
    <td><Color ref="color5" :rgb=devolverColorAleatorio() v-on:click.native="verRgb($refs.color5.devolverRgb())"></Color></td>
    <td><Color ref="color6" :rgb=devolverColorAleatorio() v-on:click.native="verRgb($refs.color6.devolverRgb())"></Color></td>
    {{this.elegirColor()}}
    </tr>
    </div>
  </section>

</template>

<script lang="js">

  import Color from './Color.vue'
  export default  {
    name: 'src-components-juego',
    components: {
      Color,
    },
    props: [],
    mounted () {

    },
    data () {
      return {
        contador: 0,
        colorElegido: null,
        colores: [],
      }
    },
    methods: {
      /*devolverColorAleatorio(numero){
        console.log("holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
        let val1= Math.floor(Math.random() * 255) + 1;
        let val2= Math.floor(Math.random() * 255) + 1;
        let val3= Math.floor(Math.random() * 255) + 1;
        console.log("devolverColorAleatorio",this.colorElegido,numero)
        return "rgb("+val1+", "+ val2+", "+val3+")";
      },*/
      devolverColorAleatorio(){
        //this.colores=[];
        //for (let i=0; i<6; i++){
        let val1= Math.floor(Math.random() * 255) + 1;
        let val2= Math.floor(Math.random() * 255) + 1;
        let val3= Math.floor(Math.random() * 255) + 1;
        this.colores.push("rgb("+val1+", "+ val2+", "+val3+")");
        return "rgb("+val1+", "+ val2+", "+val3+")";
        //}
        //this.colorElegido="rgb("+val1+", "+ val2+", "+val3+")";
        //return "rgb("+val1+", "+ val2+", "+val3+")";
        //this.elegirColor();
      },
      elegirColor(){
        let numeroRandom= Math.floor(Math.random()*6);
        this.colorElegido=this.colores[numeroRandom];
      },
      verRgb(rgb){
        //console.log("Hola")
        /*console.log("verRgb",rgb);
        console.log(rgb===this.colorElegido);*/
        if (rgb==this.colorElegido){
          this.contador++;
          this.devolverColorAleatorio();
        }
        
      },
    },
    computed: {
      
    }
}


</script>

<style scoped lang="css">
  .src-components-juego {
    color: black
  }
  .tabla{
     display: table;
  margin-right: auto;
  margin-left: auto;
  }
</style>
