import React from 'react';
import Link from 'next/link';
import { Card, Grid, Text } from '@nextui-org/react';

type GemsListProps = {
	gems: TGem[];
};

const mapGemsToCards = (gems: TGem[]) =>
	gems.map(({ name, id, image }) => (
		<Grid key={id} xs={12} sm={6} justify="center">
			<Link href="/gems/[id]" as={`/gems/${id}`} passHref>
				<Card isHoverable isPressable>
					<Card.Body css={{ p: 0 }}>
						<Card.Image
							src={image}
							objectFit="contain"
							width={400}
							height={400}
							alt={`Image of ${name}`}
						/>
					</Card.Body>
					<Card.Footer css={{ justifyItems: 'flex-start' }}>
						<Text b>{name}</Text>
					</Card.Footer>
				</Card>
			</Link>
		</Grid>
	));

const GemList = ({ gems }: GemsListProps) => (
	<Grid.Container gap={2} justify="center">
		{mapGemsToCards(gems)}
	</Grid.Container>
);

export default GemList;
