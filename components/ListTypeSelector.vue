<script setup lang="ts">
type Emits = {
  (e: string, listType: string): void
}

type Props = {
  selectedListType: String,
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()
const listTypes = ref([
  {
    icon : 'bi-grid-3x3-gap',
    value: 'card',
  },
  {
    icon : 'bi-table',
    value: 'table',
  },
])

const listTypeSelect = (listType: string): void => {
  emit('selected', listType)
}
</script>

<template>
  <div :class="$style.list_type_selector">
    <SelectButton
      v-for="listType in listTypes"
      :key="listType.icon"
      :class="$style.button"
      :isSelected="selectedListType === listType.value"
      @onClick="listTypeSelect(listType.value)"
    >
      <i :class="['bi', listType.icon]" />
    </SelectButton>
  </div>
</template>

<style lang="scss" module>
.list_type_selector {
  display: flex;
  gap    : calc(var(--bv) * 2);
  
  .button {
    flex           : 0 0 auto;
    display        : flex;
    justify-content: center;
    align-items    : center;
    height         : calc(var(--bv) * 5);
    width          : calc(var(--bv) * 5);
    border-radius  : 50%;

    > i {
      font-size: calc(var(--bv) * 2);
    }
  }
}
</style>
