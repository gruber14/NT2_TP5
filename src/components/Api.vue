<template lang>

  <section class="src-components-multiple-choice">
    <div v-if= "posts.length" class="jumbotron" mt-3>
    <table class="table">
      <tr>
        <th>Id</th>
        <th>Nombre</th>
        <th>Email</th>
        <th>Edad</th>
      </tr>
      <tr v-for="(post,index) in posts" :key="index">
        <td>{{post.id}}</td>
        <td>{{post.nombre}}</td>
        <td>{{post.email}}</td>
        <td>{{post.numero}}</td>
      </tr>
    </table>
    </div>
    <div v-else class="alert alert-danger" role="alert">
      No hay datos cargados.
    </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-multiple-choice',
    props: [],
    beforeMount(){
      this.posts= this.getPostAxios()
    },
    mounted () {

    },
    data () {
      return {
          url: 'https://618afec934b4f400177c498d.mockapi.io/Tabla_mock',
          posts: [],
      }
    },
    methods: {
        async getPostAxios() {
        try {
          let respuesta = await this.axios(this.url)
          console.log('AXIOS', respuesta.data)
          this.posts = respuesta.data
        }
        catch(error) {
          console.error('Error AXIOS', error)
        }
      }

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-multiple-choice {
    color: black
  }
  .table{
    align-content: center;
  }
</style>
