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

    miningFrame.onClick(() => {
        console.log("Changing to mining scene")
        k.go("mining")
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

    walletFrame.onClick(() => {
        console.log("Changing to wallet scene")
        k.go("wallet")
    })

    // Exchange scene
    k.onKeyPress("e" || "E", () => {
        console.log("Changing to exchange scene")
        k.go("exchange")
    });

    exchangeFrame = k.add([
        k.rect(220, 45),
        k.pos(410, 10),
        k.color(255, 255, 255),
        k.area()
    ])

    exchangeText = k.add([
        k.text("[E] Exchange"),
        k.pos(420, 20),
        k.color(20, 20, 20),
        k.scale(0.75),
        k.area()
    ])

    exchangeFrame.onHoverUpdate(() => {
        exchangeFrame.color = k.rgb(200, 200, 200)
    })

    exchangeFrame.onHoverEnd(() => {
        exchangeFrame.color = k.rgb(255, 255, 255)
    })

    exchangeFrame.onClick(() => {
        console.log("Changing to exchange scene")
        k.go("exchange")
    })

    // Store scene
    k.onKeyPress("s" || "S", () => {
        console.log("Changing to store scene")
        k.go("store")
    });

    storeFrame = k.add([
        k.rect(190, 45),
        k.pos(640, 10),
        k.color(255, 255, 255),
        k.area()
    ])

    storeText = k.add([
        k.text("[S] Store"),
        k.pos(650, 20),
        k.color(20, 20, 20),
        k.scale(0.75),
        k.area()
    ])

    storeFrame.onHoverUpdate(() => {
        storeFrame.color = k.rgb(200, 200, 200)
    })

    storeFrame.onHoverEnd(() => {
        storeFrame.color = k.rgb(255, 255, 255)
    })

    storeFrame.onClick(() => {
        console.log("Changing to store scene")
        k.go("store")
    })
}