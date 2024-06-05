<template>
    <div class="project-card-field" ref="containerElement">
        <div v-for="(project, index) in projects" :key="index">
            <ProjectCard :project="project" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from 'vue';
import { type Project } from '@/types';
import ProjectCard from './ProjectCard.vue';
import { useFilterStore } from '@/stores/filter';

defineProps<{
    projects: Project[];
}>();

const filterStore = useFilterStore();

const containerElement = ref<HTMLDivElement>();
const targetHeight = ref(0);

onMounted(() => {
    if (!containerElement.value) {
        return;
    }

    const nodes = Array.from(containerElement.value.children) as HTMLElement[];
    const heights = nodes.map((div) => {
        const style = window.getComputedStyle(div);
        const marginTop = parseFloat(style['marginTop']);
        const marginBottom = parseFloat(style['marginBottom']);
        return div.offsetHeight + marginTop + marginBottom + 64;
    });

    const totalHeight = heights.reduce((acc, height) => acc + height, 0) - 32; // -padding
    // If we just divide by 2 for two columns, it doesn't take into account the specific heights of each element.
    // Instead, crawl forward until we go just over half height.
    var maxHeight = 0;
    var nodeIndex = 0;

    while (maxHeight < totalHeight * 0.7 && nodeIndex < heights.length) {
        maxHeight += heights[nodeIndex++];
    }

    targetHeight.value = maxHeight;
});

const fieldStyleVars = computed(() => {
    return filterStore.selectedTag
        ? {}
        : {
              '--max-height': `${targetHeight.value}px`,
          };
});
</script>

<style scoped>
.project-card-field {
    column-gap: var(--space-l);
    columns: 2;
}

.project-card-field > div {
    padding-top: var(--space-l);
    break-inside: avoid;
}

@media only screen and (max-width: 1630px) {
    .project-card-field {
        columns: 1;
    }
}
</style>
