<style lang="postcss" scoped>
$border-radius: 20px;

.flexibleContent {
  width: 750px;
  height: 500px;
  background-color: #f1f1f1;
}

.flexibleContent::after {
  border-radius: $border-radius;
  border: 1px solid #999;
}

</style>


<template>
  <div class="flexibleContent radius-border"></div>
</template>
