<template>
	<div class="app">
		<!-- Sidebar -->
<div class="container-fluid">
    <div class="row no-gutters">
      <div class="col-3 ">

     <Sidebar />
      </div>
      		<!-- Content -->
      <div class="col-9 ">
<router-view />
      </div>
    </div>

</div>
	</div>
</template>

<script setup>
import Sidebar from './components/sidemenu/Sidebar.vue'
</script>

  
  <style lang="scss">
:root {
	--primary: #4ade80;
	--primary-alt: #22c55e;
	--grey: #64748b;
	--dark: #1e293b;
	--dark-alt: #334155;
	--light: #F5F5F5;
	--sidebar-width: 300px;
}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Fira sans', sans-serif;
}

body {
	background: var(--light) !important;
}

button {
	cursor: pointer;
	appearance: none;
	border: none;
	outline: none;
	background: none;
}

.app {
	display: flex;

	main {
		flex: 1 1 0;
		padding: 2rem;

		@media (max-width: 1024px) {
			padding-left: 6rem;
		}
	}
}
</style>



