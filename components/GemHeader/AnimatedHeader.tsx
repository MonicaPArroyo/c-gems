import React, { useRef } from 'react';
import { Text } from '@nextui-org/react';
import { Lapiz } from '@components/Icons';

type AnimatedHeaderProps = {
	visible: boolean;
	onClick: () => void;
};

const AnimatedHeader = ({ visible, onClick }: AnimatedHeaderProps) => {
	const lapizRef = useRef<HTMLImageElement>(null);
	return (
		<>
			<Text
				h2
				onClick={onClick}
				css={{
					dflex: 'center',
				}}
			>
				Crystal
				<div className={visible ? 'jello-vertical' : ''}>
					<Lapiz wi="87px" he="60px" />
				</div>
				Gems
			</Text>
			<style jsx>
				{`
					.jello-vertical {
						animation: jello-vertical 0.9s linear both;
					}
					@keyframes jello-vertical {
						0% {
							transform: scale3d(1, 1, 1);
						}
						30% {
							transform: scale3d(0.75, 1.25, 1);
						}
						40% {
							transform: scale3d(1.25, 0.75, 1);
						}
						50% {
							transform: scale3d(0.85, 1.15, 1);
						}
						65% {
							transform: scale3d(1.05, 0.95, 1);
						}
						75% {
							transform: scale3d(0.95, 1.05, 1);
						}
						100% {
							transform: scale3d(1, 1, 1);
						}
					}
				`}
			</style>
		</>
	);
};

export default AnimatedHeader;
