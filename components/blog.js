import {Box, Image, Text, Flex} from '@chakra-ui/react'


const Blog = () => {
    const data = [
        {
            id: 1,
            date: "January 2021",
            title: "2020 at a glance: yearly review",
            image: "blog-1"
        },
        {
            id: 2,
            date: "December 2020",
            title: "Q3 at a glance: quarterly review",
            image: "blog-2"
        },
        {
            id: 3,
            date: "September 2020",
            title: "Q4 at a glance: quarterly review",
            image: "blog-3"
        }
    ]
    return (
        <>
        <Box bg="white" w="80%" mx="auto">
            <Text textAlign="center" color="brand.100" fontWeight="bold">Blog</Text>
            {data.map((dat) => (
                <Flex width="100%" height="411px" key={dat.id}>
                <Image src={`/images/${dat.image}.png`} w="50%"/>
                <Box w="50%" px="4" bg="grey.100">
                    <Text color="grey.200">{dat.date}</Text>
                    <Text color='brand.100'>{dat.title}</Text>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices egestas adipiscing.</Text>
                    <Text textTransform="uppercase" color='brand.200' fontWeight="bold">Read more</Text>
                </Box>
            </Flex>
            ))}
            
        </Box>    
        </>
    )
}
export default Blog;