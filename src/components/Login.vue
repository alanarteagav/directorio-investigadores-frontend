<template>
  <div>
    <nav class="navbar navbar-light  sticky-top ">
      <div class="container">
        <a class="navbar-brand" href="/">Red Nacional de Investigación</a>
      </div>
    </nav>

    <header class ="loginHead text-white text-center">
      <h1 class="mb-5">Inicio de Sesión</h1>
      <form class="container text-center loginForm">
        <div class="input-group mb-3 text-center loginInput">
          <input type="text"
                class="form-control"
                placeholder="Usuario o correo"
                aria-label="Usuario o correo"
                aria-describedby="basic-addon1">
        </div>
        <div class="input-group mb-3 text-center loginInput">
          <input type="password"
                class="form-control"
                placeholder="Contraseña"
                aria-label="Contraseña"
                aria-describedby="basic-addon1">
        </div>
        <a class="btn btn-light" href="/">Cancelar</a>
        <a class="btn btn-primary btn-margin-left" href="/">Acceder</a>
      </form>
    </header>

    <footer class="landingFooter text-center">
      <p>2018 | Red Nacional de Investigación</p>
      <p>Contacto :
      <a href="mailto:someone@example.com">someone@example.com</a>.</p>
    </footer>
  </div>
</template>

<script>
    export default {
        name: 'Login'
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style>
    h5 {
        font-family: 'Avenir', 'Helvetica Neue', Helvetica, Arial, sans-serif;
        font-weight: 700;
    }
    header.loginHead {
        position: relative;
        background: url('../assets/images/login.png') no-repeat center center;
        background-size: cover;
        background-attachment : fixed;
        padding-top: 8rem;
        padding-bottom: 8rem;
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
    .loginInput {
        max-width: 60%;
        margin: auto;
    }
</style>
