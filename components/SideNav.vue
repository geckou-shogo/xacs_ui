<template>
  <nav
    :class="[$style.side_nav, displayState ? '' : $style.shrink]"
    @click="openNav()"
  >
    <div :class="$style.logo">
      <XacsLogo
        :onlySymbols="!displayState"
      />
    </div>
    <div v-show="displayState">
      <slot />
    </div>
  </nav>
</template>

<script setup lang="ts">
interface Emits {
  (e: string): void
}

interface Props {
  displayState: boolean,
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const openNav = () => {
  if (!props.displayState) emit('openNav')
}
</script>

<style lang="scss" module>
.side_nav {
  --nav-base-color  : linear-gradient(180deg, #2B3131 0%, #1D2020 100%);
  --nav-border-color: #353A3E;

  width           : 280px;
  height          : 100dvh;
  flex            : 0 0 auto;
  background-image: var(--nav-base-color);
  color           : var(--white-color);
  transition      : width .1s linear;

  &.shrink {
    width : calc(var(--bv) * 8);
    cursor: pointer;
  }

  .logo {
    display        : flex;
    justify-content: center;
    align-items    : center;
    height         : calc(var(--bv) * 8);
    border-bottom  : 1px solid var(--nav-border-color);
  }
}
</style>
