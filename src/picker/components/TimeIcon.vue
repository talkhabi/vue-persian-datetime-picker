<template>
    <svg version="1.1"
         xmlns="http://www.w3.org/2000/svg"
         xmlns:xlink="http://www.w3.org/1999/xlink"
         x="0px" y="0px"
         viewBox="0 0 60 60"
         style="enable-background:new 0 0 276.338 276.338"
         perspectiveAspectRato="none"
         :fill="fill"
         xml:space="preserve">
	<g>
        <path d="M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M30,58C14.561,58,2,45.439,2,30
		S14.561,2,30,2s28,12.561,28,28S45.439,58,30,58z"></path>
        <path d="M30,6c-0.552,0-1,0.447-1,1v23H14c-0.552,0-1,0.447-1,1s0.448,1,1,1h16c0.552,0,1-0.447,1-1V7C31,6.447,30.552,6,30,6z"></path>
	</g>
</svg>

</template>

<script>
    export default {
        props: {
            fill: {
                type: String,
                default: '#f9f9f9'
            },
        }
    }
</script>