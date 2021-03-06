import { RiSearchLine } from 'react-icons/ri'
import logo from '../assets/logo.png'
import logo2 from '../assets/logo-2.png'
import { BsBag } from 'react-icons/bs'
import Hamburger from 'hamburger-react'
import { useState, useRef } from 'react'
import useOnClickOutside from 'use-onclickoutside'
import { GrClose, GrLocation } from 'react-icons/gr'
import { AiOutlineLeft, AiOutlineRight, AiOutlineUser } from 'react-icons/ai'
import { BiSupport } from 'react-icons/bi'
import { ImAccessibility } from 'react-icons/im'
import { motion } from 'framer-motion'

const links = [
	{
		title: 'men',
		sublinks: [ `men's collection` ],
		superlinks: [
			{
				title: 'clothing',
				sublinks: [ `see all men's clothing`, 'the original polo', 't-Shirts' ]
			},
			{
				title: 'shoes',
				sublinks: [ `see all men's shoes`, 'sneakers' ]
			},
			{
				title: 'accessories',
				sublinks: [ `see all men's accessories`, 'watches', 'sunglasses', 'fragrance' ]
			},
			{
				title: 'leather goods',
				sublinks: [ `see all men's leather goods`, 'bags', 'small leather goods', 'belts' ]
			}
		]
	},
	{
		title: 'women',
		sublinks: [ `women's collection` ],
		superlinks: [
			{
				title: 'clothing',
				sublinks: [ `see all women's clothing`, 'the original polo', 't-Shirts' ]
			},
			{
				title: 'shoes',
				sublinks: [ `see all women's shoes`, 'sneakers' ]
			},
			{
				title: 'accessories',
				sublinks: [ `see all women's accessories`, 'watches', 'sunglasses', 'fragrance' ]
			},
			{
				title: 'leather goods',
				sublinks: [
					`see all women's leather goods`,
					'bags',
					'small leather goods',
					'belts'
				]
			}
		]
	},
	{
		title: 'kids',
		sublinks: [ `kid's collection` ],
		superlinks: [
			{
				title: 'clothing',
				sublinks: [ `see all kid's clothing`, 'the original polo', 't-Shirts' ]
			},
			{
				title: 'shoes',
				sublinks: [ `see all kid's shoes`, 'sneakers' ]
			},
			{
				title: 'accessories',
				sublinks: [ `see all kid's accessories`, 'watches', 'sunglasses', 'fragrance' ]
			},
			{
				title: 'leather goods',
				sublinks: [ `see all kid's leather goods`, 'bags', 'small leather goods', 'belts' ]
			}
		]
	},
	{
		title: 'sale',
		sublinks: [ `sale collection` ],
		superlinks: [
			{
				title: 'clothing',
				sublinks: [ `see all kid's clothing`, 'the original polo', 't-Shirts' ]
			},
			{
				title: 'shoes',
				sublinks: [ `see all kid's shoes`, 'sneakers' ]
			},
			{
				title: 'accessories',
				sublinks: [ `see all kid's accessories`, 'watches', 'sunglasses', 'fragrance' ]
			},
			{
				title: 'leather goods',
				sublinks: [ `see all kid's leather goods`, 'bags', 'small leather goods', 'belts' ]
			}
		]
	},
	{
		title: 'lacoste inside',
		sublinks: [ `kid's collection` ],
		superlinks: [
			{
				title: 'clothing',
				sublinks: [ `see all kid's clothing`, 'the original polo', 't-Shirts' ]
			},
			{
				title: 'shoes',
				sublinks: [ `see all kid's shoes`, 'sneakers' ]
			},
			{
				title: 'accessories',
				sublinks: [ `see all kid's accessories`, 'watches', 'sunglasses', 'fragrance' ]
			},
			{
				title: 'leather goods',
				sublinks: [ `see all kid's leather goods`, 'bags', 'small leather goods', 'belts' ]
			}
		]
	}
]

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
		<div ref={ref}>
			<RiSearchLine className="cursor-pointer" size={24} onClick={handleOpen} />
			<div
				className={`${open
					? 'opacity-100 top-14'
					: 'opacity-0 pointer-events-none -top-full'} bg-white fixed top-14 w-full transition-all duration-300 left-0 border-b`}
			>
				<div className="max-w-7xl mx-auto h-24 pl-6 xl:pl-0 pr-7 xl:pr-0 py-8">
					<div className="relative">
						<input
							ref={inputRef}
							type="search"
							placeholder="Find a product"
							className="text-lg w-full focus:outline-none py-2 xl:text-xl"
						/>
						<GrClose
							onClick={() => setOpen(false)}
							size={22}
							className="absolute top-1/2 transform -translate-y-1/2 right-0 opacity-75"
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

