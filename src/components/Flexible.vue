<style lang="postcss" scoped>
.flexibleContent {
  width: 750px;
  height: 500px;
  background-color: #f1f1f1;
}

.flexibleContent::after {
  border-radius: 20px;
  border: 1px solid #999;
}

/* $dir: assets;

@each $icon in (foo, bar, baz) {
  .icon-$icon {
    background: url("$dir/$icon.png");
  }
}

@for $count from 1 to 5 by 2 {
  @if $count > 2 {
    .col-$count {
      width: #{$count}0%;
    }
  }
} */
</style>


<template>
  <div class="flexibleContent radius-border"></div>
</template>
