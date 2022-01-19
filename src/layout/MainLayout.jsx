import { Outlet } from 'react-router-dom';
import './main-layout.scss';
import Sidebar from '../components/sidebar/Sidebar';
import TopNav from '../components/topnav/TopNav';

const MainLayout = () => {
    return (
        <>
            <Sidebar />
            <div className='main'>
                <div className='main__content'>
                    <TopNav />
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default MainLayout;
