import { BrowserRouter, Link } from 'react-router-dom';

import './styles/App.css';

import AppRoutes from './Routes';

export default function App() {
    return (
        <div className="wrapper">
            <BrowserRouter>
            <nav>
                <Link to='staart-redeSocial/'>Meu Feed</Link>
                <Link to='staart-redeSocial/most-viewed'>Mais vistos</Link>
            </nav>
                <AppRoutes />
            </BrowserRouter>
        </div>
    );
}