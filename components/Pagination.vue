<template>
  <div
    :class="$style.pagination"
  >
    <button>
      <i class="bi bi-chevron-double-left" />
    </button>
    <button
      :class="$style.current"
    >
      1
    </button>
    <button>
      2
    </button>
    <button
      :class="$style.disabled"
    >
      3
    </button>
    <button>
      <i class="bi bi-chevron-double-right" />
    </button>
  </div>
</template>

<style lang="scss" module>
.pagination {
  display         : inline-flex;
  border          : 1px solid var(--border-color);
  border-radius   : calc(var(--bv) / 2);
  background-color: var(--white-color);
  overflow        : hidden;

  > button {
    flex      : 0 0 auto;
    width     : calc(var(--bv) * 6);
    height    : calc(var(--bv) * 6);
    color     : var(--main-color);
    transition: background-color .1s liner;

    &:not(:last-child) {
      border-right: 1px solid var(--border-color);
    }

    &:not(.disabled):not(.current) {
      &:hover {
        background-color: var(--hover-color);
      }
    }

    &.disabled {
      color: var(--disable-text-color);
    }

    &.current {
      background-color: var(--main-color);
      color           : var(--white-color);
      font-weight     : bold;
    }

    &.disabled,
    &.current {
      cursor: auto;
    }
  }
}
</style>