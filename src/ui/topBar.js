function scaleW(value) {
    return (value / 1600) * k.width();
}

function scaleH(value) {
    return (value / 900) * k.height();
}

function scaleFont(value) {
    return Math.min(scaleW(value), scaleH(value));
}

export function topNav() {
    // Mining scene
    k.onKeyPress("q" || "Q", () => {
        console.log("Changing to mining scene")
        k.go("mining")
    });

    const miningFrame = k.add([
        k.rect(scaleW(250), scaleH(50)),
        k.pos(scaleW(10), scaleH(10)),
        k.color(255, 255, 255),
        k.area()
    ])
    
    const miningText = k.add([
        k.text("[Q] Mining"),
        k.pos(scaleW(135), scaleH(35)),
        k.color(20, 20, 20),
        k.scale(scaleFont(0.75)),
        k.anchor("center"),
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

    const walletFrame = k.add([
        k.rect(250, 50),
        k.pos(scaleH(270), scaleW(10)),
        k.color(255, 255, 255),
        k.area()
    ])

    const walletText = k.add([
        k.text("[W] Wallet"),
        k.pos(395, 35),
        k.color(20, 20, 20),
        k.scale(0.75),
        k.anchor("center"),
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

    const exchangeFrame = k.add([
        k.rect(250, 50),
        k.pos(530, 10),
        k.color(255, 255, 255),
        k.area()
    ])

    const exchangeText = k.add([
        k.text("[E] Exchange"),
        k.pos(655, 35),
        k.color(20, 20, 20),
        k.scale(0.75),
        k.anchor("center"),
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

    const storeFrame = k.add([
        k.rect(250, 50),
        k.pos(790, 10),
        k.color(255, 255, 255),
        k.area()
    ])

    const storeText = k.add([
        k.text("[S] Store"),
        k.pos(915, 35),
        k.color(20, 20, 20),
        k.scale(scaleFont(0.75)),
        k.anchor("center"),
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

    // Dynamic resize
    k.onResize(() => {
        // Mining
        miningFrame.width = scaleW(250)
        miningFrame.height = scaleH(50)
        miningFrame.pos.x = scaleW(10)
        miningFrame.pos.y = scaleH(10)
        miningText.pos.x = scaleW(135)
        miningText.pos.y = scaleH(35)
        miningText.scale = scaleFont(0.75)

        // Wallet
        walletFrame.width = scaleW(250)
        walletFrame.height = scaleH(50)
        walletFrame.pos.x = scaleW(270)
        walletFrame.pos.y = scaleW(10)
        walletText.pos.x = scaleW(395)
        walletText.pos.y = scaleH(35)
        walletText.scale = scaleFont(0.75)
    })
}

export function topInfo() {
    // Frame
    const frame = k.add([
        k.rect(1580, 100),
        k.pos(10, 70),
        k.color(255, 255, 255),
        k.area()
    ])

    // Hashrate
    const hashrateHeading = k.add([
        k.text("Hashrate"),
        k.pos(30, 80),
        k.color(20, 20, 20),
        k.scale(0.75),
    ])

    const hashrateFrame = k.add([
        k.rect(160, 50),
        k.pos(20, 110),
        k.color(240, 240, 240)
    ])

    const hashrateText = k.add([
        k.text("888.88m"),
        k.pos(30, 120),
        k.color(20, 20, 20),
        k.scale(1),
    ])

    // Crypto
    const cryptoHeading = k.add([
        k.text("Crypto"),
        k.pos(200, 80),
        k.color(20, 20, 20),
        k.scale(0.75),
    ])

    const cryptoFrame = k.add([
        k.rect(240, 50),
        k.pos(190, 110),
        k.color(240, 240, 240),
        k.area()
    ])

    const cryptoText = k.add([
        k.text("BTC 888.88m"),
        k.pos(200, 120),
        k.color(20, 20, 20),
        k.scale(1),
    ])
}