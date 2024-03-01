"use client";
import classNames from "classnames";
import { ChevronLeft, Menu, User } from "lucide-react";
import { Session } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function MobileSignIn({ session }: { session: Session | null }) {
	const [isOpen, setisOpen] = useState(false);
	const wrapperclasses = classNames(
		"flex flex-col absolute top-0 w-[70%] max-h-screen h-screen text-white bg-gradient-to-b from-[#0F4551] to-[#0c0c0c] py-10 px-10 gap-24 transition-all duration-500 z-10",
		{
			["translate-x-0 opacity-100"]: isOpen,
			["-translate-x-full opacity-0"]: !isOpen,
		},
	);
	return (
		<section className="md:hidden">
			<div className="p-4 bg-[#304c58]">
				<Menu className="text-white" onClick={() => setisOpen(!isOpen)} />
				<ChevronLeft
					className={classNames(
						"absolute right-[32%] text-white top-[45%] z-50 scale-150 transition-all delay-700",
						{
							["hidden -translate-x-full"]: !isOpen,
							["block translate-x-0"]: isOpen,
						},
					)}
					onClick={() => setisOpen(!isOpen)}
				/>
			</div>
			<div className={wrapperclasses}>
				<div className="flex flex-col gap-10 justify-center items-center w-full">
					<Link href={""}>
						<Image
							src={"/logo.svg"}
							alt={""}
							width={100}
							height={100}
							className=""
						/>
					</Link>
					{session ? (
						<div className="flex gap-3 items-center">
							<div className="relative w-[40px] aspect-square overflow-hidden rounded-full">
								<Image src={session.user!.image} alt="" fill />
							</div>
							<p>{session.user?.name}</p>
						</div>
					) : (
						<Link
							href={`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/signin`}
							className="flex gap-3 items-center"
						>
							<User className="scale-150" />
							<p>Sign In</p>
						</Link>
					)}
				</div>
				<div className="flex flex-col gap-10">
					<Link
						href={""}
						className="flex justify-center items-center w-24 h-10 rounded-3xl border-2"
					>
						{" "}
						<p>Home</p>{" "}
					</Link>
					<Link
						href={""}
						className="flex justify-center items-center w-24 h-10 rounded-3xl border-2"
					>
						{" "}
						<p>Contact</p>{" "}
					</Link>
					<Link
						href={""}
						className="flex justify-center items-center w-24 h-10 rounded-3xl border-2"
					>
						{" "}
						<p>Discussion</p>{" "}
					</Link>
					<Link
						href={""}
						className="flex justify-center items-center w-24 h-10 rounded-3xl border-2"
					>
						{" "}
						<p>Courses</p>{" "}
					</Link>
					{session && (
						<Link
							href={`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/signout`}
							className="flex justify-center items-center w-24 h-10 rounded-3xl border-2"
						>
							{" "}
							<p>Sign Out</p>{" "}
						</Link>
					)}
				</div>
			</div>
		</section>
	);
}
