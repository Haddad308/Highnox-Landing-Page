"use client";
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button, DropdownItem, DropdownMenu, Dropdown, DropdownTrigger, Accordion, AccordionItem } from "@nextui-org/react";
import Image from "next/image";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function NabBar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const services = [
        {
            "title": "CRM & Marketing",
            "src": "/crm.svg",
            "page": "/crm"
        },
        {
            "title": "Space Management",
            "src": "/SM .svg",
            "page": "/sm"
        },
        {
            "title": "Conference Management",
            "src": "/cm.svg",
            "page": "/cm"
        },
        {
            "title": "Human Resources",
            "src": "/HR.svg",
            "page": "/hr"
        },
        {
            "title": "Project Management  ",
            "src": "/pm.svg",
            "page": "/pm"
        },
        {
            "title": "Maintenance & Repair",
            "src": "/mr.svg",
            "page": "/mr"
        },
        {
            "title": "Recruitment",
            "src": "/Recruitment 1.svg",
            "page": "/Recruitment"
        },

        {
            "title": "Point of Sale",
            "src": "/POS 1.svg",
            "page": "/POS"
        },
        {
            "title": "Accounting",
            "src": "/Accounting 1.svg",
            "page": "/Accounting"
        },

        {
            "title": "Event",
            "src": "/Event 1.svg",
            "page": "/Event"
        },
        {
            "title": "Survey",
            "src": "/Survey 1.svg",
            "page": "/Survey"
        },
        {
            "title": "Purchase",
            "src": "/purchase 1.svg",
            "page": "/purchase"
        },
        {
            "title": "Ticketing & Helpdesk",
            "src": "/Ticketing system 1.svg",
            "page": "/Ticketing"
        },
        {
            "title": "Website ",
            "src": "/Web 1.svg",
            "page": "/Web"
        },
        {
            "title": "Timesheet",
            "src": "/Timesheet 1.svg",
            "page": "/Timesheet"
        },
        {
            "title": "Intranet",
            "src": "/A.svg",
            "page": "/Intranet"
        },
        {
            "title": "Payroll",
            "src": "/Payroll 1.svg",
            "page": "/Payroll"
        },
        {
            "title": "Dashboards",
            "src": "/c.svg",
            "page": "/Dashboards"
        },
    ];


    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-[#e1f4ff]">
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <Image
                        src={"/logo.svg"}
                        width={150}
                        height={100}
                        alt="logo"
                    />
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="/" className="font-semibold">
                        Hem
                    </Link>
                </NavbarItem>
                <Dropdown>
                    <NavbarItem>
                        <DropdownTrigger>
                            <Button
                                disableRipple
                                className="relative font-semibold p-0 bg-transparent data-[hover=true]:bg-transparent"
                                radius="sm"
                                variant="light"
                            >
                                Tjänster
                                <RiArrowDropDownLine className="absolute top-[18%] left-[75%]" size={30} />
                            </Button>
                        </DropdownTrigger>
                    </NavbarItem>
                    <DropdownMenu
                        aria-label="ACME features"
                        classNames={{ list: "grid grid-cols-3  gap-3 text-center" }} // slots
                        itemClasses={{
                            base: "gap-4",
                        }}
                    >
                        {services.map(({ title, src, page }, index) => (
                            <DropdownItem key={index}   >
                                <Link href={page} className="flex items-center justify-start text-black ">
                                    <Image
                                        src={src}
                                        width={50}
                                        height={50}
                                        alt={title}
                                    />
                                    <h4 className="font-semibold">
                                        {title}
                                    </h4>
                                </Link>
                            </DropdownItem>
                        ))}
                    </DropdownMenu>
                </Dropdown>
                <Dropdown>
                    <NavbarItem>
                        <DropdownTrigger>
                            <Button
                                disableRipple
                                className="relative font-semibold  bg-transparent data-[hover=true]:bg-transparent"
                                radius="sm"
                                variant="light"
                            >
                                Om oss
                                <RiArrowDropDownLine className="absolute top-[18%] left-[75%]" size={30} />
                            </Button>
                        </DropdownTrigger>
                    </NavbarItem>
                    <DropdownMenu
                        aria-label="ACME features"
                        classNames={{ list: "text-center" }} // slots
                        itemClasses={{
                            base: "gap-4",
                        }}
                    >
                        <DropdownItem   >
                            <Link href="/omoss" className="flex items-center text-black ">
                                <h4 className="font-semibold">
                                    om oss
                                </h4>
                            </Link>
                        </DropdownItem>
                        <DropdownItem   >
                            <Link href="/cookies" className="flex items-center text-black ">
                                <h4 className="font-semibold">
                                    cookies
                                </h4>
                            </Link>
                        </DropdownItem>
                        <DropdownItem   >
                            <Link href="/gdpr" className="flex items-center text-black ">
                                <h4 className="font-semibold">
                                    GDPR
                                </h4>
                            </Link>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <NavbarItem>
                    <Link color="foreground" href="/kontakta" className="font-semibold">
                        kontakta oss
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Button as={Link} className="bg-white shadow-md font-bold rounded-3xl" href="http://highnox.site/web/login" variant="flat">
                        Login
                    </Button>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                <NavbarMenuItem >
                    <Link
                        className="w-full text-black"
                        href="/"
                        size="lg"
                    >
                        Home
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem className="flex flex-col items-center" >
                    <Accordion isCompact>
                        <AccordionItem key="1" aria-label="Tjänster" title="Tjänster">
                            {services.map(({ title, src, page }, index) => (
                                <Link key={index} href={page} className="flex items-center justify-start text-black mb-2">
                                    <Image
                                        src={src}
                                        width={50}
                                        height={50}
                                        alt={title}
                                    />
                                    <h4 className="font-semibold">
                                        {title}
                                    </h4>
                                </Link>
                            ))}
                        </AccordionItem>
                        <AccordionItem key="2" aria-label="Om oss" title="Om oss">
                            <Link href="/omoss" className="flex items-center text-black mb-1">
                                <h4 className="font-semibold">
                                    om oss
                                </h4>
                            </Link>
                            <Link href="/cookies" className="flex items-center text-black mb-1">
                                <h4 className="font-semibold">
                                    cookies
                                </h4>
                            </Link>
                            <Link href="/gdpr" className="flex items-center text-black ">
                                <h4 className="font-semibold">
                                    GDPR
                                </h4>
                            </Link>
                        </AccordionItem>
                    </Accordion>
                    <hr className=" w-[95%]  bg-gray-400" />
                    <Link href="/kontakta" className="self-start">
                        <p className="text-black   pl-2" >kontakta</p>
                    </Link>
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    );
}
