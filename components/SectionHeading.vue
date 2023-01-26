<template>
  <div :class="$style.section_heading">
    <div v-if="$slots.heading">
      <slot :name="'heading'" />
    </div>
    <div v-if="$slots.option">
      <slot :name="'option'" />
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

  h2 {
    font-size: var(--large-font-size);
  }
}
</style>
