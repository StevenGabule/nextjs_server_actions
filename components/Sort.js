"use client"

import useCustomRouter from '@/hooks/useCustomRouter'

const Sort = () => {
	const {pushQuery, query} = useCustomRouter()
	return (
		<div>
			Sort: {`  `}
			<select value={query.sort || 'createdAt'} onChange={e => pushQuery({sort: e.target.value})}>
				<option value="createdAt">A - Z</option>
				<option value="-createdAt">Z -A </option>
			</select>	
		</div>
	)
}

export default Sort