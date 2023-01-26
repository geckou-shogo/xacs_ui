<script setup lang="ts">
type Emits = {
  (e: string, file: any): void
}

type Props = {
  isDisplayed: boolean,
}

const emit = defineEmits<Emits>()
const props = withDefaults(defineProps<Props>(), {
  isDisplayed: false,
})

const { isDisplayed } = toRefs(props)
const uploadFile: any = ref({})
const onFileUploaded = (e: any): void => {
  uploadFile.value = e.target.files[0]
}

const dropFile = (e: any): void => {
  uploadFile.value = e.dataTransfer.files[0]
}

const closeUploader = (): void => {
  emit('closeUploader', {})
  uploadFile.value = {}
}

const fileUpload = (): void => {
  emit('fileUpload', uploadFile.value)
  uploadFile.value = {}
}
</script>

<template>
  <div
    :class="[$style.file_uploader, !isDisplayed ? $style.close : '' ]"
  >
    <div
      :class="$style.container"
    >
      <div
        v-if="!uploadFile.name"
        @dragover.prevent
        @drop.prevent="dropFile"
        :class="$style.uploader"
      >
        <span>ファイルをドロップしてアップロード</span>
        <span>または</span>
        <label>
          <i class="bi bi-cloud-arrow-up-fill"></i>
          <span>ファイルを選択</span>
          <input
            type="file"
            @change="onFileUploaded"
          />
        </label>
      </div>
      <div v-else>
        <span>{{ uploadFile.name }}</span>
        <div :class="$style.operation">
          <CommonButton
            :iconName="'bi-x'"
            :text="'キャンセル'"
            :buttonType="'alert'"
            @onClick="uploadFile = {}"
          />
          <CommonButton
            :iconName="'bi-cloud-arrow-up'"
            :text="'アップロード'"
            :buttonType="'decision'"
            @onClick="fileUpload"
          />
        </div>
      </div>
    </div>
    <IconButton
      :class="$style.close_button"
      @onClick="closeUploader"
    >
      <i class="bi bi-x-circle" />
    </IconButton>
  </div>
</template>

<style lang="scss" module>
.file_uploader {
  width     : 100%;
  height    : calc(var(--bv) * 20);
  position  : relative;
  transition: height .2s linear;
  overflow  : hidden;

  &.close {
    height: 0;
  }

  .container {
    height       : 100%;
    border       : 1px dashed var(--link-color);
    border-radius: calc(var(--bv) / 2);

    > div {
      display        : flex;
      flex-direction : column;
      justify-content: center;
      align-items    : center;
      gap            : var(--bv);
      height         : 100%;
      padding        : calc(var(--bv) * 2);

      > span {
        display: inline-block;
        padding: var(--bv);
      }

      label {
        display         : inline-flex;
        align-items     : center;
        gap             : var(--bv);
        padding         : 0 var(--bv);
        background-color: transparent;
        border-radius   : calc(var(--bv) / 2);
        color           : var(--link-color);
        font-weight     : bold;
        transition      : background-color .1s linear;
        cursor          : pointer;

        > i {
          font-size: 1.5rem;
        }

        &:hover {
          background-color: var(--hover-color);
        }

        > input[type="file"] {
          display: none;
        }
      }
    }
  }

  .close_button {
    position: absolute;
    top     : calc(var(--bv) * 2);
    right   : calc(var(--bv) * 2);
  }

  .operation {
    display: flex;
    gap    : calc(var(--bv) * 4);
  }
}
</style>