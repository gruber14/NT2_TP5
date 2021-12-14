<template lang>

  <section class="src-components-formulario">
    <vue-form :state="formstate" @submit.prevent="enviar()">

        <validate tag="div">
        <label for="nombre">Nombre</label>
     <input type="text" 
     id="nombre" 
     v-model="formData.nombre" 
     required name="nombre" 
     autocomplete="off" 
     class="form-control"
     v-model.trim="formData.nombre"
     minlength="3"
     maxlength="15"
     no-espacios />
     <field-messages name="nombre" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Por favor complete este campo.</div>
             <div slot="minlength" class="alert alert-danger mt-1"> Debe contener un mínimo de 3 caracteres.</div>
                       <div slot="no-espacios" class="alert alert-danger mt-1"> No debe contener espacios.</div>
          </field-messages>
        </validate>

       <validate tag="div">
        <label for="edad">Edad</label>
     <input type="number" 
     id="edad" 
     v-model="formData.edad" 
     required name="edad" 
     autocomplete="off" 
     class="form-control"
     v-model.trim="formData.edad"
     min="18"
     max="120" />
     <field-messages name="edad" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Por favor complete este campo.</div>
            <div slot="min" class="alert alert-danger mt-1">La edad mínima es 18 años.</div>
            <div slot="max" class="alert alert-danger mt-1">La edad máxima es 120 años.</div>
          </field-messages>
        </validate>

       <validate tag="div">
        <label for="email">Email</label>
     <input type="email" 
     id="importe" 
     v-model="formData.email" 
     required name="email" 
     autocomplete="off" 
     class="form-control"
      />
     <field-messages name="email" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Por favor complete este campo.</div>
          </field-messages>
        </validate>

        <button class="btn btn-primary my-3" :disabled="formstate.$invalid" type="submit">Enviar</button>
    </vue-form>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-formulario',
    props: [],
    mounted () {

    },
    data () {
      return {
        formstate : {},
        formData : this.inicializarPersonas(),
        url: 'https://618afec934b4f400177c498d.mockapi.io/Tabla_mock'
      }
    },
    methods: {
      enviar(){
        //let persona = {...this.formData}
        this.postAxios();
        this.formData = this.inicializarPersonas()
        this.formstate._reset()

      },
      inicializarPersonas(){
        return {
          nombre: null,
          edad: null,
          email: null,
        }
      },

        async postAxios() {
            await this.axios.post(this.url, {
              nombre: this.formData.nombre,
              email: this.formData.email,
              numero: this.formData.edad
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        }
        /*try {
          let respuesta = await this.axios(this.url)
          console.log('AXIOS', respuesta.data)
          this.posts = respuesta.data
        }
        catch(error) {
          console.error('Error AXIOS', error)
        }
      }*/
    
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-formulario {
  color:black
 
  }
</style>
