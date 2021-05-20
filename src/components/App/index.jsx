import Registration from '../Registration';
import { Switch, Route, Redirect } from 'react-router-dom';
import Main from '../MainPages/Main';
import { useSelector } from 'react-redux';

function App() {
  const token = useSelector((state) => state.registration.token);

  let routes;

  if (token) {
    routes = (
      <Switch>
        <Route path={'/main'} component={Main} />;
        <Redirect to={'/main'} />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/login" component={Registration} />
        <Redirect to="/login" />
      </Switch>
    );
  }

  console.log(token);
  return <div className="App">{routes}</div>;
}

export default App;
