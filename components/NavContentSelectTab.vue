<template>
  <div :class="$style.nav_content_select_tab">
    <SelectButton
      v-for="tab in tabs"
      :key="tab.text"
      :class="$style.tab"
      :isSelected="selectedTab === tab.value"
      @onClick="tabSelected(tab.value)"
    >
      <i :class="['bi', tab.icon]" />
      <span>
        {{ tab.text }}
      </span>
    </SelectButton>
  </div>
</template>

<script setup lang="ts">
type Emits = {
  (e: string, tabValue: string): void
}

type Props = {
  selectedTab: String,
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()
const tabs = ref([
  {
    icon : 'bi-diagram-3-fill',
    text : 'ツリー',
    value: 'tree',
  },
  {
    icon : 'bi-search',
    text : 'タグで検索',
    value: 'search',
  },
])

const tabSelected = (tabValue: string): void => {
  emit('selected', tabValue)
}
</script>

<style lang="scss" module>
.nav_content_select_tab {
  display      : flex;
  height       : calc(var(--bv) * 7);
  border-bottom: 1px solid var(--nav-border-color);
  
  .tab {
    flex: 0 0 50%;
    gap : var(--bv);

    > span {
      color: var(--white-color);
    }

    > i {
      color    : var(--white-color);
      font-size: calc(var(--bv) * 2);
    }
  }
}
</style>
