import { Typography, Box } from "@mui/material"

const styles = {
	filterHeader: {
		marginTop: '16px',
		fontSize: '12px',
		fontWeight: 700,
		lineHeight: '15px',
		letterSpacing: '0em'
	},
	filterOptions: {
		marginLeft: '16px',
		fontWeight: 500,
		fontSize: "12px",
		lineHeight: "14px",
	},
	quest: {
		width: "12px",
		height: "12px",
		background: "#75de73"
	},
	pcvr: {
		width: "12px",
		height: "12px",
		background: "#75de73"
	}
}

const Sidebar = () => {
	return <Box>
		<Typography sx={styles.filterHeader}>Category</Typography>
		<Typography sx={styles.filterOptions}>Full avatar</Typography>
		<Typography sx={styles.filterOptions}>Others</Typography>
		<Typography sx={styles.filterHeader}>Contents</Typography>
		<div style={styles.filterOptions}>
			<input type="checkbox" />
			<label>VRChat(Quest)<span style={styles.quest}></span></label><br />
			<input type="checkbox" />
			<label>VRChat(PCVR)<span style={styles.pcvr}></span></label><br />
			<input type="checkbox" />
			<label>Others</label>
		</div>
		<Typography sx={styles.filterHeader}>Price</Typography>
		<div style={styles.filterOptions}>
			<input type="checkbox" />
			<label>Under $10</label><br />
			<input type="checkbox" />
			<label>$10 to $20</label><br />
			<input type="checkbox" />
			<label>$20 to $30</label><br/>
			<input type="checkbox" />
			<label>$30 to $40</label><br />
			<input type="checkbox" />
			<label>$50 to $60</label><br/>
			<input type="checkbox" />
			<label>$60 to $70</label><br/>
			<input type="checkbox" />
			<label>$70 & above</label><br/>
		</div>
		<Typography sx={styles.filterHeader}>Polygon amount</Typography>
		<div style={styles.filterOptions}>
			<input type="checkbox" />
			<label>Under △7,500</label><br />
			<input type="checkbox" />
			<label>△7,500 to △10,000</label><br />
			<input type="checkbox" />
			<label>△10,000 to △15,000</label><br/>
			<input type="checkbox" />
			<label>△15,000 to △20,000</label><br />
			<input type="checkbox" />
			<label>△20,000 to △32,000</label><br/>
			<input type="checkbox" />
			<label>△32,000 to △70,000</label><br/>
			<input type="checkbox" />
			<label>△70,000 & Above</label><br/>
		</div>
		<Typography sx={styles.filterHeader}>Auto upload support</Typography>
		<div style={styles.filterOptions}>
			<input type="checkbox" />
			<label>Supported</label><br />
			<input type="checkbox" />
			<label>Unsupported</label><br />
		</div>
	</Box>
}

export default Sidebar