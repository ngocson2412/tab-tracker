<template>
	<panel title="YouTube Video">
		<youtube 
			:video-id="youtubeId"
			:player-width="500"
			:player-height="350"
		></youtube>
	</panel>
</template>

<script>
	export default {
		props: [
			'youtubeId'
		],
		data () {
			return {
			}
		}
	}
</script>


<style scoped>

</style>

