<script setup lang="ts">
/** Props */
type Props = {
  tree: ContentTree;
  selectedObjectKey?: string;
}

const props = withDefaults(defineProps<Props>(), {
  tree             : undefined,
  selectedObjectKey: '',
})

/** Emits */
type Emits = {
  (e: 'select-tree', objectKey: string): void;
  //(e: 'update:selectedObjectKey', text: string): void;
}
const emits = defineEmits<Emits>();

const displayChildItemName = ref('')
const toggleChild = (itemName: string) => {
  displayChildItemName.value = displayChildItemName.value === itemName ? '' : itemName
}

/**
 * ツリークリック時イベント
 */
const onClickContentTree = (objectKey: string) => {
  emits('select-tree', objectKey);
}

/**
 * このツリー配下のファイル数を積算する
 */
const countFile = (treePointer: ContentTree) => {
  var files = 0;

  // 自ノードのファイル数
  if(treePointer.files !== undefined){
      files = treePointer.files.length;
  }

  // 再帰(チャイルドのファイル数)
  if (treePointer.children !== undefined) {
      files = 0;
      treePointer.children.forEach(child => {
          files += countFile(child);
      })
  }
  return files;
}

/**
 * 選択中のツリー
 */
const isSelected = computed(() => {
  return props.selectedObjectKey == props.tree.objectKey;
})

/**
 * ツリー配下のファイル数
 */
const filesCounted = computed(() => {
  return countFile(props.tree);
})
</script>

<template>
  <div
    :class="$style.contents_tree"
  >
    <div
      v-for="item in tree"
      :key="item.name"
      :class="[$style.container, displayChildItemName === item.name ? $style.open : '']"
    >
      <div
        @click="toggleChild(item.name)"
        :class="[$style.item, item.children ? '' : $style.bottom_layer]"
      >
        <i
          v-if="item.children"
          :class="[
            'bi',
            $style.arrow,
            displayChildItemName === item.name ? 'bi-chevron-down' : 'bi-chevron-right'
          ]"
        />
        <i
          :class="[
            'bi',
            item.uploadable
              ? 'bi-folder-plus'
              : displayChildItemName === item.name
                ? 'bi-folder2-open'
                : 'bi-folder'
          ]"
        />
        <span>
          {{ item.name }}
        </span>
        <span>
          ({{ item.files ? item.files.length : 0 }})
        </span>
      </div>
      <div
        v-show="item.children && item.children.length"
        :class="$style.child"
        :style="{
          height: displayChildItemName === item.name ? `auto` : 0,
        }"
      >
        <ContentsTree
          :tree="item.children"
        />
      </div>
    </div>
    <!-- <div
      v-if="(tree !== undefined)"
      class="sidebar-item"
      :class="{ 'activeMenu': isSelected }"
    >
      <a
        v-if="tree.selectable"
        class="MenuSelectable"
        style="padding-top: 0px;"
        href="javascript:void(0)"
        v-on:click="onClickContentTree((tree as ContentTree).objectKey)"
      >
        <span class="badge bg-white text-black fw-bold me-2" style="width:30px;">
          {{ (tree.files !== undefined) ? tree.files.length: '-' }}
        </span>
        <span class="align-middle">{{ tree.name }}</span>
      </a>
      <span v-else class="MenuUnselectable" style="padding-top: 0px;" href="javascript:void(0)">
        <span class="badge text-black-50 me-2" style="background-color:#c0c0c0; width:30px;">&nbsp</span><span class="align-middle">{{ tree.name }}</span>
      </span>
    </div>
    <div
      v-if="tree ? (tree.children !== undefined) : false"
    >
      <ContentsTree
        v-for="(child, index) in (tree as ContentTree).children"
        :tree="child"
        @select-tree="onClickContentTree"
        v-model:selectedObjectKey="props.selectedObjectKey"
      />
    </div> -->
  </div>
</template>

<style lang="scss" module>
.contents_tree {
  --nav-border-color: #353A3E;
  --nav-open-color: #A4A4A4;
  --nav-hover-color: #0099ff;
  .container {
    position: relative;

    &:not(:last-child) {
      border-bottom: 1px solid var(--nav-border-color);
    }

    &::before {
      content         : '';
      display         : block;
      width           : 200%;
      height          : 100%;
      background-color: transparent;
      mix-blend-mode  : overlay;
      position        : absolute;
      left            : -100%;
      transition      : background-color .1s;
    }

    &.open {
      &::before {
        background-color: var(--nav-open-color);
      }

      > .child {
        overflow: inherit;
      }
    }

    .item {
      display    : flex;
      align-items: center;
      padding    : calc(var(--bv) * 2);
      cursor     : pointer;
      gap        : var(--bv);
      position   : relative;

      &:hover {
        color: var(--nav-hover-color);
      }

      &.bottom_layer {
        padding-left: calc(13.4px + var(--bv) * 4);
      }

      .arrow {
        font-size        : 12px;
        margin-inline-end: var(--bv);
      }
    }
    .child {
      padding-left: calc(var(--bv) * 2);
      transition  : height .3s linear;
      overflow: hidden;

      > div {
        > div {
          border: none;
        }
      }
    }
  }
}
</style>