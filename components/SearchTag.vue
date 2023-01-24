
<script setup lang="ts">
  interface Props {
    tagText: string,
    background: string,
  }

const Props = withDefaults(defineProps<Props>(), {
  tagText: '',
  background: '',
})
</script>

<template>
  <div
    :class="[
      $style.tag, 
      background === 'orange' ? $style.orange : '',
      background === 'pink' ? $style.pink : '',
      background === 'green' ? $style.green : '',
      background === 'purple' ? $style.purple : '',
    ]"
  >
    <p
    >
      {{ tagText }}
    </p>
  </div>
</template>

<style lang="scss" module>
.tag {
  display: inline-block;

  p {
    display      : inline-block;
    padding      : 1px var(--bv);
    color        : var(--white-color);
    border-radius: 8px;
  }

  &.orange {
    
    p {
      background-color: var(--tag1-color);
    }
  }

  &.pink {

    p {
      background-color: var(--tag2-color);
    }
  }

  &.green {

    p {
      background-color: var(--tag3-color);
    }
  }

  &.purple {

    p {
      background-color: var(--tag4-color);
    }
  }
}
</style>