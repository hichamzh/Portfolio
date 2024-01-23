<template>
  <div class="tools" v-for="tool in toolData" :key="tool.name_tool">
    <div class="img_logo">
      <img
        :src="`/src/assets/${tool.image_tool}`"
        :alt="'logo ' + tool.name_tool"
        width="54px"
        height="54px"
      />
    </div>
    <p class="tools_text">{{ tool.name_tool }}</p>
  </div>
</template>

<script>
import toolData from "@/data/tool_data.js";
export default {
  data() {
    return {
      toolData: toolData,
    };
  },
};
</script>

<style lang="scss" scoped></style>
