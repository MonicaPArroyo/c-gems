import React, { useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Navbar as NNav, Container, Text } from '@nextui-org/react';
import { Lapiz } from '@components/Icons';

const Navbar = () => {
	const { pathname } = useRouter();

	return (
		<NNav as="header">
			<NNav.Brand>
				<Lapiz />
				<Text b hideIn="xs">
					C-Gems
				</Text>
			</NNav.Brand>
			<NNav.Content>
				<NNav.Item>
					<Link href="/">All the Gems</Link>
				</NNav.Item>
				<NNav.Item>
					<Link href="/about">Learn More</Link>
				</NNav.Item>
			</NNav.Content>
		</NNav>
	);
};

export default Navbar;
