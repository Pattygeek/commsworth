import {Box, Text} from '@chakra-ui/react';
import Navbar from './navbar'

const Header = () => {
    return (
			<>
				<Box
					h="100vh"
                    w="100%"
					bg="radial-gradient(77.19% 288.38% at 77.19% 45.23%, rgba(19, 13, 37, 0.41) 5.02%, rgba(19, 13, 37, 0.88) 33.62%, #130D25 69.39%, #130D25 100%), url(/images/header-1.png)"
				>
					<Navbar />
					<Box w="85%" mx="auto">
						<Box w="50%">
							<Text color="white" fontSize="64px" my="8" lineHeight="72px" fontWeight={600}>
								We are in the business of <span style={{fontStyle: "italic"}}>sustainability</span>
							</Text>
							<Text color="white" mt="4" fontWeight='bold' fontSize='xl' lineHeight="36px">
								<span style={{ fontWeight: "bold" }}></span>TCSRN founded in
								2006, is a consulting company that helps organisations to
								contribute to their societal goals of a philanthropic, activist,
								or charitable nature by engaging in or supporting volunteering
								or ethically-oriented practices.
							</Text>
							<Text
								fontWeight="bold"
								textTransform="uppercase"
                                color="brand.200"
                                borderBottom="4px"
                                fontSize="20px"
                                width="auto"
                                mt='8'
							>
								Explore Site
							</Text>
						</Box>
					</Box>
				</Box>
			</>
		);
}
export default Header;