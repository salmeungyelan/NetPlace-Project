import { Outlet } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { includeFooterState, includeHeaderState } from 'recoil/atom/index.atom';

import Footer from './Footer';
import Header from './Header';

function Layout() {
	const includeHeader = useRecoilValue(includeHeaderState);
	const includeFooter = useRecoilValue(includeFooterState);

	return (
		<>
			{includeHeader && <Header />}
			<Outlet />
			{includeFooter && <Footer />}
		</>
	);
}

export default Layout;
