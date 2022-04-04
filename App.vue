<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    <router-link class="navbar-brand" to="/Home">Home</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>


    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/Home">Home</router-link>
            <span class="visually-hidden">(current)</span>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/Blog">Blog</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/Education">Education</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/AboutMe">About Me</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/Contact">Contact</router-link>

        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
          <div class="dropdown-menu">
            <router-link class="dropdown-item" to="#">Action</router-link>
            <router-link class="dropdown-item" to="#">Another action</router-link>
            <router-link class="dropdown-item" to="#">Something else here</router-link>
            <div class="dropdown-divider"></div>
            <router-link class="dropdown-item" to="#">Separated link</router-link>
          </div>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-sm-2" type="text" placeholder="Search">
        <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
