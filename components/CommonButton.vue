<script setup lang="ts">
interface Emits {
  (e: string): void
}

const onButtonClick = () => {
  emit('onClick')
}

interface Props {
  buttonText: string,
  iconName: string,
}

const emit = defineEmits<Emits>()
const Props = defineProps<Props>()
</script>

<template>
  <button
    :class="$style.button"
    @click.prevent="onButtonClick"
    type="button"
  >
    <div
      :class="$style.button_container"
    >
      <i :class="['bi', iconName]"></i>
      <span>
        {{ buttonText }}
      </span>
    </div>
  </button>
</template>

<style lang="scss" module>
.button {
  display: inline-block;
  
  &_container {
    display      : inline-block;
    padding      : var(--bv);
    border       : solid 1px var(--main-color);
    border-radius: 4px;

    span {
      margin-left: var(--bv);
      font-weight: bold;
      color      : var(--main-color);
    }
  }
}

</style>