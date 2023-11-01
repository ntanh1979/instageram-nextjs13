import Image from "next/image"

export default function SigninButton() {
  return (
    <button className="flex items-center gap-4 shadow-sm rounded-lg pl-3 hover:scale-110 transition-transform duration-300">
      <Image src='/google-logo.png' height={30} width={30}/>
      <span className="bg-blue-500 text-white px-4 py-3">Sign in with Google</span>
    </button>
  )
}
