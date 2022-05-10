<!--
 * @Descripttion:
 * @version: 1.5
 * @Author: qian
 * @Date: 2022-05-11 00:28:20
 * @LastEditors: qian
 * @LastEditTime: 2022-05-11 00:44:37
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
