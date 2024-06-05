<template>
    <div class="container">
        <span class="name">Alex Bowen</span><br />
        Software Engineer<br />
        <a href="https://www.linkedin.com/in/alex-bowen-408228135/">LinkedIN</a><br />
        <a href="https://github.com/ajbowen249">GitHub</a><br /><br />

        <h1>Featured Personal Projects</h1>

        Filter by topic
        <div class="tag-row">
            <TagElement v-for="(tag, index) in Tags" :key="index" :tag="tag" />
        </div>

        <ProjectField :projects="filteredProjects" />
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import ProjectField from '@/components/ProjectField.vue';
import TagElement from '@/components/TagElement.vue';

import { FeaturedProjects } from '@/projects';
import { useFilterStore } from '@/stores/filter';

import { Tags } from '@/types';

const filterStore = useFilterStore();
const filteredProjects = computed(() =>
    FeaturedProjects.filter(
        (project) => filterStore.selectedTag === undefined || project.tags.includes(filterStore.selectedTag)
    )
);
</script>

<style scoped>
.container {
    padding-top: var(--space-s);
    padding-left: var(--space-l);
    padding-right: var(--space-l);
}

.name {
    font-size: 40pt;
}

.tag-row {
    display: flex;
    flex-direction: row;
    column-gap: var(--space-xxs);
    row-gap: var(--space-xxs);
    flex-wrap: wrap;
}

a {
    color: var(--text-color);
}
</style>
