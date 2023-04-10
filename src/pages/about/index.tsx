import React from 'react';
import { Container, Grid, Image, Row, Text } from '@nextui-org/react';
import Layout from '@/components/Layout/Layout';

const gemFacts = [
	{
		title: 'The Creator',
		content:
			'The show’s creator, Rebecca Sugar, was the first woman to create a show for Cartoon Network.',
	},

	{
		title: 'The inspiration',
		content:
			"The character Steven Universe is based off Rebecca Sugar's brother Steven Sugar,who is the show's background designer.",
	},
	{
		title: 'An unstable fusion',
		content:
			"Malachite is the only fusion without an own voice. That's because the fusion was too unstable.",
	},
	{
		title: "Ronaldo's blog",
		content:
			"Ronaldo's blog 'Keep Beach City Weird' is a real blog on Tumblr run by people who work on the show.",
	},
	{
		title: "Sadie's Scar",
		content:
			'In the episode "Island Adventure", Steven takes Sadie and Lars to a far away island. While there, they get attacked by a corrupted gem, and Sadie gets a scar on her face. Rather than it going away by the next episode, Sadie keeps the scar for the rest of the series.',
	},
	{
		title: 'Obsidian',
		content:
			'The statue forming the Crystal Temple appears to be a statue of Obsidian, showing the respective gemstones of their components: Pearl (forehead), Amethyst (chest), Ruby, and Sapphire (left and right palms), and Rose Quartz (navel).',
	},
];

const AboutPage = () => {
	return (
		<Layout>
			<section>
				<Container fluid gap={6}>
					<Row justify="center" css={{ mt: '3rem' }}>
						<Text h1>6 Surprising Facts About Steven Universe</Text>
					</Row>
					<Row
						css={{
							m: '1rem auto 4rem',
							ta: 'center',
							maxW: '80%',
						}}
					>
						<figure>
							<Image
								src="/images/Crystal_Gems.webp"
								alt="The Crystal Gems"
							/>
							<figcaption>
								Originally from{' '}
								<a
									target="_blank"
									href="https://steven-universe.fandom.com/wiki/Crystal_Gems"
								>
									Steven Universe Fandom
								</a>
							</figcaption>
						</figure>
					</Row>
				</Container>
				<Grid.Container justify="center">
					{gemFacts.map(({ title, content }) => (
						<Grid key={title} xs={12} md={6}>
							<Container css={{ mt: '2rem' }}>
								<Text h3>{title}</Text>
								<Text>{content}</Text>
							</Container>
						</Grid>
					))}
				</Grid.Container>
			</section>

			<style jsx>{`
				figure {
				}
				figcaption {
					margin-top: 0.5rem;
					font-site: 0.7rem;
					color: grey;
				}
			`}</style>
		</Layout>
	);
};

export default AboutPage;
