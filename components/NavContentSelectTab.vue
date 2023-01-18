<template>
  <div :class="$style.nav_content_select_tab">
    <SelectButton
      v-for="tab in tabs"
      :key="tab.text"
      :class="$style.tab"
      :isSelected="selectedTab === tab.value"
      @onClick="tabSelected(tab.value)"
    >
      <component
        :is="tab.icon"
      />
      <span>
        {{ tab.text }}
      </span>
    </SelectButton>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'NavContentSelectTab',
  props: {
    selectedTab: {
      required: true,
      type    : String,
    },
  },
  data() {
    return {
      tabs: [
        {
          icon : 'b-icon-diagram-3-fill',
          text : 'ツリー',
          value: 'tree',
        },
        {
          icon : 'b-icon-search',
          text : 'タグで検索',
          value: 'search',
        },
      ],
    }
  },
  methods: {
    tabSelected(tabValue: string): void {
      this.$emit('selected', tabValue)
    },
  }
})
</script>

<style lang="scss" module>
.nav_content_select_tab {
  display      : flex;
  height       : calc(var(--bv) * 8);
  border-bottom: 1px solid var(--nav-border-color);
  
  .tab {
    flex           : 0 0 50%;
    display        : flex;
    justify-content: center;
    align-items    : center;
    gap            : var(--bv);

    > span {
      color: var(--white-color);
    }

    > svg {
      color    : var(--white-color);
      font-size: calc(var(--bv) * 2);
    }
  }
}
</style>
