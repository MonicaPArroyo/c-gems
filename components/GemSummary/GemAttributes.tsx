import React from 'react';
import { Text, Table, Spacer, Container } from '@nextui-org/react';

const GemAttributes = ({ description, ...otherAttributes }: TGemAttributes) => (
	<>
		<Container as="section">
			<Text h3>About this Gem</Text>
			<Text>{description}</Text>

			<Spacer />

			<Table>
				<Table.Header>
					<Table.Column align="center">Attribute</Table.Column>
					<Table.Column align="center">Description</Table.Column>
				</Table.Header>
				<Table.Body>
					{Object.entries(otherAttributes).map(([key, value]) => (
						<Table.Row key={key}>
							<Table.Cell>{key}</Table.Cell>
							<Table.Cell>
								{Array.isArray(value)
									? value.join(', ')
									: value}
							</Table.Cell>
						</Table.Row>
					))}
				</Table.Body>
			</Table>
		</Container>
	</>
);

export default GemAttributes;
