<template>
	<v-toolbar fixed class = "cyan" dark>
		<v-toolbar-title class ="mr-4">
			<router-link 
	        	class="home"
	        	tag="span"
	        	:to="{
	          		name: 'root'
	        	}">
	        	TabTracker
	      	</router-link>
		</v-toolbar-title>

		<v-toolbar-items>
			<v-btn 
				flat dark
				:to="{
	          		name: 'songs'
	        	}">
				Browse
			</v-btn>
		</v-toolbar-items>
		<v-spacer></v-spacer>

		<v-toolbar-items>
			<v-btn
				v-if="!$store.state.isUserLoggIn" 
				flat dark 
				:to="{
	          		name: 'login'
	        	}">
				login
			</v-btn>
			<v-btn 
				v-if="!$store.state.isUserLoggIn" 
				flat dark 
				:to="{
	          		name: 'register'
	        	}">
				signup
			</v-btn>
			<v-btn 
				v-if="$store.state.isUserLoggIn" 
				flat dark 
				@click="logout">
				logout
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
			logout() {
				this.$store.dispatch('setToken',null)
				this.$store.dispatch('setUser',null)
				this.$router.push({
					name: 'root'
				})
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

