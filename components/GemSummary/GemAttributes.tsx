import React from 'react';
import { Text, Table, Spacer } from '@nextui-org/react';
import { TableBody } from '@nextui-org/react/types/table/base';

const GemAttributes = ({ description, ...otherAttributes }: TGemAttributes) => (
	<section>
		<Text h3>About this Gem</Text>
		<Text>{description}</Text>

		<Spacer />
		<table>
			<tbody>
				{Object.keys(otherAttributes).map((key) => (
					<tr key={key}>
						<td>{key}</td>
						<td>{otherAttributes[key]}</td>
					</tr>
				))}
			</tbody>
		</table>

		{/* <Table bordered>
			<Table.Header>
				<Table.Row>
					<Table.Column align="center">Attributes</Table.Column>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{Object.keys(otherAttributes).map((key) => (
					<Table.Row key={key}>
						<Table.Column>{key}</Table.Column>
						<Table.Column>Perla</Table.Column>
					</Table.Row>
				))}
			</Table.Body>
		</Table> */}
	</section>
);

export default GemAttributes;
