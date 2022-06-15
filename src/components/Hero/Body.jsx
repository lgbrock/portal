import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';

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

const Body = () => {
	return (
		<ThemeProvider theme={theme}>
			<Grid
				container
				component='body'
				sx={{
					height: '100vh',
					width: '175vw',
					display: 'flex',
				}}
			>
				<CssBaseline />
				<Grid
					item
					xs={false}
					sm={6}
					md={7}
					sx={{
						backgroundImage:
							'url(https://www.spherixglobalinsights.com/wp-content/uploads/hero-home.png)',
						backgroundRepeat: 'no-repeat',
						backgroundColor: '#181818',
						backgroundSize: '100vh',
						backgroundPosition: 'center',
					}}
				>
					<Typography
						component='h1'
						variant='h1'
						color='primary.contrastText'
						sx={{
							fontFamily: 'Montserrat, Roboto, Helvetica, Arial, sans-serif',
							fontWeight: 'fontWeightMedium',
							fontSize: '6rem',
							alignSelf: 'center',
							marginTop: '10rem',
							marginBottom: '2rem',
							display: 'flex',
							flexDirection: 'column',
							textAlign: 'center',
						}}
					>
						Portal Page
					</Typography>
				</Grid>
			</Grid>
		</ThemeProvider>
	);
};

export default Body;
