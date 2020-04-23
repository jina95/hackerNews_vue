<template>
  <div class="userInfo">
      <strong>User Name : {{ userInfo.id }}</strong>
      <b>Write : {{ userInfo.created }}</b>
      <b>Karma : {{ userInfo.karma }}</b>
  </div>
</template>

<script>
export default {
    computed:{
        userInfo(){
            return this.$store.state.user
        }
    },
    created(){
        this.$store.dispatch('FETCH_USER', this.$route.params.id)
    }
}
</script>

<style>
.userInfo {
    padding: 50px 0 ;
}
.userInfo > * {
    display: block;
    text-align: center;
    font-size:26px;
    line-height:40px;
}
</style>