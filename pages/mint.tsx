import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Container, Typography, Grid, Card, CardContent, CardActionArea, Box } from '@mui/material';
import MintCard from '../components/MintCard';

const Mint: NextPage = () => {
  // Example NFT details - replace with actual data
  const nftDetails = {
    image: '/logo.svg', // Replace with the actual image path
    name: 'theEmployableDevBadge',
    description: 'Might help you learn something valuable enabling your broke ass to get a job',
  };

  // Example mint function - replace with actual minting logic
  const handleMint = async () => {
    console.log('Minting NFT...');
    // Add your minting logic here
  };

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
          I bought 70 moonbirds at the top why not...
        </Typography>

        <Grid container justifyContent="center" spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} sm={8} md={6} lg={4}>
            <Card>
              <CardContent>
                <MintCard nft={nftDetails} onMint={handleMint} />
              </CardContent>
            </Card>
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

export default Mint;