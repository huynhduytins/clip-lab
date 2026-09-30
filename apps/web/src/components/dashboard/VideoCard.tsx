import type { VideoAsset } from '@/types/dashboard'

type VideoCardProps = {
  video: VideoAsset
}

function StatusBadge({ status }: { status: VideoAsset['status'] }) {
  const badgeClass =
    status === 'Ready'
      ? 'bg-emerald-500/20 text-emerald-200 ring-1 ring-emerald-500/30'
      : 'bg-amber-500/20 text-amber-200 ring-1 ring-amber-500/30'

  return <span className={`rounded-md px-2 py-1 text-xs ${badgeClass}`}>{status}</span>
}

export function VideoCard({ video }: VideoCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70">
      <div className={`h-28 bg-gradient-to-br ${video.thumbnailColor}`} />
      <div className="space-y-3 p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-sm font-medium text-slate-100">{video.title}</h3>
          <StatusBadge status={video.status} />
        </div>
        <div className="grid grid-cols-2 gap-2 text-xs text-slate-400">
          <p>Duration: {video.duration}</p>
          <p>Resolution: {video.resolution}</p>
          <p>Size: {video.size}</p>
          <p>Updated: {video.updatedAt}</p>
        </div>
      </div>
    </article>
  )
}
