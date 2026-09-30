import type { VideoAsset } from '@/types/dashboard'
import { VideoCard } from '@/components/dashboard/VideoCard'

type VideoGridProps = {
  videos: VideoAsset[]
}

export function VideoGrid({ videos }: VideoGridProps) {
  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Recent Assets</h2>
        <p className="text-xs text-slate-500">{videos.length} videos</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </section>
  )
}
