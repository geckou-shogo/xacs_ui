<script setup lang="ts">
type Props = {
  tags      : any[],
  isShowIcon: boolean,
}

const props = withDefaults(defineProps<Props>(), {
  isShowIcon: false,
})
</script>

<template>
  <div
    :class="$style.tag_list"
  >
    <i
      v-if="isShowIcon"
      class="bi bi-tags-fill"
    />
    <ul
      :class="$style.list"
    >
      <li
        v-for="tag in tags"
        :key="tag.id"
      >
        <SearchTag
          :text="tag.name"
          :type="tag.type"
        />
      </li>
    </ul>
  </div>
</template>

<style lang="scss" module>
.tag_list {
  display    : flex;
  align-items: center;
  gap        : var(--bv);

  > i {
    color    : var(--text-color);
    font-size: 1rem;
  }
  
  .list {
    display    : flex;
    align-items: center;
    flex-wrap  : wrap;
    gap        : calc(var(--bv) / 2);

    > li {
      display    : flex;
      align-items: center;
    }
  }
}
</style>
