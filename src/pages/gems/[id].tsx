import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { GetStaticProps } from 'next';

import Layout from '@components/Layout/Layout';
import GemSummary from '@components/GemSummary/GemSummary';

export const getStaticPaths = async () => {
	const response = await fetch(`${process.env.API_HOST}/api/gems`);
	const { data: gemList }: TAPIGemResponse = await response.json();
	const paths = gemList.map(({ id }) => ({
		params: {
			id,
		},
	}));
	return {
		paths,
		fallback: false,
	};
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
	const id = params?.id as string;
	const response = await fetch(`${process.env.API_HOST}/api/gems/${id}`);
	const { data: gemItem }: { data: TGem } = await response.json();
	console.log(gemItem);
	return {
		props: {
			gemItem,
		},
	};
};

const GemPage = ({ gemItem }: { gemItem: TGem }) => {
	return (
		<Layout>
			{gemItem == null ? null : <GemSummary gemItem={gemItem} />}
		</Layout>
	);
};

export default GemPage;
