import { Link } from "react-router-dom"
import logo from "../../assets/logo.png"
import classes from './Header.module.css'
import { IconButton, InputAdornment, TextField, Avatar, Box, Badge, Grid } from "@mui/material"
import { SearchOutlined, NotificationsOutlined, ShoppingCartOutlined } from "@mui/icons-material"
import styled from "@emotion/styled"

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
					}} src="data:image/png;base64,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"
					/>
				</Box>
			</Grid>
		</Grid>
	)
}
export default Header
