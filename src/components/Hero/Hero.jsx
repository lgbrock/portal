import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
	palette: {
		primary: {
			main: '#8CC7EC',
			contrastText: '#fff',
		},
		secondary: {
			main: '#181818',
			contrastText: '#fff',
		},
	},
	typography: {
		fontFamily: '"Montserrat","Roboto", "Helvetica", "Arial", sans-serif',
		// fontSize: 12,
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontWeightMedium: 500,
		fontWeightBold: 700,
	},
});

const Hero = () => {
	return (
		<ThemeProvider theme={theme}>
			<Typography
				variant='h5'
				textAlign='center'
				color='primary.secondary'
				sx={{
					fontFamily: 'Montserrat, Roboto, Helvetica, Arial, sans-serif',
					fontWeight: 'fontWeightMedium',
					alignSelf: 'center',
					marginTop: '1rem',
					display: 'flex',
					flexDirection: 'column',
					textAlign: 'center',
				}}
			>
				News/New Releases/Recently Viewed
			</Typography>
			<Box
				sx={{
					display: 'flex',
					flexWrap: 'wrap',
					'& > :not(style)': {
						m: '1rem',
						width: 926,
						height: 360,
					},
					justifyContent: 'center',
					alignItems: 'center',
					marginTop: '2rem',
				}}
			>
				<Paper
					elevation={3}
					sx={{
						backgroundColor: '#f5f5f5',
						width: '100%',
						height: '100%',
						display: 'flex',
					}}
				/>
			</Box>
			<Typography
				variant='h6'
				textAlign='center'
				color='primary.secondary'
				sx={{
					fontFamily: 'Montserrat, Roboto, Helvetica, Arial, sans-serif',
					fontWeight: 'fontWeightMedium',
					alignSelf: 'center',
					marginTop: '.5rem',
					display: 'flex',
					flexDirection: 'column',
					textAlign: 'center',
					marginBottom: '.5rem',
				}}
			>
				News/New Releases/Recently Viewed
			</Typography>
			<Box
				sx={{
					display: 'flex',
					flexWrap: 'wrap',
					'& > :not(style)': {
						m: '1rem',
						width: 514,
						height: 173,
					},
					justifyContent: 'center',
					alignItems: 'center',
					marginTop: '.5rem',
				}}
			>
				<Paper
					elevation={3}
					sx={{
						backgroundColor: '#f5f5f5',
						width: '100%',
						height: '100%',
						display: 'flex',
					}}
				/>
			</Box>
		</ThemeProvider>
	);
};

export default Hero;
