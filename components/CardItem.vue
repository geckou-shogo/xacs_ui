<script setup lang="ts">
  const changeTypes = ref(false)
  
</script>

<template>
  <ShadowBox
    :class="$style.box"
  >
    <div
      :class="$style.heading"
    >
      <div
        :class="$style.heading_container"
      >
          <i class="bi bi-card-image"></i>
          <p>株式会社ABC_テストデータ</p>
          <SlideDownBox
            :class="$style.slide"
          >
            <template v-slot:button>
              <IconButton
                @onClick="changeTypes = !changeTypes"
                :class="[$style.button, changeTypes ? $style.circle : '']"
              >
                <i class="bi bi-three-dots-vertical "></i>
              </IconButton>
            </template>
            <template v-slot:contents>
              <div
                :class="$style.slide_contents"
              >
                <ul
                  :class="$style.slide_list"
                >
                  <li>
                    <TextButton
                      :class="$style.slide_icon"
                      :text="'ダウンロード'"
                      :iconName="'bi-cloud-download-fill'"
                    ></TextButton>
                  </li>
                  <li>
                    <TextButton
                      :class="$style.slide_icon"
                      :text="'アップロード'"
                      :iconName="'bi-cloud-upload-fill'"
                    ></TextButton>
                  </li>
                  <li>
                    <TextButton
                      :class="[$style.slide_icon ,$style.trash]"
                      :text="'ファイル削除'"
                      :iconName="'bi-trash-fill'"
                    ></TextButton>
                  </li>
                </ul>
              </div>
            </template>
          </SlideDownBox>
      </div>
    </div>
    <div
      :class="$style.contents"
    >
      <div 
        :class="$style.date"
      >
        <p :class="$style.title">最終更新</p>
        <time
          :class="$style.update"
        >
          2022-12-08 11:42:40
        </time>
        <div
          :class="$style.size"
        >
          <p :class="$style.title">サイズ</p>
          <p>11KB</p>
        </div>
      </div>
      <div
        :class="$style.tags"
      >
        <TagList
          :isShowIcon="false"
          :tags="[
            {
              id  : '0',
              name: '$TAG NAME',
              type: '1',
            },
            {
              id  : '1',
              name: '$TAG NAME',
              type: '2',
            },
            {
              id  : '2',
              name: '$TAG NAME',
              type: '3',
            },
            {
              id  : '3',
              name: '$TAG NAME',
              type: '4',
            },
            {
              id  : '4',
              name: '$TAG NAME',
              type: '1',
            },
            {
              id  : '5',
              name: '$TAG NAME',
              type: '2',
            },
            {
              id  : '6',
              name: '$TAG NAME',
              type: '3',
            },
            {
              id  : '7',
              name: '$TAG NAME',
              type: '4',
            },
          ]"
        >
        </TagList>
      </div>
    </div>
  </ShadowBox>
</template>

<style lang="scss" module>
.box {
  width        : 330px;
  border-radius: 4px;

  .heading {
    border-bottom: solid 1px var(--border-color);

    &_container {
      padding        : calc(var(--bv) * 1.5) var(--bv) calc(var(--bv) * 1.5) calc(var(--bv) * 2);
      display        : flex;
      align-items    : center;

      p {
        margin-left: calc(var(--bv) * 2);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      i {
        font-size: 24px;
      }

      .slide {
        margin-left: var(--bv);
        flex       : 1 0 auto;
        text-align : right;

        &_icon {
          padding: calc(var(--bv) * 2);
          width: 100%;

          &:hover {
            border-radius: 0;
          }
        }

        &_list {
          width         : 146px;
          display       : flex;
          flex-direction: column;
          align-items   : center;

          li {
            width: 100%;
          }
        }

        &_contents {
          
          i {
            font-size: 16px;
          }

          .trash {
            border-top   : solid 1px var(--border-color);
            border-radius: 0;
            color        : var(--alert-color);
          }
        }

      }
      
    }

    .button {
      align-items  : center;
      border       : solid 1px var(--border-color);
      border-radius: 4px;
      aspect-ratio : 1 / 1;
      transition   : all .3s ease-in;
      
      i {
        font-size    : 16px;
      }

      &.circle {
        background-color: var(--main-color);
        border-radius   : 50%;

        > * {
          color: var(--white-color);
        }
      }
      
    }
  }

  .contents {
    padding: calc(var(--bv) * 2);

    .title {
      display: flex;
      align-items: center;

      &::after {
        content  : ':';
        position : relative;
        top      : -1px;
        margin   : 0 5px;
        display  : block;
        font-size: 10px;
      }
    }

    .date {
      display  : flex;
      font-size: 10px;
    }

    .size {
      display: flex;
    }

    .tags {
      margin-top: calc(var(--bv) * 2);
    }
  }
}
</style>