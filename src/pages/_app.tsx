import { NextUIProvider } from '@nextui-org/react';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }: AppProps) {
	// 2. Use at the root of your app
	return (
		<NextUIProvider>
			<Component {...pageProps} />
			<Analytics />
		</NextUIProvider>
	);
}

export default MyApp;
