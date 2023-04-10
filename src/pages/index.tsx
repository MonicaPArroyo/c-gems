import React, { useEffect, useState } from 'react';
import Layout from '@/components/Layout/Layout';
import GemHeader from '@/components/GemHeader/GemHeader';
import GemList from '@/components/GemList/GemList';

const HomePage = () => {
	const [gemList, setgemList] = useState<TGem[]>([]);

	useEffect(() => {
		window
			.fetch('/api/gems')
			.then((response) => response.json())
			.then(({ data, length }) => {
				setgemList(data);
			});
	}, []);
	return (
		<Layout>
			<GemHeader />
			<GemList gems={gemList} />
		</Layout>
	);
};

export default HomePage;
