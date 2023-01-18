<template>
  <div
    v-if="tagData.length"
    :class="$style.nav_tree_list"
  >
    <NavSlideDownItem
      v-for="item in tagData"
      :listItem="item"
      :key="item.id"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'NavTreeList',
  props: {
    tagData: {
      required: false,
      type    : Array,
      default : () => ([]),
    },
  },
})
</script>

<style lang="scss" module>
.nav_tree_list {
  width: 100%;
}
</style>
