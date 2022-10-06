import { useColorMode, Button, Box } from '@chakra-ui/react'
import { MoonIcon, SunIcon, ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { GoSettings } from 'react-icons/go'

const DarkMode = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    const handleDark = () => {
        if (colorMode !== 'dark') {
            toggleColorMode()
        }
    }

    const handleLight = () => {
        if (colorMode === 'dark') {
            toggleColorMode()
        }
    }

    return (

        <Menu aria-label="Toggle Dark Switch" >
            {({ isOpen }) => (
                <Box>
                    <MenuButton isActive={isOpen} as={Button} fontWeight='400' color='#7E8489' bgColor='rgba(126, 132, 137, 0.1);' fontSize='xs' mt='0.35rem'  >
                        {colorMode === 'dark' ? <MoonIcon /> : <SunIcon />}
                        {colorMode === 'dark' ? 'Dark' : 'Light'}
                        {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                    </MenuButton>
                    <MenuList icon={colorMode === 'dark'} >
                        <MenuItem onClick={handleLight} fontSize='xs'><SunIcon mr='1rem' />Light</MenuItem>
                        <MenuItem onClick={handleDark} fontSize='xs'><MoonIcon mr='1rem' />Dark</MenuItem>
                        <MenuItem fontSize='xs'> <Icon as={GoSettings} mr='1rem' /> System</MenuItem>
                    </MenuList>
                </Box>
            )}
        </Menu>
    )
}

export default DarkMode;
