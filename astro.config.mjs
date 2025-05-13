// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: 'Guías de la Tribu',
            logo: {
                src: '/src/assets/gdlt_logo.svg',
                alt: 'Logo de la Tribu',
            },
            social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/rms1982/GuiasDeLaTribu' }],
            sidebar: [
                {
                    label: 'Guías',
                    items: [
                        // Each item here is one entry in the navigation menu.
                        { label: 'Guía inicial', slug: 'Guías/Guía inicial' },
                    ],
                },
                {
                    label: 'Reference',
                    autogenerate:
                        { directory: 'src/content/docs/reference' },
                },
            ],
        }),
    ],
});