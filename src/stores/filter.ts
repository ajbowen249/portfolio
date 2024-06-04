import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { Tag } from '@/types';

export const useFilterStore = defineStore('filter', () => {
    const selectedTag = ref<Tag | undefined>();
    const selectTag = (tag?: Tag) => {
        selectedTag.value = tag;
    };

    return { selectedTag, selectTag };
});
