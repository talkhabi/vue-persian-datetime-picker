<template>
  <card
    title="Slots"
    version="2.2.0"
    code-col-class="col-12"
    sample-col-class="col-12"
  >
    <template slot="code">
      <!-- eslint-disable -->
      <highlight-code lang="html" v-pre>
        &lt;date-picker v-model="date"&gt;

          &lt;!-- slot for "header-year" --&gt;
          &lt;template v-slot:header-year="{ vm, selectedDate }"&gt;
            {{ selectedDate.xYear() }}
          &lt;/template&gt;

          &lt;!-- slot for "header-date" --&gt;
          &lt;template v-slot:header-date="{ vm, formattedDate }"&gt;
            {{ formattedDate }}
          &lt;/template&gt;

          &lt;!-- slot for "month-name" --&gt;
          &lt;template v-slot:month-name="{ vm, date, color }"&gt;
            {{ date.xFormat('jMMMM jYYYY') }}
          &lt;/template&gt;

          &lt;!-- slot for "locales" --&gt;
          &lt;template v-slot:locales="{ vm, locales, setLocale }"&gt;
            &lt;ul class="vpd-locales"&gt;
              &lt;li
                v-for="locale in locales"
                :key="locale"
                @click="setLocale(locale)"
                v-text="locale"
              /&gt;
            &lt;/ul&gt;
          &lt;/template&gt;

          &lt;!-- slot for "weekday" --&gt;
          &lt;template v-slot:weekday="{ vm, day }"&gt;
            &lt;span&gt;{{ day }}&lt;/span&gt;
          &lt;/template&gt;

          &lt;!-- slot for "day-item" --&gt;
          &lt;template v-slot:day-item="{ vm, day, color }"&gt;
            &lt;span class="vpd-day-effect" :style="{ 'background-color': color }" /&gt;
            &lt;span class="vpd-day-text" v-text="day.formatted" /&gt;
          &lt;/template&gt;

          &lt;!-- slot for "year-item" --&gt;
          &lt;template v-slot:year-item="{ vm, year, color }"&gt;
            {{ year.xFormat('jYYYY') }}
          &lt;/template&gt;

          &lt;!-- slot for "month-item" --&gt;
          &lt;template v-slot:month-item="{ vm, monthItem, color }"&gt;
            {{ monthItem.xFormat('jMMMM') }}
          &lt;/template&gt;

          &lt;!-- slot for "close-btn" --&gt;
          &lt;template v-slot:close-btn="{ vm }"&gt;
            &times;
          &lt;/template&gt;

          &lt;!-- slot for "clear-btn" --&gt;
          &lt;template v-slot:clear-btn="{ vm }"&gt;
            &times;
          &lt;/template&gt;

          &lt;!-- slot for "submit-btn" --&gt;
          &lt;template v-slot:submit-btn="{ vm, canSubmit, color, submit, lang }"&gt;
            &lt;button
              type="button"
              :disabled="!canSubmit"
              :style="{ color }"
              @click="submit"
              v-text="lang.submit"
            /&gt;
          &lt;/template&gt;

          &lt;!-- slot for "cancel-btn" --&gt;
          &lt;template v-slot:cancel-btn="{ vm, color, lang }"&gt;
            &lt;button
              type="button"
              :style="{ color }"
              @click="vm.visible = false"
              v-text="lang.cancel"
            /&gt;
          &lt;/template&gt;

          &lt;!-- slot for "now-btn" --&gt;
          &lt;template v-slot:now-btn="{ vm, color, goToday, lang }"&gt;
            &lt;button
              type="button"
              :style="{ color }"
              @click="goToday"
              v-text="lang.now"
            /&gt;
          &lt;/template&gt;
        &lt;/date-picker&gt;
      </highlight-code>
      <!-- eslint-enable -->
    </template>
  </card>
</template>

<script>
export default {
  name: 'Slots'
}
</script>
