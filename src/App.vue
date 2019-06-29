<template>
  <div id="app" :class="{ 'sidebar-open': sidebarOpen }">
    <router-view name="header" @toggleSidebar="sidebarOpen = !sidebarOpen" />
    <router-view name="sidebar" />
    <div class="main-content">
      <div class="container"><router-view /></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      sidebarOpen: false
    }
  },
  watch: {
    $route() {
      this.sidebarOpen = false
    }
  }
}
</script>
