<script setup lang="ts">
import {
  $contentIconClassName,
  $updateDate,
  $fileSizeUnit,
} from '~/service/utils'

type FileType = {
  id          : string,
  content_type: string,
  file_name   : string,
  update      : string,
  file_size   : number,
  tags        : [],
}

type Props = {
  file: FileType,
}

const props = defineProps<Props>()
const operationsComponent = ref()

const operations = ref([
  {
    operation: 'shareLink',
    text: '共有URLの発行',
    icon: 'bi-stickies'
  },
  {
    operation: 'download',
    text: 'ダウンロード',
    icon: 'bi-cloud-arrow-down-fill'
  },
  {
    operation: 'upload',
    text: 'アップロード',
    icon: 'bi-cloud-arrow-up-fill'
  },
  {
    operation: 'delete',
    text: 'ファイル削除',
    icon: 'bi-trash-fill'
  },
])
</script>

<template>
  <ShadowBox
    :class="$style.item_card"
  >
    <header
      :class="$style.header"
    >
      <div
        :class="$style.header_icon"
      >
        <i :class="['bi', $contentIconClassName(file.content_type)]" />
      </div>
      <p
        :class="$style.file_name"
      >
        {{ file.file_name }}
      </p>
    </header>
    <div
      :class="$style.contents"
    >
      <div
      :class="$style.preview"
      >
        <img src="" alt="">
      </div>
      <div>
        <dl
          :class="$style.information"
        >
          <div
            :class="$style.information_item"
          >
            <dt>最終更新</dt>
            <dd>{{ $updateDate(file.update) }}</dd>
          </div>
          <div
            :class="$style.information_item"
          >
            <dt>ファイルサイズ</dt>
            <dd>{{ $fileSizeUnit(file.file_size) }}</dd>
          </div>
        </dl>
        <TagList
          :tags="file.tags"
          :class="$style.tag_list"
        />
      </div>
    </div>
    <footer
      :class="$style.footer"
    >
      <ul
        :class="$style.operations"
      >
        <li
          v-for="operation in operations"
          :key="operation.operation"
        >
          <TextButton
            :class="[$style.operations_menu_button, operation.operation === 'delete' ? $style[operation.operation] : '']"
            :text="operation.text"
            :iconName="operation.icon"
          />
        </li>
      </ul>
    </footer>
  </ShadowBox>
</template>

<style lang="scss" module>
.item_card {
  border-radius: calc(var(--bv) / 2);
  cursor       : pointer;
  transition   : box-shadow .1s;
  height       : 100%;

  .header {
    border-bottom: 1px solid var(--border-color);
    display      : flex;
    align-items  : center;
    padding      : var(--bv);
    gap          : var(--bv);

    .header_icon {
      padding  : 0 var(--bv);
      font-size: 24px;
    }

    .file_name {
      flex       : 1 1 auto;
      font-size  : var(--large-font-size);
      font-weight: bold;
    }
  }

  .footer {
    border-top: 1px solid var(--border-color);
    padding   : var(--bv);

    .operations {
      display        : flex;
      justify-content: flex-end;
      gap            : var(--bv);
      width          : 100%;
  
      > li {
        .operations_menu_button {
          width  : 100%;
          padding: var(--bv);
  
          &.delete {
            color: var(--alert-color);
  
            &:hover {
              color           : var(--white-color);
              background-color: var(--alert-color);
            }
          }
        }
      }
    }
  }

  .contents {
    display: flex;

    .preview {
      flex   : 0 0 calc(var(--bv) * 32);
      padding: calc(var(--bv) * 2);

      > img {
        aspect-ratio    : 1/1.41;
        background-color: var(--disable-text-color);
      }
    }
  
    .information {
      display  : flex;
      flex-wrap: wrap;
      padding  : var(--bv);
  
      .information_item {
        display: flex;
        padding: var(--bv);
        
        > dt {
          font-weight: normal;
    
          &::after {
            content: '：';
          }
        }
      }
    }

    .tag_list {
      padding: var(--bv) calc(var(--bv) * 2) calc(var(--bv) * 2);
    }
  }
}
</style>