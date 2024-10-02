const fetcher = (url: string) => fetch(url).then(r => r.json())
import useSWR from 'swr'
const Post = (props) => {

    console.log(props)
  // fetch the news on the API endpoint
    const { data, error } = useSWR(`/api/getNews?slug=${props.slug}`, fetcher)
    if (error) return <div className="notification">Failed to load...</div>;
    if (!data) return <div className="notification">Loading posts...</div>;
    console.log(data.post)
    return (
        <>
         <div  className='prose mx-auto mt-5 xl:prose-xl' dangerouslySetInnerHTML={{__html: data.post.content}} />
        </>
    )
}

export const getServerSideProps = async (context) => {
    let { slug } = context.query;
    // If slug is "undefined", since "undefined" cannot be serialized, server will throw error
    // But null can be serializable
    if (!slug) {
      slug = null;
    }
    // now we are passing the slug to the component
    return { props: { slug:slug } };
  };
export default Post
