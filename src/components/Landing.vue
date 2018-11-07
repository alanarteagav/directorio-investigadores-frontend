<template>
  <div>

    <nav class="navbar navbar-light  sticky-top ">
      <div class="container">
        <a class="navbar-brand" href="/">Red Nacional de Investigación</a>
        <form class="form-inline">
          <router-link to="/search">
            <a class="btn btn-secondary" href="/search">Búsqueda</a>
          </router-link>
          <router-link to="/login">
            <a class="btn btn-primary btn-margin-left" href="#">Acceder</a>
          </router-link>
        </form>
      </div>
    </nav>

    <header class ="landingHead text-white text-center">
      <h1 class="mb-5">Bienvenido a la Red Nacional de Investigación</h1>
      <h5> Haga click en una entidad en el mapa para realizar una búsqueda.</h5>
    </header>

    <div class="mapDiv text-center">
      <MexicoMap></MexicoMap>
    </div>

    <footer class="landingFooter text-center">
      <p>2018 | Red Nacional de Investigación</p>
      <p>Contacto : <a href="mailto:someone@example.com">
      someone@example.com</a>.</p>
    </footer>

  </div>
</template>

<script>
    import MexicoMap from './MexicoMap.vue'

    export default {
        name: 'Landing',
        components: {
            MexicoMap
        }
}
</script>

<style>
    h5 {
        font-family: 'Avenir', 'Helvetica Neue', Helvetica, Arial, sans-serif;
        font-weight: 700;
    }
    header.landingHead {
        position: relative;
        background: url('../assets/images/background.png') no-repeat center center;
        background-size: cover;
        background-attachment : fixed;
        padding-top: 8rem;
        padding-bottom: 8rem;
    }
    div.mapDiv {
        background-color: #342F2F;
        width: 100%;
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
        background-color: rgba(250, 250, 250, 0.88);
    }
    .btn-margin-left {
        margin-left: 15px;
    }

</style>
