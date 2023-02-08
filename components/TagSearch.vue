<script setup lang="ts">
import { tags } from '~/service/tags'
const searchWord = ref<string>('')
const selectedTags = ref<any[]>([])
const resultTags = computed<any[]>(() => {
  return searchWord.value ? tags.filter(tag => String(tag.name).toLowerCase().includes(String(searchWord.value).toLowerCase())) : []
})
const selectTag = (tagName: string): void => {
  if (!isSelectedTag(tagName)) searchWord.value = tagName
}

const addSelectedTags = () => {
  const selectTag = tags.find(tag => tag.name === searchWord.value)
  selectedTags.value.push(selectTag)
  searchWord.value = ''
}

const isSelectedTag = (tagName: string): boolean => {
  const selectedTagNames: string[] = selectedTags.value.map(tag => tag.name)
  return selectedTagNames.includes(tagName)
}

const deleteTags = (tagNames: string[]): void => {
  const newSelectedTags = [...selectedTags.value].filter(tag => tagNames.every(tagName => tag.name !== tagName))
  selectedTags.value = newSelectedTags
}

const searchType = ref('AND')

const searchFile = () => {
  console.log(`search in ${selectedTags.value.map(tag => tag.name).join(searchType.value)}`)
}
</script>

<template>
  <div
    :class="$style.container"
  >
    <div
      :class="$style.tag_selector"
    >
      <input
        v-model="searchWord"
        type="text"
        placeholder="タグ分類、タグ名を入力"
      >
      <CommonButton
        :text="'追加'"
        :iconName="'bi-plus-square'"
        @click="addSelectedTags"
      />
      <ModalBox
        v-if="resultTags.length && resultTags.length !== 1"
        :class="$style.slide_down"
      >
        <div
          v-for="tag in resultTags"
          :key="tag.id"
          @click="selectTag(tag.name)"
          :class="isSelectedTag(tag.name) ? $style.selected : ''"
        >
          {{ tag.name }}
          <i
            v-show="isSelectedTag(tag.name)"
            class="bi bi-check"
          />
        </div>
      </ModalBox>
    </div>
    <SelectedTags
      :selectedTags="selectedTags"
      @deleteTags="deleteTags"
    />
    <RadioButtons
      :radios="[
        {
          name : 'searchType',
          value: 'AND',
          label: 'AND',
        },
        {
          name : 'searchType',
          value: 'OR',
          label: 'OR',
        },
      ]"
      @onChange="(val) => searchType = val"
    />
    <CommonButton
      :iconName="'bi-search'"
      :text="'検索する'"
      :buttonType="selectedTags.length ? 'decision' : 'disabled'"
      @onClick="searchFile"
      :class="$style.button"
    />
  </div>
</template>

<style lang="scss" module>
.container {
  display       : flex;
  flex-direction: column;
  width         : 100%;
  gap           : calc(var(--bv) * 2);

  .tag_selector {
    display         : flex;
    padding         : calc(var(--bv) / 2);
    background-color: var(--white-color);
    border          : 1px solid var(--border-color);
    border-radius   : calc(var(--bv) / 2);
    position        : relative;
    
    > input {
      width  : 100%;
      padding: calc(var(--bv) / 2);

      &::placeholder {
        font-size: var(--small-font-size);
        color    : var(--disable-text-color);
      }
    }

    > button {
      flex     : 0 0 auto;
      gap      : calc(var(--bv) / 2);
      padding  : calc(var(--bv) / 2);
      font-size: var(--small-font-size);
    }

    .slide_down {
      max-height   : 25vh;
      border-radius: calc(var(--bv) / 2);
      overflow     : auto;
      position     : absolute;
      top          : 100%;
      color        : var(--text-color);

      > div {
        padding   : calc(var(--bv) * 2);
        color     : var(--link-color);
        font-size : var(--small-font-size);
        transition: background-color .1s linear;

        &:not(.selected) {
          cursor: pointer;

          &:hover {
            background-color: var(--hover-color);
          }
        }

        &.selected {
          color: var(--disable-text-color);
        }
      }
    }
  }

  .button {
    display        : flex;
    justify-content: center;
    padding        : calc(var(--bv) * 2);
  }
}
</style>
