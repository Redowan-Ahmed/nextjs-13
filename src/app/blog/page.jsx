import Image from "next/image"

async function getData() {
    const res = await fetch('http://127.0.0.1:8000/api/blogs/', { next: { revalidate: 10 } })

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()

}

const Blogs = async () => {
    const datas = await getData()
    return (
        <div>
            <h1 className="text-center text-4xl font-bold py-5">Blogs</h1>
            <div className="">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {
                            datas.data.blogs.map((data, index) => (

                                <div key={data.id} className="group relative">
                                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                    {
                                        data.image ? ( <Image src={`http://127.0.0.1:8000${data.image}`} alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full" width={500} height={500} ></Image> ):(<h5 className="flex align-middle items-center align-middle h-full justify-center text-gray-600 font-bold"> No image </h5>)
                                    }
                                    </div>
                                    <div className="mt-4 ">
                                        <div>
                                            <h3 className="text-lg">
                                                <a href="#">
                                                    <span aria-hidden="true" className="absolute inset-0"></span>
                                                    {data.title}
                                                </a>
                                            </h3>
                                            <p className="mt-1 text-sm text-gray-300">{data.owner.id}</p>
                                        </div>
                                        <div className="flex gap-2 align-middle items-center my-2 ">
                                        </div>
                                    </div>
                                </div>


                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogs