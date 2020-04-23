<template>
  <div id="app">
     <span>by {{comments.user }}</span>
     <b>- {{comments.time_ago}} </b>
     <h2>{{ comments.title }}</h2>
     <hr/>
     <ol v-for="item in commentsList" :key=item.id class="com_list">
         <li>
             <p v-html=item.content></p>
             <span>by {{ item.user }}</span>
         </li>
         <hr/>
     </ol>
  </div>
</template>

<script>
export default {
    computed:{
        comments(){
            return this.$store.state.comment
        },
        commentsList(){
            return this.$store.state.comment.comments
        }
    },
    created(){
        let commentId = this.$route.params.id
        this.$store.dispatch('FETCH_COMMENT', commentId)
    }
}
</script>

<style>
#app > h2 {  text-align: center; font-size:36px; padding: 50px 0;}
#app > b {font-style: normal; font-size:12px; color:#999}
#app > span {font-style: normal; font-weight:700; font-size:12px; color:#021373;}
hr { margin: 20px 0}
.com_list p { text-align: center}
.com_list span {display:block; text-align: right; font-size:12px; color:#021373}
</style>