interface BodyPart {
    name: string
    coordinates: {
        front: { x1: number; y1: number; x2: number; y2: number }
        back: { x1: number; y1: number; x2: number; y2: number }
    }
}

export const bodyParts: BodyPart[] = [
    {
        name: "Head",
        coordinates: {
            front: { x1: 160, y1: 0, x2: 240, y2: 60 },
            back: { x1: 560, y1: 0, x2: 640, y2: 60 },
        },
    },
    {
        name: "Left Ear",
        coordinates: {
            front: { x1: 145, y1: 30, x2: 160, y2: 50 },
            back: { x1: 625, y1: 30, x2: 640, y2: 50 },
        },
    },
    {
        name: "Right Ear",
        coordinates: {
            front: { x1: 240, y1: 30, x2: 255, y2: 50 },
            back: { x1: 545, y1: 30, x2: 560, y2: 50 },
        },
    },
    {
        name: "Left Eye",
        coordinates: {
            front: { x1: 160, y1: 25, x2: 180, y2: 40 },
            back: { x1: 0, y1: 0, x2: 0, y2: 0 },
        },
    },
    {
        name: "Right Eye",
        coordinates: {
            front: { x1: 220, y1: 25, x2: 240, y2: 40 },
            back: { x1: 0, y1: 0, x2: 0, y2: 0 },
        },
    },
    {
        name: "Nose",
        coordinates: {
            front: { x1: 190, y1: 30, x2: 210, y2: 50 },
            back: { x1: 0, y1: 0, x2: 0, y2: 0 },
        },
    },
    {
        name: "Neck",
        coordinates: {
            front: { x1: 175, y1: 60, x2: 225, y2: 90 },
            back: { x1: 575, y1: 60, x2: 625, y2: 90 },
        },
    },
    {
        name: "Left Shoulder",
        coordinates: {
            front: { x1: 140, y1: 90, x2: 175, y2: 120 },
            back: { x1: 625, y1: 90, x2: 660, y2: 120 },
        },
    },
    {
        name: "Right Shoulder",
        coordinates: {
            front: { x1: 225, y1: 90, x2: 260, y2: 120 },
            back: { x1: 540, y1: 90, x2: 575, y2: 120 },
        },
    },
    {
        name: "Left Chest",
        coordinates: {
            front: { x1: 140, y1: 120, x2: 175, y2: 180 },
            back: { x1: 0, y1: 0, x2: 0, y2: 0 },
        },
    },
    {
        name: "Right Chest",
        coordinates: {
            front: { x1: 225, y1: 120, x2: 260, y2: 180 },
            back: { x1: 0, y1: 0, x2: 0, y2: 0 },
        },
    },
    {
        name: "Left Arm",
        coordinates: {
            front: { x1: 110, y1: 120, x2: 140, y2: 220 },
            back: { x1: 660, y1: 120, x2: 690, y2: 220 },
        },
    },
    {
        name: "Right Arm",
        coordinates: {
            front: { x1: 260, y1: 120, x2: 290, y2: 220 },
            back: { x1: 510, y1: 120, x2: 540, y2: 220 },
        },
    },
    {
        name: "Abdomen",
        coordinates: {
            front: { x1: 175, y1: 180, x2: 225, y2: 250 },
            back: { x1: 575, y1: 180, x2: 625, y2: 250 },
        },
    },
    {
        name: "Left Hip",
        coordinates: {
            front: { x1: 140, y1: 250, x2: 175, y2: 290 },
            back: { x1: 625, y1: 250, x2: 660, y2: 290 },
        },
    },
    {
        name: "Right Hip",
        coordinates: {
            front: { x1: 225, y1: 250, x2: 260, y2: 290 },
            back: { x1: 540, y1: 250, x2: 575, y2: 290 },
        },
    },
    {
        name: "Left Thigh",
        coordinates: {
            front: { x1: 140, y1: 290, x2: 175, y2: 380 },
            back: { x1: 625, y1: 290, x2: 660, y2: 380 },
        },
    },
    {
        name: "Right Thigh",
        coordinates: {
            front: { x1: 225, y1: 290, x2: 260, y2: 380 },
            back: { x1: 540, y1: 290, x2: 575, y2: 380 },
        },
    },
    {
        name: "Left Knee",
        coordinates: {
            front: { x1: 140, y1: 380, x2: 175, y2: 410 },
            back: { x1: 625, y1: 380, x2: 660, y2: 410 },
        },
    },
    {
        name: "Right Knee",
        coordinates: {
            front: { x1: 225, y1: 380, x2: 260, y2: 410 },
            back: { x1: 540, y1: 380, x2: 575, y2: 410 },
        },
    },
    {
        name: "Left Leg",
        coordinates: {
            front: { x1: 140, y1: 410, x2: 175, y2: 500 },
            back: { x1: 625, y1: 410, x2: 660, y2: 500 },
        },
    },
    {
        name: "Right Leg",
        coordinates: {
            front: { x1: 225, y1: 410, x2: 260, y2: 500 },
            back: { x1: 540, y1: 410, x2: 575, y2: 500 },
        },
    },
    {
        name: "Left Foot",
        coordinates: {
            front: { x1: 140, y1: 500, x2: 175, y2: 530 },
            back: { x1: 625, y1: 500, x2: 660, y2: 530 },
        },
    },
    {
        name: "Right Foot",
        coordinates: {
            front: { x1: 225, y1: 500, x2: 260, y2: 530 },
            back: { x1: 540, y1: 500, x2: 575, y2: 530 },
        },
    },
]

export const getBodyPart = (x: number, y: number, view: "front" | "back"): string => {
    const part = bodyParts.find((part) => {
        const coords = view === "front" ? part.coordinates.front : part.coordinates.back
        return x >= coords.x1 && x <= coords.x2 && y >= coords.y1 && y <= coords.y2
    })
    return part?.name || "Unknown"
}