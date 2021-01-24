import { Box, Text, Flex, Image, Grid } from "@chakra-ui/react";

const Services = () => {
	const services = [
		{
			id: 1,
			title: "Consulting",
			image: "consulting.png",
			text:
				"Nothing excites us like an opportunity to help our clients make those key decisions that marries their business ideals and sustainability in a way helps them innovate in the areas of new products, ideas and service that keeps them ahead of competition.",
		},
		{
			id: 2,
			title: "Impact measurement and accessment",
			image: "impact.png",
			text:
				"At TCSRN, we help decision-makers and policy-makers decide what actions they should or should not take to make society more sustainable, and also ensure that plans and activities makes an optimal contribution to sustainable development",
		},
		{
			id: 3,
			title: "Engagement design",
			image: "engagement.png",
			text:
				"Consumers have finite attention spans and limited, as such, gaining their attention as quickly as possible and trying to establish the bonding capital with them is vital. We are adept at devising the surest and the most potent of reaching your target audience and ensuring optimized bonding that build mutual trust.",
		},
		{
			id: 4,
			title: "Strategy",
			image: "strategy.png",
			text:
				"At TCSRN, we provide service that assist our client to set new agendas and reengineer their business models that boost their chances at a sustainable future in which innovation propels their productivity.",
		},
	];
	return (
		<>
			<Box w="100%" bg="white" py="8">
				<Box w="80%" mx="auto">
					<Flex my="8">
						<Text
							color="brand.100"
							fontWeight="bold"
							w="25%"
							textTransform="uppercase"
							letterSpacing="0.15em"
							fontSize="xl"
							position="relative"
							textAlign="right"
							mt="1"
							mr={12}
							_before={{
								content: '""',
								position: "absolute",
								height: "4px",
								width: "39px",
								backgroundColor: "brand.100",
								left: 3,
								top: "20%",
								// bottom: "-3%",
							}}
						>
							Our Services
						</Text>
						<Text
							w="75%"
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
					<Grid templateColumns="repeat(2, 1fr)" gap={6}>
						{services.map((service) => (
							<Box
								borderRadius="5px"
								overflow="hidden"
								key={service.id}
								width="540px"
							>
								<Box
									overflow="hidden"
									cursor="pointer"
									zIndex={-1}
									h="335px"
									mb="-10px"
								>
									<Image
										src={`/images/${service.image}`}
										width="100%"
										className="img-fluid"
									/>
								</Box>

								<Box
									bg="brand.100"
									p="8"
									borderBottomLeftRadius="5px"
									borderBottomRightRadius="5px"
									h="307px"
									zIndex={+5}
									display="flex"
									flexDir="column"
								>
									<Text
										fontWeight="bold"
										fontSize="2xl"
										color="white"
										letterSpacing="0.02em"
									>
										{service.title}
									</Text>
									<Text
										color="white"
										mt="4"
										color="grey.500"
										fontSize="lg"
										fontWeight="medium"
										lineHeight="27px"
									>
										{service.text}
									</Text>
									<Flex justifyContent="flex-end" mt="auto">
										<Text
											fontWeight="semibold"
											color="brand.200"
											fontWeight="bold"
											textTransform="uppercase"
											textAlign="right"
											fontSize="2xl"
											letterSpacing="0.15em"
											mt="auto"
											position="relative"
											_after={{
												content: '""',
												position: "absolute",
												height: "2px",
												width: "220px",
												backgroundColor: "#4CB952",
												left: 0,
												bottom: "-3%",
											}}
										>
											Work with us
										</Text>
										<Image
											src="/Arrow.svg"
											ml="2"
											transition="all 0.4s cubic-bezier(0, 0.04, 0.04, 0.18);"
											_hover={{ transform: "translate(10px)" }}
										/>
									</Flex>
								</Box>
							</Box>
						))}
					</Grid>
				</Box>
			</Box>
		</>
	);
};
export default Services;
