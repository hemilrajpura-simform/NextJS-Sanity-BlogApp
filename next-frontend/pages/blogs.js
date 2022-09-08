import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { createClient } from 'next-sanity'
import PortableText from "react-portable-text"
import imageUrlBuilder from '@sanity/image-url'
import { useEffect } from 'react'
import Link from 'next/link'
import Nav from '../components/Nav'

const Blogs = ({blogs}) => {
    const client = createClient({
        projectId: "qcjgjnc6",
        dataset: "production",
        useCdn: false
    });
    const builder = imageUrlBuilder(client)
    useEffect(() => {
        console.log()
    }, [])
    return (
        <div>
            <Nav />
            <div className="bg-grey-50" id="blog">
                <div className="container mx-auto py-16 md:py-20">
                    <h2
                        className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl"
                    >
                        I also like to write
                    </h2>
                    <h4
                        className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl"
                    >
                        Check out my latest posts!
                    </h4>
                    <div
                        className="mx-auto grid w-full grid-cols-1 gap-6 pt-12 sm:w-3/4 lg:w-full lg:grid-cols-3 xl:gap-10"
                    >

                        {blogs.map((blogIitem) => (
                            <>
                                <Link key={blogIitem.slug.current}
                                    href={"/blog/" + blogIitem.slug.current} className="shadow cursor-pointer">
                                    <div><div
                                        style={{ backgroundImage: `url(${builder.image(blogIitem      .blogimage).width(200).url() || '/assets/img / bg - hero.jpg'})` }}
                                        className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72"
                                    >
                                        <span
                                            className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"
                                        ></span>
                                        <span
                                            className="text-white cursor-pointer bg-[#ad9df5] border-[6f5dbf] absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 px-6 py-2 text-center font-body text-sm font-bold uppercase md:text-base"
                                        >Read More</span
                                        >
                                    </div>
                                        <div className="bg-white py-6 px-5 xl:py-8">
                                            <span className="block font-body text-lg font-semibold text-black"
                                            >{blogIitem.title}</span>
                                            <span className="block pt-2 font-body text-grey-20"
                                            > {blogIitem.metadesc}
                                                {/* <PortableText
                            // Pass in block content straight from Sanity.io
                            content={blogs[0].content}
                            projectId="qcjgjnc6"
                            dataset="production"
                            // Optionally override marks, decorators, blocks, etc. in a flat
                            // structure without doing any gymnastics
                            serializers={{
                              h1: (props) => <h1 style={{ color: "red" }} {...props} />,
                              li: ({ children }) => <li className="special-list-item">{children}</li>

                            }}
                          /> */}
                                            </span>
                                        </div></div>
                                </Link></>
                        ))}


                    </div>
                </div>
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    const client = createClient({
        projectId: "qcjgjnc6",
        dataset: "production",
        useCdn: false
    });
    const query = `*[_type=="blog"]`;
    const blogs = await client.fetch(query);
    return {
        props: {
            blogs
        }
    }

}


export default Blogs;