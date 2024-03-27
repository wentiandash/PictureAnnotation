<template>
  <div>
    <!-- <van-button type="primary">主要按钮</van-button> -->
    <div class="flexPic">
      <div class="masonry">
        <div class="colmun">
          <div class="content">
            <div style="position: relative" v-for="i in data1.list" :key="i">
              <div class="i-image">
                <img class="item" :src="i.contents[0].url" :key="i.id" />
              </div>
              <div @mouseenter="changeActive($event)" @mouseleave="removeActive($event)" class="pub-shoppable-image">
                <div :key="item" v-for="item in i.contents[0].interactionPoints" class="shoppable-image-item" :style="{
              left: `${item.x * 100}%`,
              top: `${item.y * 100}%`,
            }">
                  <a-popover title="Title">
                    <template #content>
                      <p>Content</p>
                      <p>Content</p>
                    </template>

                    <div class="shoppable-image-dot">
                    </div>
                  </a-popover>
                </div>
                <!-- </div> -->
              </div>
            </div>
          </div>
        </div>
        <div class="colmun">
          <div class="content">
            <div style="position: relative" v-for="i in data2.list" :key="i">
              <div class="i-image">
                <img class="item" :src="i.contents[0].url" :key="i.id" />
              </div>
              <div @mouseenter="changeActive($event)" @mouseleave="removeActive($event)" class="pub-shoppable-image">
                <!-- <div class="shoppable-image-list"> -->
                <!-- <p style="color: red">{{ i.contents[0].interactionPoints }}</p> -->
                <div :key="item" v-for="item in i.contents[0].interactionPoints" class="shoppable-image-item" :style="{
              left: `${item.x * 100}%`,
              top: `${item.y * 100}%`,
            }">
                  <div class="shoppable-image-dot">
                    <!-- <p style="color: red">{{ item.x }}</p> -->
                  </div>
                </div>
                <!-- </div> -->
              </div>
            </div>
          </div>
        </div>
        <div class="colmun">
          <div class="content">
            <div style="position: relative" v-for="i in data3.list" :key="i">
              <div class="i-image">
                <img class="item" :src="i.contents[0].url" :key="i.id" />
              </div>
              <div @mouseenter="changeActive($event)" @mouseleave="removeActive($event)" class="pub-shoppable-image">
                <!-- <div class="shoppable-image-list"> -->
                <!-- <p style="color: red">{{ i.contents[0].interactionPoints }}</p> -->
                <div :key="item" v-for="item in i.contents[0].interactionPoints" class="shoppable-image-item" :style="{
              left: `${item.x * 100}%`,
              top: `${item.y * 100}%`,
            }">
                  <div class="shoppable-image-dot">
                    <!-- <p style="color: red">{{ item.x }}</p> -->
                  </div>
                </div>
                <!-- </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed, reactive, onMounted, ref } from "vue";
import { getCategoryData } from "@/service/category";
import { getRecommend } from "@/service/recommend";
const data1 = ref({ list: [] });
const data2 = ref({ list: [] });
const data3 = ref({ list: [] });
// i = ref(0);

function changeActive($event) {
  let array = $event.currentTarget.querySelectorAll('.shoppable-image-item');
  array.forEach(element => {
    element.classList.add('active');
    let dotArray = element.querySelectorAll('.shoppable-image-dot');
    dotArray.forEach(dot => {
      dot.classList.add('active');
    });
  });
  // 调试语句
  console.log('Active class added');
  console.log($event.currentTarget);
  console.log($event.currentTarget.querySelector('.shoppable-image-dot'));
}

function removeActive($event) {
  let array = $event.currentTarget.querySelectorAll('.shoppable-image-item');
  array.forEach(element => {
    element.classList.remove('active');
    let dotArray = element.querySelectorAll('.shoppable-image-dot');
    dotArray.forEach(dot => {
      dot.classList.remove('active');
    });
  });
}

onMounted(async () => {
  const result = await getRecommend();
  const inspirations = result.result[0].inspirations;

  for (let i = 0; i < inspirations.length; i += 3) {
    data1.value.list.push(inspirations[i]);
    if (i + 1 < inspirations.length) {
      data2.value.list.push(inspirations[i + 1]);
    }
    if (i + 2 < inspirations.length) {
      data3.value.list.push(inspirations[i + 2]);
    }
  }
});
</script>
<style lang="less" scoped>
* {
  margin: 0px;
  padding: 0px;
  background-color: #ffffff;
}

.content {
  display: block;
  height: 100%;
  inset: 0;
  // position: absolute;
  width: 100%;
}

.i-image {
  height: inherit;

  img {
    height: 100%;
  }
}

.pub-shoppable-image {
  background: 0 0;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 5;
}

.flexPic {
  max-width: 1440px;
  margin: 0px auto;
}

.masonry {
  display: flex;
  flex-direction: row;

  .colmun {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 0 3px;

    .item {
      width: 100%;
    }
  }
}

.shoppable-image-list {
  // height: 100%;
  position: relative;
  width: 100%;
}

.shoppable-image-item {
  cursor: pointer;
  height: 1px;
  position: absolute;
  width: 1px;
  border-radius: 50%;

  .shoppable-image-dot {
    align-items: center;
    background: hsla(0, 0%, 47%, 0.5);
    border: 2px solid transparent;
    border-radius: 50%;
    display: flex;
    height: 32px;
    justify-content: center;
    opacity: 0;
    padding: 0;
    position: absolute;
    transform: translate(-50%) translateY(-50%);
    transition: border-color 0.25s ease-in-out, opacity 0.25s ease-in-out,
      visibility 0.25s ease-in-out;
    visibility: hidden;
    width: 32px;
  }

  .shoppable-image-dot:after {
    background: #fff;
    border-radius: 50%;
    box-shadow: 0 1px 4px #0000008c;
    content: "";
    display: block;
    height: 12px;
    position: relative;
    transition: transform 0.25s ease-in-out;
    width: 12px;
  }

  .shoppable-image-dot:before {
    content: "";
    display: block;
    inset: -8px;
    position: absolute;
  }

  .shoppable-image-dot .active {
    background-color: red;
    // border-color: #ffffff80;
    opacity: 1;
    visibility: visible;
  }

  .shoppable-image-dot:hover {
    align-items: center;
    background: hsla(0, 0%, 47%, 0.5);
    border: 2px solid transparent;
    border-radius: 50%;
    display: flex;
    height: 32px;
    justify-content: center;
    opacity: 1;
    padding: 0;
    position: absolute;
    transform: translate(-50%) translateY(-50%);
    transition: border-color 0.25s ease-in-out, opacity 0.25s ease-in-out,
      visibility 0.25s ease-in-out;
    visibility: visible;
    width: 32px;
  }
}

.shoppable-image-item.active {
  display: block;
}

.pub-shoppable-image .shoppable-image-item .shoppable-image-dot.active {
  border-color: #ffffff80;
  opacity: 1;
  visibility: visible;
}
</style>