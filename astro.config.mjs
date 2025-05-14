// @ts-check
import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';

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
                { label: 'Bienvenida', slug: 'bienvenida' },
                {
                    label: 'Guías',
                    autogenerate: {
                        directory: 'guias',
                    },
                },
                {
                    label: 'Reference',
                    autogenerate: {
                        directory: 'reference',
                    },
                },
                {
                    label: 'Doble anidacion',
                    autogenerate: {
                        directory: 'deleteme',
                    },
                },
                {
                    label: 'Triple anidacion',
                    autogenerate: {
                        directory: 'deleteme2',
                    },
                },
            ],
        }),
    ],
});