<template>
	<v-toolbar fixed class = "cyan" dark>
		<v-toolbar-title class ="home" @click = "navigateTo({name: 'root'})">TabTracker</v-toolbar-title>
		<v-toolbar-items>
			<v-btn flat>Browse</v-btn>
		</v-toolbar-items>
		<v-spacer></v-spacer>
		<v-toolbar-items>
			<v-btn flat dark @click = "navigateTo({name: 'login'})">
				login
			</v-btn>
			<v-btn flat dark @click = "navigateTo({name: 'register'})">
				signup
			</v-btn>
		</v-toolbar-items>
	</v-toolbar> 
</template>

<script>
	export default {
		data () {
			return {
			}
		},
		methods :{
			navigateTo(route) {
				this.$router.push(route)
			}
		}
	}
</script>


<style scoped>
.home{
	cursor: pointer;
}
.home:hover {
	color: #17e1ef;
}
</style>

