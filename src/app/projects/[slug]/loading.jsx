export default function Loading() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#fffdf8_0%,#f8fafc_100%)] px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl animate-pulse space-y-8">
        <div className="h-16 rounded-full bg-white/90 shadow-sm shadow-slate-200/60" />
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <div className="h-6 w-32 rounded-full bg-orange-100" />
            <div className="h-14 w-3/4 rounded-3xl bg-slate-200" />
            <div className="h-28 rounded-[2rem] bg-slate-200" />
            <div className="h-[24rem] rounded-[2rem] bg-white/90" />
          </div>
          <div className="grid gap-6">
            <div className="h-36 rounded-[2rem] bg-white/90" />
            <div className="h-28 rounded-[2rem] bg-white/90" />
            <div className="h-44 rounded-[2rem] bg-white/90" />
            <div className="h-44 rounded-[2rem] bg-white/90" />
          </div>
        </div>
      </div>
    </main>
  );
}
