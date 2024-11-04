export const Tags = [
    'C',
    'C++',
    'C#',
    'TypeScript',
    'Python',
    'Rust',
    'Vue.js',
    'Node.js',
    'Assembly',
    'Retrocomputing',
    'Games',
    'Lua',
    'Microcontrollers',
    'Web',
    '.NET',
] as const;

export type Tag = (typeof Tags)[number];

export interface Project {
    title: string;
    shortDescription: string;
    githubName?: string;
    imagePaths: string[];
    youtubeEmbedUrl?: string;
    npmUrl?: string;
    generalLinks?: {
        text: string;
        url: string;
    }[];
    tags: Tag[];
}

export type BrandIconName = 'github' | 'npm' | 'none';
