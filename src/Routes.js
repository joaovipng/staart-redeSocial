import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import MostViewed from './pages/MostViewed';

export default function AppRoutes(){
    return(
        <Routes>
            <Route path="staart-redeSocial/" element={<Home />} />
            <Route path="staart-redeSocial/most-viewed" element={<MostViewed />}/>
        </Routes>
    );
};