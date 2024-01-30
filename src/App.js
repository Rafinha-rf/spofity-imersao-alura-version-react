import './App.css';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';


function App() {
  return (
    <div>
      <SideBar/>
      <Header/>
      <Footer/>
      <Main/>
    </div>
  );
}
export default App;
