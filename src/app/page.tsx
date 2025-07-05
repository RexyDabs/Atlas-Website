// src/app/page.tsx
// ✅ Homepage layout using Hero and Shadcn Button

import Hero from "@/app/components/Hero"
import { Button } from "@/components/ui/Button"
import TrustBar from "./components/TrustBar"
import { Phone } from "lucide-react"
import { ThemeToggle} from "@/app/components/ThemeToggle"
import { Header } from "@/components/layout/Header" // 

export default function Home() {
  return (
    <main className="bg-white text-black">
      {/* 🧭 Header */}
      <Header />

      {/* 🧱 Hero Section */}
      <Hero />

      {/* ✅ Trust Bar */}
      <TrustBar />

      {/* 🧪 Button Test */}
      <div className="text-center mt-8">
        {/* You can insert any test buttons or call-to-actions here */}
      </div>
    </main>
  )
}
