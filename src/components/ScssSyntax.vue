<template>
  <div class="wrap">
    <img src="../../build/logo.png">

    <div class="big">
      <img src="../../build/logo.png">
    </div>

    <div class="artice">
    </div>

    <div class="error">
      oh no! You've been hacked!
    </div>
    <div class="seriousError">
      oh no! You've been hacked!
    </div>
    <div class="comment">
      <a class="user">userInfo</a>
      <span class="hoverlink user">hoverlink</span>
    </div>

    <div class="control">
      <p>the monster on your roof</p>
      <div :class="'item-'+i" v-for="i in [1,2,3]" :key="i">
      </div>
      <span :class="name + '-icon'" v-for="name in ['ocean', 'matador', 'monster']" :key="name">
        {{name}}
      </span>
    </div>

    <div class="shadow"></div>

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

/** $ 变量 */
$pageWidth: 750px;
$pageHeight: 1334px;

.wrap {
  width: $pageWidth;
  height: $pageHeight;
  background-color: #fff;
}

/** & 父选择器的用法, 继承父选择器 */
/** !global 可以将局部变量转换为全局变量 */
img {
  $sideLength: 200px !global;
  width: $sideLength;
  height: $sideLength;

  .big & {
    width: $sideLength * 1.5;
    height: $sideLength * 1.5;
  }
}

/**  在有引号的字符串文本中插值 */
/**  布尔值可以支持or and not 运算 */
/** !default 表示默认值,如果变量已经赋值,则不赋值;反之,赋值 */
$name: hancai;
$result: true;
$result2: false;
$result2: true !default; 
.artice {
  width: $sideLength;
  height: $sideLength;
  background-color: #eee;

  &:after {
    content: 'Hello #{$name}, your result is #{$result and not $result2}';
  }
}

/** @extend 样式延展, 一般在普通样式中要最佳特殊样式的时候使用 */
/** 延展可以支持复杂的选择器 */
.error {
  border: 2px #f00 solid;
  background-color: #fdd;
}

.attention {
  font-size: 50px;
  background-color: #ff0;
}

.seriousError {
  @extend .error;
  @extend .attention;
  border-width: 4px;
  margin-top: 10px;
}

.hoverlink {
  @extend a:hover;
}
.comment a.user:hover{
  color: #f00;
}


/** 控制指令 */
$type: monster;
.control {
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    @if $type == ocean {
      color: blue;
    }@else if $type == matador {
      color: red;
    }@else if $type == monster {
      color: green;
    }@else {
      color: black;
    }
  }

  @for $i from 1 through 3 {
    .item-#{$i} {
      width: 50px * $i;
      height: 35px;
      background-color: #ff0;
    }
  }

  @each $name, $color, $borderWidth in (ocean, blue, 3px), (matador, red, 5px), (monster, green, 10px) {
    .#{$name}-icon {
      border: $borderWidth solid $color
    }
  }

  $j: 0;
  @while $j < 6 {
    .some-#{$j} {
      width: 20px * $j;
    }
    $j: $j + 2
  }
}

@mixin box($width, $height, $shadow...) {
  width: $width;
  height: $height;
  background-color: #fff;
  border: 3px solid #fff;
  margin: 50px 300px;
  box-shadow: $shadow;
}

.shadow {
  @include box(200px, 160px, 4px 5px 8px #eee)
}
</style>
