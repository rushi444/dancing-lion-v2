import Image from 'next/image'
import Link from 'next/link'
import { FiTwitter } from 'react-icons/fi'

export const Navbar = () => {
	return (
		<header className="bg-black bg-opacity-[.97]">
			<div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="flex-1 md:flex md:items-center md:gap-12 pt-2">
						<Link href="/">
							<a>
								<Image
									src="/just_labs_white.png"
									height="100px"
									width="100px"
									alt="Just Labs logo"
								/>
							</a>
						</Link>
					</div>

					<div className="md:flex md:items-center md:gap-12">
						<Link href="https://twitter.com/dancinglionclub">
							<a>
								<FiTwitter color="white" size="1.2rem" />
							</a>
						</Link>
					</div>
				</div>
			</div>
		</header>
	)
}
