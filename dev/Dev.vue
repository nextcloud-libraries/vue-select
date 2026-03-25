<template>
	<div id="app">
		<VSelect v-model="selected" v-bind="config" />
	</div>
</template>

<script>
import vSelect from "../src/components/Select.vue"
import books from "../docs/.vuepress/data/books"
import countries from "../docs/.vuepress/data/countryCodes"

export default {
	components: { VSelect: vSelect },
	data: () => ({
		selected: null,
		config: {
			options: countries,
		},
	}),
}
</script>

<style>
html,
body {
  margin: 0;
  height: 100%;
  font-family: -apple-system, sans-serif;
}

#app {
  height: 100%;
  max-width: 20rem;
  margin: 10rem auto 0;
}

hr {
  border: none;
  border-bottom: 1px solid #cacaca;
  margin-bottom: 1em;
  padding-top: 1em;
  width: 90%;
}
</style>
