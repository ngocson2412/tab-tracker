<template>
	<v-layout comlumn>
		<v-flex xs6 offset-xs3>
			<panel title="Register">
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
					<div class = "danger-alert" v-html="error"></div>
					<button class="cyan" dark @click = "register">Register</button>
				</div>
			</panel>
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
					this.$store.dispatch('setToken',response.data.token)
					this.$store.dispatch('setUser',response.data.user)
					this.error = null;
					this.$session.start()
					this.$session.set('login_flag', 'Login successfull !!!')
					this.$router.push({ name: 'root'})
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
