<template>
  <div class="tools" v-for="skill in skillData" :key="skill.name_skill">
    <div class="img_logo">
      <img
        :src="skill.image_skill"
        :alt="'logo ' + skill.name_skill"
        width="54px"
        height="54px"
      />
    </div>
    <p class="tools_text">{{ skill.name_skill }}</p>
  </div>
</template>

<script>
import skillData from "@/data/skill_data.js";
export default {
  data() {
    return {
      skillData: skillData,
    };
  },
};
</script>

<style lang="scss" scoped></style>
