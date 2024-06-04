import type { Project } from './types';

export const FeaturedProjects: Project[] = [
    {
        title: 'lait: A TypeScript Replacement for AWK',
        shortDescription: 'Allows AWK-like text processing with the familiarity of TypeScript.',
        imagePath: '/portfolio/lait-meta-card.png',
        githubName: 'lait',
        npmUrl: 'https://www.npmjs.com/package/@ajbowen249/lait',
        generalLink: {
            text: 'Interactive Docs',
            url: 'https://ajbowen249.github.io/lait/',
        },
        tags: ['TypeScript', 'Node.js', 'Vue.js'],
    },
    {
        title: "TRS-80 Model 100 Demake of Baldur's Gate III",
        shortDescription: "The world's first laptop meets the great modern roleplaying game.",
        youtubeEmbedUrl: 'https://www.youtube.com/embed/zW9-hpuNDQQ?si=VcKXkeCgi0DADQFZ',
        githubName: 'mol',
        tags: ['Assembly', 'Retrocomputing', 'Games', 'Python'],
    },
    {
        title: 'BlinkNet',
        shortDescription: 'Audio-synchronized centerpieces built on the ESP-8266',
        youtubeEmbedUrl: 'https://www.youtube.com/embed/tLIPRsWJwsU?si=2V8Ifi7XyUoKbMfa',
        githubName: 'blinknet',
        generalLink: {
            text: 'hackaday.io Project',
            url: 'https://hackaday.io/project/163013-blinknet',
        },
        tags: ['Microcontrollers', 'C++', 'Python', 'Vue.js'],
    },
    {
        title: "Conway's Game of Life",
        shortDescription: 'Web-based implementation using Rust and Yew',
        imagePath: 'https://github.com/ajbowen249/yew-gol/raw/main/src/assets/images/demo_screenshot.png',
        githubName: 'yew-gol',
        generalLink: {
            text: 'Live Build',
            url: 'https://ajbowen249.github.io/yew-gol/',
        },
        tags: ['Rust', 'Games', 'Web'],
    },
    {
        title: 'PicoRico',
        shortDescription:
            'Proof-of-concept for a Loco-Roco-like game for PICO-8; Includes a robust pipeline with unit tests and levels built in Blender 3D',
        imagePath: 'https://github.com/ajbowen249/pico_rico/raw/main/gh_media/gifs/game_demo_1.gif',
        githubName: 'pico_rico',
        tags: ['Lua', 'Games', 'Python'],
    },
    {
        title: 'PICO-8 3D',
        shortDescription: 'Attempt at a simple 3D engine for PICO-8',
        imagePath: 'https://github.com/ajbowen249/pico83D/raw/master/gh_media/filled_demo.gif',
        githubName: 'pico83D',
        tags: ['Lua', 'Games'],
    },
    {
        title: 'BrOS',
        shortDescription:
            'Proof-of-concept for an NES OS with pseudo multitasking and a robust filesystem with a web-based helper utility.',
        imagePath: 'https://github.com/ajbowen249/bros/raw/main/gh_media/gifs/fs_demo.gif',
        githubName: 'bros',
        tags: ['C', 'Vue.js', 'TypeScript', 'Retrocomputing', 'Web'],
    },
    {
        title: 'PICO-8 Spline Editor',
        shortDescription:
            'Composite Bézier spline builder for PICO-8, mainly created to check my own knowledge of Bézier curves.',
        imagePath: 'https://github.com/ajbowen249/pico-8-bezier/raw/main/gh_media/gifs/spline_demo.gif',
        githubName: 'pico-8-bezier',
        tags: ['Lua', 'Games'],
    },
];