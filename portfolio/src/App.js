import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import Projects from './components/Projects'
import About from './components/About'
import Navigation from './components/Navigation'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
