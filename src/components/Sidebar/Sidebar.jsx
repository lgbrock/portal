import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const Sidebar = () => {
	return (
		<>
			<Box
				sx={{
					display: 'flex',
					flexWrap: 'wrap',
					'& > :not(style)': {
						m: '3rem',
						width: 214,
						height: 514,
					},
				}}
			>
				<Paper
					elevation={3}
					sx={{
						backgroundColor: '#f5f5f5',
						width: '100%',
						height: '100%',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				/>
			</Box>
		</>
	);
};

export default Sidebar;
