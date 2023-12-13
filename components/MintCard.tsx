import React, { useState } from 'react';
import { Button, Card, CardContent, Typography, Box, CircularProgress } from '@mui/material';
import Image from 'next/image';
// Replace with your NFT details type
type NFTDetails = {
  image: string;
  name: string;
  description: string;
};

type MintCardProps = {
  nft: NFTDetails;
  onMint: () => Promise<void>; // Replace with your minting function
};

const MintCard: React.FC<MintCardProps> = ({ nft, onMint }) => {
  const [isMinting, setIsMinting] = useState(false);
  const [mintSuccess, setMintSuccess] = useState(false);
  const [mintError, setMintError] = useState('');

  const handleMint = async () => {
    try {
      setIsMinting(true);
      setMintSuccess(false);
      setMintError('');

      await onMint();

      setMintSuccess(true);
      setIsMinting(false);
    } catch (error) {
      console.error('Minting failed:', error);
      setMintError('Minting failed. Please try again.');
      setIsMinting(false);
    }
  };

  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Image src={nft.image} alt={nft.name} width={150} height={150} style={{ padding:20 }} />
          <Typography variant="h5" sx={{ padding:3 }}>{nft.name}</Typography>
          <Typography variant="body1" sx={{ padding:2 }}>{nft.description}</Typography>

          {isMinting ? (
            <CircularProgress />
          ) : (
            <Button sx={{ padding:1 }}variant="contained" color="primary" onClick={handleMint} disabled={mintSuccess}>
              {mintSuccess ? 'Minted' : 'Mint NFT'}
            </Button>
          )}

          {mintSuccess && <Typography sx={{ padding:1 }} color="success.main">Minting Successful!</Typography>}
          {mintError && <Typography color="error.main">{mintError}</Typography>}
        </Box>
      </CardContent>
    </Card>
  );
};

export default MintCard;