<template>
  <div>
    <li class="sidebar-item" :class="{ 'activeMenu': isSelected }" v-if="(tree !== undefined)">
      <a v-if="tree.selectable" class="MenuSelectable" style="padding-top: 0px;" href="javascript:void(0)" v-on:click="onClickContentTree((tree as ContentTree).objectKey)">
        <span class="badge bg-white text-black fw-bold me-2" style="width:30px;">{{ (tree.files !== undefined) ? tree.files.length: '-' }}</span><span class="align-middle">{{ tree.name }}</span>
      </a>
      <span v-else class="MenuUnselectable" style="padding-top: 0px;" href="javascript:void(0)">
        <span class="badge text-black-50 me-2" style="background-color:#c0c0c0; width:30px;">&nbsp</span><span class="align-middle">{{ tree.name }}</span>
      </span>
    </li>
    <div class="ms-2" v-if="tree ? (tree.children !== undefined) :false">
      <ContentsTree :tree="child" @select-tree="onClickContentTree" v-model:selectedObjectKey="props.selectedObjectKey" v-for="(child, index) in (tree as ContentTree).children"></ContentsTree>
    </div>
  </div>
</template>

<script setup lang="ts">
/** Props */
type Props = {
  tree: ContentTree;
  selectedObjectKey?: string;
}
const props = withDefaults(defineProps<Props>(),{
    tree: undefined,
    selectedObjectKey:''});

/** Emits */
type Emits = {
  (e: 'select-tree', objectKey: string): void;
  //(e: 'update:selectedObjectKey', text: string): void;
}
const emits = defineEmits<Emits>();

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