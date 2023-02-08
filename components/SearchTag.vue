
<script setup lang="ts">
type Emits = {
  (e: string, tagName: string): void
}
type Props = {
  text     : string,
  type     : string,
  deletable: boolean,
}

const emit = defineEmits<Emits>()
const props = defineProps<Props>()

const deleteTag = (tagName: string): void => {
  emit('deleteTag', tagName)
}
</script>

<template>
  <span
    :class="[$style.tag, $style[`type-${type}`]]"
  >
    {{ text }}
    <i
      v-if="deletable"
      @click="deleteTag(text)"
      class="bi bi-x-lg"
    />
  </span>
</template>

<style lang="scss" module>
.tag {
  display      : inline-flex;
  align-items  : center;
  gap          : calc(var(--bv) / 2);
  height       : calc(var(--bv) * 2);
  padding      : 0 var(--bv);
  border-radius: var(--bv);
  color        : var(--white-color);
  font-size    : var(--min-font-size);
  font-weight  : bold;

  &.type {
    &-1 {
      background-color: var(--tag1-color);
    }

    &-2 {
      background-color: var(--tag2-color);
    }

    &-3 {
      background-color: var(--tag3-color);
    }

    &-4 {
      background-color: var(--tag4-color);
    }
  }

  > i {
    cursor: pointer;
  }
}
</style>