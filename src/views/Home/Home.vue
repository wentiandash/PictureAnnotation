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
              <div
                @mouseenter="changeActive($event)"
                @mouseleave="removeActive($event)"
                class="pub-shoppable-image"
              >
                <!-- <div class="shoppable-image-list"> -->
                <!-- <p style="color: red">{{ i.contents[0].interactionPoints }}</p> -->
                <div
                  :key="item"
                  v-for="item in i.contents[0].interactionPoints"
                  class="shoppable-image-item"
                  :style="{
                    left: `${item.x * 100}%`,
                    top: `${item.y * 100}%`,
                  }"
                >
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
            <div style="position: relative" v-for="i in data2.list" :key="i">
              <div class="i-image">
                <img class="item" :src="i.contents[0].url" :key="i.id" />
              </div>
              <div
                @mouseenter="changeActive($event)"
                @mouseleave="removeActive($event)"
                class="pub-shoppable-image"
              >
                <!-- <div class="shoppable-image-list"> -->
                <!-- <p style="color: red">{{ i.contents[0].interactionPoints }}</p> -->
                <div
                  :key="item"
                  v-for="item in i.contents[0].interactionPoints"
                  class="shoppable-image-item"
                  :style="{
                    left: `${item.x * 100}%`,
                    top: `${item.y * 100}%`,
                  }"
                >
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
              <div
                @mouseenter="changeActive($event)"
                @mouseleave="removeActive($event)"
                class="pub-shoppable-image"
              >
                <!-- <div class="shoppable-image-list"> -->
                <!-- <p style="color: red">{{ i.contents[0].interactionPoints }}</p> -->
                <div
                  :key="item"
                  v-for="item in i.contents[0].interactionPoints"
                  class="shoppable-image-item"
                  :style="{
                    left: `${item.x * 100}%`,
                    top: `${item.y * 100}%`,
                  }"
                >
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
const data1 = reactive({ list: [] }),
  data2 = reactive({ list: [] }),
  data3 = reactive({ list: [] }),
  i = ref(0);

function changeActive($event) {
  // console.log($event.target.children);
  let array = $event.target.children;
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    // console.log(element);
    element.className = "shoppable-image-item active";
    let dotArray = array[index].childNodes;
    for (let index = 0; index < dotArray.length; index++) {
      const doValue = dotArray[index];
      doValue.className = "shoppable-image-dot active";
    }
  }
}
function removeActive($event) {
  let array = $event.target.children;
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element.className);
    element.className = "shoppable-image-item";
    let dotArray = array[index].childNodes;
    for (let index = 0; index < dotArray.length; index++) {
      const doValue = dotArray[index];
      doValue.className = "shoppable-image-dot";
    }
  }
  // console.log($event.target.children[0].className);
}
onMounted(async () => {
  const result = await getRecommend();
  console.log(result.result[0].inspirations);
  let data = result.result[0].inspirations;
  console.log(i.value);
  while (i.value < data.length) {
    data1.list.push(data[i.value++]);
    if (i.value < data.length) {
      data2.list.push(data[i.value++]);
    }
    if (i.value < data.length) {
      data3.list.push(data[i.value++]);
    }
  }
  console.log(data2.list);
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