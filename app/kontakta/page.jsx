import { Button, Checkbox, Input, Textarea } from '@nextui-org/react'
import { FaPhone } from "react-icons/fa6";
import { RiContactsBook2Line } from "react-icons/ri";
import { IoLocationSharp } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
import { FaEarthAmericas } from "react-icons/fa6";
const page = () => {
    return (
        <div className="p-5  grid md:grid-cols-5" >
            <div className="bg-white rounded-lg p-5 flex flex-col gap-3 col-span-3 " >
                <h1 className='font-bold text-4xl mb-3' >Get in Touch</h1>
                <p>Our friendly team would love to hear from you.</p>
                <div className=" grid md:grid-cols-2 gap-3 pt-2" >
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
            <div className="hidden  bg-primary rounded-lg  rounded-l-none p-5 md:flex flex-col gap-3 col-span-2" >
                <h1 className="text-white text-xl font-semibold flex items-center gap-2"  ><RiContactsBook2Line size={25} className="pt-1" />Contact Us</h1>
                <p className="text-white" >In order to get in touch with us via the following methods:</p>
                <div className="flex flex-col pt-7 gap-7">
                    <div className="flex items-center gap-2" >
                        <div className="border-2 bg-white shadow-md w-10 h-10 flex items-center justify-center rounded-full" >
                            <IoLocationSharp className="text-primary" />
                        </div>
                        < p className="text-white"> Address: <span className="text-gray-200" >Strandvägen 7, 114 56 Stockholm</span></p>
                    </div>
                    <div className="flex items-center gap-2" >
                        <div className="border-2 bg-white shadow-md w-10 h-10 flex items-center justify-center rounded-full" >
                            <FaPhone className="text-primary" />
                        </div>
                        < p className="text-white"> Phone: <span className="text-gray-200" >+46 8 400 307 00</span></p>
                    </div>
                    <div className="flex items-center gap-2" >
                        <div className="border-2 bg-white shadow-md w-10 h-10 flex items-center justify-center rounded-full" >
                            <FaTelegramPlane className="text-primary" />
                        </div>
                        < p className="text-white"> Email: <span className="text-gray-200" >Support@highnox.com</span></p>
                    </div>
                    <div className="flex items-center gap-2" >
                        <div className="border-2 bg-white shadow-md w-10 h-10 flex items-center justify-center rounded-full" >
                            <FaEarthAmericas className="text-primary" />
                        </div>
                        < p className="text-white"> Website: <span className="text-gray-200" >www.highnox.com</span></p>
                    </div>
                </div>

            </div>
        </div>
        // <div className='gird flex px-20 py-10 justify-around' >
        //     <div className='col-span-1  w-1/2' >
        //         <h1 className='font-bold text-4xl mb-3' >Get in Touch</h1>
        //         <p>Our friendly team would love to hear from you.</p>
        //         <div className=" grid grid-cols-2 gap-3 pt-2" >
        //             <Input type="First_Name" variant="bordered" labelPlacement="outside" label="First Name" />
        //             <Input type="Last_Name" variant="bordered" labelPlacement="outside" label="Last Name" />
        //         </div>
        //         <Input className='pt-2' type="email" variant="bordered" labelPlacement="outside" label="Email" />
        //         <Input className='pt-2' type="phone" variant="bordered" labelPlacement="outside" label="phone Number" />
        //         <Textarea
        //             variant="bordered"
        //             placeholder="Enter your message here"
        //             disableAnimation
        //             disableAutosize
        //             className="py-7"
        //         />
        //         <div className='mb-5 flex '>
        //             <Checkbox defaultSelected color="primary">  </Checkbox>
        //             <p> You agree to our friendly <span className='underline    hover:text-blue-700 transition-all duration-300 cursor-pointer' >privacy policy. </span></p>
        //         </div>
        //         <Button color="primary" className='w-full' >
        //             Send
        //         </Button>

        //     </div>
        //     <div className='col-span-1 ' >
        //         <Image
        //             src="/Contact.svg"
        //             width={400}
        //             height={550}
        //             alt={"contact"}
        //         ></Image>
        //     </div>
        // </div>
    )
}

export default page
