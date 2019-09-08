<template>
	<v-layout comlumn>
		<v-flex xs6 offset-xs3>
			<songs-search-panel />
			<songs-panel />
		</v-flex>
	</v-layout>
</template>

<script>
	import SongsService from '@/services/SongsService'
	import SongsPanel from './SongsPanel'
	import SongsSearchPanel from './SongsSearchPanel'

	export default {
		data () {
			return {
				
			}
		},
		components: {
			SongsPanel,
			SongsSearchPanel
		}
	}
</script>


<style scoped>

</style>

