<template>
    <div class="scrollcontainer">
        <ProjectCard />
    </div>
</template>
  
<script>
    import ProjectCard from './PojectCard.vue'

    export default {
        name: 'ScrollContainer',
        components: {
        ProjectCard,
    }
  }
</script>

<style scoped lang="scss">
    .scrollcontainer {
        padding: 0 75px;
        width: 100%;
        overflow-y: auto;
    }
</style>