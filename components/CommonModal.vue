<script setup lang="ts">
type Props = {
  displayState: boolean,
}

const props = defineProps<Props>()

type Emits = {
  (e: string, state: Boolean): void
}

const emit = defineEmits<Emits>()

const close = () => {
  emit('closeModal', false)
}
</script>

<template>
  <div
    @click.self="close"
    :class="[$style.overlay, displayState ? $style.display : '']"
  >
    <ModalBox
      :class="$style.contents"
    >
      <slot />
      <i
        @click.self="close"
        class="bi bi-x-circle"
      />
    </ModalBox>
  </div>
</template>

<style lang="scss" module>
.overlay {
  display              : flex;
  justify-content      : center;
  align-items          : center;
  width                : 100dvw;
  height               : 100dvh;
  background           : rgba(62, 62, 65, 0.8);
  background-blend-mode: multiply;
  backdrop-filter      : blur(4px);
  opacity              : 0;
  transition           : opacity .1s linear;
  pointer-events       : none;
  position             : fixed;
  z-index              : var(--z-index-overlay);
  top                  : 0;
  left                 : 0;
  cursor               : pointer;

  &.display {
    opacity       : 1;
    pointer-events: auto;
  }

  .contents {
    max-width    : 50%;
    border-radius: calc(var(--bv) / 2);
    position     : relative;
    cursor       : auto;

    > i {
      color    : var(--white-color);
      font-size: 24px;
      cursor   : pointer;
      position : absolute;
      top      : calc(var(--bv) * -4);
      right    : calc(var(--bv) * -4);
    }
  }
}
</style>
