import { HOME } from '~/constants';
import { featuredReleaseDataUri } from '~/utils/opengraph';

import type { APIContext } from 'astro';

interface OGHomeProps {
	context: APIContext;
}

export function OGHome(_props: OGHomeProps) {
	return (
		<div
			tw="flex h-full w-full items-center justify-between px-16 py-14"
			style={{
				backgroundColor: '#09090b',
				fontFamily: 'Inter',
			}}
		>
			<div tw="flex h-full w-[680px] flex-col justify-between py-4">
				<div tw="flex flex-col">
					<h1
						tw="m-0 font-bold text-white"
						style={{
							fontFamily: 'Space Mono',
							fontSize: '83px',
							letterSpacing: '-0.02em',
							lineHeight: 1,
						}}
					>
						{HOME.title}
					</h1>

					<p tw="mt-5 text-3xl font-medium text-zinc-500">
						Electronic music producer
					</p>

					<div tw="mt-10 h-1 w-28 bg-zinc-800" />
				</div>

				<div tw="flex flex-col">
					<span tw="text-xl font-semibold uppercase tracking-wider text-zinc-500">
						Featured Release
					</span>

					<span tw="mt-3 text-4xl font-bold text-zinc-100">
						Armoured Carapace
					</span>

					<div tw="mt-3 flex items-center text-xl text-zinc-500">
						<span>Fall 2026</span>
						<span tw="mx-4 text-zinc-700">—</span>
						<span>spritesbass.com</span>
					</div>
				</div>
			</div>

			<div
				tw="flex overflow-hidden bg-zinc-900"
				style={{
					border: '3px solid #27272a',
					borderRadius: '20px',
					height: '410px',
					width: '410px',
				}}
			>
				<img
					alt=""
					height="410"
					src={featuredReleaseDataUri}
					style={{
						height: '410px',
						objectFit: 'cover',
						width: '410px',
					}}
					width="410"
				/>
			</div>
		</div>
	);
}