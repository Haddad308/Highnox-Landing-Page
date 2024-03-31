import Image from 'next/image'
import Link from 'next/link'

const Service = ({ title, description, src, page }) => {
    return (
        <Link href={page} >
            <div className='bg-white flex flex-col p-7 justify-center items-center shadow-xl rounded-xl gap-4 border-2 hover:border-gray-700 cursor-pointer transition-all duration-300 h-56' >
                <Image
                    src={src}
                    alt="crm"
                    width={100}
                    height={100} />
                <h1 className='font-bold' >{title}</h1>
                <p className='text-center' > {description}
                </p>
            </div>
        </Link>
    )
}

export default Service
