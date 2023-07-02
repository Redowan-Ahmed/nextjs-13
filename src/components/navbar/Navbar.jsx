import Link from "next/link"

const links = [
    {
        id: 1,
        title: 'Home',
        url: '/',
    },
    {
        id: 2,
        title: 'About Us',
        url: '/about',
    },
    {
        id: 3,
        title: 'Blogs',
        url: '/blog',
    },
    {
        id: 4,
        title: 'Category',
        url: '/blog/category',
    },
]

const Navbar = () => {
    return (
        <div className="flex justify-between py-4">
            <Link href="/">
                <div className="font-bold text-2xl">Logo</div>
            </Link>
            <div>
                {
                    links.map((link, index) => (
                        <Link key={link.id} href={link.url} className="px-3 text-justify text-lg hover:font-bold"> {link.title} </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Navbar