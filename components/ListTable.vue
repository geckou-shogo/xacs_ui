<template>
  <ShadowBox
    :class="$style.list_table"
  >
    <table>
      <thead v-if="$slots.thead">
        <tr>
          <slot :name="'thead'"/>
        </tr>
      </thead>
      <tbody>
        <slot :name="'tbody'"/>
      </tbody>
    </table>
  </ShadowBox>
</template>

<style lang="scss" module>
.list_table {
  border-radius: calc(var(--bv) / 2);
  overflow     : hidden;

  > table {
    width: 100%;

    thead {
      tr {
        background-color: var(--sub-color);

        th {
          color    : var(--white-color);
          font-size: var(--small-font-size);
          padding  : var(--bv) calc(var(--bv) * 2);
        }
      }
    }
  }

  tbody {
    tr {
      &:not(:last-child) {
        border-bottom: 1px solid var(--border-color);
      }

      td {
        padding  : calc(var(--bv) * 2);
        font-size: var(--small-font-size);
      }
    }
  }
}
</style>