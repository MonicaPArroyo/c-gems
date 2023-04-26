import Layout from '@components/Layout/Layout';
import GemHeader from '@components/GemHeader/GemHeader';
import GemList from '@components/GemList/GemList';
import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => {
	const response = await fetch(`${process.env.API_HOST}/api/gems`);
	const { data: gemList }: TAPIGemResponse = await response.json();

	return {
		props: {
			gemList,
		},
	};
};
const HomePage = ({ gemList }: { gemList: TGem[] }) => {
	return (
		<Layout>
			<GemHeader />
			<GemList gems={gemList} />
		</Layout>
	);
};

export default HomePage;
