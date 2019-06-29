<template>
  <card title="Theme color">
    <span
      v-for="(color, index) in colors"
      :key="color"
      class="color-selector"
      :style="{ backgroundColor: color }"
      @click="
        activeColorIndex = index
        show = true
      "
    />

    <div class="clearfix" />

    <date-picker
      v-model="date"
      :color="colors[activeColorIndex]"
      :show="show"
      @close="show = false"
    />

    <template slot="code">
      <!-- eslint-disable -->
      <highlight-code lang="html" v-pre>
        &lt;span class="color-selector"
          v-for="color,index in colors"
          :style="{backgroundColor: color}"
          @click="activeColorIndex=index;show=true;"
        /&gt;
        &lt;date-picker
          v-model="date"
          :color="colors[activeColorIndex]"
          :show="show"
          @close="show=false"
        /&gt;
      </highlight-code>
      <highlight-code lang="javascript" v-pre>
        data() {
          return {
            date: '',
            show: false,
            colors: ['#5c6bc0', '#e91e63', '#7b1fa2', '#1e88e5', '#03a9f4', '#00acc1', '#ff9800', 'dimgray'],
            activeColorIndex: 0,
          }
        }
      </highlight-code>
      <!-- eslint-enable -->
    </template>
  </card>
</template>

<script>
export default {
  data() {
    return {
      date: '',
      show: false,
      colors: [
        '#5c6bc0',
        '#e91e63',
        '#7b1fa2',
        '#1e88e5',
        '#03a9f4',
        '#00acc1',
        '#ff9800',
        'dimgray'
      ],
      activeColorIndex: 0
    }
  }
}
</script>

<style scoped>
.color-selector {
  display: inline-block;
  width: 15px;
  height: 15px;
  cursor: pointer;
  margin: 0 0 10px 10px;
}
</style>
