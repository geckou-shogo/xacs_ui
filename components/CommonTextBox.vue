<script setup lang="ts">
type Emits = {
  (e: string, newValue: string | number): void
}

type Props = {
  inputType?  : string,
  placeholder?: string,
}

const emit = defineEmits<Emits>()
const props = withDefaults(defineProps<Props>(), {
  inputType  : 'text',
  placeholder: '入力してください',
})

const updateValue = ((e: any) => {
  emit('input', e.target.value)
})
</script>

<template>
  <div
    :class="$style.text_box"
  >
    <slot name="before" />
    <input 
      :type="inputType"
      :placeholder="placeholder"
      @input="updateValue"
    >
    <slot name="after" />
  </div>
</template>

<style lang="scss" module>
.text_box {
  display         : flex;
  align-items     : center;
  padding         : 0 var(--bv);
  background-color: var(--white-color);
  border          : 1px solid var(--border-color);
  border-radius   : calc(var(--bv) / 2);
  
  input {
    flex   : 1 1 auto;
    padding: calc(var(--bv) * 2) var(--bv);

    &::placeholder {
      color    : var(--disable-text-color);
      font-size: var(--small-font-size);
    }
  }
}
</style>
