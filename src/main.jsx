import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import ListedBooks from './components/ListedBooks/ListedBooks.jsx';
import BookDetails from './components/BookDetails/BookDetails.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/listed-books',
        element: <ListedBooks></ListedBooks>
      },
      {
        path: '/book/:id',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('books_data.json')
      }
    ]
  },
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
