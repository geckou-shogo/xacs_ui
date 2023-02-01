<template>
  <header
    :class="$style.contents_header"
  >
    <div
      :class="$style.column"
    >
      <slot :name="'left_column'" />
    </div>
    <div
      :class="$style.column"
    >
      <slot :name="'right_column'" />
    </div>
  </header>
</template>

<style lang="scss" module>
.contents_header {
  display         : flex;
  justify-content : space-between;
  align-items     : center;
  background-color: var(--base-color);
  padding         : var(--bv) calc(var(--bv) * 2);
  border-bottom   : 1px solid var(--border-color);
  position        : sticky;
  top             : 0;
  z-index         : var(--z-index-contents);

  .column {
    display    : flex;
    align-items: center;
    gap        : calc(var(--bv) * 2);
  }
}
</style>