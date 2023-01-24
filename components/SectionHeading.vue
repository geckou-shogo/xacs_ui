<script setup lang="ts">
interface Props {
  headingText: String,
}
const props = defineProps<Props>()
</script>

<template>
  <div :class="$style.section_heading">
    <h2>
      {{ headingText }}
    </h2>
    <div>
      <slot />
    </div>
  </div>
</template>

<style lang="scss" module>
.section_heading {
  display        : flex;
  justify-content: space-between;
  align-items    : center;
  width          : 100%;
  padding        : var(--bv) 0;

  > h2 {
    font-size: var(--large-font-size);
  }
}
</style>
