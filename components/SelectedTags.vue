<script setup lang="ts">
type Emits = {
  (e: string, newValue: string[]): void
}

type Props = {
  selectedTags: any[],
}

const emit = defineEmits<Emits>()
const props = defineProps<Props>()

const deleteTag = (tagName: string): void => {
  emit('deleteTags', [tagName])
}

const deleteAllTags = (): void => {
  const deletedAllTagNames = [...props.selectedTags].map(tag => tag.name)
  emit('deleteTags', deletedAllTagNames)
}
</script>

<template>
  <div
    :class="$style.container"
  >
    <div
      :class="$style.header"
    >
      <p>
        選択中のタグ<span v-show="!selectedTags.length">はありません</span>
      </p>
      <TextButton
        v-show="selectedTags.length"
        :text="'クリア'"
        :iconName="'bi-arrow-clockwise'"
        :class="$style.clear"
        @onClick="deleteAllTags"
      />
    </div>
    <TagList
      v-show="selectedTags.length"
      :tags="selectedTags"
      :deletable="true"
      @deleteTag="deleteTag"
    />
  </div>
</template>

<style lang="scss" module>
.container {
  display         : flex;
  flex-direction  : column;
  gap             : calc(var(--bv) * 2);
  padding         : var(--bv);
  width           : 100%;
  background-color: var(--base-sub-color);
  border-radius   : calc(var(--bv) / 2);

  .header {
    display        : flex;
    align-items    : center;
    justify-content: space-between;

    p {
      color      : var(--text-color);
      font-size  : var(--small-font-size);
      font-weight: bold;
    }

    .clear {
      padding: 0;
      font-size: var(--small-font-size);

      > i {
        font-size: var(--large-font-size);
      }
    }
  }
}
</style>
