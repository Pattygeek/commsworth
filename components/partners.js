import { Box, Text, Flex, Image, Grid } from "@chakra-ui/react";

const Partners = () => {
	const logos = [
		"nestle",
		"firstBank",
		"gtb",
		"lafarge",
		"nestle",
		"firstBank",
		"gtb",
		"lafarge",
		"nestle",
		"firstBank",
		"gtb",
		"lafarge",
	];
	const logoTwos = [
		"act",
		"chevron",
		"dangote",
		"fcmb",
		"act",
		"chevron",
		"dangote",
		"fcmb",
		"act",
		"chevron",
		"dangote",
		"fcmb",
	];
	return (
		<>
			<Box w="100%" bg="grey.100" py="8">
				<Box w="80%" mx="auto">
					<Flex pb="12">
						<Text
							color="brand.100"
							fontWeight="bold"
							w="28%"
							textTransform="uppercase"
							fontSize="xl"
							letterSpacing="0.15em"
						>
							Our Partners
						</Text>
						<Text
							w="72%"
							fontSize="xl"
							fontWeight={600}
							lineHeight="36px"
							color="#575757"
						>
							Our team seek to help your organization navigate this threshold
							that stands between your brands and distinctive innovations, and
							finding your brands inner sanctum.
						</Text>
					</Flex>
					<Grid
						className="logobar"
						mb="6"
						templateColumns="repeat(12, 1fr)"
						gap={7}
						overflowX="scroll"
					>
						{logos.map((logo) => (
							<Box
								w="244px"
								h="126px"
								bg="white"
								display="flex"
								justifyContent="center"
							>
								<Image src={`/images/${logo}.png`} m="auto" />
							</Box>
						))}
					</Grid>
					<Grid
						className="logobar"
						templateColumns="repeat(12, 1fr)"
						gap={7}
						overflowX="scroll"
					>
						{logoTwos.map((logo) => (
							<Box
								w="244px"
								h="126px"
								bg="white"
								display="flex"
								justifyContent="center"
							>
								<Image src={`/images/${logo}.png`} m="auto" />
							</Box>
						))}
					</Grid>
					<Flex mt="16" ml="20">
						<Image src="/images/kelechi.png" />
						<Box ml="4">
							<Text fontWeight="bold" fontSize="2xl" lineHeight="38px">
								“ Working with TruCSR was the best decision i made for my
								business, most people underestimate the importance of Social
								responsibilty in this country, i’m glad we consulted TruCSR ”
							</Text>
							<Text
								color="brand.100"
								mt="8"
								textTransform="uppercase"
								fontWeight="bold"
								fontSize="lg"
							>
								Mr Kelechi Onuacho
							</Text>
							<Text fontSize="md" fontWeight="bold" color="grey.400">
								CEO, Nestle
							</Text>
							<Flex justifyContent="flex-end">
								<Text
									color="brand.200"
									textAlign="right"
									fontWeight="bold"
									fontSize="xl"
									letterSpacing="0.15em"
									position='relative'
									_after={{
										content: '""',
										position: "absolute",
										height: "2px",
										width: "305px",
										backgroundColor: "#4CB952",
										left: 0,
										bottom: "-3%",
									}}
								>
									SEE MORE TESTIMONIALS
								</Text>
								<Image
									src="/Arrow.svg"
									ml="4"
									transition="all 0.4s cubic-bezier(0, 0.04, 0.04, 0.18);"
									_hover={{ marginLeft: "0" }}
								/>
							</Flex>
						</Box>
					</Flex>
				</Box>
			</Box>
		</>
	);
};
export default Partners;
