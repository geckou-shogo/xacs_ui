<script setup lang="ts">
  type Props = {
    inputType  : String,
    value      : String,
    placeholder: String,
    name       : String,
    buttonText : String,
    buttonType : String,
    shouldButton: Boolean,
  }

  const Props = withDefaults(defineProps<Props>(), {
    shouldButton: false,
  })

  const updateValue = ((e: any) => {
    this.$emit('input', e.target.value)
  })
</script>

<template>
  <div
    :class="$style.container"
  >
    <input 
      @input="updateValue"
      :type="inputType"
      :value="value"
      :name="name"
      :placeholder="placeholder"
    >
    <div
      v-show="shouldButton"
      :class="$style.button"
    >
      <TextButton
        :text="buttonText"
        :iconName="buttonType"
      >
      </TextButton>
    </div>
  </div>
</template>

<style lang="scss" module>
.container {
  --border        : 1px solid var(--border-color);
  padding         : 4px;
  display         : flex;
  border          : var(--border);
  border-radius   : 4px;
  background-color: var(--white-color);
  
  input {
    padding-right: var(--bv);
    width        : 100%;

    &::placeholder {
      font-size: 12px;
    }
  }

  .button {
    flex         : 1 0 auto;
    border       : solid 1px var(--main-color);
    border-radius: 3px;
    
    > button {
      padding: 4px;
    }
  }
}

</style>
