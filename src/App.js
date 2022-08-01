
import Header from './components/Header/Header'
import Hotelview from './components/Hotelview/Hotelview'
import Sidebar from './components/Sidebar/Sidebar'

import './sass/main.scss'

function App() {
  return (
    <div className='container'>
      <Header />

      <div className='content'>
        <Sidebar />
        <Hotelview />
      </div>

    </div>
  );
}

export default App;
