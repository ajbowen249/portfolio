<template>
    <div class="project-card">
        <div class="project-title">
            <h2>{{ project.title }}</h2>
        </div>

        <div v-if="project.youtubeEmbedUrl" class="visual-preview">
            <iframe
                :src="project.youtubeEmbedUrl"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
            />
        </div>

        <div v-if="project.imagePath" class="visual-preview">
            <img :src="project.imagePath" />
        </div>

        <div class="additional-details-container">
            <div class="short-description">
                {{ project.shortDescription }}
            </div>

            <div class="additional-details-grid">
                <div class="tag-row">
                    <div v-for="(tag, index) in project.tags" :key="index">
                        <TagElement :tag="tag" />
                    </div>
                </div>

                <BrandedLink
                    v-if="project.generalLink"
                    icon-name="none"
                    :href="project.generalLink.url"
                    :text="project.generalLink.text"
                />

                <BrandedLink
                    v-if="project.githubName"
                    icon-name="github"
                    :href="`https://github.com/ajbowen249/${project.githubName}`"
                    :text="`ajbowen249/${project.githubName}`"
                />

                <BrandedLink
                    v-if="project.npmUrl"
                    icon-name="npm"
                    :href="project.npmUrl"
                    :text="`@ajbowen249/${project.githubName}`"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { type Project } from '@/types';
import BrandedLink from '@/components/BrandedLink.vue';
import TagElement from '@/components/TagElement.vue';

defineProps<{
    project: Project;
}>();
</script>

<style scoped>
.project-card {
    --image-width: 25rem;

    border-color: var(--color-border);
    border-width: var(--space-xxs);
    border-radius: var(--space-xs);
    border-style: solid;
    padding: var(--space-s);

    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: var(--image-width) auto;
}

.project-title {
    grid-row: 1;
    grid-column: 1 / 3;
}

.visual-preview {
    grid-row: 2;
    grid-column: 1;
}

.visual-preview > img {
    width: var(--image-width);
    display: block;
    margin: 0 auto;
}

.visual-preview > iframe {
    width: var(--image-width);
    height: calc(var(--image-width) * (9 / 16));
    margin: 0 auto;
    display: block;
}

.short-description {
    margin-left: var(--space-s);
    font-style: italic;
}

.additional-details-container {
    grid-column: 2;
    grid-row: 2;
    max-width: var(--image-width);
}

.additional-details-grid {
    display: flex;
    flex-direction: column;
    margin-top: var(--space-m);
}

.tag-row {
    display: flex;
    flex-direction: row;
    margin-left: var(--space-xs);
    column-gap: var(--space-xxs);
}

@media only screen and (max-width: 900px) {
    .project-card {
        --image-width: 20rem;

        border-width: var(--space-xxs);
        border-radius: var(--space-xs);
        padding: var(--space-s);

        grid-template-rows: auto auto auto auto;
        grid-template-columns: auto;
    }

    .project-title {
        grid-row: 1;
        grid-column: 1;
    }

    .additional-details-container {
        grid-column: 1;
        grid-row: 3;
    }
}
</style>
