// import { useRouter } from 'next/router';
// import Head from 'next/head';
// import { Blog } from '../../sections'; // Assuming Blog is a component that renders a single blog post

// const SinglePost = ({ post }) => {
//     const router = useRouter();

//     // Check if the fallback state is still rendering
//     if (router.isFallback) {
//         return <div>Loading...</div>;
//     }

//     // Check if the post exists
//     if (!post) {
//         return (
//             <div>
//                 <Head>
//                     <title>Post Not Found</title>
//                 </Head>
//                 <h1>Post Not Found</h1>
//             </div>
//         );
//     }

//     return (
//         <>
//             <Head>
//                 <title>{post.title || 'Blog Post'}</title>
//             </Head>
//             <Blog post={post} />
//         </>
//     );
// };

// export async function getStaticPaths() {
//     // Fetch all blog IDs to pre-render
//     const res = await fetch('https://example.com/api/posts'); // Replace with your API endpoint
//     const posts = await res.json();

//     const paths = posts.map((post) => ({
//         params: { id: post.id.toString() },
//     }));

//     return { paths, fallback: true }; // Enable fallback for on-demand generation
// }

// export async function getStaticProps({ params }) {
//     try {
//         // Fetch a single blog post based on the ID
//         const res = await fetch(`https://example.com/api/posts/${params.id}`); // Replace with your API endpoint
//         const post = await res.json();

//         // Check if post exists
//         if (!post) {
//             return { notFound: true }; // Trigger a 404 page
//         }

//         return { props: { post } };
//     } catch (error) {
//         console.error('Error fetching post:', error);
//         return { notFound: true };
//     }
// }

// export default SinglePost;


import { useRouter } from 'next/router';
import Head from 'next/head';
import { Blog } from '../../sections'; // Assuming Blog is a component that renders a single blog post

const SinglePost = ({ post }) => {
    const router = useRouter();

    // Check if the fallback state is still rendering
    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    // Check if the post exists
    if (!post) {
        return (
            <div>
                <Head>
                    <title>Post Not Found</title>
                </Head>
                <h1>Post Not Found</h1>
            </div>
        );
    }

    return (
        <>
            <Head>
                <title>{post.title || 'Blog Post'}</title>
            </Head>
            <Blog post={post} />
        </>
    );
};

// Mock posts data
const mockPosts = [
    { id: '1', title: 'First Blog Post', content: 'This is the first post.' },
    { id: '2', title: 'Second Blog Post', content: 'This is the second post.' },
    { id: '3', title: 'Third Blog Post', content: 'This is the third post.' },
];

export async function getStaticPaths() {
    // Simulate fetching all blog IDs to pre-render
    const posts = mockPosts;

    const paths = posts.map((post) => ({
        params: { id: post.id.toString() },
    }));

    return { paths, fallback: true }; // Enable fallback for on-demand generation
}

export async function getStaticProps({ params }) {
    try {
        // Simulate fetching a single blog post based on the ID
        const post = mockPosts.find((p) => p.id === params.id);

        // Check if post exists
        if (!post) {
            return { notFound: true }; // Trigger a 404 page
        }

        return { props: { post } };
    } catch (error) {
        console.error('Error fetching post:', error);
        return { notFound: true };
    }
}

export default SinglePost;
