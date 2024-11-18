import { BrowserRouter, Route, Routes } from "react-router-dom"
import ProductPage from "./Pages/ProductPage"
import { UserProvider } from "./Utils/UserContext"
import ProductDetail from "./Pages/Productdetails"
import HookForm from "./Pages/HookForm"
import ReactForm from "./Pages/ReactForm"
import PostApp from "./Pages/PostApp"
import EditProfilePage from "./Pages/EditProfilePage"
import RiwayatPage from "./Pages/RiwayatPage"

function App() {
  
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route path="/"  element={<ProductPage />}/>
            <Route path="/products/:slug" element={<ProductDetail />} />
            <Route path="*" element={<h1 className="flex w-full h-full text-center items-center justify-center text-4xl text-pink-600">NOT FOUND PAGE.</h1>} />
            <Route path="/hookform" element={<HookForm />}/>
            <Route path="/reactform" element={<ReactForm />}/>
            <Route path="/postapp" element={<PostApp />}/>
            <Route path="/editprofile" element={<EditProfilePage />}/>
            <Route path="/riwayat" element={<RiwayatPage />}/>
          </Routes>  
        </UserProvider>      
      </BrowserRouter>
    </>
  )
}

// function App () {
//   return (
//     <>
//       <BrowserRouter>
//         <UserProvider>
//           <Routes>
//             <Route path="/"  element={<Profile1 />}/>
//           </Routes>  
//         </UserProvider>      
//       </BrowserRouter>
//     </>
//   )
// }



export default App
