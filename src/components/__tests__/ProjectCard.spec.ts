import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import ProjectCard from '../ProjectCard.vue';
import type { Project } from '@/types';

describe('ProjectCard', () => {
    it('renders basic contents', () => {
        const testProject: Project = {
            title: 'Test Project',
            shortDescription: 'This is a test project.',
            tags: [],
        };

        const wrapper = mount(ProjectCard, { props: { project: testProject } });
        expect(wrapper.text()).toContain('Test Project');
    });
});
