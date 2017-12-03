<template>
    <svg class="datepicker-arrow"
         perspectiveAspectRato="none"
         xmlns="http://www.w3.org/2000/svg"
         width="30" height="30"
         viewBox="0.5 900.5 30 30"
         enable-background="new 0.5 900.5 30 30"
         :class=" direction + '-arrow'">
        <path :fill="fill" d="M22.221 928.31l-10.679-12.81 10.679-12.809c.472-.567.395-1.408-.171-1.881-.565-.474-1.409-.396-1.881.17l-11.39 13.665c-.208.248-.31.552-.31.855 0 .305.103.608.31.855l11.391 13.664c.472.566 1.315.644 1.881.17.566-.473.643-1.312.17-1.879z"></path>
    </svg>
</template>

<script>
    export default {
        props: {
            fill: {
                type: String,
                default: '#a2a2a2'
            },
            direction: {
                type: String,
                default: 'up',
            }
        },
        computed: {}
    }
</script>

<style lang="scss" scoped="">
    .up-arrow{  transform: rotate(90deg)  }
    .left-arrow{  transform: rotate(0)  }
    .right-arrow{  transform: rotate(180deg) }
    .down-arrow{  transform: rotate(-90deg) }
</style>