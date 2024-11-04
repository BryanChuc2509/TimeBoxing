import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import './../index.css'
import ButtonLogin from "./ButtonLogin";

function NavBar() {
    const menuItems = [
        "Profile",
        "Dashboard",
        "Activity",
        "Analytics",
        "System",
        "Deployments",
        "My Settings",
        "Team Settings",
        "Help & Feedback",
        "Log Out",
    ];

    return (
        <Navbar disableAnimation isBordered style={{ backgroundColor: "#282727", color: "#fff" }}>
            <NavbarContent justify="start">
                <NavbarMenuToggle />
                <p style={{marginLeft: "20px"}} className="font-bold text-inherit">TimeBoxing</p>
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem className=" lg:flex">
                </NavbarItem>
                <NavbarItem>
                    <Button color="warning" style={{ backgroundColor: "#60D4EA" }}>
                        Sign Up
                    </Button>
                </NavbarItem>
                <NavbarItem>
                    <ButtonLogin />
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className="w-full"
                            color={
                                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
                            }
                            href="#"
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}

export default NavBar;