import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Layout from '@/components/Layout/Layout';
// import GemSummary from '@/components/GemSummary/GemSummary';

const ProductPage = () => {
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
			{/* {product == null ? null : <GemSummary product={gemItem} />} */}
		</Layout>
	);
};

export default ProductPage;
