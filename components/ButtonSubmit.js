"use client"
import { experimental_useFormStatus as useFormStatus } from 'react-dom'

const ButtonSubmit = ({ value }) => {
	const { pending } = useFormStatus();
	return (
		<button type='submit' disabled={pending}>{pending ? 'Creating...' : value}</button>
	)
}

export default ButtonSubmit