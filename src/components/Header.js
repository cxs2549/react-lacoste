import { RiSearchLine } from 'react-icons/ri'
import logo from '../assets/logo.png'
import { BsBag } from 'react-icons/bs'
import Hamburger from 'hamburger-react'
import { useState, useRef } from 'react'
import useOnClickOutside from 'use-onclickoutside'
import { GrClose } from 'react-icons/gr'

const Search = () => {
	const [ open, setOpen ] = useState(false)
	const ref = useRef()
	const inputRef = useRef()
	const handleOpen = () => {
		setOpen(!open)
		inputRef.current.focus()
	}

	useOnClickOutside(ref, () => setOpen(false))
	return (
		<div className="mr-auto" ref={ref}>
			<RiSearchLine className="cursor-pointer" size={24} onClick={handleOpen} />
			<div
				className={`${open
					? 'opacity-100 top-14'
					: 'opacity-0 pointer-events-none -top-full'} bg-white fixed top-14 w-full transition-all duration-300 left-0 -z-10`}
			>
				<div className="max-w-7xl mx-auto h-32 px-6 py-8 shadow">
					<div className="relative">
						<input
							ref={inputRef}
							type="search"
							placeholder="Find a product"
							className="text-lg w-full focus:outline-none py-2"
						/>
						<GrClose
							onClick={() => setOpen(false)}
							size={22}
							className="absolute top-1/2 transform -translate-y-1/2 right-0"
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

const Logo = () => (
	<a href="/" className="w-12 absolute left-1/2 transform -translate-x-1/2">
		<img src={logo} alt="" />
	</a>
)

const Burger = () => {
	const [ open, setOpen ] = useState(false)
	const ref = useRef()
	useOnClickOutside(ref, () => setOpen(false))

	return (
		<div ref={ref}>
			<Hamburger toggled={open} size={25} toggle={setOpen} />
			<div
				className={`${open
					? 'opacity-100 right-0'
					: 'opacity-0 pointer-events-none -right-full'} bg-red-200 fixed top-14 w-full h-screen transition-all duration-300`}
			>
				menu
			</div>
		</div>
	)
}

const Header = () => {
	const Container = ({ children }) => (
		<div className="max-w-7xl mx-auto px-4 h-14 shadow flex items-center justify-end gap-5 relative z-10">
			{children}
		</div>
	)
	return (
		<header>
			<Container>
				<Search />
				<Logo />
				<BsBag size={24} />
				<Burger />
			</Container>
		</header>
	)
}

export default Header
