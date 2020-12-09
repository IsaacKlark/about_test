import About from './components/About/About';
import { HashRouter, Route, Redirect } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <HashRouter>
      <Route path="/">
        <Redirect to="/about" />
      </Route>
      <Route path="/about">
        <Header route={"About Us"}/>
        <About />
      </Route>
      <Route path="/howitworks">
        <Header route={"How It Works"}/>
      </Route>
      <Route path="/ourbooks">
        <Header route={"Our Books"}/>
      </Route>
      <Route path="/faqs">
        <Header route={"FAQs"}/>
      </Route>
      <Route path="/login">
        <Header route={"Login"}/>
      </Route>
      <Route path="/create">
        <Header route={"Create a Book"}/>
      </Route>
      <Footer />
    </HashRouter>
  );
}

export default App;
