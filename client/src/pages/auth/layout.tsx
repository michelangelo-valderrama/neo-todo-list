import { Outlet } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'

export default function AuthLayout() {
  return (
    <main className="w-dvw h-dvh flex items-center justify-center">
      <div className="min-w-[24rem] max-w-sm min-h-[28rem] flex flex-col justify-between">
        <h1 className="font-serif text-8xl text-center">Tolist</h1>
        <div className="w-full">
          <Outlet />
        </div>
      </div>
      <Toaster />
    </main>
  )
}
