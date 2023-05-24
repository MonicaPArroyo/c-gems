import React from 'react';
import GemAttributes from '@components/GemSummary/GemAttributes';
import { Col, Container, Row, Text, Image } from '@nextui-org/react';

type GemSummaryProps = {
	gemItem: TGem;
};

const GemSummary = ({ gemItem }: GemSummaryProps) => (
	<>
		<Container as="section" css={{ mt: '2rem' }}>
			<Row gap={1} css={{ display: 'flex', alignItems: 'center' }}>
				<Col css={{ display: 'flex', justifyContent: 'center' }}>
					<Image
						src={gemItem.image}
						alt={gemItem.name}
						objectFit="contain"
						width={500}
						height={500}
					/>
				</Col>
				<Col css={{ display: 'flex', justifyContent: 'center' }}>
					<Text h1>{gemItem.name}</Text>
				</Col>
			</Row>
		</Container>
		<GemAttributes {...gemItem.attributes} />
	</>
);

export default GemSummary;
