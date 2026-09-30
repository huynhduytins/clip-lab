export type LibraryItem = {
  id: string
  label: string
  count?: number
}

export type ShareLink = {
  id: string
  label: string
  expiresAt: string
}

export type VideoAsset = {
  id: string
  title: string
  duration: string
  resolution: string
  size: string
  updatedAt: string
  status: 'Ready' | 'Processing'
  thumbnailColor: string
}
