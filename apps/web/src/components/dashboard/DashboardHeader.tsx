type DashboardHeaderProps = {
  title: string
  visibleFieldsCount: number
}

type HeaderChipProps = {
  label: string
}

function HeaderChip({ label }: HeaderChipProps) {
  return (
    <button
      className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs text-slate-300 transition hover:border-slate-600 hover:text-slate-100"
      type="button"
    >
      {label}
    </button>
  )
}

export function DashboardHeader({ title, visibleFieldsCount }: DashboardHeaderProps) {
  return (
    <header className="flex flex-col gap-3 border-b border-slate-800 pb-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-wrap items-center gap-2 text-sm text-slate-300">
        <span className="font-medium text-slate-100">{title}</span>
        <HeaderChip label="Appearance" />
        <HeaderChip label={`Fields ${visibleFieldsCount} visible`} />
        <HeaderChip label="Sorted by Custom" />
      </div>
      <div className="flex items-center gap-2">
        <button
          className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs font-medium text-slate-200 transition hover:border-slate-600"
          type="button"
        >
          Invite
        </button>
        <button
          className="rounded-lg bg-violet-600 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-violet-500"
          type="button"
        >
          Upload
        </button>
      </div>
    </header>
  )
}
