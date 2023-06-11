"use client"
import useCustomRouter from '@/hooks/useCustomRouter';

const Pagination = ({ totalPage }) => {
	const newArray = [...Array(totalPage)].map((_, i) => i + 1);
	const {pushQuery, query} = useCustomRouter();

	return (
		<div style={{ display: 'flex', gap: 10, margin: '30px 0'}}>
			{
				newArray.map((page) => (
					<button 
						key={page} 
						onClick={() => pushQuery({page})}
						style={{ background: (query.page || 1) === page ? 'red' : '' }}
					>
						{page}
					</button>
				))
			}
		</div>
	)
}

export default Pagination