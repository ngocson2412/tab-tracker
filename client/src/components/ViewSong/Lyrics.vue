<template>
	<panel title="Lyrics">
		<textarea
			readonly
			v-model ="song.lyrics"
		></textarea>
	</panel>
</template>

<script>
	export default {
		props: [
			'song'
		],
		data () {
			return {
			}
		}
	}
</script>


<style scoped>
textarea {
	width: 100%;
	border: none;
	height: 400px;
	border-style:none;
	border-color: transparent;
	overflow: auto;
	padding: 15px;
}
</style>
