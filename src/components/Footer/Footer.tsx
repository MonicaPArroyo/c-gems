import React from 'react';
import NextLink from 'next/link';
import { Container, Col, Row, Text, Link, Grid } from '@nextui-org/react';
import { FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => (
	<Container
		css={{
			p: '4em, 0em',
			mp: '3em',
			mt: '3rem',
		}}
		as="footer"
	>
		<Row>
			<Col>
				<Container>
					<Text h4>About SU</Text>
					<NextLink href="/about">Learn More</NextLink>
				</Container>
			</Col>
			<Col>
				<Container>
					<Text h4>Gems</Text>
					<NextLink href="/">List All Gems</NextLink>
				</Container>
			</Col>

			<Col>
				<Container>
					<Text h4>Made by</Text>
					<Text css={{ mb: '1rem' }}>Mónica P. Arroyo</Text>
					<Grid.Container justify="center">
						<Grid xs={6} css={{ ta: 'center' }}>
							<Link href="https://github.com/monicaparroyo">
								<FaGithub size={42} />
							</Link>
						</Grid>
						<Grid xs={6} css={{ ta: 'center' }}>
							<Link href="https://www.instagram.com/monicaparroyo/">
								<FaInstagram size={42} />
							</Link>
						</Grid>
					</Grid.Container>
				</Container>
			</Col>
		</Row>

		<Row
			css={{
				ta: 'center',
				mt: '3.2rem',
				mb: '3.2rem',
				fs: '0.8rem',
			}}
		>
			<Col>
				<Text
					color="neutral"
					css={{
						mb: '0',
					}}
				>
					Icons made by{' '}
					<Link href="https://www.svgrepo.com/">SVG Repo</Link>
				</Text>
				<Text
					color="neutral"
					css={{
						mb: '0',
					}}
				>
					Images taken from{' '}
					<Link href="https://www.fandom.com/">Fandom.com</Link> at{' '}
					<Link href="https://steven-universe.fandom.com/">
						Steven Universe Wiki
					</Link>
				</Text>
			</Col>
		</Row>
	</Container>
);

export default Footer;
