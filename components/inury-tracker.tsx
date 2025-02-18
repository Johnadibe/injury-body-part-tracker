"use client"

import type React from "react"

import { useState } from "react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { format } from "date-fns"
import { InjuryFormModal } from "@/components/injury-form-modal"

interface InjuryPoint {
    id: string
    x: number
    y: number
    part: string
    details?: {
        type: string
        date: string
        description: string
    }
}

export default function InjuryForm() {
    const [selectedPoints, setSelectedPoints] = useState<InjuryPoint[]>([
        {
            id: "1",
            x: 140,
            y: 90,
            part: "Shoulder",
            details: {
                type: "Bruise",
                date: "2024-02-18",
                description: "Minor bruising on right shoulder",
            },
        },
    ])
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedPosition, setSelectedPosition] = useState({ x: 0, y: 0 })

    const handleBodyClick = (e: React.MouseEvent<SVGElement>) => {
        const svg = e.currentTarget
        const rect = svg.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        setSelectedPosition({ x, y })
        setIsModalOpen(true)
    }

    const handleSaveInjury = (data: {
        type: string
        description: string
        date: string
    }) => {
        setSelectedPoints([
            ...selectedPoints,
            {
                id: Date.now().toString(),
                x: selectedPosition.x,
                y: selectedPosition.y,
                part: "Custom Body Part", // This could be determined based on the clicked area
                details: data,
            },
        ])
    }

    return (
        <div>

            <div>
                <h2 className="text-xl font-semibold text-center">Injury Body Chart</h2>
                <div className="relative w-full max-w-md mx-auto">
                    <div className="relative">
                        <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 400 600"
                            className="cursor-pointer"
                            onClick={handleBodyClick}
                        >
                            {/* Body Chart SVG content */}
                            <image
                                href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/body-chart-LSTY0sNg5uhfltnqkMvcrM6nxxfpUd.svg"
                                width="400"
                                height="600"
                            />

                            {/* Injury Points */}
                            {selectedPoints.map((point) => (
                                <foreignObject key={point.id} x={point.x - 10} y={point.y - 10} width="21" height="21">
                                    <HoverCard>
                                        <HoverCardTrigger asChild>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="21"
                                                height="21"
                                                viewBox="0 0 21 21"
                                                fill="none"
                                                className="cursor-pointer"
                                            >
                                                <circle cx="10.5" cy="10.5" r="10.5" fill="#C12F0E" fillOpacity="0.15" />
                                                <circle cx="10.4996" cy="10.5001" r="4.9" fill="#C12F0E" />
                                            </svg>
                                        </HoverCardTrigger>
                                        <HoverCardContent className="w-80">
                                            <div className="space-y-2">
                                                <h4 className="font-semibold">{point.part}</h4>
                                                <p className="text-sm">{point.details?.type}</p>
                                                <p className="text-xs text-muted-foreground">
                                                    Reported on: {format(new Date(point.details?.date || ""), "PPP")}
                                                </p>
                                                <p className="text-sm">{point.details?.description}</p>
                                            </div>
                                        </HoverCardContent>
                                    </HoverCard>
                                </foreignObject>
                            ))}
                        </svg>
                    </div>
                </div>

                {/* Rest of the form sections */}
                <div className="space-y-6">
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-center">Who sustained the injury?</h2>
                        <RadioGroup className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {["Service User", "Staff", "Visitors", "Others"].map((option) => (
                                <div key={option} className="flex items-center space-x-2">
                                    <RadioGroupItem value={option.toLowerCase()} id={option.toLowerCase()} />
                                    <Label htmlFor={option.toLowerCase()}>{option}</Label>
                                </div>
                            ))}
                        </RadioGroup>
                    </div>

                    {/* Treatment Required Section */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-center">Treatment Required?</h2>
                        <RadioGroup className="flex justify-center gap-4">
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="yes-treatment" id="yes-treatment" />
                                <Label htmlFor="yes-treatment">YES</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="no-treatment" id="no-treatment" />
                                <Label htmlFor="no-treatment">NO</Label>
                            </div>
                        </RadioGroup>
                    </div>

                    {/* Treatment Given By Section */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-center">Treatment Given By</h2>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="hospital">Name of hospital</Label>
                                <Input id="hospital" placeholder="Enter name" />
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="date">Date of Visit</Label>
                                    <Input id="date" type="date" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="time">Time</Label>
                                    <Input id="time" type="time" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between pt-4">
                    <Button variant="outline">Back</Button>
                    <Button>Next</Button>
                </div>
            </div>

            <InjuryFormModal
                open={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                position={selectedPosition}
                onSave={handleSaveInjury}
            />
        </div>
    )
}