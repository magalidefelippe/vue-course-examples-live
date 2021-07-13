<template>
  <div class="hello">
    <h1>El mensaje es: {{ msg }}</h1>
    <h1 :text="msg">Hola hola hola</h1>

    <!--A partir de aca, v-html-->
    <p>Esto es una etiqueta p</p>
    <p v-html="htmlEjemplo"></p>

    <!--A partir de aca, v-show -->
    <h1 v-show="acceso">Tenemos acceso para ver esto</h1>
    
    <!--A partir de aca, v-if -->
    <h1 v-if="accesoComun">Tenemos acceso para ver esto</h1>
    <h1 v-else-if="accesoAdministrador">Tenemos acceso de administrador</h1>
    <h1 v-else>No tienes acceso para ver esto</h1>

    <!--A partir de aca, v-for -->
    <div v-for="(alumno, index) in alumnos" :key="`${index}+${alumno.nombre}`">
      <p>
        {{alumno.nombre}}
      </p>
      <p>{{alumno.edad}}</p>
    </div>
 
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: () => ({
    msg: 'Hola, bienvenidos al curso',
    htmlEjemplo: '<h1> Esto es una etiqueta p</h1>',
    acceso: true,
    accesoComun: false,
    accesoAdministrador: false,
    alumnos: [
      { 
        nombre: "Matias",
        edad: 18
      },
      { 
        nombre: "Daiana",
        edad: 20
      },
      { 
        nombre: "Juan",
        edad: 30
      },
    ],
    daiana: {
      nombre: "daiana",
      apellido: "Lopez",
      edad: 20
    }
  })
}
</script>