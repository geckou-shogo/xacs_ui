<script setup lang="ts">
const contentsDisplayState = ref(false)
const contentsBox = ref(null)
const contentsBoxHeight = ref(0)
onMounted(()=>{
  const contentsBoxValue = contentsBox.value
  contentsBoxHeight.value = contentsBoxValue?.$el.clientHeight
})
const toggleBox = () => {
  contentsDisplayState.value = !contentsDisplayState.value
}
</script>

<template>
  <div
    :class="$style.drop_down_box"
  >
    <button
      :class="$style.icon_button"
      type="button"
      @click="toggleBox"
    >
      <slot :name="'button'" />
    </button>
    <div
      :class="$style.contents"
      :style="{
        height: contentsDisplayState ? `calc(${contentsBoxHeight}px + 4px)` : 0,
        padding: contentsDisplayState ? '2px' : 0,
      }"
    >
      <ShadowBox ref="contentsBox">
        <slot :name="'contents'" />
      </ShadowBox>
    </div>
  </div>
</template>

<style lang="scss" module>
.drop_down_box {
  position: relative;

  .contents {
    position  : absolute;
    top       : 100%;
    right     : calc(0rem - (var(--bv) / 2) - 2px);
    transition: height .1s;
    overflow  : hidden;

    > div {
      border-radius: calc(var(--bv) / 2);
    }
  }
}
</style>
