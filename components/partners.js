import { Box, Text, Flex, Image, Grid } from "@chakra-ui/react";

const Partners = () => {
	const logos = [
		"nestle",
		"firstBank",
		"gtb",
		"lafarge",
		"act",
		"chevron",
		"dangote",
		"fcmb",
	];
	return (
		<>
			<Box w="100%" bg="grey.100" py="8">
				<Box w="80%" mx="auto">
					<Flex>
						<Text
							color="brand.100"
							fontWeight="bold"
							w="20%"
							textTransform="uppercase"
						>
							Our Partners
						</Text>
						<Text w="80%">
							Our team seek to help your organization navigate this threshold
							that stands between your brands and distinctive innovations, and
							finding your brands inner sanctum.
						</Text>
					</Flex>
					<Grid templateColumns="repeat(4, 1fr)" gap={6}>
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
					<Flex>
						<Image src="/images/kelechi.png" />
						<Box>
							<Text>
								“ Working with TruCSR was the best decision i made for my
								business, most people underestimate the importance of Social
								responsibilty in this country, i’m glad we consulted TruCSR ”
							</Text>
							<Text color="brand.100" textTransform="uppercase">
								Mr Kelechi Onuacho
							</Text>
							<Text>CEO, Nestle</Text>
							<Text color="brand.200" textAlign="right">SEE MORE TESTIMONIALS</Text>
						</Box>
					</Flex>
				</Box>
			</Box>
		</>
	);
};
export default Partners;
