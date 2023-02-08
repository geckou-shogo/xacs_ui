<script setup lang="ts">
import {
  $contentIconClassName,
  $updateDate,
  $fileSizeUnit,
} from '~/service/utils'

type ItemType = {
  id          : string,
  content_type: string,
  file_name   : string,
  update      : string,
  file_size   : number,
  tags        : [],
}

type Props = {
  item          : ItemType,
  inUseOperation: Boolean,
}

type Emits = {
  (e: string, itemId: string): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()
const operationsDisplayState = ref(false)

const { inUseOperation } = toRefs(props)
const operationsComponent = ref()

watch(inUseOperation, (state, prevState) => {
  if (state) {
    operationsDisplayState.value = false
    operationsComponent.value.contentsDisplayState = false
  }
})

const operations = ref([
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

const selectItem = (): void => {
  emit('selectItem', props.item.id)
}

const displayOperations = (): void => {
  operationsDisplayState.value = !operationsDisplayState.value
  emit('displayOperations', props.item.id)
}
</script>

<template>
  <ShadowBox
    :class="$style.item_card"
  >
    <header
      :class="$style.header"
    >
      <div
        @click.prevent="selectItem"
        :class="$style.header_icon"
      >
        <i :class="['bi', $contentIconClassName(item.content_type)]" />
      </div>
      <p
        @click.prevent="selectItem"
        :class="$style.file_name"
      >
        {{ item.file_name }}
      </p>
      <SlideDownBox
        ref="operationsComponent"
        :class="$style.operations"
      >
        <template #button>
          <SelectButton
            :isSelected="operationsDisplayState"
            @onClick="displayOperations"
            :class="[$style.operations_button, operationsDisplayState ? $style.selected : '']"
          >
            <i class="bi bi-three-dots-vertical" />
          </SelectButton>
        </template>
        <template #contents>
          <ul
            :class="$style.operations_menu"
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
      </template>
      </SlideDownBox>
    </header>
    <div
      @click.prevent="selectItem"
    >
      <dl
        :class="$style.information"
      >
        <div
          :class="$style.information_item"
        >
          <dt>最終更新</dt>
          <dd>{{ $updateDate(item.update) }}</dd>
        </div>
        <div
          :class="$style.information_item"
        >
          <dt>ファイルサイズ</dt>
          <dd>{{ $fileSizeUnit(item.file_size) }}</dd>
        </div>
      </dl>
      <TagList
        :tags="item.tags"
        :class="$style.tag_list"
      />
    </div>
  </ShadowBox>
</template>

<style lang="scss" module>
.item_card {
  border-radius: calc(var(--bv) / 2);
  cursor       : pointer;
  transition   : box-shadow .1s;
  height       : 100%;

  &:hover {
    box-shadow: 0 0 0 2px var(--main-color);
  }

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
      flex              : 1 1 auto;
      display           : -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow          : hidden;
    }

    .operations {
      .operations_button {
        height       : calc(var(--bv) * 5);
        width        : calc(var(--bv) * 5);
        border-radius: calc(var(--bv) / 2);
        border       : 1px solid var(--border-color);
        font-size    : 16px;
        transition   : border-radius .1s;

        &.selected {
          border-color : transparent;
          border-radius: 50%;
        }
      }

      .operations_menu {
        width        : calc(var(--bv) * 20);
        border-radius: calc(var(--bv) / 2);
        overflow     : hidden;

        > li {
          width: 100%;
          .operations_menu_button {
            width        : 100%;
            padding      : calc(var(--bv) * 2);
            border-radius: 0;

            &.delete {
              color: var(--alert-color);
              border-top: 1px solid var(--border-color);

              &:hover {
                color           : var(--white-color);
                background-color: var(--alert-color);
              }
            }
          }
        }
      }
    }
  }

  .information {
    display  : flex;
    flex-wrap: wrap;
    font-size: var(--min-font-size);
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
    padding: 0 calc(var(--bv) * 2) calc(var(--bv) * 2);
  }
}
</style>