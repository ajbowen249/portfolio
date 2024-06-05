<template>
    <a class="branded-link" :href="href">
        <div v-if="iconName == 'npm'" class="brand-icon-background"></div>
        <component v-if="IconMap[iconName]" :is="IconMap[iconName]" class="brand-icon" />
        <span class="branded-link-text">{{ text }}</span>
    </a>
</template>

<script setup lang="ts">
import type { BrandIconName } from '@/types';

import GithubIcon from '@/components/icons/github-mark-white.svg';
import NPMIcon from '@/components/icons/npm-logo-red.svg';

const IconMap = {
    github: GithubIcon,
    npm: NPMIcon,
    none: undefined,
};

defineProps<{
    href: string;
    text: string;
    iconName: BrandIconName;
}>();
</script>

<style scoped>
.branded-link {
    margin-left: var(--space-xxs);
    display: grid;
    height: var(--space-l);
    margin-bottom: var(--space-m);
    align-content: center;
    color: var(--text-color);
    font-size: 20pt;
    grid-template-rows: 1fr;
    grid-template-columns: auto 1fr;
}

.brand-icon {
    grid-row: 1;
    grid-column: 1;
    margin-top: 10px;
    margin-left: var(--space-xxs);
    margin-right: var(--space-xxs);
    width: 30px;
    height: 30px;
}

.branded-link-text {
    grid-row: 1;
    grid-column: 2;
    margin-left: var(--space-xxs);
}

.brand-icon-background {
    grid-row: 1;
    grid-column: 1;
    height: 20px;
    margin-top: 15px;
    background-color: white;
    border-radius: 5px;
}

@media only screen and (max-width: 900px) {
    .branded-link {
        height: var(--space-l);
        font-size: 15pt;
    }

    .brand-icon {
        width: 25px;
        height: 25px;
    }

    .branded-link-text {
        margin-top: var(--space-xxs);
    }

    .brand-icon-background {
        height: 15px;
    }
}
</style>
