<script setup lang="ts">

const searchFile = () => {
  console.log('search');
}
</script>

<template>
  <div
    :class="$style.container"
  >
    <CommonTextBox
      :inputType="'text'"
      :placeholder="'タグ分類、タグ名を入力'"
      :shouldButton="true"
      :buttonText="'追加'"
      :buttonType="'bi-plus-square'"
    />
    <SelectedTagsBox />
    <CommonButton
      :iconName="'bi-search'"
      :text="'検索する'"
      :buttonType="'decision'"
      @onClick="searchFile"
      :class="$style.button"
    />
  </div>
</template>

<style lang="scss" module>
.container {
  display: grid;
  width: 100%;
  gap: calc(var(--bv) * 2) 0;

  .button {
    display        : flex;
    justify-content: center;
    padding        : calc(var(--bv) * 2);
  }
}
</style>
