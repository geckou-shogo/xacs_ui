<template>
  <div
    v-if="Object.keys(listItem).length"
    :class="$style.nav_slide_down_item"
  >
    <NavItem
      :text="listItem.name"
    />
    <NavSlideDownItem
      v-for="item in listItem.data"
      :listItem="item"
      :key="item.id"
    />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

export type TagItemType = {
  id         : string,
  name       : string,
  number     : number,
  canAddFiles: boolean,
  data       : [],
}

export default Vue.extend({
  name: 'NavSlideDownItem',
  props: {
    listItem: {
      required: true,
      type    : Object as PropType<TagItemType>,
    },
  }
})
</script>

<style lang="scss" module>
.nav_slide_down_item {
}
</style>
