type UploadDropzoneProps = {
  onUploadClick?: () => void
}

function UploadIcon() {
  return (
    <svg aria-hidden="true" className="h-10 w-10 text-slate-500" viewBox="0 0 24 24" fill="none">
      <path
        d="M7.5 17.5H6a4 4 0 1 1 .9-7.9A5.5 5.5 0 0 1 18 10.8a3.7 3.7 0 0 1-.3 6.7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path d="M12 15.5V8.5" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
      <path d="m9.5 11 2.5-2.5L14.5 11" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  )
}

export function UploadDropzone({ onUploadClick }: UploadDropzoneProps) {
  return (
    <section className="rounded-3xl border border-dashed border-slate-700 bg-slate-900/40 px-4 py-14 text-center sm:px-6">
      <div className="mx-auto flex max-w-md flex-col items-center gap-4">
        <UploadIcon />
        <p className="text-sm text-slate-400">Drag files and folders to upload.</p>
        <button
          className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-violet-500"
          onClick={onUploadClick}
          type="button"
        >
          Upload
        </button>
      </div>
    </section>
  )
}
