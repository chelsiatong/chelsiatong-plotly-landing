import { useColorMode, Button, IconButton } from '@chakra-ui/react'
import { MoonIcon, SunIcon, ChevronDownIcon } from '@chakra-ui/icons'
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/icons'
import { System } from '../assets/logo/system-icon.svg'

const DarkMode = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        // <Button aria-label="Toggle Dark Switch"
        //     icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
        //     onClick={toggleColorMode} >
        //     click me
        // </Button>

        <Menu aria-label="Toggle Dark Switch" >
            <MenuButton as={Button} mt='0.35rem' rightIcon={<ChevronDownIcon />} >
                <SunIcon />  Light
            </MenuButton>
            <MenuList icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />} >
                <MenuItem onClick={toggleColorMode} > <SunIcon mr='1rem' />Light</MenuItem>
                <MenuItem onClick={toggleColorMode}> <MoonIcon mr='1rem' />Dark</MenuItem>
                <MenuItem> <Icon as={System} mr='1rem' /> System</MenuItem>
            </MenuList>
        </Menu>
    )
}

export default DarkMode;
