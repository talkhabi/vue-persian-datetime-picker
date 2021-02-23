<template>
  <div id="sidebar">
    <nav class="main-nav">
      <ul>
        <router-link
          v-for="route in routesList"
          :key="route.path"
          :to="route.path"
          exact-active-class="active"
        >
          <li
            :class="{ 'is-new': newItems.includes(route.name), 'un-completed': unCompletedItems.includes(route.name) }"
          >
              <a>{{ route.meta.pageTitle }}</a>
          </li>
        </router-link>
      </ul>
    </nav>
  </div>
</template>

<script>
  import { computed, ref } from 'vue'
  import { routes } from '../../routes'

  export default {
    name: 'Sidebar',
    setup () {
      const activeItem = ref('Home')
      const newItems = ['locale', 'range', 'multiple', 'popover']
      const unCompletedItems = ['min-max', 'events', 'initial-value', 'different-input-output', 'range',
        'custom-input', 'custom-editable-input', 'disabling', 'highlight', 'locale', 'events']
      const routesList = computed(() => routes.filter(route => route.meta.showInMenu !== false))
      return {
        activeItem,
        newItems,
        unCompletedItems,
        routesList
      }
    }
  }
</script>
