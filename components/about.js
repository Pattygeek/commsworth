import { Box, Text, Image, Flex } from "@chakra-ui/react";

const About = () => {
	return (
		<>
			<Box w="100%" bg="grey.100" py="16">
				<Box w="80%" mx="auto">
					<Flex my="4">
						<Text
							color="brand.100"
							fontWeight="bold"
							w="25%"
							textAlign="right"
							textTransform="uppercase"
							letterSpacing="0.15em"
							fontSize="xl"
							marginRight={8}
							position="relative"
							mt="1"
							_before={{
								content: '""',
								position: "absolute",
								height: "4px",
								width: "39px",
								backgroundColor: "brand.100",
								left: 20,
								top: "13%",
								// bottom: "-3%",
							}}
						>
							About us
						</Text>
						<Text
							w="75%"
							fontSize="xl"
							fontWeight={600}
							lineHeight="36px"
							color="#575757"
						>
							<span style={{ fontWeight: "bold" }}>TCSRN founded in 2006,</span>{" "}
							is a consulting company that helps organisations to contribute to
							their societal goals of a philanthropic, activist, or charitable
							nature by engaging in or supporting volunteering or
							ethically-oriented practices.
						</Text>
					</Flex>
					<Flex pt="8">
						<Box
							w="35%"
							display="flex"
							flexDir="column"
							justifyContent="flex-end"
						>
							<Image src="/images/story 1.png" h="350px" width="400px" />
							<Image
								src="/images/story 2.png"
								h="215px"
								width="215px"
								ml="auto"
								mr="16"
							/>
						</Box>
						<Box w="65%" mt="6">
							<Text
								color="brand.100"
								fontWeight="bold"
								letterSpacing="0.02em"
								fontSize="2xl"
							>
								Our Story
							</Text>
							<Text
								fontSize="xl"
								fontWeight={600}
								lineHeight="36px"
								color="#3A3A3A"
							>
								The TruContact CSR Nigeria seed was sown long before the
								founder;{" "}
								<span style={{ fontWeight: "bold" }}>Kenneth Egbas</span> would
								even conceive the dream of starting a company. Life didn’t
								always hand him a fair deal. From his early days and upon
								graduation from university he always dreamed of running a
								business based on the idea that outcomes from his business
								activities would promote innovation, equitable distribution of
								resources, justice, reduce wastage and help eradicate poverty in
								Africa. This gave wings to the dream that became TruContact CSR
								Nigeria.
							</Text>
							<Text
								fontSize="xl"
								fontWeight={600}
								lineHeight="36px"
								color="#3A3A3A"
								mt="4"
							>
								TCSRN was founded in 2006, and carried out what many have come
								to acknowledge as trail blazing spadework that led to a rapid
								growth of what has become a vibrant and viable corporate social
								responsibility and sustainability industry in Nigeria, and
								Africa.
							</Text>

							<Flex mt="12">
								<Text
									fontWeight="bold"
									letterSpacing="0.15em"
									fontSize="xl"
									color="brand.200"
									textTransform="uppercase"
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
									Read full story
								</Text>
								<Image
									src="/Arrow.svg"
									ml="4"
									transition="all 0.4s cubic-bezier(0, 0.04, 0.04, 0.18);"
									_hover={{ transform: "translate(10px)" }}
								/>
							</Flex>
						</Box>
					</Flex>
				</Box>
			</Box>
		</>
	);
};
export default About;
