import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
	return (
		<Typography
			variant='body2'
			s
			color='text.secondary'
			align='center'
			{...props}
		>
			{'Copyright © '}
			<Link color='inherit' href='https://www.spherixglobalinsights.com/'>
				Spherix Global Insights
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

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

const LoginForm = () => {
	const handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		console.log({
			email: data.get('email'),
			password: data.get('password'),
		});
	};

	return (
		<ThemeProvider theme={theme}>
			<Grid
				container
				component='main'
				sx={{
					height: '100vh',
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
						backgroundColor: (t) =>
							t.palette.mode === 'medium'
								? t.palette.grey[50]
								: t.palette.grey[900],
						backgroundSize: 'cover',
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
							marginTop: '2rem',
							display: 'flex',
							flexDirection: 'column',
							textAlign: 'center',
							marginBottom: '2rem',
						}}
					>
						Spherix Global Insights
					</Typography>
					<Typography
						variant='h5'
						textAlign='center'
						color='primary.contrastText'
						sx={{
							fontFamily: 'Montserrat, Roboto, Helvetica, Arial, sans-serif',
							fontWeight: 'fontWeightMedium',
							fontSize: '1.5rem',
							alignSelf: 'center',
							marginTop: '2rem',
							display: 'flex',
							flexDirection: 'column',
							textAlign: 'center',
							marginBottom: '2rem',
						}}
					>
						Hyper-Focused, Independent, Pharma Market Insights
					</Typography>
					<Typography
						variant='h3'
						textAlign='center'
						color='primary.contrastText'
						sx={{
							fontFamily: 'Montserrat, Roboto, Helvetica, Arial, sans-serif',
							fontWeight: 'fontWeightMedium',
							fontSize: '4rem',
							alignSelf: 'center',
							marginTop: '2rem',
							display: 'flex',
							flexDirection: 'column',
							textAlign: 'center',
							marginBottom: '2rem',
						}}
					>
						Invest in Intelligence that Delivers
					</Typography>
				</Grid>
				<Grid item xs={12} sm={6} md={5} component={Paper} elevation={6} square>
					<Box
						sx={{
							my: 8,
							mx: 4,
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							alignContent: 'center',
						}}
					>
						<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
							<LockOutlinedIcon />
						</Avatar>
						<Typography component='h1' variant='h5'>
							Sign in
						</Typography>
						<Box
							component='form'
							noValidate
							onSubmit={handleSubmit}
							sx={{ mt: 1 }}
						>
							<TextField
								margin='normal'
								required
								fullWidth
								id='email'
								label='Email Address'
								name='email'
								autoComplete='email'
								autoFocus
							/>
							<TextField
								margin='normal'
								required
								fullWidth
								name='password'
								label='Password'
								type='password'
								id='password'
								autoComplete='current-password'
							/>
							<FormControlLabel
								control={<Checkbox value='remember' color='primary' />}
								label='Remember me'
							/>
							<Button
								type='submit'
								fullWidth
								variant='contained'
								sx={{ mt: 3, mb: 2 }}
							>
								Sign In
							</Button>
							<Grid container>
								<Grid item xs>
									<Link href='#' variant='body2'>
										Forgot password?
									</Link>
								</Grid>
								<Grid item>
									<Link href='#' variant='body2'>
										{"Don't have an account? Sign Up"}
									</Link>
								</Grid>
							</Grid>
							<Copyright sx={{ mt: 5 }} />
						</Box>
					</Box>
				</Grid>
			</Grid>
		</ThemeProvider>
	);
};

export default LoginForm;
