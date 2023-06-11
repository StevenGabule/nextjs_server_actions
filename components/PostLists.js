"use client"
import {experimental_useOptimistic as useOptimistic} from 'react'
import PostCard from './PostCard'
import { deletePost } from '@/actions/post.actions'

const PostLists = ({posts}) => {
	const [optimisticPosts, addOptimisticPosts] = useOptimistic({posts}, (state, newPosts) => ({...state, posts: newPosts }))

	async function handleDelete(postId) {
		if (window.confirm("Are you sure buddy?")) {
			const newData = posts.filter(post => post._id !== postId)
			addOptimisticPosts(optimisticPosts.posts = newData);
			await deletePost(postId)
		}
	}
	
	return (
		<div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
			{optimisticPosts.posts.map(post => (
				<PostCard key={post._id} post={post} handleDelete={handleDelete} />
			))}
		</div>
	)
}

export default PostLists