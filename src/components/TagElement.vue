<template>
    <div class="tag" :class="computedClass" @click="onClickTag">
        {{ tag }}
    </div>
</template>

<script setup lang="ts">
import type { Tag } from '@/types';
import { computed } from 'vue';
import { useFilterStore } from '@/stores/filter';

const props = defineProps<{
    tag: Tag;
}>();

const filterStore = useFilterStore();

var computedClass = computed(() => (filterStore.selectedTag === props.tag ? 'selected-tag' : ''));

const onClickTag = () => filterStore.selectTag(filterStore.selectedTag === props.tag ? undefined : props.tag);
</script>

<style scoped>
.tag {
    color: var(--color-rich-black);
    background-color: var(--color-text);
    border-radius: var(--space-xxs);
    padding: var(--space-xxxs);
    border-bottom: 1px solid var(--color-snow);
    border-right: 1px solid var(--color-snow);
    font-family: 'Courier New', Courier, monospace;
    cursor: pointer;
    -webkit-user-select: none;
    user-select: none;
}

.tag:hover {
    --hover-border: 1px solid var(--color-rich-black);
    border-bottom: var(--hover-border);
    border-right: var(--hover-border);
    transition: 0.25s;
}

.selected-tag {
    background-color: var(--color-aero);
}
</style>
