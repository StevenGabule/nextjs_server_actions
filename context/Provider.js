'use client'
import React, { useContext, useState } from 'react'

const Context = React.createContext()

export const useMyContext = () => useContext(Context)

export const Provider = ({ children }) => {
	const [editPost, setEditPost] = useState()
	const value = { editPost, setEditPost };
	return (
		<Context.Provider value={value}>{children}</Context.Provider>
	)
}
