import Layout from 'components/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Root } from 'Root'

const router = createBrowserRouter([
  {
    path: '/*',
    element: (
      <Layout>
        <Root />
      </Layout>
    ),
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
