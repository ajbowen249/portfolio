<template>
    <div class="project-card">
        <h1>{{ project.title }}</h1>
        <h1>{{ project.url }}</h1>
    </div>
</template>

<script setup lang="ts">
import { type Project } from '@/types';

defineProps<{
    project: Project;
}>();
</script>

<style scoped>
.project-card {

}
</style>
