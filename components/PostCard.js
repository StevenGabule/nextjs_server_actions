"use client";
import { useMyContext } from '@/context/Provider'
import Image from 'next/image'
import Link from 'next/link'
import {useTransition} from 'react'

const PostCard = ({ post, handleDelete }) => {
	const {setEditPost} = useMyContext();
	const [isPending, startTransition] = useTransition();

	return (
		<div>
			<Link href={`/post/${post._id}`}>
				<Image src={post?.image} alt='image' width={200} height={200} priority />
				<h3>{post?.title}</h3>
			</Link>
			<div style={{display: 'flex', gap: 20}}>
				<button onClick={() => setEditPost(post)}>Edit</button>
				<button onClick={() => startTransition(() => handleDelete(post._id))}>
					{isPending ? 'Deleting...' : 'Delete'}
				</button>
			</div>
		</div>
	)
}

export default PostCard