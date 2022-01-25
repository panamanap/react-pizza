import { Route } from 'react-router-dom';
import { Header } from './components';
import { Home, Cart } from './pages';

function App() {
    return (
        <div className="appWrapper">
            <div className="wrapper">
                <Header />
                <div className="content">
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/cart" exact>
                        <Cart />
                    </Route>
                </div>
            </div>
        </div>
    );
}

export default App;
