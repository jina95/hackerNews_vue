<template>
  <ol id="app" class="list" >
    <li v-for="item in list" :key=item.id>
      <b>{{item.time_ago}} </b>
      <span>by <router-link v-bind:to="`/user/${item.user}`"> {{item.user}} </router-link> </span><br/>
      <a v-bind:href="item.url">{{item.title}}</a>
      <router-link :to="`/item/${item.id}`">
          <i> ({{ item.comments_count }})</i>
      </router-link>
    </li>
  </ol>
    <!-- <ol id="app" class="list">
    <li v-for="item in list" :key=item.id>
      <b>{{item.time_ago}} </b><br/>
      <a v-bind:href="item.url">{{item.title}}</a>
    </li>
  </ol> -->
  <!-- job -->
    <!-- <ol id="app" class="list">
    <li v-for="item in list" :key=item.id>
      <b>{{item.time_ago}} </b>
      <span>by {{item.user}}</span><br/>
      <a v-bind:href="item.url">{{item.title}}</a>
      <router-link :to="`/item/${item.id}`">
          <i> ({{ item.comments_count }})</i>
      </router-link>
    </li>
  </ol> -->
  <!-- news -->
</template>

<script>
export default {
    computed:{
        list(){
            return this.$store.state.list
        }
    },
    created(){
        this.$store.dispatch('FETCH_LIST', this.$route.name);
        localStorage.setItem('nav', this.$route.name);
    }
}
</script>

<style>

</style>