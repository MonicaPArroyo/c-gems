import React from 'react';
import { IconProps } from './icon.types';
import { Image } from '@nextui-org/react';

const lapiz = ({ wi = '58px', he = '40px', ...otherProps }: IconProps) => (
	<Image
		width={wi}
		height={he}
		src="/images/Lapiz_Crack_Gem.webp"
		alt="Lapiz Gem"
	/>
);

export default lapiz;
