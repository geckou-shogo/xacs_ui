<script setup lang="ts">
type Props = {
  lists: any[],
}

const props = defineProps<Props>()
</script>

<template>
  <div
    :class="$style.container"
  >
    <table
      :class="$style.table"
    >
      <thead>
        <th
          :class="$style.table_th"
        >
          <slot />
        </th>
      </thead>
      <tr
        v-for="list in lists"
        :key="list.id"
        :class="$style.table_tr"
      >
        <td
          :class="$style.table_td"
        >
          {{ list.date }}
        </td>
        <td 
          :class="$style.table_td"
        >
          <a href="list.link">{{ list.currentLink }}</a><span>の</span>
        </td>
        <td 
          :class="$style.table_td"
        >
          <a href="list.link">{{ list.fileData }}</a><span>をアップロード</span>
        </td>
      </tr>
    </table>
  </div>
</template>

<style lang="scss" module>
.container {
  box-shadow: 0px 0px 2px 1px rgba(20, 21, 21, 0.1);
  border-radius: 4px;
  background-color: var(--white-color);

  .table {
    width: 100%;
  
    &_tr {
      padding: var(--bv) calc(var(--bv) * 2);
      display: flex;

      &:not(:first-of-type) {
        border-top: solid 1px var(--border-color);
      }
    }

    &_td {
      &:nth-of-type(2) {
        margin-left: calc(var(--bv) * 2);
      }

      a {

        &:hover {
          text-decoration: none;
        }
      }

      span {
        margin: 0 5px;
        display: inline-block;
      }
    }
  }
}


</style>