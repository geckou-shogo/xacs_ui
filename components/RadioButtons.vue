<script setup lang="ts">
type Emits = {
  (e: string, newValue: string): void
}

type Props = {
  radios: {
      name : string,
      value: string,
      label: string,
    }[]
}

const emit = defineEmits<Emits>()
const props = defineProps<Props>()
const radioValue = ref('')
const onChangeRadio = () => emit('onChange', radioValue.value)

onMounted(()=>{
  radioValue.value = props.radios[0].value
})
</script>

<template>
  <fieldset
    :class="$style.container"
  >
    <div
      v-for="radio in radios"
      :class="$style.radio"
    >
      <input
        type="radio"
        :id="radio.value"
        :name="radio.name"
        :value="radio.value"
        v-model="radioValue"
        @change="onChangeRadio"
      >
      <label
        :for="radio.value"
      >
        {{ radio.label }}
      </label>
    </div>
  </fieldset>
</template>

<style lang="scss" module>
.container {
  display    : flex;
  align-items: center;
  flex-wrap  : wrap;
  gap        : calc(var(--bv) * 2);

  .radio {
    > input {
      display: none;

      &:checked {
        + label {
          color: var(--sub-color);
          
          &::before {
            box-shadow: 0 0 0 4px var(--main-color) inset;
          }
        }
      }
  
      &:not(:checked) {
        + label {
          cursor: pointer;
        }
      }
    }

    > label {
      display    : flex;
      align-items: center;
      gap        : calc(var(--bv) / 2);

      &::before {
        content         : '';
        display         : inline-block;
        width           : calc(var(--bv) * 2);
        height          : calc(var(--bv) * 2);
        box-shadow      : 0 0 0 1px var(--disabled-text-color) inset;
        background-color: var(--white-color);
        border-radius   : 50%;
        transition      : box-shadow .1s linear;
      }
    }
  }
}
</style>