import type { NextPage } from 'next'
const fetcher = (url: string) => fetch(url).then(r => r.json())
import useSWR from 'swr'
import NewsCard from '../../components/NewCard'
const News: NextPage = () => {
    // fetch the news on the API endpoint
    const { data, error } = useSWR('/api/news', fetcher)
    if (error) return <div className="notification">Failed to load...</div>;
    if (!data) return <div className="notification">Loading posts...</div>;

    data.reverse()
    return (
    <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-4 m-3">
            {data.map((news: any) => {
                return (
                    <div key={news.data.slug}>
                        <NewsCard title={news.data.title} slug={news.data.slug} />
                    </div>
                )
            }
            )}
    </div>
    )
}
export default News;
