import { RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import GlobalStyles from 'styles/global';

import router from 'routes/routing';
import Loading from 'components/@common/Loading/Loading';
import ErrorFallback from 'components/@common/Error';
import { LoadingProvider } from 'contexts/loadingContext';

function App() {
	return (
		<ErrorBoundary FallbackComponent={ErrorFallback}>
			<Suspense fallback={<Loading />}>
				<LoadingProvider>
					<RecoilRoot>
						<ThemeProvider theme={theme}>
							<GlobalStyles />
							<RouterProvider router={router} />
						</ThemeProvider>
					</RecoilRoot>
				</LoadingProvider>
			</Suspense>
		</ErrorBoundary>
	);
}

export default App;
