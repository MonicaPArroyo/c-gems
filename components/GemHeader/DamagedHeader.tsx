import React from 'react';

import { DamagedLapiz } from '@components/Icons';
import { Text } from '@nextui-org/react';

const DamagedHeader = () => (
	<>
		<Text h1>
			Crystal
			<div>
				<DamagedLapiz wi="87px" he="60px" />
			</div>
			Gems
		</Text>
	</>
);

export default DamagedHeader;
