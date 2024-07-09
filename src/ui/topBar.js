export function topBar() {
    // Mining scene
    k.onKeyPress("q" || "Q", () => {
        console.log("Changing to mining scene")
        k.go("mining")
    });

    miningFrame = k.add([
        k.rect(190, 45),
        k.pos(10, 10),
        k.color(255, 255, 255),
        k.area()
    ])

    miningText = k.add([
        k.text("[Q] Mining"),
        k.pos(20, 20),
        k.color(20, 20, 20),
        k.scale(0.75),
        k.area()
    ])

    miningFrame.onHoverUpdate(() => {
        miningFrame.color = k.rgb(200, 200, 200)
    })

    miningFrame.onHoverEnd(() => {
        miningFrame.color = k.rgb(255, 255, 255)
    })

    // Wallet scene
    k.onKeyPress("w" || "W", () => {
        console.log("Changing to wallet scene")
        k.go("wallet")
    });

    walletFrame = k.add([
        k.rect(190, 45),
        k.pos(210, 10),
        k.color(255, 255, 255),
        k.area()
    ])

    walletText = k.add([
        k.text("[W] Wallet"),
        k.pos(220, 20),
        k.color(20, 20, 20),
        k.scale(0.75),
        k.area()
    ])

    walletFrame.onHoverUpdate(() => {
        walletFrame.color = k.rgb(200, 200, 200)
    })

    walletFrame.onHoverEnd(() => {
        walletFrame.color = k.rgb(255, 255, 255)
    })

    // Exchange scene
    k.onKeyPress("e" || "E", () => {
        console.log("Changing to exchange scene")
        k.go("exchange")
    });

    // Store scene
    k.onKeyPress("s" || "S", () => {
        console.log("Changing to store scene")
        k.go("store")
    });
}