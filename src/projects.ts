import type { Project } from './types';

export const FeaturedProjects: Project[] = [
    {
        title: "Þe Auld Tomes: Bamboozling",
        shortDescription: "An in-progress 3D Action RPG in PICO-8. Uses a custom software renderer to accomplish 3D, and leans on a robust build system and custom level editor.",
        imagePaths: [],
        youtubeEmbedUrl: 'https://www.youtube.com/embed/KpriNOfzIBM?si=GpMT-kGlOVWx3yf3',
        githubName: 'auld-tomes-public',
        generalLinks: [
            {
                text: 'Play it here!',
                url: 'https://ajbowen249.github.io/auld-tomes-public/',
            },
        ],
        tags: ['Lua', 'Games'],
    },
    {
        title: "TRS-80 Model 100 Demake of Baldur's Gate III",
        shortDescription: "The world's first laptop meets the great modern roleplaying game.",
        imagePaths: [],
        youtubeEmbedUrl: 'https://www.youtube.com/embed/zW9-hpuNDQQ?si=VcKXkeCgi0DADQFZ',
        githubName: 'mol',
        generalLinks: [
            {
                text: 'pcgamer.com Article',
                url: 'https://www.pcgamer.com/hardware/gaming-laptops/this-8-bit-demake-of-baldurs-gate-3-was-made-for-a-40-year-old-laptop-and-its-a-massive-shot-of-pure-1980s-gaming-nostalgia/',
            },
            {
                text: 'hackaday.com Article',
                url: 'https://hackaday.com/2024/06/12/baldurs-gate-iii-comes-to-the-trs-80-model-100/',
            }
        ],
        tags: ['Assembly', 'Retrocomputing', 'Games', 'Python'],
    },
    {
        title: 'lait: A TypeScript Replacement for AWK',
        shortDescription: 'Allows AWK-like text processing with the familiarity of TypeScript.',
        imagePaths: [ '/portfolio/lait-meta-card.png' ],
        githubName: 'lait',
        npmUrl: 'https://www.npmjs.com/package/@ajbowen249/lait',
        generalLinks: [{
            text: 'Interactive Docs',
            url: 'https://ajbowen249.github.io/lait/',
        }],
        tags: ['TypeScript', 'Node.js', 'Vue.js'],
    },
    {
        title: "Dungeon Delver Engine",
        shortDescription: "A game engine for the TRS-80 Model 100 and ZX Spectrum based on OGL SRD 5.1",
        imagePaths: [ 'https://github.com/ajbowen249/dungeon-delver-engine/blob/main/gh_media/editor_demo_1.gif?raw=true' ],
        githubName: 'dungeon-delver-engine',
        generalLinks: [],
        tags: ['Assembly', 'Retrocomputing', 'Games', 'Python'],
    },
    {
        title: 'BlinkNet',
        shortDescription: 'Audio-synchronized centerpieces built on the ESP-8266',
        imagePaths: [],
        youtubeEmbedUrl: 'https://www.youtube.com/embed/tLIPRsWJwsU?si=2V8Ifi7XyUoKbMfa',
        githubName: 'blinknet',
        generalLinks: [{
            text: 'hackaday.io Project',
            url: 'https://hackaday.io/project/163013-blinknet',
        }],
        tags: ['Microcontrollers', 'C++', 'Python', 'Vue.js'],
    },
    {
        title: 'LED Matrix Tetris',
        shortDescription: 'Tetris on a hand-built LED matrix',
        imagePaths: [],
        youtubeEmbedUrl: 'https://www.youtube.com/embed/nYfAjwWjQ2g?si=UQL5Q4u6hDOmxQDD',
        generalLinks: [
            {
                text: 'hackaday.com Article',
                url: 'https://hackaday.com/2015/01/21/arduino-tetris-on-a-multiplexed-led-matrix/',
            },
            {
                text: 'hackaday.io Project',
                url: 'https://hackaday.io/project/3593-led-matrix-tetris-class-project',
            },
        ],
        tags: ['Microcontrollers', 'C++'],
    },
    {
        title: 'Portfolio',
        shortDescription: 'Literally this website',
        imagePaths: [ '/portfolio/portfolio-thumbnail.png' ],
        githubName: 'portfolio',
        generalLinks: [{
            text: 'Live Build (You\'re already here)',
            url: 'https://ajbowen249.github.io/portfolio/',
        }],
        tags: ['TypeScript', 'Vue.js', 'Web'],
    },
    {
        title: 'DNS Hero',
        shortDescription: 'Command-line utility for generating and parsing Base64 DNS requests',
        imagePaths: [ 'https://github.com/ajbowen249/dns-hero/raw/main/gh_media/screenshot.PNG' ],
        githubName: 'dns-hero',
        tags: ['Rust'],
    },
    {
        title: 'Web-Based Apple I Emulator',
        shortDescription: 'Emulator for the original Apple computer that runs in the browser',
        imagePaths: [ 'https://github.com/ajbowen249/6502Suite/raw/master/gh_media/web_demo.gif' ],
        githubName: '6502Suite',
        generalLinks: [{
            text: 'Live Build',
            url: 'https://ajbowen249.github.io/6502Suite/',
        }],
        tags: ['C++', 'Retrocomputing', 'Web'],
    },
    {
        title: 'Arduino-Based Apple I Emulator',
        shortDescription: 'Emulator for the original Apple computer that runs on an Arduino',
        imagePaths: [],
        youtubeEmbedUrl: 'https://www.youtube.com/embed/1DGvXqPcBEI?si=YqylqBbPiD8Hx1uA',
        generalLinks: [{
            text: 'hackaday.io Project',
            url: 'https://hackaday.io/project/7488-arduino-based-apple-i-emulator',
        }],
        tags: ['C++', 'Retrocomputing', 'Microcontrollers'],
    },
    {
        title: "Conway's Game of Life",
        shortDescription: 'Web-based implementation using Rust and Yew',
        imagePaths: [ 'https://github.com/ajbowen249/yew-gol/raw/main/src/assets/images/demo_screenshot.png' ],
        githubName: 'yew-gol',
        generalLinks: [{
            text: 'Live Build',
            url: 'https://ajbowen249.github.io/yew-gol/',
        }],
        tags: ['Rust', 'Games', 'Web'],
    },
    {
        title: 'Bleckers (Blazor + checkers)',
        shortDescription:
            'The game of Checkers, written in .NET Blazor',
        imagePaths: [ 'https://github.com/ajbowen249/Bleckers/raw/main/gh_media/screenshot.png' ],
        githubName: 'Bleckers',
        generalLinks: [{
            text: 'Playable Version',
            url: 'https://ajbowen249.github.io/Bleckers/',
        }],
        tags: ['Web', 'C#', '.NET'],
    },
    {
        title: 'PicoRico',
        shortDescription:
            'Proof-of-concept for a Loco-Roco-like game for PICO-8; Includes a robust pipeline with unit tests and levels built in Blender 3D',
        imagePaths: [ 'https://github.com/ajbowen249/pico_rico/raw/main/gh_media/gifs/game_demo_1.gif' ],
        githubName: 'pico_rico',
        tags: ['Lua', 'Games', 'Python'],
    },
    {
        title: 'PICO-8 3D',
        shortDescription: 'Attempt at a simple 3D engine for PICO-8',
        imagePaths: [ 'https://github.com/ajbowen249/pico83D/raw/master/gh_media/filled_demo.gif' ],
        githubName: 'pico83D',
        tags: ['Lua', 'Games'],
    },
    {
        title: 'VT10K',
        shortDescription:
            'In-progress Fantasy Console built in Unreal Engine 5, meant to mimic text-based video terminals',
        imagePaths: [ '/portfolio/vt10k_screenshot_1.png', '/portfolio/vt10k_snake_screenshot.png' ],
        youtubeEmbedUrl: 'https://www.youtube.com/embed/7K6JNeMeGCY',
        tags: ['Games'],
    },
    {
        title: 'BrOS',
        shortDescription:
            'Proof-of-concept for an NES OS with pseudo multitasking and a robust filesystem with a web-based helper utility',
        imagePaths: [ 'https://github.com/ajbowen249/bros/raw/main/gh_media/gifs/fs_demo.gif' ],
        githubName: 'bros',
        tags: ['C', 'Vue.js', 'TypeScript', 'Retrocomputing', 'Web'],
    },
    {
        title: 'Mouse Game Prototype',
        shortDescription:
            'Experiment in generating a maze-like game world in Unity with a variety of encounters',
        imagePaths: [ '/portfolio/mouse_game_demo_1.gif', '/portfolio/mouse_game_generation_demo_1.gif' ],
        tags: ['Games', 'C#'],
    },
    {
        title: 'PICO-8 Spline Editor',
        shortDescription:
            'Composite Bézier spline builder for PICO-8, mainly created to check my own knowledge of Bézier curves',
        imagePaths: [ 'https://github.com/ajbowen249/pico-8-bezier/raw/main/gh_media/gifs/spline_demo.gif' ],
        githubName: 'pico-8-bezier',
        tags: ['Lua', 'Games'],
    },
    {
        title: 'Dungeoroo!',
        shortDescription:
            'Experiment in building dungeons with my own implementation of Wave Function Collapse using yew',
        imagePaths: [ 'https://github.com/ajbowen249/dungeoroo/raw/main/src/assets/images/stepped_demo.gif' ],
        githubName: 'dungeoroo',
        tags: ['Rust', 'Games', 'Web'],
    },
];
