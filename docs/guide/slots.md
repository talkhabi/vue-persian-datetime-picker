# Available slots

```vue
<date-picker v-model="date">

  <!-- slot for "header-year" -->
  <template #header-year="{ vm, selectedDate }">
    {{ selectedDate.xYear() }}
  </template>

  <!-- slot for "header-date" -->
  <template #header-date="{ vm, formattedDate }">
    {{ formattedDate }}
  </template>

  <!-- slot for "month-name" -->
  <template #month-name="{ vm, date, color }">
    {{ date.xFormat('jMMMM jYYYY') }}
  </template>

  <!-- slot for "locales" -->
  <template #locales="{ vm, locales, setLocale }">
    <ul class="vpd-locales">
      <li
        v-for="locale in locales"
        :key="locale"
        @click="setLocale(locale)"
        v-text="locale"
      />
    </ul>
  </template>

  <!-- slots for "next-month" & "prev-month" -->
  <i slot="next-month" class="icon-left" />
  <i slot="prev-month" class="icon-right" />

  <!-- slot for "weekday" -->
  <template #weekday="{ vm, day }">
    <span>{{ day }}</span>
  </template>

  <!-- slot for "day-item" -->
  <template #day-item="{ vm, day, color }">
    <span class="vpd-day-effect" :style="{ 'background-color': color }" />
    <span class="vpd-day-text" v-text="day.formatted" />
  </template>

  <!-- slot for "year-item" -->
  <template #year-item="{ vm, year, color }">
    {{ year.xFormat('jYYYY') }}
  </template>

  <!-- slot for "month-item" -->
  <template #month-item="{ vm, monthItem, color }">
    {{ monthItem.xFormat('jMMMM') }}
  </template>

  <!-- slot for "close-btn" -->
  <template #close-btn="{ vm }">
    ×
  </template>

  <!-- slot for "clear-btn" -->
  <template #clear-btn="{ vm }">
    ×
  </template>

  <!-- slot for "submit-btn" -->
  <template #submit-btn="{ vm, canSubmit, color, submit, lang }">
    <button
      type="button"
      :disabled="!canSubmit"
      :style="{ color }"
      @click="submit"
      v-text="lang.submit"
    />
  </template>

  <!-- slot for "cancel-btn" -->
  <template #cancel-btn="{ vm, color, lang }">
    <button
      type="button"
      :style="{ color }"
      @click="vm.visible = false"
      v-text="lang.cancel"
    />
  </template>

  <!-- slot for "now-btn" -->
  <template #now-btn="{ vm, color, goToday, lang }">
    <button
      type="button"
      :style="{ color }"
      @click="goToday"
      v-text="lang.now"
    />
  </template>
</date-picker>
```
