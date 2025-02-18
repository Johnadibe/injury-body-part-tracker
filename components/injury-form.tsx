"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface InjuryFormProps {
    onSave: (data: {
        type: string
        description: string
        date: string
    }) => void
    onCancel: () => void
}

export function InjuryForm({ onSave, onCancel }: InjuryFormProps) {
    const [formData, setFormData] = useState({
        type: "",
        description: "",
        date: new Date().toISOString().split("T")[0],
    })

    const injuryTypes = ["Bruise", "Cut", "Burn", "Sprain", "Fracture", "Scratch", "Other"]

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        onSave(formData)
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="type">Injury Type</Label>
                <Select value={formData.type} onValueChange={(value) => setFormData({ ...formData, type: value })}>
                    <SelectTrigger>
                        <SelectValue placeholder="Select injury type" />
                    </SelectTrigger>
                    <SelectContent>
                        {injuryTypes.map((type) => (
                            <SelectItem key={type} value={type.toLowerCase()}>
                                {type}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
            <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Describe the injury..."
                    required
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="date">Date</Label>
                <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    required
                />
            </div>
            <div className="flex justify-end gap-2">
                <Button type="button" variant="outline" onClick={onCancel}>
                    Cancel
                </Button>
                <Button type="submit">Save</Button>
            </div>
        </form>
    )
}