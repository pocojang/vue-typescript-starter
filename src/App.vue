<template>
	<div>
		<img src="./lib/logo.png">
		<h1 class="hello">
			{{ msg }}
		</h1>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({})
export default class App extends Vue {
  msg: string = 'Hello';
}
</script>

<style>

</style>