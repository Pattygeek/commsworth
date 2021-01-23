import { Box, Text, Flex, Image } from "@chakra-ui/react";

const Footer = () => {
	return (
		<>
			<Box bg="brand.100" width="100%">
				<Box width="80%" mx="auto" color="white" mt="12" mb="20">
					<Flex justifyContent="space-between" flexDir={["column", "row"]}>
						<Box lineHeight="35px">
							<Text
								textTransform="uppercase"
								fontWeight="bold"
								fontSize="xl"
								pb="3"
								letterSpacing="0.02em"
							>
								Customer Service
							</Text>
							<Text>FAQs</Text>
							<Text>Customer Service</Text>
						</Box>
						<Box lineHeight="35px">
							<Text
								textTransform="uppercase"
								fontWeight="bold"
								fontSize="xl"
								pb="3"
								letterSpacing="0.02em"
							>
								Business
							</Text>
							<Text>Careers</Text>
							<Text>Partner with us</Text>
							<Text>Investor Relations</Text>
						</Box>
						<Box lineHeight="35px">
							<Text
								textTransform="uppercase"
								fontWeight="bold"
								fontSize="xl"
								pb="3"
								letterSpacing="0.02em"
							>
								Company
							</Text>
							<Text>About us</Text>
							<Text>Services</Text>
							<Text>Partners</Text>
							<Text>Customers stories</Text>
							<Text>Contact us</Text>
						</Box>
						<Box textAlign={["left", "right"]} lineHeight="30px">
							<Text textTransform="uppercase">Lagos Nigeria</Text>
							<Text>30, Shakiru Anjorin Street, Road 39, Off</Text>
							<Text>Admiralty Way,Lekki Phase 1, Lekki, Lagos,</Text>
							<Text>Phone: +234 123 4456</Text>
							<Flex justifyContent={["flex-start", "flex-end"]} mt="8">
								<Image src="/twitter.svg" />
								<Image src="/fb.svg" ml="4" />
								<Image src="/linkedin.svg" ml="4" />
							</Flex>
						</Box>
					</Flex>
				</Box>
			</Box>
		</>
	);
};
export default Footer;
