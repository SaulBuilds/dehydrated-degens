import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Container, Typography, Grid, Card, CardContent, CardActionArea, Box } from '@mui/material';

const Home: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <Head>
        <title>Dehydrated Degens</title>
        <meta content="the Employable Dev: Solidity and React Hooks" name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <Box sx={{ my: 4, textAlign: 'center' }}>
        <ConnectButton />

        <Typography variant="h5" component="p" sx={{ mt: 2 }}>
          I round tripped 20 bored apes...
        </Typography>

        {/* Grid container for centering the card */}
        <Grid container justifyContent="center" spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} sm={8} md={6} lg={4}>
            <CardActionArea href="/mint">
              <Card>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    Now I have to dev to learn how to pay my bills.
                  </Typography>
                  <Typography variant="body2">
                    Drink Water... Do not buy Dehydrated Degens.
                  </Typography>
                </CardContent>
              </Card>
            </CardActionArea>
          </Grid>
        </Grid>
      </Box>

      <Box component="footer" sx={{ py: 3, textAlign: 'center' }}>
        <Link href="https://x.com/saul_loveman" target="_blank" rel="noopener noreferrer">
          Made with ❤️ by your fren @Saul_Loveman
        </Link>
      </Box>
    </Container>
  );
};

export default Home;
