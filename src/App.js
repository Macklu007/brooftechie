
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './Pages/home'; 
import Error from './Pages/Error';

import Signup from './Pages/signup';
import Login from './Pages/login';
import Verifyemail from './Pages/verifyemail';
import Dashboard from './Pages/dashboard';
import Forgetpassword from './Pages/forgetpassword';
import Updatepassword from './Pages/updatepassword';
import Aboutus from './Pages/aboutus';
import Contactus from './Pages/contactus';
import Profile from './components/dashboard/profile';
import Catalog from './Pages/catalog';
import Instructor from './components/dashboard/Instructor';

import Enrolledcourse from './components/dashboard/enrolledcourse';
import { Setting } from './components/dashboard/setting';
import { useSelector } from 'react-redux';
import {AddCourse} from"./components/dashboard/AddCourse/index"
import Mycourse from './components/dashboard/mycourse';
import CourseDetails from './Pages/CourseDetails';
import Cart from './components/dashboard/Cart';
import ViewCourse from './Pages/ViewCourse';
import VideoDetails from "./components/ViewCourse/VideoDetails"
 
function App() {
  const{user}=useSelector((state)=>state.profile);

  
  
  return (
    <div className="w-screen min-h-screen flex flex-col bg-richblack-900 font-inter" >
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/signup' element={<Signup/>}/>
       <Route path="/login" element={<Login/>} />
       <Route path='/verifyemail/:email' element={<Verifyemail/>}  />
        <Route path="/catalog/:catalogName" element={<Catalog />} />
        <Route path="/courses/:courseId" element={<CourseDetails/>} />
      
      <Route  element={<Dashboard></Dashboard>}>
        <Route path='/dashboard/my-profile' element={<Profile/>}  />
        <Route path="/dashboard/enrolled-courses" element={<Enrolledcourse/>}/>
         <Route path='/dashboard/settings' element={<Setting/>}  />
         <Route path="/dashboard/my-courses" element={<Mycourse/>}/>

         <Route path="/dashboard/cart" element={<Cart/>}/>

         
          { user?.accountType === "Instructor"  &&
            <>
            
            <Route path="/dashboard/add-course" element={<AddCourse/>} />
             <Route path="dashboard/instructor" element={<Instructor />} />
            
            </>

         

          }

         
        


      
      
      </Route>

      <Route
          element={
           
              <ViewCourse />
            
          }
        >
          {user?.accountType === "Student" && (
            <>
              <Route
                path="view-course/:courseId/section/:sectionId/sub-section/:subSectionId"
                element={<VideoDetails />}
              />
            </>
          )}
        </Route>
      
      
      <Route path="/forgetpassword" element={<Forgetpassword/>} />
      <Route path="/update-password/:token" element={<Updatepassword/>} />
      <Route path="/about" element={<Aboutus/>} />
      <Route path="/contact" element={<Contactus/>} />

      <Route path="*" element={<Error/>} />



      </Routes>
     
    </div>
  );
}

export default App;
