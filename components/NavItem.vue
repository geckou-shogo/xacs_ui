<template>
  <div
    :class="[$style.nav_item, isCurrent ? $style.current : '']"
  >
    <component
      v-if="iconName"
      :is="iconName"
    />
    {{ text }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'NavItem',
  props: {
    text: {
      required: true,
      type    : String,
    },
    iconName: {
      required: false,
      type    : String,
      default : '',
    },
    isCurrent: {
      required: false,
      type    : Boolean,
      default : false,
    },
  }
})
</script>

<style lang="scss" module>
.nav_item {
  color: var(--white-color);
  
  &.current {
    background-color: var(--main-color);
  }
}
</style>
