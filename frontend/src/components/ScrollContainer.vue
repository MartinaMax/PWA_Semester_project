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

<style scoped>
    .scrollcontainer {
        width: 100%;
        overflow-y: auto;
        height: 78%;
    }

    .scrollcontainer::-webkit-scrollbar {
        width: thin; 
        background: transparent;
    }
</style>