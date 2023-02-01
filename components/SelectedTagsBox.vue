<script setup lang="ts">
  
</script>

<template>
  <div
    :class="$style.container"
  >
    <div
      :class="$style.heading"
    >
      <p>選択中のタグ</p>
      <TextButton
        :class="$style.button"
        :text="'クリア'"
        :iconName="'bi-arrow-clockwise'"
      />
    </div>
    <div
      :class="$style.tags"
    >
      <TagList
      :tags="[
          {
            id  : '0',
            name: '$TAG NAME',
            type: '1',
          },
          {
            id  : '1',
            name: '$TAG NAME',
            type: '2',
          },
          {
            id  : '2',
            name: '$TAG NAME',
            type: '3',
          },
          {
            id  : '3',
            name: '$TAG NAME',
            type: '4',
          },
        ]"
      />
    </div>
  </div>
</template>

<style lang="scss" module>
.container {
  padding         : var(--bv);
  width           : 100%;
  background-color: var(--base-sub-color);

  .heading {
    display        : flex;
    align-items    : center;
    justify-content: space-between;

    p {
      font-size  : var(--small-font-size);
      font-weight: bold;
      color      : var(--text-color);
    }

    i {
      font-size: var(--large-font-size);
    }

    .button {
      padding: 0;
      font-size: var(--small-font-size);

    }
  }

  .tags {
    margin-top: calc(var(--bv) * 2);
  }
}

</style>
