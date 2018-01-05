<template>
  <div id="app">
    <router-link to="/entidades">Entidades certificativas</router-link>
    <router-link to="/personas">Certificados persona</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<style lang="scss">
html {
	background-color: hsl(60, 44%, 95%);
}
#app {
	padding-top: 1em;
	padding-left: 324px;
	background: url(/static/logo.png) ;
	background-repeat: no-repeat;
	min-height: 324px;
}
</style>
