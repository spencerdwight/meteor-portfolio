import type { JSX } from 'astro/jsx-runtime';
import type { Props } from 'lucide-astro';

export type LucideComponent = (props: Props) => JSX.Element;
