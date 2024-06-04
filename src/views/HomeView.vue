<template>
    <header>
        <h1>Featured Projects</h1>
    </header>
    <main>
        <div class="tag-row">
            <TagElement v-for="(tag, index) in Tags" :key="index" :tag="tag" />
        </div>
        <ProjectField :projects="filteredProjects" />
    </main>
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
header {
    margin-top: var(--space-s);
    margin-left: var(--space-m);
}

.tag-row {
    display: flex;
    flex-direction: row;
    margin-left: var(--space-m);
    column-gap: var(--space-xxs);
    row-gap: var(--space-xxs);
    flex-wrap: wrap;
}
</style>
