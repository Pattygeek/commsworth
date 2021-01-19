import { Box, Text, Button, Flex } from "@chakra-ui/react";

const Project = () => {
	const projects = [
		{
			id: 1,
			image: "project-2",
			title: "Mask up Initiaitve by Nestle",
			body:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra pellentesque quam iaculis imperdiet. Mollis nisi ac ultrices amet urna interdum proin lobortis. Lobortis tristique faucibus tellus ac amet.",
		},
		{
			id: 2,
			image: "project-2",
			title: "Save the children initiative powered by Chevron",
			body:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra pellentesque quam iaculis imperdiet. Mollis nisi ac ultrices amet urna interdum proin lobortis. Lobortis tristique faucibus tellus ac amet.",
		},
		{
			id: 3,
			image: "project-3",
			title: "14th Edition of The SERAS CSR Awards.",
			body:
				"The SERAS is an acronym for Sustainability, Entrepreneurship and Responsibility Awards. The Story of The SERAS began in 2007 when the very first edition held at Lagos, Nigeria.",
		},
		{
			id: 4,
			image: "project-3",
			title: "Mask up Initiaitve by Nestle",
			body:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget integer ornare nulla aliquam commodo dolor nec. Egestas faucibus ut lorem lectus vel amet. Vulputate sit vitae sit quam mattis. ",
		},
	];
	return (
		<>
			<Box w="100%">
				<Text color="brand.100" fontWeight="bold" textAlign="center">
					Our projects
				</Text>
				<Flex
					flexWrap="wrap"
					w="100%"
				>
					{projects.map((project) => (
						<Box
							mx="8"
							pt="40"
							px="12"
							height="816px"
							width="527px"
							bgImage={`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/images/${project.image}.png)`}
						>
							<Text color="white" fontSize="5xl" fontWeight="bold">
								{project.title}
							</Text>
							<Text color="white" fontSize="2xl">
								{project.body}
							</Text>
						</Box>
					))}
				</Flex>
				<Button
					bg="brand.200"
					textTransform="uppercase"
					color="white"
					display="flex"
					mx="auto"
				>
					View all projects
				</Button>
			</Box>
		</>
	);
};
export default Project;
