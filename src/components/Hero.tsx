import { useState } from 'react'
import ReactPlayer from 'react-player'
import { GoMute, GoUnmute } from 'react-icons/go'

import { useIsSSR } from '../hooks/useIsSSR'

export const Hero = () => {
	const [muted, setMuted] = useState(false)
	const { isSSR } = useIsSSR()

	if (isSSR) return null

	return (
		<div className="relative">
			<button
				onClick={() => setMuted(v => !v)}
				className="text-white absolute z-10 ml-4 mt-3"
			>
				{muted ? <GoMute /> : <GoUnmute />}
			</button>
			<ReactPlayer
				url={'/dlc_lights_on.MOV'}
				className="w-full h-full"
				playing
				loop
				muted={muted}
				width="100%"
				height="100%"
			/>
		</div>
	)
}
