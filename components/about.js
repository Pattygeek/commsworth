import { Box, Text, Image, Flex } from "@chakra-ui/react";

const About = () => {
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
							About us
						</Text>
						<Text w="80%">
							<span style={{ fontWeight: "bold" }}>TCSRN founded in 2006,</span>{" "}
							is a consulting company that helps organisations to contribute to
							their societal goals of a philanthropic, activist, or charitable
							nature by engaging in or supporting volunteering or
							ethically-oriented practices.
						</Text>
					</Flex>
					<Flex>
						<Box w="35%" display="flex" flexDir="column" justifyContent="flex-end">
							<Image src="/images/story 1.png" h="328px" width="350px" />
							<Image src="/images/story 2.png" h="215px" width="215px" ml="auto" />
						</Box>
						<Box w="65%">
							<Text color="brand.100" fontWeight="bold">
								Our Story
							</Text>
							<Text>
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
								Nigeria. TCSRN was founded in 2006, and carried out what many
								have come to acknowledge as trail blazing spadework that led to
								a rapid growth of what has become a vibrant and viable corporate
								social responsibility and sustainability industry in Nigeria,
								and Africa.
							</Text>
						</Box>
					</Flex>
				</Box>
			</Box>
		</>
	);
};
export default About;
