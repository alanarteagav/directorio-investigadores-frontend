<template>
  <div>
    <nav class="navbar navbar-light  sticky-top ">
      <div class="container">
        <a class="navbar-brand" href="/">Red Nacional de Investigación</a>
      </div>
    </nav>

    <header class ="landingHead text-white text-center">
      <h1 class="mb-5">Búsqueda por campos</h1>
    </header>

   <div class="searchBox" role="tablist">
     <b-card no-body class="mb-1">
       <b-card-header header-tag="header" class="p-1" role="tab">
         <b-btn  href="#" v-b-toggle.accordion1 variant="secondary">Artículo</b-btn>
         <b-btn  href="#" v-b-toggle.accordion2 variant="secondary">Persona</b-btn>
         <b-btn  href="#" v-b-toggle.accordion3 variant="secondary">Sede</b-btn>
       </b-card-header>
       <b-collapse id="accordion1" accordion="my-accordion" role="tabpanel">
         <b-card-body>
           <div class="input-group mb-3">
             <div class="input-group-prepend">
               <span class="input-group-text" id="basic-addon1">Título</span>
             </div>
             <input type="text" class="form-control" aria-describedby="basic-addon1">
           </div>
           <div class="input-group mb-3">
             <div class="input-group-prepend">
               <span class="input-group-text" id="basic-addon1">Campo de Investigación</span>
             </div>
             <input type="text" class="form-control" aria-describedby="basic-addon1">
           </div>
           <div class="input-group mb-3">
             <div class="input-group-prepend">
               <span class="input-group-text" id="basic-addon1">Autor</span>
             </div>
             <input type="text" class="form-control" aria-describedby="basic-addon1">
           </div>
         </b-card-body>
       </b-collapse>
     </b-card>
     <b-card no-body class="mb-1">
       <b-collapse id="accordion2" accordion="my-accordion" role="tabpanel">
         <b-card-body>
         <div class="input-group mb-3">
         <div class="input-group-prepend">
         <span class="input-group-text" id="basic-addon1">Nombres</span>
         </div>
         <input type="text" class="form-control" aria-describedby="basic-addon1">
         </div>
         <div class="input-group mb-3">
         <div class="input-group-prepend">
         <span class="input-group-text" id="basic-addon1">Apellidos</span>
         </div>
         <input type="text" class="form-control" aria-describedby="basic-addon1">
         </div>
         <div class="input-group mb-3">
         <div class="input-group-prepend">
         <span class="input-group-text" id="basic-addon1">Correo</span>
         </div>
         <input type="text" class="form-control" aria-describedby="basic-addon1">
         </div>
         <div class="input-group mb-3">
         <div class="input-group-prepend">
         <span class="input-group-text" id="basic-addon1">Institución</span>
         </div>
         <input type="text" class="form-control" aria-describedby="basic-addon1">
         </div>

         </b-card-body>
       </b-collapse>
     </b-card>
     <b-card no-body class="mb-1">
       <b-collapse id="accordion3" accordion="my-accordion" role="tabpanel">
         <b-card-body>

         <div class="input-group mb-3">
         <div class="input-group-prepend">
         <span class="input-group-text" id="basic-addon1">Nombre</span>
         </div>
         <input type="text" class="form-control" aria-describedby="basic-addon1">
         </div>
         <div class="input-group mb-3">
         <div class="input-group-prepend">
         <span class="input-group-text" id="basic-addon1">Institución</span>
         </div>
         <input type="text" class="form-control" aria-describedby="basic-addon1">
         </div>
         <div class="input-group mb-3">
         <div class="input-group-prepend">
         <span class="input-group-text" id="basic-addon1">Entidad de la República</span>
         </div>
         <input type="text" class="form-control" aria-describedby="basic-addon1">
         </div>


         </b-card-body>
       </b-collapse>
     </b-card>
   </div>


   <form class="container text-center">
   <a class="btn btn-light" href="/">Cancelar</a>
   <a class="btn btn-primary btn-margin-left" href="/">Buscar</a>
   </form>


  <footer class="landingFooter text-center">
    <p>2018 | Red Nacional de Investigación</p>
    <p>Contacto : <a href="mailto:someone@example.com">
    someone@example.com</a>.</p>
  </footer>

  </div>

</template>

<script>

export default {
  name: 'Search'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style>
    h5 {
        font-family: 'Avenir', 'Helvetica Neue', Helvetica, Arial, sans-serif;
        font-weight: 700;
    }
    header.landingHead {
        position: relative;
        background: url('../assets/images/search.png') no-repeat center center;
        background-size: cover;
        background-attachment : fixed;
        padding-top: 5rem;
        padding-bottom: 2rem;
    }
    div.mapDiv {
        background-color: #342F2F;
    }
    img{
        margin-top: 10px;
        object-fit: scale-down;
        max-width: 100%;
    }
    footer.landingFooter{
        background-color: #E3E7ED;
        height: 70px;
    }
    nav {
        background-color: rgba(250, 250, 250, 0.92);
    }
    .btn-margin-left {
        margin-left: 15px;
    }
    .searchBox {
        max-width: 80%;
        margin: auto;
    }

</style>
