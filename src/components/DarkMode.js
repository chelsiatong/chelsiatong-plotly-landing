import { useColorMode, Button } from '@chakra-ui/react'
import { MoonIcon, SunIcon, ChevronDownIcon } from '@chakra-ui/icons'
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/icons'
import { System } from '../assets/logo/system-icon.svg'


const DarkMode = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    // const [isActive, setIsActive] = useState(false);

    // const handleClick = () => {
    //     setIsActive(!isActive);
    // };


    return (

        <Menu aria-label="Toggle Dark Switch" >
            <MenuButton aria-label="Toggle Arrow" as={Button} fontWeight='400' color='#7E8489' bgColor='rgba(126, 132, 137, 0.1);' fontSize='xs' mt='0.35rem' >
                <SunIcon />  Light
                <ChevronDownIcon ml='0.5rem' />
            </MenuButton>
            <MenuList icon={colorMode === 'dark'} >
                <MenuItem onClick={toggleColorMode} fontSize='xs'><SunIcon mr='1rem' />Light</MenuItem>
                <MenuItem onClick={toggleColorMode} fontSize='xs'><MoonIcon mr='1rem' />Dark</MenuItem>
                <MenuItem fontSize='xs'> <Icon as={System} mr='1rem' /> System</MenuItem>
            </MenuList>
        </Menu>

    )
}

export default DarkMode;
