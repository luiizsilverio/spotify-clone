import Image from "next/image";
import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play } from "lucide-react";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
          </div>

          <nav className="space-y-5 mt-10">
            <a href="#" className="link-menu">
              <HomeIcon />
              Home
            </a>
            <a href="#" className="link-menu">
              <Search />
              Search
            </a>
            <a href="#" className="link-menu">
              <Library />
              Your Library
            </a>
          </nav>

          <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
            <a href="" className="link-playlist">Daily Mix 4</a>
            <a href="" className="link-playlist">Postpunk - Cold</a>
            <a href="" className="link-playlist">Mix Indie</a>
            <a href="" className="link-playlist">Mix anos 2010</a>
            <a href="" className="link-playlist">Dark & Gothic</a>
            <a href="" className="link-playlist">Mix Lebanon Hanover</a>
            <a href="" className="link-playlist">Clan of Xymox Radio</a>
            <a href="" className="link-playlist">Mix Lana del Rey</a>
            <a href="" className="link-playlist">This is TR/ST</a>
            <a href="" className="link-playlist">This is NNHMN</a>
            <a href="" className="link-playlist">This is Diiv</a>
          </nav>
        </aside>

        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="semi-bold text-3xl mt-10">Boa Noite</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">            
            <a href="#" className="link-album group">
              <Image src="/playlist2.jpg" width={104} height={104} alt="Daily Mix 6" />
              <strong>Daily Mix 6</strong>
              <button className="btn-play group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="#" className="link-album group">
              <Image src="/playlist3.jpg" width={104} height={104} alt="Descobertas da Semana" />
              <strong>Descobertas da Semana</strong>
              <button className="btn-play group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="#" className="link-album group">
              <Image src="/playlist4.jpg" width={104} height={104} alt="Daily Mix 5" />
              <strong>Daily Mix 5</strong>
              <button className="btn-play group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="#" className="link-album group">
              <Image src="/playlist1.jpg" width={104} height={104} alt="Tamaryn Radio" />
              <strong>Tamaryn Radio</strong>
              <button className="btn-play group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="#" className="link-album group">
              <Image src="/playlist5.jpg" width={104} height={104} alt="Daily Mix 1" />
              <strong>Daily Mix 1</strong>
              <button className="btn-play group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="#" className="link-album group">
              <Image src="/playlist6.jpg" width={104} height={104} alt="Mix dance/Eletrônica" />
              <strong>Mix dance/Eletrônica</strong>
              <button className="btn-play group-hover:visible">
                <Play />
              </button>
            </a>
          </div>
        </main>
      </div>

      <footer className="bg-zinc-800 border-t border-zinc-700 p-6">footer</footer>
    </div>
  )
}
