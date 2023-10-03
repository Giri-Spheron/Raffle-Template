import { Box, Card, Heading, Spinner, Stack, Text } from "@chakra-ui/react";
import {
  ThirdwebNftMedia,
  useContract,
  useContractMetadata,
  useContractRead,
  useNFT,
} from "@thirdweb-dev/react";
import { RAFFLE_CONTRACT_ADDRESS } from "../const/addresses";

import styles from "./styles.module.css";

import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  base: "0px",
  md: "672px",
  "2xl": "1536px",
};

const theme = extendTheme({ breakpoints });

export default function PrizeNFT() {
  const { contract: raffleContract } = useContract(RAFFLE_CONTRACT_ADDRESS);

  const { data: prizeNFTContractAddress } = useContractRead(
    raffleContract,
    "nftAddress"
  );
  const { data: prizeNFTTokenId } = useContractRead(raffleContract, "nftId");

  const { contract: prizeNFTContract } = useContract(prizeNFTContractAddress);

  const {
    data: prizeNFTContractMetadata,
    isLoading: isLoadingPrizeNFTContractMetadata,
  } = useContractMetadata(prizeNFTContract);

  const { data: nft, isLoading: isLoadingNFT } = useNFT(
    prizeNFTContract,
    prizeNFTTokenId
  );

  return (
    <Card p={"3%"} style={{ marginBottom: "5em" }}>
      <Heading style={{ marginBottom: "0.314159em" }}>Prize NFT</Heading>
      {!isLoadingPrizeNFTContractMetadata && !isLoadingNFT ? (
        <Stack spacing={"20px"} textAlign={"center"}>
          <Box bg='#F8F8F8' p={3} borderRadius='2xl'>
            <ThirdwebNftMedia
              metadata={nft?.metadata!}
              height='488px'
              width='488px'
              className={styles.NFT}
            />
          </Box>
          <Box>
            <Text fontSize={"xl"} fontWeight={"bold"}>
              {prizeNFTContractMetadata?.name}
            </Text>
            <Text fontWeight={"normal"}>{nft?.metadata.name}</Text>
          </Box>
        </Stack>
      ) : (
        <Spinner />
      )}
    </Card>
  );
}
