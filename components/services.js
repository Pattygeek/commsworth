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
					<Flex>
						<Text
							color="brand.100"
							fontWeight="bold"
							w="20%"
							textTransform="uppercase"
						>
							Our Services
						</Text>
						<Text w="80%">
							Our team seek to help your organization navigate this threshold
							that stands between your brands and distinctive innovations, and
							finding your brands inner sanctum.
						</Text>
					</Flex>
					<Grid templateColumns="repeat(2, 1fr)" gap={6}>
						{services.map((service) => (
							<Box borderRadius="5px" key={service.id} width="540px">
								<Image src={`/images/${service.image}`} h="335px" />
								<Box
									bg="brand.100"
									p="6"
									borderBottomLeftRadius="5px"
									borderBottomRightRadius="5px"
									h="307px"
								>
									<Text fontWeight="bold" fontSize="2xl" color="white">
										{service.title}
									</Text>
									<Text color="white">{service.text}</Text>
									<Text
										fontWeight="semibold"
										color="brand.200"
										fontWeight="bold"
										textTransform="uppercase"
										textAlign="right"
									>
										Work with us
									</Text>
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
