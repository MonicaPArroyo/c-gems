import { NextUIProvider } from '@nextui-org/react';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
	// 2. Use at the root of your app
	return (
		<NextUIProvider>
			<Component {...pageProps} />
		</NextUIProvider>
	);
}

export default MyApp;
