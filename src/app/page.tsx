import Image from "next/image";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="semi-bold text-3xl mt-4">Boa Noite</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">            
            <a href="#" className="link-album group">
              <Image src="/playlist2.jpg" width={104} height={104} alt="Daily Mix 6" />
              <strong>Daily Mix 6</strong>
              <button className="btn-play group-hover:visible"><Play /></button>
            </a>
            <a href="#" className="link-album group">
              <Image src="/playlist3.jpg" width={104} height={104} alt="Descobertas da Semana" />
              <strong>Descobertas da Semana</strong>
              <button className="btn-play group-hover:visible"><Play /></button>
            </a>
            <a href="#" className="link-album group">
              <Image src="/playlist4.jpg" width={104} height={104} alt="Daily Mix 5" />
              <strong>Daily Mix 5</strong>
              <button className="btn-play group-hover:visible"><Play /></button>
            </a>
            <a href="#" className="link-album group">
              <Image src="/playlist1.jpg" width={104} height={104} alt="Tamaryn Radio" />
              <strong>Tamaryn Radio</strong>
              <button className="btn-play group-hover:visible"><Play /></button>
            </a>
            <a href="#" className="link-album group">
              <Image src="/playlist5.jpg" width={104} height={104} alt="Daily Mix 1" />
              <strong>Daily Mix 1</strong>
              <button className="btn-play group-hover:visible"><Play /></button>
            </a>
            <a href="#" className="link-album group">
              <Image src="/playlist6.jpg" width={104} height={104} alt="Mix dance/Eletrônica" />
              <strong>Mix dance/Eletrônica</strong>
              <button className="btn-play group-hover:visible"><Play /></button>
            </a>
          </div>

          <h2 className="font-semibold text-2xl mt-10">Feito para Luiiz Oliveira</h2>
          <div className="grid grid-cols-6 gap-4 mt-4">
            <a href="" className="flex flex-col gap-1 bg-white/5 p-3 rounded-md hover:bg-white/10">
              <Image src="/playlist2.jpg" width={120} height={120} className="w-full" alt="Daily Mix 6" />
              <strong className="font-semibold">Daily Mix 6</strong>
              <span className="text-xs text-zinc-400">NNHMN, Creux Lies, Mortal Boy e mais</span>
            </a>
            <a href="" className="flex flex-col gap-1 bg-white/5 p-3 rounded-md hover:bg-white/10">
              <Image src="/playlist3.jpg" width={120} height={120} className="w-full" alt="Descobertas da Semana" />
              <strong className="font-semibold">Descobertas da Semana</strong>
              <span className="text-xs text-zinc-400">Sua mixtape semanal cheia de novas descobertas</span>
            </a>
            <a href="" className="flex flex-col gap-1 bg-white/5 p-3 rounded-md hover:bg-white/10">
              <Image src="/playlist4.jpg" width={120} height={120} className="w-full" alt="Daily Mix 5" />
              <strong className="font-semibold">Daily Mix 5</strong>
              <span className="text-xs text-zinc-400">DIIV, Beach Fossils, Spirit Club e mais</span>
            </a>
            <a href="" className="flex flex-col gap-1 bg-white/5 p-3 rounded-md hover:bg-white/10">
              <Image src="/playlist1.jpg" width={120} height={120} className="w-full" alt="Tamaryn Radio" />
              <strong className="font-semibold">Tamaryn Radio</strong>
              <span className="text-xs text-zinc-400">Tamaryn, NAVVI, Cold Cave e mais</span>
            </a>
            <a href="" className="flex flex-col gap-1 bg-white/5 p-3 rounded-md hover:bg-white/10">
              <Image src="/playlist5.jpg" width={120} height={120} className="w-full" alt="Daily Mix 1" />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-xs text-zinc-400">NNHMN, Creux Lies, Mortal Boy e mais</span>
            </a>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  )
}
