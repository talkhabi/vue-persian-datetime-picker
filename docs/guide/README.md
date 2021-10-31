# Introduction

# Vue persian datetime picker
A [vuejs 2](https://vuejs.org/) plugin to select jalali/gregorian date and time

```vue {2,8}
<template>
  <date-picker v-model="date" format="YYYY-MM-DD" display-format="jYYYY-jMM-jDD" />
</template>
<script>
export default {
  data() {
    return {
      date: '2020-10-10'
    }
  }
}
</script>
```

<ClientOnly>
  <date-picker v-model="date" format="YYYY-MM-DD" display-format="jYYYY-jMM-jDD" />
</ClientOnly>

<script>
export default {
  data() {
    return {
      date: '2020-10-10'
    }
  }    
}
</script>

::: tip vue-3 support    
If you are using [vuejs 3](https://v3.vuejs.org/) please refer to [vue3-persian-datetime-picker](https://github.com/talkhabi/vue3-persian-datetime-picker)
:::
