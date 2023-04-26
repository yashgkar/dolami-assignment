import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Grid, Container, Typography, Stack, IconButton, Button } from "@mui/material"
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import MovieFilterOutlinedIcon from '@mui/icons-material/MovieFilterOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'

import classes from "./Product.module.css"
import Header from "../../components/Header/Header"

const Product = () => {
	const [image, setImage] = useState('')
	const { prodId } = useParams()

	useEffect(() => {
		async function getImage() {
			const img = await import(`../../assets/Avatar Pictures/avatar (${prodId}).png`)
			setImage(img.default)
		}
		getImage()
	}, [prodId])

	return <div>
		<Header />
		<Container sx={{
			mt: 2
		}} maxWidth="lg">
			<Grid container spacing={2}>
				<Grid item lg={5}>
					<img className={classes.productImg} src={image} alt={prodId} />
				</Grid>
				<Grid item lg={7}>
					<Stack direction="row" justifyContent="space-between">
						<Typography variant="h4">Avatar name “Avatown” -nice original avatar of Avatown</Typography>
						<IconButton sx={{
							height: "min-content"
						}}>
							<ShareOutlinedIcon />
						</IconButton>
					</Stack>
					<Typography>Owned by 9, <span style={{
						color: 'red'
					}}>(very rare)</span></Typography>
					<Stack direction="row" sx={{
						gap: '20px',
						mt: 2
					}}>
						<Stack direction="row">
							<VisibilityOutlinedIcon sx={{ color: "black" }} />&nbsp;
							1K viewing
						</Stack>
						<Stack direction="row">
							<FavoriteBorderOutlinedIcon sx={{ color: 'red' }} />&nbsp;
							49k hearts
						</Stack>
						<Stack direction="row">
							<MovieFilterOutlinedIcon sx={{ color: 'purple' }} />&nbsp;
							Anime
						</Stack>
					</Stack>
					<Typography sx={{mt: 4, fontWeight: 500}}>
						Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris commodo quis imperdiet massa tincidunt. At urna condimentum mattis pellentesque id nibh. Elit duis tristique sollicitudin nibh sit amet commodo nulla. Neque volutpat ac tincidunt vitae semper quis lectus. Tristique et egestas quis ipsum. Bibendum est ultricies integer quis auctor elit sed. Facilisis gravida neque convallis a cras. Massa tempor nec feugiat nisl pretium fusce. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet.
					</Typography>
					<Stack direction="row" spacing={2}>
						<Button sx={{ height: "50px" }} variant="contained" color="secondary" fullWidth>
							Buy now
						</Button>
						<Button sx={{ height: "50px" }} variant="contained" color="success" fullWidth>
							Add to cart
						</Button>
					</Stack>
				</Grid>
			</Grid>
		</Container>
	</div>
}

export default Product
