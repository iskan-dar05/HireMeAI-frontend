import { createContext, useState, useEffect } from 'react'
import type { ReactNode } from 'react';
// import { React } from 'react' // <-- REMOVE THIS LINE


interface ThemeContextType {
	theme: string
	toggleTheme: ()=>void // Changed from ()=>string to ()=>void
}

// Added 'const'
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined)


export function ThemeProvider({ children }: { children: ReactNode }) {
	const [theme, setTheme] = useState("light");

	useEffect(()=>{
		const savedTheme = localStorage.getItem('theme')
		if(savedTheme)
		{
			setTheme(savedTheme)
		}else if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
			setTheme('dark')
		}

	}, [])

	useEffect(()=>{
		const root = window.document.documentElement;
		root.classList.remove("light", "dark")
		root.classList.add(theme);
	}, [theme])

	const toggleTheme = () => {
		setTheme((prevTheme)=>{
			const newTheme = prevTheme === 'light' ? 'dark' : 'light';
			console.log("NEW ITEM", newTheme)
			localStorage.setItem('theme', newTheme)
			return newTheme;
		});
	}

	return (
		// Changed '.provider' to '.Provider'
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}
