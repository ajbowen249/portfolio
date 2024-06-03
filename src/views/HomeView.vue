<template>
    <main>
        <ProjectRow :projects="[testProject, testProject]"/>
    </main>
</template>

<script setup lang="ts">
import ProjectRow from '@/components/ProjectRow.vue';
import type { Project } from '@/types';

const testProject: Project = {
  title: 'Test Project',
  url: 'https://www.google.com',
};
</script>
