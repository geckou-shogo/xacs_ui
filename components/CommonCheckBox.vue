<script setup lang="ts">
type Emits = {
  (e: string, newValue: {name: string, value: string | number}): void
}

const emit = defineEmits<Emits>()

type Props = {
  name         : string,
  label        : string,
  defaultState?: boolean,
}

const props = withDefaults(defineProps<Props>(), {
  defaultState: false,
})

const checkedValue = ref(false)
const updateValue = ((e: any) => {
  emit('check', e.target.value)
})

onMounted(()=>{
  checkedValue.value = props.defaultState
})
</script>

<template>
  <label
    :class="$style.check_box"
  >
    <i
      :class="[
        'bi',
        checkedValue ? 'bi-check-square-fill' : 'bi-check-square'
      ]"
    />
    <input
      type="checkbox"
      v-model="checkedValue"
      @change="updateValue"
    >
    <span>
      {{ label }}
    </span>
  </label>
</template>



<style lang="scss" module>
.check_box {
  display         : inline-flex;
  align-items     : center;
  gap             : var(--bv);
  padding         : var(--bv);
  background-color: transparent;
  border-radius   : calc(var(--bv) / 2);
  color           : var(--link-color);
  cursor          : pointer;

  > input {
    display: none;

    &:checked {
      + span {
        font-weight: bold;
      }
    }
  }

  > i {
    font-size: var(--large-font-size);
  }
}
</style>