"use client"

import { useState } from "react"
import { BodyDiagram } from "@/components/body-diagram"
import { InjuryModal } from "@/components/injury-modal"
import type { InjuryData } from "@/types/injury"

export default function HomePage() {
  const [injuries, setInjuries] = useState<Record<string, InjuryData>>({})
  const [selectedPart, setSelectedPart] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handlePartClick = (partId: string) => {
    setSelectedPart(partId)
    setIsModalOpen(true)
  }

  const handleSaveInjury = (injury: InjuryData) => {
    if (selectedPart) {
      setInjuries((prev) => ({
        ...prev,
        [selectedPart]: injury,
      }))
    }
    setIsModalOpen(false)
  }

  const handleRemoveInjury = () => {
    if (selectedPart) {
      const newInjuries = { ...injuries }
      delete newInjuries[selectedPart]
      setInjuries(newInjuries)
    }
    setIsModalOpen(false)
  }

  return (
    <main className="container mx-auto p-4 min-h-screen">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold">Injury Body Chart</h1>
      </header>

      <div className="flex justify-center">
        <BodyDiagram injuries={injuries} onPartClick={handlePartClick} />
      </div>

      <InjuryModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        selectedPart={selectedPart}
        injury={selectedPart ? injuries[selectedPart] : undefined}
        onSave={handleSaveInjury}
        onRemove={handleRemoveInjury}
      />
    </main>
  )
}