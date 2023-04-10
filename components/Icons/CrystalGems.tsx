import React from 'react';
import { IconProps } from './icon.types';
import { Image } from '@nextui-org/react';

const lapiz = ({ wi = '65px', he = '65px', ...otherProps }: IconProps) => (
	<Image
		width={wi}
		height={he}
		src="/images/Crystal_Gems_Star.webp"
		alt="Lapiz Gem"
	/>
);

export default lapiz;
