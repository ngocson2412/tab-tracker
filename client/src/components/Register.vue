<template>
	<v-layout comlumn>
		<v-flex xs6 offset-xs3>
			<div class = "white elevation-2">
				<v-toolbar flat dense class ="cyan" dark>
					<v-toolbar-title>Register</v-toolbar-title>
				</v-toolbar>
				<div class ="pl-4 pr-4 pt-2 pb-2">
					<v-text-field
						name="email"
						label="Email"
						v-model ="email"
					></v-text-field>
					<v-text-field
						name="password"
						label="Password"
						v-model ="password"
					></v-text-field>
					<br>
					<div class = "error" v-html="error"></div>
					<button class="cyan" @click = "register">Register</button>
				</div>

			</div>
		</v-flex>
	</v-layout>
</template>

<script>
	import AuthenticationService from '@/services/AuthenticationService'
	export default {
		data () {
			return {
				email :'',
				password : '',
				error: null
			}
		},
		methods :{
			async register() {
				try {
					const response = await AuthenticationService.register({
						email: this.email,
						password: this.password
					})
					this.error = null;
				} catch (err) {
					this.error = err.response.data.error
				}
			}
		}
	}
</script>


<style scoped>
.error { 
	color: red;
}
</style>
