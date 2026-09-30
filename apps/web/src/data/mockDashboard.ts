import type { LibraryItem, ShareLink, VideoAsset } from '@/types/dashboard'

export const libraryItems: LibraryItem[] = [
  { id: 'assets', label: 'Assets', count: 24 },
  { id: 'collections', label: 'Collections', count: 8 },
  { id: 'connections', label: 'C2C Connections', count: 3 },
  { id: 'deleted', label: 'Recently Deleted' },
]

export const shareLinks: ShareLink[] = [
  { id: 'all', label: 'All Share Links', expiresAt: 'Never' },
  { id: 'social', label: 'Social Ad Set', expiresAt: 'Oct 10, 2026' },
]

export const videoAssets: VideoAsset[] = [
  {
    id: 'v-1',
    title: 'Product Teaser - Autumn Collection',
    duration: '00:42',
    resolution: '4K',
    size: '128 MB',
    updatedAt: '2 hours ago',
    status: 'Ready',
    thumbnailColor: 'from-indigo-500 to-violet-600',
  },
  {
    id: 'v-2',
    title: 'Interview Cut - Founder Story',
    duration: '03:18',
    resolution: '1080p',
    size: '422 MB',
    updatedAt: 'Yesterday',
    status: 'Ready',
    thumbnailColor: 'from-sky-500 to-cyan-600',
  },
  {
    id: 'v-3',
    title: 'Launch Event Recap',
    duration: '01:57',
    resolution: '4K',
    size: '266 MB',
    updatedAt: '3 days ago',
    status: 'Processing',
    thumbnailColor: 'from-fuchsia-500 to-pink-600',
  },
  {
    id: 'v-4',
    title: 'How-To Series Episode 1',
    duration: '07:11',
    resolution: '1080p',
    size: '1.1 GB',
    updatedAt: 'Last week',
    status: 'Ready',
    thumbnailColor: 'from-emerald-500 to-teal-600',
  },
]
