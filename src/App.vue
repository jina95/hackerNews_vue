<template>
  <div id="app">
    <tool-bar></tool-bar>
    <router-view/>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar'
export default {
  components:{ToolBar}
}
</script>
