<script setup lang="ts">
const breadCrumbing = ref(['受注前', '引き合い対応', 'メモ'])
const current = ref('メモ')
const changeContents = (name: string): void => {
  console.log(`${name}に移動`);
}
</script>

<template>
  <div
    :class="$style.bread_crumbing"
  >
    <span
      :class="$style.item"
    >
      <span
        @click="changeContents('TOP')"
      >
        TOP
      </span>
      <i class="bi bi-chevron-right" />
    </span>
    <span
      v-for="name in breadCrumbing"
      :key="name"
      :class="[$style.item, name === current ? $style.current : '']"
    >
      <span
        @click="changeContents(name)"
      >
        {{ name }}
      </span>
      <i
        v-if="name !== current"
        class="bi bi-chevron-right"
      />
    </span>
  </div>
</template>

<style lang="scss" module>
.bread_crumbing {
  display    : flex;
  align-items: center;
  gap        : calc(var(--bv) * 2);

  .item {
    display    : flex;
    align-items: center;
    gap        : calc(var(--bv) * 2);

    > span {
      padding: calc(var(--bv) / 2) var(--bv);
      border-radius   : calc(var(--bv) * 3);
    }

    &:not(.current) {
      > span {
        color     : var(--link-color);
        cursor    : pointer;
        transition: background-color .1s linear;
  
        &:hover {
          background-color: var(--hover-color);
        }
      }
    }

    > i {
      color    : var(--disable-text-color);
      font-size: 1rem;
    }

    &.current {
      > span {
        background-color: var(--main-color);
        color           : var(--white-color);
        cursor          : auto;
      }
    }
  }
}
</style>