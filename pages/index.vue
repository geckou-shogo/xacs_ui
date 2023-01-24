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