import { Stat, StatLabel, StatNumber, Heading, useColorModeValue, Flex } from '@chakra-ui/react'
import Counter from "./Counter";

export default function StatsCard(props) {
  const { size = "lg", description = "", from = 0, to = 0, duration = 0, ...rest } = props;
  return (
    <Stat
      size={size}
      px={{ base: 2, md: 6 }}
      py={5}
      minH={'200px'}
      shadow={'md'}
      border={'2px solid'}
      borderColor={useColorModeValue('primary.100', 'primary.100')}
      rounded={'2xl'}
      props={rest}
    >
      <StatNumber mb={4}>
        <Flex justify={"center"} align={"center"} flexWrap={"wrap"}>
          <Counter from={from} to={to} duration={duration} />
        </Flex>
      </StatNumber>
      <StatLabel>
        <Flex justify={"center"} align={"center"} flexWrap={"wrap"}>
          <Heading size='md' color={useColorModeValue('primary.300', 'primary.300')} textAlign={"center"}>{description}</Heading>
        </Flex>
      </StatLabel>
    </Stat>
  );
}