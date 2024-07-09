export function topBar() {
    // Mining scene
    k.onKeyPress("q" || "Q", () => {
        console.log("Changing to mining scene")
        k.go("mining")
    })

    // Wallet scene
    k.onKeyPress("w" || "W", () => {
        console.log("Changing to wallet scene")
        k.go("wallet")
    })

    // Exchange scene
    k.onKeyPress("e" || "E", () => {
        console.log("Changing to exchange scene")
        k.go("exchange")
    })

    // Store scene
    k.onKeyPress("s" || "S", () => {
        console.log("Changing to store scene")
        k.go("store")
    })
}