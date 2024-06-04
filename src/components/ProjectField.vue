<template>
    <div class="project-card-field" :style="fieldStyleVars" ref="containerElement">
        <div v-for="(project, index) in projects" :key="index">
            <ProjectCard :project="project" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { type Project } from '@/types';
import ProjectCard from './ProjectCard.vue';

defineProps<{
    projects: Project[];
}>();

const containerElement = ref<HTMLDivElement>();

const fieldStyleVars = computed(() => {
    if (!containerElement.value) {
        return {
            '--max-height': 500,
        };
    }

    const nodes = Array.from(containerElement.value.children) as HTMLElement[];
    const heights = nodes.map(div => {
        const style = window.getComputedStyle(div);
        const marginTop = parseFloat(style['marginTop']);
        const marginBottom = parseFloat(style['marginBottom']);
        return div.offsetHeight + marginTop + marginBottom + 32;
    });

    const totalHeight = heights.reduce((acc, height) => acc + height, 0) - 32; // -padding
    // If we just divide by 2 for two columns, it doesn't take into account the specific heights of each element.
    // Instead, crawl forward until we go just over half height.
    var maxHeight = 0;
    var nodeIndex = 0;

    while (maxHeight < (totalHeight * .7) && nodeIndex < heights.length) {
        maxHeight += heights[nodeIndex++];
    }

    return {
        '--max-height': `${maxHeight}px`,
    };
});
</script>

<style scoped>
.project-card-field {
    display: flex;
    flex-direction: column;
    row-gap: var(--space-l);
    column-gap: var(--space-l);
    padding: var(--space-m);
    flex-wrap: wrap;
    max-height: var(--max-height);
}

@media only screen and (max-width: 1700px) {
    .project-card-field {
        max-height: none;
    }
}

</style>
