<template>
  <main>
    <p :class="$style.wrapper">
      サービスについて
    </p>
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  name: 'TopPage',
})
</script>

<style lang="scss" module>
.wrapper {
  width: 100%;
}
</style>