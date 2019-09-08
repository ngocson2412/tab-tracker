<template>
    <div id="app">
        <v-app
            <page-header></page-header>
            <main>
                <v-container>
                    <router-view/>
                </v-container>
            </main>
        </v-app>
    </div>
</template>

<script>
import PageHeader from '@/components/Header'

export default {
    name: 'App',
    components : {
        PageHeader
    },
    created(){
        if(this.$session.has('token')){
            this.$store.dispatch('setToken',this.$session.get('token'))
            this.$store.dispatch('setUser',this.$session.get('user'))
            this.$router.push({ name: 'root'})
        }
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
.danger-alert {
    color: red;
}
</style>
