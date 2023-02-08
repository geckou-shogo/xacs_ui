<script setup lang="ts">
type Emits = {
  (e: string, itemId: string): void
}

const emit = defineEmits<Emits>()

type Props = {
  list: any[],
}

const props = defineProps<Props>()
const inUseOperationsId = ref('')
const selectItem = (id: string): void => {
  emit('selectFile', id)
}
</script>

<template>
  <ul
    :class="$style.card_list"
  >
    <li
      v-for="(item, index) in list"
      :key="item.id"
      :style="{
        zIndex: 69 - index
      }"
    >
      <ItemCard
        :item="item"
        :inUseOperation="Boolean(inUseOperationsId) && inUseOperationsId !== item.id"
        @displayOperations="((id: string) => {inUseOperationsId = id})"
        @selectItem="selectItem"
      />
    </li>
  </ul>
</template>

<style lang="scss" module>
.card_list {
  display              : grid;
  grid-template-columns: repeat(auto-fit, calc((100% - (var(--bv) * 2 * ( 2))) / 3));
  gap                  : calc(var(--bv) * 2);

  > li {
    position: relative;
  }
}
</style>