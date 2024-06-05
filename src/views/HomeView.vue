<template>
    <div class="container">
        <header>
            <h1>Featured Projects</h1>
        </header>
        <main>
            Filter by topic
            <div class="tag-row">
                <TagElement v-for="(tag, index) in Tags" :key="index" :tag="tag" />
            </div>
            <ProjectField :projects="filteredProjects" />
        </main>
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
    padding-left: var(--space-m);
    padding-right: var(--space-m);
}

.tag-row {
    display: flex;
    flex-direction: row;
    column-gap: var(--space-xxs);
    row-gap: var(--space-xxs);
    flex-wrap: wrap;
}
</style>
