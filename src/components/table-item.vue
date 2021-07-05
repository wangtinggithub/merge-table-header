<template>
  <el-table-column :prop="item.prop" :label="item.label" v-if="!item.children" ></el-table-column>
  <el-table-column :label="item.label" v-else>
    <table-item v-for="(itemChild,indexChild) in item.children"  :key="indexChild" :item="itemChild"></table-item>
  </el-table-column>
<!--    <el-table-column :prop="item.prop" :label="item.label">
      <template v-for="(itemChild,indexChild) in item.children">
        <table-item v-if="itemChild.children"  :key="indexChild" :item="itemChild"></table-item>
        <el-table-column v-else :key="indexChild" :label="itemChild.label" :prop="itemChild.prop"></el-table-column>
      </template>
    </el-table-column>-->
</template>

<script>
export default {
  name: "table-item",
  props:{
    item:{
      type:[Object],
      required:true
    }
  }
}
</script>

<style scoped>

</style>
