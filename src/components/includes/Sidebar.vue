<template>
    <div id="sidebar">
        <nav class="main-nav">
            <ul>
                <router-link
                        v-for="route in routes"
                        :to="route.path"
                        :key="route.path"
                        exact-active-class="active"
                        tag="li">
                    <a>{{ route.meta.pageTitle }}</a>
                </router-link>
            </ul>
        </nav>
    </div>
</template>

<script>

    import {routes} from '../../routes';

    export default {
        name: 'Sidebar',
        components: {},
        props: [],
        data() {
            return {}
        },
        methods: {},
        computed: {
            routes() {
                // modify routes here
                return routes.filter(route => route.meta.showInMenu !== false);
            }
        },
        created() {
        },
        watch: {}
    }
</script>