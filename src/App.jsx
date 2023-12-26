import { useState } from "react";
import CreateProject from "./components/CreateProject";
import ProjectEmpty from "./components/ProjectEmpty";
import ProjectSideBar from "./components/ProjectSideBar";
function App() {

        const[projectState,setProjectState]=useState(
          {selectedProject:undefined,
          projects:[]
          })

  return (
    
     <main className="h-screen my-8 flex gap-8">.
        <ProjectSideBar />
       {/* <CreateProject /> */}
       {<ProjectEmpty />}
     </main>
         
  );
}

export default App;
