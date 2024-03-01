import Courses from "../components/Courses";
import Hero from "../components/Hero";
import { ProgressDemo } from "../components/Progressbar";


export default function Home() {
  return (
    <main className="min-h-[80vh] bg-[#304c58] ">
     <Hero/>
     <Courses/>
    </main>
  );
}