const Search2 = () => {
	const [ open, setOpen ] = useState(false)
	const ref = useRef()
	const inputRef = useRef()
	const handleOpen = () => {
		setOpen(!open)
		inputRef.current.focus()
	}

	useOnClickOutside(ref, () => setOpen(false))
	const subMenuAnimate = {
		enter: {
			opacity: 1,
			rotateX: 0,
			transition: {
				duration: 0.5
			},
			display: 'block'
		},
		exit: {
			opacity: 0,
			rotateX: -15,
			transition: {
				duration: 0.5,
				delay: 0.3
			},
			transitionEnd: {
				display: 'none'
			}
		}
	}
	return (
		<div ref={ref}>
			<motion.div className="menu-item" onHoverStart={handleOpen} onHoverEnd={handleOpen}>
				<RiSearchLine className="cursor-pointer" size={24} onClick={handleOpen} />
				<motion.div
					className="sub-menu p-4"
					initial="exit"
					animate={open ? 'enter' : 'exit'}
					variants={subMenuAnimate}
				>
					<div className="sub-menu-background" />
					<div className="relative">
						<input
							ref={inputRef}
							type="search"
							placeholder="Find a product"
							className="text-lg w-full focus:outline-none py-2 xl:text-xl"
						/>
						<GrClose
							onClick={() => setOpen(false)}
							size={22}
							className="absolute top-1/2 transform -translate-y-1/2 right-0 opacity-75"
						/>
					</div>
				</motion.div>
			</motion.div>
		</div>
	)
}

const Logo = () => (
	<a
		href="/"
		className="w-14 xl:w-40 absolute xl:relative left-1/2 xl:left-0 transform -translate-x-1/2 xl:-translate-x-0 "
	>
		<img src={logo} alt="" className="xl:hidden" />
		<img src={logo2} alt="" className="hidden xl:block w-40" />
	</a>
)

const Burger = () => {
	const [ open, setOpen ] = useState(false)
	const ref = useRef()
	useOnClickOutside(ref, () => setOpen(false))

	const SingleItem = ({ sublink }) => {
		return (
			<li className="flex items-center">
				<p className="h-12 flex items-center hover:underline">{sublink}</p>
			</li>
		)
	}
	const AdvancedItem = ({ sublink }) => {
		const [ open3, setOpen3 ] = useState(false)
		return (
			<li className="capitalize">
				<div
					onClick={() => setOpen3(true)}
					className="h-12  flex items-center pr-2 justify-between"
				>
					<p className="hover:underline">{sublink.title}</p>
					<AiOutlineRight size={22} />
				</div>
				{/* menu 3 */}
				<div
					className={`${open3
						? 'opacity-100 right-0'
						: 'opacity-0 pointer-events-none -right-full'} bg-white  fixed top-14 w-full h-screen transition-all duration-300 px-5 z-10`}
				>
					<div
						onClick={() => setOpen3(false)}
						className="h-14 flex items-center justify-between relative"
					>
						<AiOutlineLeft size={24} />
					</div>
					<ul>
						{sublink.sublinks.map((sublink, i) => (
							<li key={i} className="text-lg h-10 flex items-center ">
								<p className="hover:underline text-base">{sublink}</p>
							</li>
						))}
					</ul>
				</div>
			</li>
		)
	}

	const MainItem = ({ link }) => {
		const [ open2, setOpen2 ] = useState(false)
		return (
			<li className="cursor-pointer capitalize text-xl">
				{/* item w arrow */}
				<div
					onClick={() => setOpen2(true)}
					className="h-12 flex items-center  justify-between pr-2 "
				>
					<p className="hover:underline">{link.title}</p>
					<AiOutlineRight size={24} />
				</div>
				{/* menu 2 */}
				<div
					className={`${open2
						? 'opacity-100 right-0'
						: 'opacity-0 pointer-events-none -right-full'} bg-white  fixed top-14 w-full h-screen transition-all duration-300 px-5 z-10`}
				>
					{/* back arrow */}
					<div
						onClick={() => setOpen2(false)}
						className="h-14 flex items-center gap-2 text-sm relative"
					>
						<AiOutlineLeft size={24} />
					</div>
					{/* list */}
					<ul>
						{link.sublinks.map((sublink, i) => (
							// single link
							<SingleItem key={i} sublink={sublink} />
						))}
						{link.superlinks.map((sublink, i) => (
							// advance link
							<AdvancedItem key={i} sublink={sublink} />
						))}
					</ul>
				</div>
			</li>
		)
	}

	return (
		<div ref={ref} className="xl:hidden">
			<Hamburger toggled={open} size={25} toggle={setOpen} />
			<div
				className={`${open
					? 'opacity-100 right-0'
					: 'opacity-0 pointer-events-none -right-full'}  fixed top-14 bg-white w-full h-screen transition-all duration-300 overflow-y-scroll z-10 min-h-full pb-20`}
			>
				<ul className="mt-2 pb-4 flex flex-col gap-1 px-5">
					{links.map((link, i) => <MainItem link={link} />)}
				</ul>
				<div className="py-6 px-5 bg-gray-100 uppercase">
					<p className="text-xs">shop by theme</p>
					<div className="flex items-center gap-4 mt-4">
						<div className="rounded-full border px-8 py-2 text-sm bg-white">sport</div>
						<div className="rounded-full border px-8 py-2 text-sm bg-white">live</div>
					</div>
				</div>
				<div className="px-5 h-20 flex items-center gap-3 border-b hover:bg-gray-200">
					<AiOutlineUser size={24} className="text-gray-600" />
					<p className="text-sm">Log in</p>
				</div>
				<div className="px-5 hover:bg-gray-200 h-20 flex items-center gap-3 border-b">
					<BiSupport size={24} className="text-gray-600" />
					<p className="text-sm">Help & Support</p>
				</div>
				<div className="px-5 hover:bg-gray-200 h-20 flex items-center gap-3 border-b">
					<GrLocation size={24} className="text-gray-600" />
					<p className="text-sm">Find a boutique</p>
				</div>
				<div className="px-5 hover:bg-gray-200 h-20 flex items-center gap-3 border-b">
					<ImAccessibility size={24} className="text-gray-600" />
					<p className="text-sm">Accessibility options</p>
				</div>
			</div>
		</div>
	)
}

