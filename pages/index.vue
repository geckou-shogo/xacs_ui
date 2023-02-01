<script setup lang="ts">
definePageMeta({
  name: 'TopPage',
})

const selectedListType = ref('card')
const fileUploaderDisplayState = ref(false)
const listTypeSelected = (listType: string): void => {
  selectedListType.value = listType
}
const fileUpload = (file: any) => {
  window.alert(`${file.name}がアップロードされました`)
}
</script>

<template>
  <PageContainer>
    <ContentsHeader>
      <template v-slot:left_column>
        <BreadCrumbing />
      </template>
      <template v-slot:right_column>
        <CommonButton
          :iconName="'bi-file-earmark-plus'"
          :text="'ファイルの追加'"
          @onClick="fileUploaderDisplayState = true"
        />
        <CommonButton
          :iconName="'bi-stickies'"
          :text="'共有URLの発行'"
        />
      </template>
    </ContentsHeader>
    <ContentsContainer>
      <fileUploader
        :isDisplayed="fileUploaderDisplayState"
        @closeUploader="fileUploaderDisplayState = false"
        @fileUpload="fileUpload"
      />
      <SectionHeading>
        <template
          v-slot:heading
        >
          <h2>操作履歴</h2>
        </template>
      </SectionHeading>
      <SectionHeading>
        <template
          v-slot:heading
        >
          <h2>最近更新されたファイル</h2>
        </template>
        <template
          v-slot:option
        >
          <ListTypeSelector
            :selectedListType="selectedListType"
            @selected="listTypeSelected"
          />
        </template>
      </SectionHeading>
      <SectionHeading>
        <template
          v-slot:heading
        >
          <TagList
            :tags="[
              {
                id  : '0',
                name: '$TAG NAME',
                type: '1',
              },
              {
                id  : '1',
                name: '$TAG NAME',
                type: '2',
              },
              {
                id  : '2',
                name: '$TAG NAME',
                type: '3',
              },
              {
                id  : '3',
                name: '$TAG NAME',
                type: '4',
              },
            ]"
            :isShowIcon="true"
          />
        </template>
        <template
          v-slot:option
        >
          <ListTypeSelector
            :selectedListType="selectedListType"
            @selected="listTypeSelected"
          />
        </template>
      </SectionHeading>
      <CardItem></CardItem>
        <ListTable
        :lists="[
          {
            id: '1',
            date: '2022-12-08 11:42:40',
            currentLink: '受注前>引き合い対応>メモ',
            fileData: '株式会社ABC_テストデータ_040.jpg',
            link: '/',
          },
          {
            id: '2',
            date: '2022-12-08 11:42:40',
            currentLink: '受注前>引き合い対応>メモ',
            fileData: '株式会社ABC_テストデータ_040.jpg',
            link: '/',
          },
          {
            id: '3',
            date: '2022-12-08 11:42:40',
            currentLink: '受注前>引き合い対応>メモ',
            fileData: '株式会社ABC_テストデータ_040.jpg',
            link: '/',
          },
        ]"
      ></ListTable>
    </ContentsContainer>
  </PageContainer>
</template>

<style lang="scss" module>
.wrapper {
  width: 100%;
}
</style>