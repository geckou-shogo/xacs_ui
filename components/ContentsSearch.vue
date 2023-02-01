<script setup lang="ts">
  
</script>

<template>
  <div
    :class="$style.container"
  >
    <CommonTextBox
      :class="$style.search"
      :inputType="'text'"
      :placeholder="'タグ分類、タグ名を入力'"
      :shouldButton="true"
      :buttonText="'追加'"
      :buttonType="'bi-plus-square'"
    />
    <SelectedTagsBox 

    />
  </div>
</template>

<style lang="scss" module>
.container {
  display: grid;
  width: 100%;
  gap: calc(var(--bv) * 2) 0;

  .search {
    font-size: var(--small-font-size);
  }
}

</style>
