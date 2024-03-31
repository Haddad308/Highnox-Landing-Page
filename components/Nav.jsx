"use client";
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Avatar } from "@nextui-org/react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { RiArrowDropDownLine } from "react-icons/ri";
import Image from "next/image";

export default function Nav() {

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
            "title": "Intranet",
            "src": "/A.svg",
            "page": "/Intranet"
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
            "title": "Payroll",
            "src": "/Payroll 1.svg",
            "page": "/Payroll"
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
            "title": "Dashboards",
            "src": "/c.svg",
            "page": "/Dashboards"
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
        }
    ];

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
                                <RiArrowDropDownLine className="absolute top-2 left-[60px]" size={30} />
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
                            <DropdownItem key={index}  >
                                <Link href={page} className="flex items-center text-black">
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
                <NavbarItem>
                    <Link color="foreground" href="/omoss">
                        Om oss
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="/kontakta">
                        kontakta oss
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Button as={Link} className="bg-white shadow-md font-semibold rounded-3xl" href="http://highnox.site/web/login" variant="flat">
                        Login
                    </Button>
                </NavbarItem>
            </NavbarContent>

        </Navbar>
    );
}
