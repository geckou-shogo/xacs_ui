<script setup lang="ts">
type Emits = {
  (e: string, newValue: {name: string, value: string | number}): void
}

const emit = defineEmits<Emits>()

type Props = {
  name         : string,
  options      : {
    label : string,
    value: string | number,
  }[],
  defaultValue?: string,
  unselectable?: boolean, 
}

const props = withDefaults(defineProps<Props>(), {
  defaultValue: 'disabled',
  unselectable: false,
})

const selectValue = ref('')
const updateValue = ((e: any) => {
  emit('select', {name: props.name, value: e.target.value})
})

onMounted(()=>{
  selectValue.value = props.defaultValue
})
</script>

<template>
  <div
    :class="$style.select_box"
  >
    <select
      :name="name"
      v-model="selectValue"
      @change="updateValue"
    >
      <option
        value="disabled"
        disabled
      >
        選択してください
      </option>
      <option
        v-if="unselectable"
        value
      >
        選択しない
      </option>
      <template
        v-for="option in options"
        :key="option.value"
      >
        <option
          :value="option.value"
        >
          {{ option.label }}
        </option>
      </template>
    </select>
    <i class="bi bi-chevron-down" />
  </div>
</template>

<style lang="scss" module>
.select_box {
  display         : flex;
  align-items     : center;
  background-color: var(--white-color);
  border          : 1px solid var(--border-color);
  border-radius   : calc(var(--bv) / 2);
  position        : relative;
  
  select {
    flex         : 1 1 auto;
    padding      : calc(var(--bv) * 2);
    padding-right: calc(var(--bv) * 6);
    font-size    : var(--small-font-size);
    cursor       : pointer;
  }

  > i {
    display    : flex;
    align-items: center;
    margin     : auto;
    font-size  : var(--small-font-size);
    position   : absolute;
    top        : 0;
    right      : calc(var(--bv) * 2);
    bottom     : 0;
    cursor     : pointer;
  }
}
</style>
