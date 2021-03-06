import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Home from './pages/Home/index';
import About from './pages/About/index';
import Demo from './pages/Demo/index';
import Contact from "./pages/Contact/index";
import Dashboard from './components/Dashboard';
import Protocols from './components/Dashboard/Protocols';
import Description from './components/Dashboard/Protocols/Description';
import Guidelines from './components/Dashboard/Protocols/Guidelines';
import Materials from './components/Dashboard/Protocols/Materials';
import Steps from './components/Dashboard/Protocols/Steps';
import PreviewCreate from "./components/Dashboard/Protocols/PreviewCreate";
import MyProtocols from './components/Dashboard/Workspace/MyProtocols';
import SharedProtocols from './components/Dashboard/Workspace/SharedProtocols';

import ProtocolRun from './components/Dashboard/Protocols/Run';
import PreviewRun from './components/Dashboard/Protocols/Run/PreviewRun';
import DescriptionRun from './components/Dashboard/Protocols/Run/DescriptionRun';
import GuidelinesRun from './components/Dashboard/Protocols/Run/GuidelinesRun';
import MaterialsRun from './components/Dashboard/Protocols/Run/MaterialsRun';
import StepsRun from './components/Dashboard/Protocols/Run/StepsRun';
import Summary from './components/Dashboard/Protocols/Summary';

import DataVisualization from './components/Dashboard/DataVisual';

import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import { useSelector } from 'react-redux';
import Profile from "./components/Profile/Profile";
import './styles/index.scss'


function App() {
  const { user } = useSelector((state) => state.auth)
  console.log(user);


  return (
    <BrowserRouter>
      <Routes>

        {!user ?
          <>
            <Route path="/" element={<Home />}>
              <Route index element={<Login />} />
              <Route path='/register' element={<Register />} />
            </Route>
            <Route path='about' element={<About />} />
            <Route path='demo' element={<Demo />} />

            <Route path='contact' element={<Contact />} />

            <Route path="*" element={<Navigate to="/" replace />} />
          </>


          :

          <Route path="/" element={<Dashboard />}>

            <Route index element={<MyProtocols />} />
            <Route path='shared' element={<SharedProtocols />}>
              <Route path=':protocolId'>
                <Route path="data-visualization" element={<DataVisualization />} />
              </Route>

            </Route>

            <Route path='protocols' element={<Protocols />}>
              <Route path="description" element={<Description />} />
              <Route path="guidelines" element={<Guidelines />} />
              <Route path="materials" element={<Materials />} />
              <Route path="steps" element={<Steps />} />
              <Route path="preview" element={<PreviewCreate />} />

              <Route path='run'>
                <Route path=':protocolId' element={<ProtocolRun />}>
                  <Route index element={<PreviewRun />} />
                  <Route path="description" element={<DescriptionRun />} />
                  <Route path="guidelines" element={<GuidelinesRun />} />
                  <Route path="materials" element={<MaterialsRun />} />
                  <Route path="steps" element={<StepsRun />} />
                </Route>
              </Route>


              <Route path=':protocolId'>
                <Route path='summary' element={<Summary />} />
                {/* <Route path="data-visualization" element={<DataVisualization />} /> */}
              </Route>

            </Route>
            <Route path="profile" element={<Profile />} />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        }

      </Routes>
    </BrowserRouter>
  );
}

export default App;
