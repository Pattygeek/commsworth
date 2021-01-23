import { Box, Image, Text, Flex } from "@chakra-ui/react";

const Blog = () => {
	const data = [
		{
			id: 1,
			date: "January 2021",
			title: "2020 at a glance: yearly review",
			image: "blog-1",
		},
		{
			id: 2,
			date: "December 2020",
			title: "Q3 at a glance: quarterly review",
			image: "blog-2",
		},
		{
			id: 3,
			date: "September 2020",
			title: "Q4 at a glance: quarterly review",
			image: "blog-3",
		},
	];
	return (
		<>
			<Box bg="white" w="80%" mx="auto" py="12">
				<Text
					textAlign="center"
					color="brand.100"
					letterSpacing="0.15em"
					fontWeight="bold"
					fontSizxe="xl"
					textTransform="uppercase"
					pb="8"
				>
					Blog
				</Text>
				{data.map((dat) => (
					<Flex width="100%" height="411px" key={dat.id} mb="10">
						<Image src={`/images/${dat.image}.png`} w="50%" />
						<Box w="50%" px="4" bg="grey.100" py="4" px="10">
							<Text color="grey.200" fontWeight="bold" fontSize="sm">
								{dat.date}
							</Text>
							<Text
								color="brand.100"
								fontWeight="bold"
								fontSize="36px"
								my="8"
								lineHeight="50px"
							>
								{dat.title}
							</Text>
							<Text
								fontSize="xl"
								mb="8"
								lineHeight="34px"
								fontWeight={600}
								color="grey.300"
							>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Ultrices egestas adipiscing.
							</Text>
							<Flex>
								<Text
									textTransform="uppercase"
									color="brand.200"
									fontWeight="bold"
									fontSize="xl"
									// textDecoration='underline'
									letterSpacing="0.15em"
									position="relative"
									width="auto"
									_after={{
										content: '""',
										position: "absolute",
										height: "2px",
										width: "140px",
										backgroundColor: "#4CB952",
										left: 0,
										bottom: "-3%",
									}}
								>
									Read more
								</Text>
								<Image
									src="/Arrow.svg"
									ml="4"
									transition="all 0.4s cubic-bezier(0, 0.04, 0.04, 0.18);"
									_hover={{ marginLeft: "2" }}
								/>
							</Flex>
						</Box>
					</Flex>
				))}
			</Box>
		</>
	);
};
export default Blog;
