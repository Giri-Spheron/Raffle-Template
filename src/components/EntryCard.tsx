import { Card, Spacer, Flex, Text, Box } from "@chakra-ui/react";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import { RAFFLE_CONTRACT_ADDRESS } from "../const/addresses";

type Props = {
  walletAddress: string;
};

const EntryCard: React.FC<Props> = ({ walletAddress }) => {
  const { contract } = useContract(RAFFLE_CONTRACT_ADDRESS);

  const { data: numberOfEntries, isLoading: numberOfEntriesLoading } =
    useContractRead(contract, "entryCount", [walletAddress]);

  function truncateAddress(address: string) {
    return address.slice(0, 8) + "......." + address.slice(-2);
  }

  return (
    <Flex width='100%' style={{ display: "block" }}>
      {!numberOfEntriesLoading && (
        <Flex
          marginBottom={"0.5em"}
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Text
            fontFamily='Gilroy-Regular'
            borderRadius={"8px"}
            p={2}
            mr={2}
            backgroundColor={"#0057FF0D"}
            color={"#0A0A0A"}
            w={"400px"}
          >
            {walletAddress}
          </Text>
          <Spacer />
          <Text fontFamily='Gilroy-Regular' style={{ marginRight: "1em" }}>
            Entries: {numberOfEntries.toNumber()}
          </Text>
        </Flex>
      )}
    </Flex>
  );
};

export default EntryCard;
