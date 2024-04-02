
const FeatureWrapper = ({ children }) => {
    return (
        <div className='p-10 md:px-20 flex flex-col gap-y-20' >
            <div className='grid grid-cols-1 md:grid-cols-2 gap-14' >
                {children}
            </div>
        </div>
    )
}

export default FeatureWrapper
