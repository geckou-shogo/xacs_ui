<script setup lang="ts">
import { fileList } from '~/service/static'

definePageMeta({
  name: 'TopPage',
})

const selectedListType = ref('card')
const selectedFileId = ref('')
const fileUploaderDisplayState = ref(false)
const listTypeSelected = (listType: string): void => {
  selectedListType.value = listType
}
const fileUpload = (file: any) => {
  window.alert(`${file.name}がアップロードされました`)
}
const selectedFile = computed<any>(() => {
  return selectedFileId.value ? fileList.find(file => file.id === selectedFileId.value) : {}
})
</script>

<template>
  <PageContainer>
    <ContentsHeader>
      <template #left_column>
        <BreadCrumbing />
      </template>
      <template #right_column>
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
          #heading
        >
          <h2>操作履歴</h2>
        </template>
      </SectionHeading>
      <ListTable>
        <template #tbody>
          <tr>
            <td>
              2022-12-08 11:42:40
            </td>
            <td>
              受注前>引き合い対応>メモ の 株式会社ABC_テストデータ_040.jpg をアップロード 
            </td>
          </tr>
          <tr>
            <td>
              2022-12-08 11:42:40
            </td>
            <td>
              受注前>引き合い対応>メモ の 株式会社ABC_テストデータ_040.jpg をアップロード 
            </td>
          </tr>
        </template>
      </ListTable>
      <SectionHeading>
        <template
          #heading
        >
          <h2>最近更新されたファイル</h2>
        </template>
        <template
          #option
        >
          <ListTypeSelector
            :selectedListType="selectedListType"
            @selected="listTypeSelected"
          />
        </template>
      </SectionHeading>
      <CardList
        v-show="selectedListType === 'card'"
        :list="fileList"
        @selectFile="(fileId) => selectedFileId = fileId"
      />
      <FileListTable
        v-show="selectedListType === 'table'"
        :list="fileList"
        @selectFile="(fileId) => selectedFileId = fileId"
      />
      <SectionHeading>
        <template
          #heading
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
            :isDisplayedIcon="true"
          />
        </template>
        <template
          #option
        >
          <ListTypeSelector
            :selectedListType="selectedListType"
            @selected="listTypeSelected"
          />
        </template>
      </SectionHeading>
      <CommonTextBox>
        <template #before>
          <i class="bi bi-x-circle" />
        </template>
        <template #after>
          <i class="bi bi-x-circle" />
        </template>
      </CommonTextBox>
      <CommonSelectBox
        :name="'select'"
        :options="[
          {
            label: '選択肢１',
            value: '１',
          },
          {
            label: '選択肢２',
            value: '２',
          },
        ]"
      />
      <CommonCheckBox
        :name="'check'"
        :label="'チェック'"
      />
    </ContentsContainer>
    <CommonModal
      :displayState="Boolean(selectedFile.id)"
      @closeModal="() => selectedFileId = ''"
    >
      <FileDetails
        v-if="selectedFile.id"
        :file="selectedFile"
      />
    </CommonModal>
  </PageContainer>
</template>

<style lang="scss" module>
.wrapper {
  width: 100%;
}
</style>