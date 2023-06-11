import { getOnePost } from '@/actions/post.actions'
import PostCard from '@/components/PostCard'
import React from 'react'

const PostDetails = async ({params: {id}, searchParams}) => {
	const post = await getOnePost(id)
	return (
		<div>
			{post && <PostCard post={post} />}
		</div>
	)
}

export default PostDetails 