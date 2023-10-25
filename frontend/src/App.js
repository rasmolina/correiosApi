import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import ListUsers from "./components/ListUsers";
import AddUser from "./components/AddUser";
import Navbar from "./components/Navbar";

function App() {
  return (
<>
<Navbar/>
<ListUsers/>
<AddUser />
</>  );
}

export default App;