<template>
  <header>
      <router-link 
      to="/news"  
      :class="{'on': index === 1}" 
      @click.native="clickWork(1)">NEWS</router-link>
      <!-- <router-link 
      to="/news"  
      :class="{'active': isNav.isNews}" 
      @click.native="setNav()">NEWS</router-link> -->
      <!-- native 를 붙여줘야 안에 함수를 실행시킨다. -->
      <!-- <router-link 
      to="/jobs" 
      :class="{'active': isNav.isJobs}"
        @click.native="setNav()">JOBS</router-link> -->
      <router-link 
      to="/jobs" 
      :class="{'on': index === 2}" 
        @click.native="clickWork(2)">JOBS</router-link>
      <!-- <router-link 
      to="/ask" 
      :class="{'active': isNav.isAsk}"
       @click.native="setNav()">ASK</router-link> -->
      <router-link 
      to="/ask" 
      :class="{'on': index === 3}" 
        @click.native="clickWork(3)">ASK</router-link>
      <router-link
      to="/" 
      @click.native="clickWork(1)"
      class="hackerNews"
      >Hacker News</router-link>
      <!-- <router-link
      to="/" 
      class="hackerNews"
      >Hacker News</router-link> -->
  </header>
</template>


<script>

export default {
    data(){
        return{
            index: 1,
            // isNav: {
            //     isNews: true,
            //     isAsk: false,
            //     isJobs: false
            // }
        }
    },
    methods:{
        clickWork(index){
            this.index = index
        },
        // setNav(){
        //     let currentName = localStorage.getItem('nav');
        //     let uppCrrName = currentName.charAt(0).toUpperCase() + currentName.slice(1);

        //     for( let item in this.isNav){
        //         if(item === `is${uppCrrName}`){
        //             this.isNav[item] = true;
        //         } else {
        //             this.isNav[item] = false;
        //         }
        //     }
        // }
    }

}
</script>

<style>
header {
    position: relative;
    padding:20px 30px;
    background:#0554F2;
    font-size:24px;
    border-bottom:8px solid #0D0D0D;
}
header h1 {position: absolute; color:white; top:21px; right:30px; font-size:18px;}
header a {color:white; text-decoration: none; padding-bottom:3px; }
header a + a {margin-left:20px}
header .active {
    /* color:black;
    border-bottom:3px solid black */
    
}
.on { background-color: black;}
.hackerNews {
    float: right;
}
</style>