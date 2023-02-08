<script setup lang="ts">
type Emits = {
  (e: string, tagName: string): void
}
type Props = {
  tags            : any[],
  isDisplayedIcon?: boolean,
  deletable?      : boolean,
}

const emit = defineEmits<Emits>()
const props = withDefaults(defineProps<Props>(), {
  isDisplayedIcon: false,
  deletable      : false,
})

const deleteTag = (tagName: string): void => {
  emit('deleteTag', tagName)
}
</script>

<template>
  <div
    :class="$style.tag_list"
  >
    <i
      v-if="isDisplayedIcon"
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
          :deletable="deletable"
          @deleteTag="deleteTag"
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
