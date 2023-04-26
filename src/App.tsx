import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { createTheme, ThemeProvider } from "@mui/material"

import Home from "./pages/home/Home"
import Product from "./pages/productPage/Product"

const router = createBrowserRouter([
	{
		path: "/",
		Component: Home
	},
	{
		path: "/:prodId",
		Component: Product
	}
])

const theme = createTheme({
	typography: {
		fontFamily: "Inter"
	}
})

function App() {
	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<RouterProvider router={router} />
			</ThemeProvider>
		</div>
	)
}

export default App
