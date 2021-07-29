import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import GlobalStyles from './styles/GlobalStyles.js';
import Homepage from './components/HomePage';
import SendTest from './components/SendTest';
import SearchTest from './components/SearchTest';
import SearchTeacher from './components/SearchTeacher';
import SearchSubject from './components/SearchSubject';

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
                        <SearchTest/>
                    </Route>
                    <Route path='/search-teacher' exact>
                        <SearchTeacher/>
                    </Route>
                    <Route path='/search-subject' exact>
                        <SearchSubject/>
                    </Route>
                </Switch>
            </Router>
        </>
    )
}