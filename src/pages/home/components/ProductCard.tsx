import { memo, useCallback, useEffect, useState } from "react"
import { Box, Rating, Typography, Stack, IconButton, Avatar } from "@mui/material"
import styled from "@emotion/styled"
import { useNavigate } from "react-router-dom"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined'
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined'

import AvatarIcon from "../../../assets/Avatar Pictures/avatar (1).png"

const ImageContainer = styled(Box)({
	'.avatar-img': {
		aspectRatio: "1",
		borderRadius: "7px",
		width: "100%"
	},
	position: 'relative',
	'button': {
		position: "absolute",
		right: 10, top: 9,
		background: "#4c45f6",
		border: "none",
		outline: 'none',
		borderRadius: "5px",
		height: "23px",
		color: "white",
		display: 'flex',
		alignItems: "center"
	},
	width: "100%",
})

const ProductCardContainer = styled(Box)({
	width: "100%"
})

const styles = {
	title: {
		fontSize: '16px',
		fontWeight: '500',
		lineHeight: "19px",
		letterSpacing: '0em',
		margin: 0
	},
	rating: {
		fontSize: '11px',
		fontWeight: '500',
		lineHeight: '13px',
		letterSpacing: '0em',
		color: '#6A6A6A',
	},
	creatorName: {
		fontSize: '10px',
		fontWeight: '500',
		lineHeight: '12px',
		letterSpacing: '0em',
		color: '#6A6A6A',
		marginLeft: '10px'
	},
	currencyFontStyles: {
		fontSize: '10px',
		fontWeight: 500,
		lineHeight: '12px',
		letterSpacing: '0em'
	},
	priceStyles: {
		fontSize: '20px',
		fontWeight: 500,
		lineHeight: '24px',
		letterSpacing: '0em'
	},
	pcIconStyles: {
		width: '17px',
		height: '17px',
		background: '#3CD4F5',
		borderRadius: "50%"
	},
	platformTextStyles: {
		fontSize: '11px',
		fontWeight: '500',
		lineHeight: '13px',
		letterSpacing: '0em',
		color: '#000000',
	}
}

interface IProps {
	itemId: number
}

const ProductCard = ({ itemId }: IProps) => {
	const [image, setImage] = useState<any>('')
	const navigate = useNavigate()

	const handleCardClick = useCallback(() => {
		navigate(`/${itemId}`)
	}, [itemId, navigate])

	useEffect(() => {
		async function getImage() {
			const img = await import(`../../../assets/Avatar Pictures/avatar (${itemId}).png`)
			setImage(img.default)
		}
		getImage()
	}, [itemId])

	return <ProductCardContainer onClick={handleCardClick}>
		<ImageContainer>
			<img className="avatar-img" src={image} alt="avatar 1" />
			<button>
				<AddShoppingCartOutlinedIcon sx={{ height: "14px" }} /> Add
			</button>
		</ImageContainer>
		<Typography sx={styles.title}>Avatar name “Avatown” -nice original avatar of Avatown</Typography>
		<Stack direction="row" alignItems="center" justifyContent="space-between">
			<Rating name="no-value" value={3} readOnly size="small" />
			<Typography sx={styles.rating}>4.7 & 100Likes</Typography>
			<IconButton size="small">
				<FavoriteBorderIcon sx={{ color: "red" }} />
			</IconButton>
		</Stack>
		<Stack direction="row" alignItems="center">
			<Avatar src={AvatarIcon}
				sx={{ width: 21, height: 21 }} />
			<Typography sx={styles.creatorName}>Avatar Joes</Typography>
		</Stack>
		<Typography sx={styles.priceStyles}>
			<span style={styles.currencyFontStyles}>$</span>&nbsp;
			50.00
		</Typography>
		<Stack direction="row" alignItems="center">
			<span style={styles.pcIconStyles}></span>&nbsp;
			<Typography sx={styles.platformTextStyles}>PC Only</Typography>
		</Stack>
		<Stack direction="row" justifyContent="space-between" alignItems="center">
			<Typography sx={styles.platformTextStyles}>
				Auto upload service ready, you can use this avatar within 24 hours.
			</Typography>
			<IconButton size="small">
				<IosShareOutlinedIcon />
			</IconButton>
		</Stack>
	</ProductCardContainer>
}

export default memo(ProductCard)