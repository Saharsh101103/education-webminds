import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

export default function Page() {
  return <main>
    {/* Hero Section */}
    <div className="bg-[url('/chat_bg.png')] bg-repeat-x h-[45rem]">
      <div className="w-[50rem] mx-auto relative">
        <AspectRatio ratio={1 / 1}>
          <Image src="/blob.svg" fill alt="" />
        </AspectRatio>
        <h1 className="font-extrabold text-xxl">Discussion</h1>
      </div>
    </div>
  </main>
}
