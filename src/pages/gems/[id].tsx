import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Layout from '@/components/Layout/Layout';
import GemSummary from '@/components/GemSummary/GemSummary';

const GemPage = () => {
	const [gemItem, setGemItem] = useState<TGem | null>();
	const {
		query: { id },
	} = useRouter();

	useEffect(() => {
		window
			.fetch(`/api/gems/${id}`)
			.then((response) => response.json())
			.then(({ data, length }) => {
				setGemItem(data);
			});
	}, [id]);
	return (
		<Layout>
			{gemItem == null ? null : <GemSummary gemItem={gemItem} />}
		</Layout>
	);
};

export default GemPage;
