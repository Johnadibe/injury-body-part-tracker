"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { InjuryData } from "@/types/injury"
import { useState, useEffect } from "react"

interface InjuryModalProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    selectedPart: string | null
    injury?: InjuryData
    onSave: (injury: InjuryData) => void
    onRemove: () => void
}

export function InjuryModal({ open, onOpenChange, selectedPart, injury, onSave, onRemove }: InjuryModalProps) {
    const [formData, setFormData] = useState<InjuryData>({
        type: "",
        severity: "",
        date: "",
        description: "",
    })

    useEffect(() => {
        if (injury) {
            setFormData(injury)
        } else {
            setFormData({
                type: "",
                severity: "",
                date: "",
                description: "",
            })
        }
    }, [injury])

    const formatPartName = (partId: string) => {
        return partId.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        onSave(formData)
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="flex items-baseline gap-2">
                        Injury Details
                        {selectedPart && (
                            <span className="text-sm font-normal text-muted-foreground">({formatPartName(selectedPart)})</span>
                        )}
                    </DialogTitle>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="type">Injury Type</Label>
                        <Select value={formData.type} onValueChange={(value) => setFormData({ ...formData, type: value })}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="bruise">Bruise</SelectItem>
                                <SelectItem value="cut">Cut</SelectItem>
                                <SelectItem value="fracture">Fracture</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="severity">Severity</Label>
                        <Select value={formData.severity} onValueChange={(value) => setFormData({ ...formData, severity: value })}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select severity" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="mild">Mild</SelectItem>
                                <SelectItem value="moderate">Moderate</SelectItem>
                                <SelectItem value="severe">Severe</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="date">Date of Injury</Label>
                        <Input
                            id="date"
                            type="date"
                            value={formData.date}
                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="description">Description / Notes</Label>
                        <Textarea
                            id="description"
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            rows={3}
                        />
                    </div>

                    <div className="flex justify-end gap-2">
                        {injury && (
                            <Button type="button" variant="destructive" onClick={onRemove}>
                                Remove Injury
                            </Button>
                        )}
                        <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
                            Cancel
                        </Button>
                        <Button type="submit">Save</Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}