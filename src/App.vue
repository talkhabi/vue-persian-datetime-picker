<template>
    <div id="app" :class="{'sidebar-open': sidebarOpen}">

        <router-view name="header" @toggleSidebar="sidebarOpen = !sidebarOpen"></router-view>

        <router-view name="sidebar"></router-view>

        <div class="main-content">
            <div class="container">
                <router-view></router-view>
            </div>
        </div>

        <!--&lt;!&ndash;===== DateTime Picker =====&ndash;&gt;-->
        <!--<h1 class="text-center hr">Datetime Picker</h1>-->

        <!--<simple-datetime></simple-datetime>-->

        <!--<datetime-min-and-max></datetime-min-and-max>-->


        <!--&lt;!&ndash;===== Time Picker =====&ndash;&gt;-->
        <!--<h1 class="text-center hr">Time Picker</h1>-->

        <!--<simple-time></simple-time>-->

        <!--<advance-time></advance-time>-->

        <!--<time-min-and-max></time-min-and-max>-->

        <!--&lt;!&ndash;============ Events ===========&ndash;&gt;-->
        <!--<h1 class="text-center hr">Events</h1>-->
        <!--<events-docs></events-docs>-->


        <!--&lt;!&ndash;============ Props ===========&ndash;&gt;-->
        <!--<h1 class="hr">Props</h1>-->

        <!--<props-docs></props-docs>-->


    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                sidebarOpen: false,
            }
        },
        watch: {
            $route() {
                this.sidebarOpen = false;
            }
        }
    }
</script>
