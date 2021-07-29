import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import GlobalStyles from './styles/GlobalStyles.js';
import Homepage from './components/HomePage';

export default function App(){
    return(
        <>
            <Router>
                <GlobalStyles />
                <Switch>
                    <Route path='/' exact>
                        <Homepage/>
                    </Route>
                    <Route path='/send-test' exact>
                        <SendTest/>
                    </Route>
                    <Route path='/search-test' exact>
                        <GetTest/>
                    </Route>
                </Switch>
            </Router>
        </>
    )
}