const NavLinks = () => {
	const Item = ({ link }) => {
		const [ open, setOpen ] = useState(false)
		const toggleHoverMenu = () => setOpen(!open)
		const ref = useRef(null)
		useOnClickOutside(ref, () => setOpen(false))
		const subMenuAnimate = {
			enter: {
				opacity: 1,
				rotateX: 0,
				transition: {
					duration: 0.5
				},
				display: 'block'
			},
			exit: {
				opacity: 0,
				rotateX: -15,
				transition: {
					duration: 0.5,
					delay: 0.3
				},
				transitionEnd: {
					display: 'none'
				}
			}
		}
		return (
			<li ref={ref}>
				<motion.div
					onHoverStart={toggleHoverMenu}
					onHoverEnd={toggleHoverMenu}
				>
					<p className="cursor-pointer" id="navItem">{link.title}</p>
					<motion.div
						className="sub-menu px-4 py-16 text-sm"
						initial="exit"
						animate={open ? 'enter' : 'exit'}
						variants={subMenuAnimate}
					>
						<div className="sub-menu-background" />
						<div>
							<ul className="grid grid-cols-5">
								{link.superlinks.map((link, i) => (
									<li>
										<p className="uppercase mb-2">{link.title}</p>
										<ul className="flex flex-col gap-2">
											{link.sublinks.map((link, i) => (
												<li>
													<p className="hover:underline">{link}</p>
												</li>
											))}
										</ul>
									</li>
								))}
								<li>
									<p className="uppercase mb-2">shop by theme</p>
									<ul className="flex flex-wrap gap-x-4 gap-y-2">
										<li>
											
											<div className="rounded-full inline-block border px-4 py-2 text-sm bg-white">holiday gift guide</div>
											
										</li>
										<li>
										<div className="rounded-full inline-block border px-4 py-2 text-sm bg-white">lacoste x peanuts</div>
										</li>
										
									</ul>
								</li>
							</ul>
						</div>
					</motion.div>
				</motion.div>
			</li>
		)
	}
	return (
		<nav className="hidden xl:block">
			<ul className="flex items-center gap-12 capitalize">
				{links.map((link, i) => <Item key={i} link={link} />)}
				<Search2 />
			</ul>
		</nav>
	)
}

const Header = () => {
	const Container = ({ children }) => (
		<div className="max-w-[1350px] mx-auto px-4 xl:px-0 h-20 flex items-center justify-end xl:justify-between gap-3 xl:gap-6 relative ">
			{children}
		</div>
	)
	return (
		<header className="border-b">
			<Container>
				<div className="mr-auto xl:hidden">
					<Search2 />
				</div>
				<Logo />
				<NavLinks />
				<div className="flex items-center gap-3 xl:gap-6">
					<GrLocation size={24} className="hidden xl:block" />
					<ImAccessibility size={24} className="hidden xl:block" />
					<AiOutlineUser size={27} className="hidden xl:block" />
					<BsBag
						size={24}
						className="transform -translate-y-0.5 xl:-translate-y-0 cursor-pointer"
					/>
					<Burger />
				</div>
			</Container>
		</header>
	)
}

export default Header
