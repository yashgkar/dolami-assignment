import Header from "../../components/Header/Header"
import ProductCard from "./components/ProductCard"
import Sidebar from "./components/Sidebar"
import classes from "./Home.module.css"
import { Grid, Typography, Stack } from "@mui/material"

const styles = {
	header: {
		fontSize: '22px',
		fontWeight: 500,
		lineHeight: '27px',
		letterSpacing: '0em',
		margin: "10px 0 8px 0"
	}
}

const Home = () => {
	return <div>
		<Header />
		<Grid container sx={{
				pr: 2,
				pl :2,
				mb: 4
			}}>
			<Grid item lg={2}>
				<Sidebar />
			</Grid>
			<Grid item lg={10}>
				<Stack direction="row" alignItems="center" justifyContent="space-between">
					<Typography sx={styles.header}>
						All Items
					</Typography>
					<select name="cars"className={classes.selectDropdown}  id="cars">
						<option disabled value="default">Sort by featured</option>
						<option value="pricelh">Price: Low to High</option>
						<option value="pricehl">Price: High to Low</option>
						<option value="cr">Customer Reviews</option>
						<option value="new">New</option>
						<option value="plh">Polygon: Low to High</option>
						<option value="phl">Polygon: High to Low</option>
					</select>
				</Stack>
				<Grid container justifyContent="center" spacing={1}>
					{Array.from(Array(24).keys()).map(i => {
						return <Grid item key={i} lg={3}>
							<ProductCard itemId={i + 1} />
						</Grid>
					})}
				</Grid>
			</Grid>
		</Grid>
	</div>
}

export default Home
