import React from 'react'
import Navbar from './components/Navbar'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomeLayout from './components/pages/HomeLayout'
import Home from './components/Home'
import Courses from './components/Courses'
import BookCourse from './components/BookCourse'

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "courses", element: <Courses /> },
      ],
    },

  ]);



  return (
    <main className='bg-white h-screen bg-HomePageBgImage'>
      <Navbar />
      <RouterProvider router={routes} />
    </main>
  )
}

export default App