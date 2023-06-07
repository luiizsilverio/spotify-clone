import { Home as HomeIcon, Library, Search } from "lucide-react";

export default function Sidebar() {
  return (
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
  )
}