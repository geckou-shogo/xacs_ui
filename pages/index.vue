<template>
  <PageContainer>
    <SectionHeading
      :headingText="'操作履歴'"
    />

    <SectionHeading
      :headingText="'最近更新されたファイル'"
    >
      <ListTypeSelector
        :selectedListType="selectedListType"
        @selected="listTypeSelected"
      />
    </SectionHeading>
    <CommonButton
      :iconName="'bi-file-earmark-plus'"
      :buttonText="'ファイルの追加'"
    />
    <CommonButton
      :iconName="'bi-stickies'"
      :buttonText="'共有URLの発行'"
    />
    <SearchTag
      :background="'orange'"
      :tagText="'$作成日#2022-12-07'"
    />
    <SearchTag
      :background="'pink'"
      :tagText="'$作成日#2022-12-07'"
    />
    <SearchTag
      :background="'green'"
      :tagText="'$作成日#2022-12-07'"
    />
    <SearchTag
      :background="'purple'"
      :tagText="'$作成日#2022-12-07'"
    />
  </PageContainer>
</template>

<script setup lang="ts">
definePageMeta({
  name: 'TopPage',
})

const selectedListType = ref('card')
const listTypeSelected = (listType: string): void => {
  selectedListType.value = listType
}
</script>

<style lang="scss" module>
.wrapper {
  width: 100%;
}
</style>