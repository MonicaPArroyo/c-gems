import React from 'react';
import { Container, Grid, Text } from '@nextui-org/react';
import { DamagedLapiz } from '@components/Icons';

const ModalHeaderContent = () => {
	return (
		<Container css={{ p: '2rem' }}>
			<Grid.Container>
				<Grid xs={4} css={{ dflex: 'center' }}>
					<DamagedLapiz wi="174px" he="120px" />
				</Grid>
				<Grid xs={8}>
					<Container>
						<Text h2>You just Cracked Lapiz!</Text>
						<Text>You touched her too many times!</Text>
						<Text>
							On the other hand, you are a very curious person and
							you have discovered this :)
						</Text>
					</Container>
				</Grid>
			</Grid.Container>
		</Container>
	);
};

export default ModalHeaderContent;
