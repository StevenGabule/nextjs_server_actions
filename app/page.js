import { getAllPosts } from '@/actions/post.actions'
import Feature from '@/components/Feature'
import Pagination from '@/components/Pagination'
import PostForm from '@/components/PostForm'
import PostLists from '@/components/PostLists'

const Home = async ({params, searchParams}) => {

  const { posts, totalPage } = await getAllPosts(searchParams)

  return (
    <div>
      <h1>NextJS 13 Server Actions + MongoDB(mongoose)</h1>
      <p>C.R.U.D + SORT + Search + Pagination</p>
      <PostForm />
      <Feature />
      {posts && <PostLists posts={posts} />}
      {totalPage && <Pagination totalPage={totalPage} />}
    </div>
  )
}

export default Home