<template>
  <div class="wrap">
    <img src="../../build/logo.png">

    <div class="big">
      <img src="../../build/logo.png">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
/** iphone6 设计图尺寸 */
// 这是一条编译之后看不到的注释
$pageWidth: 750px;
$pageHeight: 1334px;

.wrap {
  width: $pageWidth;
  height: $pageHeight;
  background-color: #eee;
}

/** & sass 中父选择器的用法, 继承父选择器 */
img {
  $sideLength: 200px;
  width: $sideLength;
  height: $sideLength;

  .big & {
    width: $sideLength * 1.5;
    height: $sideLength * 1.5;
  }
}

</style>
