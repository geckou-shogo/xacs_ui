<template>
  <div
    :class="$style.breadcrumbing"
  >
    <ul
      :class="$style.breadcrumbing_list"
    >
      <li
        :class="$style.breadcrumbing_item"
      >
        <a href="">TOP</a>
      </li>
      <li
        :class="$style.breadcrumbing_item"
      >
        <a href="">受注前</a>
      </li>
      <li
        :class="$style.breadcrumbing_item"
      >
        <a href="">引き合い対応</a>
      </li>
      <li
        :class="[$style.current ,$style.breadcrumbing_item]"
      >
        <a href="">メモ</a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" module>
.breadcrumbing {
  
  &_list {
    display    : flex;
    align-items: center;
  }

  &_item {
    display    : flex;
    align-items: center;

    &:not(:last-of-type) {
      &::after {
        content     : '';
        margin      : 0 calc(var(--bv) * 2.5);
        display     : block;
        width       : 12px;
        height      : 12px;
        border-top  : solid 1px #aaa;
        border-right: solid 1px #aaa;
        transform   : rotate(45deg);
      }
    }

    a {
      font-weight    : bold;
      color          : var(--text-color);
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    &.current {
      padding         : var(--bv);
      background-color: var(--main-color);
      border-radius   : 4px;

      a {
        color         : var(--white-color);
        pointer-events: none;
      }
    }
  }

}
</style>