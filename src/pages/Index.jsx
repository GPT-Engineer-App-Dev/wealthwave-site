import { Container, Box, Heading, Text, VStack, HStack, Link, Divider } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center" py={10}>
          <Heading as="h1" size="2xl">Financial News Today</Heading>
          <Text fontSize="lg" color="gray.500">Your source for the latest financial news and analysis</Text>
        </Box>

        <Divider />

        <Box>
          <Heading as="h2" size="lg" mb={4}>Top Stories</Heading>
          <VStack spacing={4} align="stretch">
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Market Hits Record Highs</Heading>
              <Text mt={4}>The stock market reached new heights today as investors reacted positively to the latest economic data...</Text>
              <Link color="teal.500" href="#">Read more</Link>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Tech Stocks Rally</Heading>
              <Text mt={4}>Technology stocks led the market rally today, with major gains in the software and hardware sectors...</Text>
              <Link color="teal.500" href="#">Read more</Link>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Oil Prices Surge</Heading>
              <Text mt={4}>Oil prices surged today as geopolitical tensions in the Middle East escalated...</Text>
              <Link color="teal.500" href="#">Read more</Link>
            </Box>
          </VStack>
        </Box>

        <Divider />

        <Box>
          <Heading as="h2" size="lg" mb={4}>Latest Articles</Heading>
          <VStack spacing={4} align="stretch">
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Understanding the Bond Market</Heading>
              <Text mt={4}>A comprehensive guide to understanding how the bond market works and its impact on the economy...</Text>
              <Link color="teal.500" href="#">Read more</Link>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Cryptocurrency Trends</Heading>
              <Text mt={4}>An analysis of the latest trends in the cryptocurrency market and what to expect in the coming months...</Text>
              <Link color="teal.500" href="#">Read more</Link>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Real Estate Investment Tips</Heading>
              <Text mt={4}>Expert tips on how to invest in real estate and maximize your returns...</Text>
              <Link color="teal.500" href="#">Read more</Link>
            </Box>
          </VStack>
        </Box>

        <Divider />

        <Box textAlign="center" py={10}>
          <Heading as="h2" size="lg" mb={4}>Follow Us</Heading>
          <HStack spacing={8} justify="center">
            <Link href="#" isExternal>
              <FaTwitter size="24px" />
            </Link>
            <Link href="#" isExternal>
              <FaFacebook size="24px" />
            </Link>
            <Link href="#" isExternal>
              <FaLinkedin size="24px" />
            </Link>
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;