import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";

export default function Nav() {
    return (
        <Navbar shouldHideOnScroll className="bg-[#e1f4ff]" >
            <NavbarBrand>
                <p className="font-bold text-inherit">Highnox</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="/">
                        Hem
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Tjänster
                    </Link>
                </NavbarItem>
                
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Om oss
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        kontakta oss
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Button as={Link} className="bg-white shadow-md font-semibold rounded-3xl" href="#" variant="flat">
                        Login
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
