import { Button, Checkbox, Input, Textarea } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <div className='gird flex px-20 py-10 justify-around' >
            <div className='col-span-1  w-1/2' >
                <h1 className='font-bold text-4xl mb-3' >Get in Touch</h1>
                <p>Our friendly team would love to hear from you.</p>
                <div className=" grid grid-cols-2 gap-3 pt-2" >
                    <Input type="First_Name" variant="bordered" labelPlacement="outside" label="First Name" />
                    <Input type="Last_Name" variant="bordered" labelPlacement="outside" label="Last Name" />
                </div>
                <Input className='pt-2' type="email" variant="bordered" labelPlacement="outside" label="Email" />
                <Input className='pt-2' type="phone" variant="bordered" labelPlacement="outside" label="phone Number" />
                <Textarea
                    variant="bordered"
                    placeholder="Enter your message here"
                    disableAnimation
                    disableAutosize
                    className="py-7"
                />
                <div className='mb-5 flex '>
                    <Checkbox defaultSelected color="primary">  </Checkbox>
                    <p> You agree to our friendly <span className='underline    hover:text-blue-700 transition-all duration-300 cursor-pointer' >privacy policy. </span></p>
                </div>
                <Button color="primary" className='w-full' >
                    Send
                </Button>

            </div>
            <div className='col-span-1 ' >
                <Image
                    src="/Contact.svg"
                    width={400}
                    height={550}
                    alt={"contact"}
                ></Image>
            </div>
        </div>
    )
}

export default page
