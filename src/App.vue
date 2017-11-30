<template>
	<div>
		<img src="./lib/logo.png">
		<h1>
			{{ msg }}
		</h1>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      msg: "Hello Vue"
    };
  }
});
</script>

<style>

</style>