<template>
  <div id="app">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <Aside style="width: 80%;"></Aside>
        <Category></Category>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Aside from "@/views/Aside";
import Category from "@/views/Category";
export default {
  name: "app",
  components: {
    Aside,
    Category,
  }
};
</script>

<style>
</style>
