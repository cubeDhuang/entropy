<template>
	<div id="app">
		<h1>Colonizer</h1>
		<div id="nav">
			<router-link to="/homeworld">Homeworld</router-link>
			<router-link to="/launch">Launch</router-link>
			<router-link to="/newworld">New World</router-link>
		</div>
		<router-view/>
	</div>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat:300,400");

* {
	padding: 0;
	margin: 0;
}

body {
	padding: 20px 30px;
}
h1, h2 {
	font-weight: 300;
}
h1 {
	text-align: center;
}

#app {
	font-family: "Montserrat", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	max-width: 1140px;
	margin: 0 auto;
}
#nav {
	padding: 30px;
	text-align: center;
}

#nav a {
	text-decoration: none;
	padding: 10px;
	margin: 0 5px;
	background-color: #eeeeee;
	transition: background 0.2s, color 0.2s;
}
#nav a:active, #nav a:link {
	color: #2c3e50;
	background-color: #e3e3e3;
}
#nav a.router-link-exact-active {
	background-color: #17bd3d;
	color: white;
}
</style>