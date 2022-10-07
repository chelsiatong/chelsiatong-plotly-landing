import { useColorMode, Button, Box } from '@chakra-ui/react'
import { MoonIcon, SunIcon, ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { GoSettings } from 'react-icons/go'

const DarkMode = (props) => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (

        <Menu aria-label="Toggle Dark Switch">
            {({ isOpen }) => (
                <Box>
                    <MenuButton isActive={isOpen} as={Button} fontWeight='400' color='#7E8489' bgColor='rgba(126, 132, 137, 0.1);' fontSize='xs' mt='0.35rem'  >
                        {colorMode === 'dark' ? <MoonIcon /> : <SunIcon />}
                        {colorMode === 'dark' ? 'Dark' : 'Light'}
                        {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                    </MenuButton>
                    <MenuList zIndex={{ xl: '9999' }} icon={colorMode === 'dark'} >
                        <MenuItem onClick={props.handleLight} fontSize='xs'><SunIcon mr='1rem' />Light</MenuItem>
                        <MenuItem onClick={props.handleDark} fontSize='xs'><MoonIcon mr='1rem' />Dark</MenuItem>
                        <MenuItem onClick={props.defaultMode} fontSize='xs'> <Icon as={GoSettings} mr='1rem' /> System</MenuItem>
                    </MenuList>
                </Box>
            )}
        </Menu>
    )
}

export default DarkMode;
