import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Expertise = () => {
	return (
		<>
			<Card sx={{ maxWidth: 345 }}>
				<CardMedia
					component='img'
					height='140'
					image='https://www.spherixglobalinsights.com/wp-content/uploads/icon-Derm-dark.svg'
					alt='Dermatology'
				/>
				<CardContent>
					<Typography gutterBottom variant='h5' component='div'>
						Dermatology
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						Find syndicated market insights and custom brand analyses through
						our services offered in the dermatology market. Spherix’s
						independent research is conducted by market experts in collaboration
						with our proprietary network of dermatologists, patients, and
						leading KOLs.{' '}
					</Typography>
				</CardContent>
				<CardActions>
					<Button size='small'>Indications</Button>
					<Button size='small'>Learn More</Button>
				</CardActions>
			</Card>

			<Card sx={{ maxWidth: 345 }}>
				<CardMedia
					component='img'
					height='140'
					image='https://www.spherixglobalinsights.com/wp-content/uploads/icon-Gastro-dark.svg'
					alt='Gastroenterology'
				/>
				<CardContent>
					<Typography gutterBottom variant='h5' component='div'>
						Gastroenterology
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						Find syndicated market insights and custom brand analyses through
						our services offered in the gastroenterology market. Spherix’s
						independent research is conducted by our intelligence teams in
						collaboration with our proprietary network of gastroenterologists,
						patients, and leading KOLs.
					</Typography>
				</CardContent>
				<CardActions>
					<Button size='small'>Indications</Button>
					<Button size='small'>Learn More</Button>
				</CardActions>
			</Card>

			<Card sx={{ maxWidth: 345 }}>
				<CardMedia
					component='img'
					height='140'
					image='https://www.spherixglobalinsights.com/wp-content/uploads/icon-Neph-dark.svg'
					alt='Nephrology'
				/>
				<CardContent>
					<Typography gutterBottom variant='h5' component='div'>
						Nephrology
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						Find syndicated market insights and custom brand analyses through
						our services offered in the nephrology market. Spherix’s independent
						research is conducted by our intelligence teams in collaboration
						with our proprietary network of nephrologists, patients, and leading
						KOLs.
					</Typography>
				</CardContent>
				<CardActions>
					<Button size='small'>Indications</Button>
					<Button size='small'>Learn More</Button>
				</CardActions>
			</Card>

			<Card sx={{ maxWidth: 345 }}>
				<CardMedia
					component='img'
					height='140'
					image='https://www.spherixglobalinsights.com/wp-content/uploads/icon-Neuro-dark.svg'
					alt='Neurology'
				/>
				<CardContent>
					<Typography gutterBottom variant='h5' component='div'>
						Neurology
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						Find syndicated market insights and custom brand analyses through
						our services offered in the neurology market. Spherix’s independent
						research is conducted by our intelligence teams in collaboration
						with our proprietary network of neurologists, patients, and leading
						KOLs.
					</Typography>
				</CardContent>
				<CardActions>
					<Button size='small'>Indications</Button>
					<Button size='small'>Learn More</Button>
				</CardActions>
			</Card>

			<Card sx={{ maxWidth: 345 }}>
				<CardMedia
					component='img'
					height='140'
					image='https://www.spherixglobalinsights.com/wp-content/uploads/Ophthalmology-BlackOnWhite.svg'
					alt='Ophthalmology'
				/>
				<CardContent>
					<Typography gutterBottom variant='h5' component='div'>
						Ophthalmology
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						Find syndicated market insights and custom brand analyses through
						our services offered in the ophthalmology market. Spherix’s
						independent research is conducted by our intelligence teams in
						collaboration with our proprietary network of gastroenterologists,
						patients, and leading KOLs.
					</Typography>
				</CardContent>
				<CardActions>
					<Button size='small'>Indications</Button>
					<Button size='small'>Learn More</Button>
				</CardActions>
			</Card>

			<Card sx={{ maxWidth: 345 }}>
				<CardMedia
					component='img'
					height='140'
					image='https://www.spherixglobalinsights.com/wp-content/uploads/icon-Rheuma-dark.svg'
					alt='Rheumatology'
				/>
				<CardContent>
					<Typography gutterBottom variant='h5' component='div'>
						Rheumatology{' '}
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						Find syndicated market insights and custom brand analyses through
						our services offered in the rheumatology market. Spherix’s
						independent research is conducted by our intelligence teams in
						collaboration with our proprietary network of rheumatologists,
						patients, and leading KOLs.
					</Typography>
				</CardContent>
				<CardActions>
					<Button size='small'>Indications</Button>
					<Button size='small'>Learn More</Button>
				</CardActions>
			</Card>
		</>
	);
};

export default Expertise;
