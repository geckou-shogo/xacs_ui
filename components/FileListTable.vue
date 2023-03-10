<script setup lang="ts">
import {
  $contentIconClassName,
  $updateDate,
  $fileSizeUnit,
} from '~/service/utils'

type Emits = {
  (e: string, itemId: string): void
}

type Props = {
  list: any[],
}

const emit = defineEmits<Emits>()
const props = defineProps<Props>()
const selectItem = (id: string): void => {
  emit('selectFile', id)
}
</script>

<template>
  <ListTable>
    <template #thead>
      <th>ファイル名</th>
      <th>最終更新</th>
      <th>サイズ</th>
      <th>タグ</th>
      <th></th>
    </template>
    <template #tbody>
      <tr
        v-for="item in list"
        :key="item.id"
        :class="$style.tr"
      >
        <td>
          <div
            @click.prevent="selectItem(item.id)"
            :class="$style.item"
          >
            <i :class="['bi', $contentIconClassName(item.content_type)]" />
            {{ item.file_name }}
          </div>
        </td>
        <td @click.prevent="selectItem(item.id)">
          {{ $updateDate(item.update) }}
        </td>
        <td>
          <div
            @click.prevent="selectItem(item.id)"
            :class="$style.item"
          >
            {{ $fileSizeUnit(item.file_size) }}
          </div>
        </td>
        <td
          @click.prevent="selectItem(item.id)"
        >
          <TagList
            :tags="item.tags.filter((_: any, index: number) => index <= 2)"
          />
        </td>
        <td>
          <div :class="$style.operations">
            <IconButton>
              <i class="bi-cloud-arrow-down-fill" />
            </IconButton>
            <IconButton>
              <i class="bi bi-cloud-arrow-up-fill" />
            </IconButton>
            <IconButton>
              <i class="bi-trash-fill" />
            </IconButton>
          </div>
        </td>
      </tr>
    </template>
  </ListTable>
</template>

<style lang="scss" module>

.item {
  display           : -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow          : hidden;
}
.operations {
  display: flex;
  gap    : calc(var(--bv) * 2);

  > *:last-child {
    > i {
      color: var(--alert-color);
    }
  }
}

.tr {
  cursor: pointer;
  
  &:hover {
    box-shadow: 0 0 0 2px var(--main-color) inset;
  }
}
</style>