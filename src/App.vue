<template>
  <div id="app" :class="{ 'sidebar-open': sidebarOpen.value }">
    <router-view name="header" @toggleSidebar="sidebarOpen.value = !sidebarOpen.value" />
    <router-view name="sidebar" />
    <div class="main-content">
      <div class="container">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
  import { ref, watch } from 'vue'
  import { useRoute } from 'vue-router'
  import Header from './components/includes/Header'
  import Sidebar from './components/includes/Sidebar'

  export default {
    name: 'App',
    components: { Sidebar, Header },
    setup () {
      const route = useRoute()
      const sidebarOpen = ref(false)

      watch(() => route, () => sidebarOpen.value = false)

      return {
        sidebarOpen
      }
    }
  }
</script>
