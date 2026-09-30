import type { LibraryItem, ShareLink } from '@/types/dashboard'

type SidebarProps = {
  projectName: string
  membersCount: number
  libraryItems: LibraryItem[]
  shareLinks: ShareLink[]
}

type NavItemProps = {
  item: LibraryItem
  active?: boolean
}

function NavItem({ item, active = false }: NavItemProps) {
  return (
    <button
      className={`flex w-full items-center justify-between rounded-lg border px-3 py-2 text-left text-sm transition ${
        active
          ? 'border-violet-500/40 bg-violet-500/10 text-violet-100'
          : 'border-transparent bg-transparent text-slate-300 hover:border-slate-800 hover:bg-slate-900/70'
      }`}
      type="button"
    >
      <span>{item.label}</span>
      {item.count ? (
        <span className="rounded-md bg-slate-800 px-1.5 py-0.5 text-xs text-slate-400">{item.count}</span>
      ) : null}
    </button>
  )
}

export function Sidebar({ projectName, membersCount, libraryItems, shareLinks }: SidebarProps) {
  return (
    <aside className="flex flex-col gap-6 border-b border-slate-800 bg-slate-950/80 p-4 md:h-screen md:border-b-0 md:border-r md:p-5">
      <section className="space-y-1">
        <p className="text-sm font-semibold text-slate-100">{projectName}</p>
        <p className="text-xs text-slate-400">{membersCount} Members</p>
      </section>

      <section className="space-y-2">
        {libraryItems.map((item, index) => (
          <NavItem key={item.id} item={item} active={index === 0} />
        ))}
      </section>

      <section className="space-y-2 border-t border-slate-800 pt-4">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Share Links</p>
        {shareLinks.map((link) => (
          <div key={link.id} className="rounded-lg border border-slate-800 bg-slate-900/70 p-3">
            <p className="text-sm text-slate-200">{link.label}</p>
            <p className="mt-1 text-xs text-slate-500">Expires: {link.expiresAt}</p>
          </div>
        ))}
      </section>
    </aside>
  )
}
