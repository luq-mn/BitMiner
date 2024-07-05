export function HomeScene() {
    k.scene("home", () => {
        // Title text
        const titleText = k.add([
            k.text("Delta\nCrypto Mining Simulator"),
            k.pos(k.width() / 2, k.height() / 2),
            k.color(255, 255, 255),
            k.scale(1.75),
            k.anchor("center")
        ])

        // Start
        const startText = k.add([
            k.text("Press enter to start"),
            k.pos(k.width() / 2, k.height() / 2 + 100),
            k.color(255, 255, 255),
            k.scale(1),
            k.anchor("center")
        ])

        k.onKeyPress("enter", () => {
            k.scene("mining")
        })
    })
}