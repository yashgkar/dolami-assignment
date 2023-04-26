import { Link } from "react-router-dom"
import logo from "../../assets/logo.png"
import classes from './Header.module.css'
import { IconButton, InputAdornment, TextField, Avatar, Box, Badge, Grid } from "@mui/material"
import { SearchOutlined, NotificationsOutlined, ShoppingCartOutlined } from "@mui/icons-material"
import styled from "@emotion/styled"
import userAvatar from "../../assets/Avatar Pictures/avatar (14).png"

const StyledIconButton = styled(IconButton)({
	borderRadius: "5px", background: "#34353A"
})

const Header = () => {
	return (
		<Grid container sx={{
			backgroundColor: "#591e87",
			height: "67px",
			alignContent: "center",
			pr: 2,
			pl: 2
		}}>
			<Grid item lg={2} sx={{ alignSelf: "center" }}>
				<img className={classes.appLogo} src={logo} alt="logo" />
			</Grid>
			<Grid item lg={3} sx={{ alignSelf: "center" }} >
				<Link to={'/'} className="route-link">Go to Marketplace</Link>
			</Grid>
			<Grid item lg={5} sx={{ alignSelf: "center" }}>
				<TextField size="small" variant="outlined" sx={{ bgcolor: "white", borderRadius: "5px" }} fullWidth={true} InputProps={{
					endAdornment: <InputAdornment position="end">
						<IconButton size="small">
							<SearchOutlined />
						</IconButton>
					</InputAdornment>
				}} />
			</Grid>
			<Grid item lg={2} sx={{ alignSelf: "center" }}>
				<Box className="avatars" sx={{ display: "flex", justifyContent: "flex-end", gap: "24px" }}>
					<Badge badgeContent={3} color="error" >
						<StyledIconButton color="default">
							<NotificationsOutlined sx={{ color: "white" }} />
						</StyledIconButton>
					</Badge>
					<Badge badgeContent={1} color="error" >
						<StyledIconButton color="default" >
							<ShoppingCartOutlined sx={{ color: "white" }} />
						</StyledIconButton>
					</Badge>
					<Avatar sx={{
						borderRadius: '5px'
					}} src={userAvatar}
					/>
				</Box>
			</Grid>
		</Grid>
	)
}
export default Header
