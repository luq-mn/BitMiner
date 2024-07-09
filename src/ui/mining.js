export function MiningScene() {
    k.scene("mining", () => {
        // Title text
        const titleText = k.add([
            k.text("BitMiner"),
            k.pos(k.width() / 2, k.height() / 2),
            k.color(255, 255, 255),
            k.scale(1.75),
            k.anchor("center")
        ])
    })
}