"use client"

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import { InjuryData } from "@/types/injury"
import { formatDate } from "@/lib/utils"

interface BodyDiagramProps {
    injuries: Record<string, InjuryData>
    onPartClick: (partId: string) => void
}

export function BodyDiagram({ injuries, onPartClick }: BodyDiagramProps) {
    const formatPartName = (partId: string) => {
        return partId.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())
    }

    const renderInjuryPoint = (partId: string, x: number, y: number) => {
        if (!injuries[partId]) return null

        return (
            <TooltipProvider key={partId}>
                <Tooltip delayDuration={0}>
                    <TooltipTrigger asChild>
                        <g transform={`translate(${x - 10} ${y - 10})`}>
                            <svg
                                width="21"
                                height="21"
                                viewBox="0 0 21 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="cursor-pointer"
                                onClick={(e) => {
                                    e.stopPropagation()
                                    onPartClick(partId)
                                }}
                            >
                                <circle cx="10.5" cy="10.5" r="10.5" fill="#C12F0E" fillOpacity="0.15" />
                                <circle cx="10.4996" cy="10.5001" r="4.9" fill="#C12F0E" />
                            </svg>
                        </g>
                    </TooltipTrigger>
                    <TooltipContent side="right" className="max-w-[200px]">
                        <div className="space-y-1.5">
                            <p className="font-semibold text-sm">{formatPartName(partId)}</p>
                            <div className="text-xs space-y-1">
                                <p><span className="font-medium">Type:</span> {injuries[partId].type}</p>
                                <p><span className="font-medium">Severity:</span> {injuries[partId].severity}</p>
                                {injuries[partId].date && (
                                    <p><span className="font-medium">Date:</span> {formatDate(injuries[partId].date)}</p>
                                )}
                                {injuries[partId].description && (
                                    <p><span className="font-medium">Notes:</span> {injuries[partId].description}</p>
                                )}
                            </div>
                        </div>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        )
    }

    return (
        <div className="relative">
            <svg width="300" height="800" viewBox="0 0 200 800" className="border rounded-lg bg-background">
                {/* Head */}
                <circle
                    id="head"
                    cx="100"
                    cy="50"
                    r="30"
                    className={cn(
                        "cursor-pointer transition-colors stroke-foreground stroke-[1px]",
                        "hover:stroke-2 fill-muted",
                        injuries["head"] && "fill-red-200",
                    )}
                    onClick={() => onPartClick("head")}
                />
                {renderInjuryPoint("head", 100, 50)}

                {/* Neck */}
                <rect
                    id="neck"
                    x="90"
                    y="80"
                    width="20"
                    height="10"
                    className={cn(
                        "cursor-pointer transition-colors stroke-foreground stroke-[1px]",
                        "hover:stroke-2 fill-muted",
                        injuries["neck"] && "fill-red-200",
                    )}
                    onClick={() => onPartClick("neck")}
                />
                {renderInjuryPoint("neck", 100, 85)}

                {/* Shoulders */}
                <rect
                    id="leftShoulder"
                    x="60"
                    y="80"
                    width="30"
                    height="15"
                    className={cn(
                        "cursor-pointer transition-colors stroke-foreground stroke-[1px]",
                        "hover:stroke-2 fill-muted",
                        injuries["leftShoulder"] && "fill-red-200",
                    )}
                    onClick={() => onPartClick("leftShoulder")}
                />
                {renderInjuryPoint("leftShoulder", 75, 87)}

                <rect
                    id="rightShoulder"
                    x="110"
                    y="80"
                    width="30"
                    height="15"
                    className={cn(
                        "cursor-pointer transition-colors stroke-foreground stroke-[1px]",
                        "hover:stroke-2 fill-muted",
                        injuries["rightShoulder"] && "fill-red-200",
                    )}
                    onClick={() => onPartClick("rightShoulder")}
                />
                {renderInjuryPoint("rightShoulder", 125, 87)}

                {/* Upper Torso */}
                <rect
                    id="upperTorso"
                    x="70"
                    y="95"
                    width="60"
                    height="40"
                    className={cn(
                        "cursor-pointer transition-colors stroke-foreground stroke-[1px]",
                        "hover:stroke-2 fill-muted",
                        injuries["upperTorso"] && "fill-red-200",
                    )}
                    onClick={() => onPartClick("upperTorso")}
                />
                {renderInjuryPoint("upperTorso", 100, 115)}

                {/* Lower Torso */}
                <rect
                    id="lowerTorso"
                    x="70"
                    y="135"
                    width="60"
                    height="40"
                    className={cn(
                        "cursor-pointer transition-colors stroke-foreground stroke-[1px]",
                        "hover:stroke-2 fill-muted",
                        injuries["lowerTorso"] && "fill-red-200",
                    )}
                    onClick={() => onPartClick("lowerTorso")}
                />
                {renderInjuryPoint("lowerTorso", 100, 155)}

                {/* Left Arm */}
                <rect
                    id="leftUpperArm"
                    x="30"
                    y="95"
                    width="30"
                    height="30"
                    className={cn(
                        "cursor-pointer transition-colors stroke-foreground stroke-[1px]",
                        "hover:stroke-2 fill-muted",
                        injuries["leftUpperArm"] && "fill-red-200",
                    )}
                    onClick={() => onPartClick("leftUpperArm")}
                />
                {renderInjuryPoint("leftUpperArm", 45, 110)}

                <rect
                    id="leftForearm"
                    x="30"
                    y="125"
                    width="30"
                    height="35"
                    className={cn(
                        "cursor-pointer transition-colors stroke-foreground stroke-[1px]",
                        "hover:stroke-2 fill-muted",
                        injuries["leftForearm"] && "fill-red-200",
                    )}
                    onClick={() => onPartClick("leftForearm")}
                />
                {renderInjuryPoint("leftForearm", 45, 142)}

                <circle
                    id="leftHand"
                    cx="45"
                    cy="160"
                    r="10"
                    className={cn(
                        "cursor-pointer transition-colors stroke-foreground stroke-[1px]",
                        "hover:stroke-2 fill-muted",
                        injuries["leftHand"] && "fill-red-200",
                    )}
                    onClick={() => onPartClick("leftHand")}
                />
                {renderInjuryPoint("leftHand", 45, 160)}

                {/* Right Arm */}
                <rect
                    id="rightUpperArm"
                    x="140"
                    y="95"
                    width="30"
                    height="30"
                    className={cn(
                        "cursor-pointer transition-colors stroke-foreground stroke-[1px]",
                        "hover:stroke-2 fill-muted",
                        injuries["rightUpperArm"] && "fill-red-200",
                    )}
                    onClick={() => onPartClick("rightUpperArm")}
                />
                {renderInjuryPoint("rightUpperArm", 155, 110)}

                <rect
                    id="rightForearm"
                    x="140"
                    y="125"
                    width="30"
                    height="35"
                    className={cn(
                        "cursor-pointer transition-colors stroke-foreground stroke-[1px]",
                        "hover:stroke-2 fill-muted",
                        injuries["rightForearm"] && "fill-red-200",
                    )}
                    onClick={() => onPartClick("rightForearm")}
                />
                {renderInjuryPoint("rightForearm", 155, 142)}

                <circle
                    id="rightHand"
                    cx="155"
                    cy="160"
                    r="10"
                    className={cn(
                        "cursor-pointer transition-colors stroke-foreground stroke-[1px]",
                        "hover:stroke-2 fill-muted",
                        injuries["rightHand"] && "fill-red-200",
                    )}
                    onClick={() => onPartClick("rightHand")}
                />
                {renderInjuryPoint("rightHand", 155, 160)}

                {/* Hips */}
                <rect
                    id="leftHip"
                    x="70"
                    y="175"
                    width="30"
                    height="15"
                    className={cn(
                        "cursor-pointer transition-colors stroke-foreground stroke-[1px]",
                        "hover:stroke-2 fill-muted",
                        injuries["leftHip"] && "fill-red-200",
                    )}
                    onClick={() => onPartClick("leftHip")}
                />
                {renderInjuryPoint("leftHip", 85, 182)}

                <rect
                    id="rightHip"
                    x="100"
                    y="175"
                    width="30"
                    height="15"
                    className={cn(
                        "cursor-pointer transition-colors stroke-foreground stroke-[1px]",
                        "hover:stroke-2 fill-muted",
                        injuries["rightHip"] && "fill-red-200",
                    )}
                    onClick={() => onPartClick("rightHip")}
                />
                {renderInjuryPoint("rightHip", 115, 182)}

                {/* Left Leg */}
                <rect
                    id="leftThigh"
                    x="70"
                    y="190"
                    width="25"
                    height="80"
                    className={cn(
                        "cursor-pointer transition-colors stroke-foreground stroke-[1px]",
                        "hover:stroke-2 fill-muted",
                        injuries["leftThigh"] && "fill-red-200",
                    )}
                    onClick={() => onPartClick("leftThigh")}
                />
                {renderInjuryPoint("leftThigh", 82, 230)}

                <rect
                    id="leftCalf"
                    x="70"
                    y="270"
                    width="25"
                    height="60"
                    className={cn(
                        "cursor-pointer transition-colors stroke-foreground stroke-[1px]",
                        "hover:stroke-2 fill-muted",
                        injuries["leftCalf"] && "fill-red-200",
                    )}
                    onClick={() => onPartClick("leftCalf")}
                />
                {renderInjuryPoint("leftCalf", 82, 300)}

                <ellipse
                    id="leftFoot"
                    cx="82"
                    cy="340"
                    rx="15"
                    ry="7"
                    className={cn(
                        "cursor-pointer transition-colors stroke-foreground stroke-[1px]",
                        "hover:stroke-2 fill-muted",
                        injuries["leftFoot"] && "fill-red-200",
                    )}
                    onClick={() => onPartClick("leftFoot")}
                />
                {renderInjuryPoint("leftFoot", 82, 340)}

                {/* Right Leg */}
                <rect
                    id="rightThigh"
                    x="105"
                    y="190"
                    width="25"
                    height="80"
                    className={cn(
                        "cursor-pointer transition-colors stroke-foreground stroke-[1px]",
                        "hover:stroke-2 fill-muted",
                        injuries["rightThigh"] && "fill-red-200",
                    )}
                    onClick={() => onPartClick("rightThigh")}
                />
                {renderInjuryPoint("rightThigh", 117, 230)}

                <rect
                    id="rightCalf"
                    x="105"
                    y="270"
                    width="25"
                    height="60"
                    className={cn(
                        "cursor-pointer transition-colors stroke-foreground stroke-[1px]",
                        "hover:stroke-2 fill-muted",
                        injuries["rightCalf"] && "fill-red-200",
                    )}
                    onClick={() => onPartClick("rightCalf")}
                />
                {renderInjuryPoint("rightCalf", 117, 300)}

                <ellipse
                    id="rightFoot"
                    cx="118"
                    cy="340"
                    rx="15"
                    ry="7"
                    className={cn(
                        "cursor-pointer transition-colors stroke-foreground stroke-[1px]",
                        "hover:stroke-2 fill-muted",
                        injuries["rightFoot"] && "fill-red-200",
                    )}
                    onClick={() => onPartClick("rightFoot")}
                />
                {renderInjuryPoint("rightFoot", 118, 340)}
            </svg>
        </div>
    )
}