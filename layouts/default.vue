<script setup lang="ts">
import { treeData } from '~/service/tree'

definePageMeta({
  name: 'DefaultLayout',
})

const navDisplayState = ref(true)
const selectedTab = ref('tree')
const userData = ref({
  name: 'USER NAME',
})

const tabSelected = (tabValue: string): void => {
  selectedTab.value = tabValue
}
</script>

<template>
  <div :class="$style.container">
    <SideNav
      :displayState="navDisplayState"
      @openNav="navDisplayState = true"
    >
      <div :class="$style.tabs">
        <NavContentSelectTab
          :selectedTab="selectedTab"
          @selected="tabSelected"
        />
      </div>
      <div>
        <ContentsTree
          v-show="selectedTab === 'tree'"
          :tree="treeData.compiled.viewer.compiled_tree"
        />
        <TagSearch
          v-show="selectedTab === 'search'"
          :class="$style.search"
        />
      </div>
    </SideNav>
    <div :class="$style.column">
      <GlobalHeader>
        <div
          :class="$style.header"
        >
          <IconButton
            @onClick="navDisplayState = !navDisplayState"
          >
            <i class="bi bi-filter-left" />
          </IconButton>
          <AccountInfo
            :userName="userData.name"
            :class="$style.account_info"
          />
        </div>
      </GlobalHeader>
      <div :class="$style.contents">
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
:root {
  --bv                : .5rem;
  --white-color       : #ffffff;
  --main-color        : #005AAF;
  --sub-color         : #5B95AB;
  --base-color        : #EEF1F2;
  --base-sub-color    : #BBE4F4;
  --text-color        : #262A2C;
  --disable-text-color: #AAAAAA;
  --link-color        : #005AAF;
  --hover-color       : rgba(124, 205, 246, .3);
  --decision-color    : #009F70;
  --alert-color       : #AF3636;
  --border-color      : #DFDFDF;
  --shadow-color      : rgba(20, 21, 21, .1);
  --tag1-color        : #CA841B;
  --tag2-color        : #C66179;
  --tag3-color        : #9EA204;
  --tag4-color        : #9A5DB7;
  --line-height       : 1.4;
  --letter-spacing    : .1em;
  --base-font-size    : 14px;
  --large-font-size   : 16px;
  --larger-font-size  : 18px;
  --small-font-size   : 12px;
  --min-font-size     : 10px;
  --z-index-overlay   : 90;
  --z-index-header    : 80;
  --z-index-contents  : 70;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color     : var(--base-color);
  color                : var(--text-color);
  font-size            : var(--base-font-size);
  line-height          : var(--line-height);
  letter-spacing       : var(--letter-spacing);
  word-wrap            : break-word;
  font-feature-settings: 'palt';
}

main {
  flex: 1 1 auto;
}

p {
  margin : 0;
  padding: 0;
}

small,
span {
  display: inline-block;
}

h1, h2, h3, h4, h5, h6 {
  margin     : 0;
  padding    : 0;
  color      : inherit;
  font-weight: bold;
  font-size  : inherit;
  line-height: var(--line-height);
}

ul, ol, li, dl, dt, dd {
  margin : 0;
  padding: 0;
}

li {
  list-style: none;
}

a {
  color     : var(--link-color);
  transition: color .2s;
}

em {
  font-style: normal;
}

img {
  display   : block;
  max-width : 100%;
  max-height: 100%;
}

fieldset {
  border: none;
}

input,
option,
button {
  line-height   : 1.2;
  letter-spacing: var(--letter-spacing);
}

table {
  border-collapse: collapse;
  border-spacing: 0;

  th,
  td {
    text-align    : left;
    vertical-align: middle;
  }
}

.container {
  width  : 100vw;
  display: flex;

  .column {
    flex          : 1 1 100%;
    display       : flex;
    flex-direction: column;
    max-height    : 100vh;

    .contents {
      flex    : 1 1 100%;
      overflow: hidden;
    }
  }

  .search {
    padding: calc(var(--bv) * 2);
    display: grid;
    gap: calc(var(--bv) * 2) 0;
  }
}

.header {
  display        : flex;
  justify-content: space-between;
}
</style>