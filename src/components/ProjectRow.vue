<template>
    <div class="project-card-row">
        <div v-for="(project, index) in projects" :key="index">
            <ProjectCard :project="project" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { type Project } from '@/types';
import ProjectCard from './ProjectCard.vue';

defineProps<{
    projects: Project[];
}>();
</script>

<style scoped>
.project-card-row {
    display: flex;
}
</style>
