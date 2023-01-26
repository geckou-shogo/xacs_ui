<script setup lang="ts">
type Props = {
  userName: String,
}
const props = defineProps<Props>()
</script>

<template>
  <SlideDownBox>
    <template v-slot:button>
      <div
        :class="$style.button"
      >
        <i class="bi bi-person-circle" />
        <span>{{ userName }}</span>
        <i
          class="bi bi-chevron-down"
          :class="$style.arrow"
        />
      </div>
    </template>
    <template v-slot:contents>
      <div
        :class="$style.contents"
      >
        <div
        :class="$style.logout"
        >
          <i class="bi bi-box-arrow-right" />
          <span>ログアウト</span>
        </div>
      </div>
    </template>
  </SlideDownBox>
</template>

<style lang="scss" module>
.button {
  display      : flex;
  align-items  : center;
  gap          : var(--bv);
  height       : calc(var(--bv) * 4);
  padding      : var(--bv);
  border       : 1px solid var(--border-color);
  border-radius: calc(var(--bv) / 2);

  > span {
    font-size: var(--small-font-size);
  }

  .arrow {
    font-size: .5rem;
  }
}

.contents {
  > * {
    display    : flex;
    align-items: center;
    gap        : var(--bv);
    padding    : calc(var(--bv) * 2);
  }
  .logout {
    color    : var(--alert-color);
    font-size: var(--small-font-size);
  }
}
</style>
