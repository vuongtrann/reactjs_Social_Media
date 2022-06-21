import "./App.css";
import Profile from "./components/Profile/Profile";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/home/Home";

function App() {
    return ( 
        <div className = "App" >
            <div className = "blur" style={{top:'-18%',right:'0'}}></div>
            <div className = "blur" style={{top:'36%',left:'-8rem'}}></div>
           
            {/* <Home/> */}
            <Profile/>
            {/* <Auth/> */}
        </div>
    );
}
export default App;