<template>
  <header :class="$style.global_header">
    <ShadowBox>
      <div :class="$style.contents">
        <slot />
      </div>
    </ShadowBox>
  </header>
</template>

<style lang="scss" module>
.global_header {
  width: 100%;
  
  .contents {
    padding: var(--bv);
  }
}
</style>
