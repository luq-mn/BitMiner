import { topInfo, topNav } from '../topBar';

export function MiningScene() {
    k.scene("mining", () => {
        // Title text
        
        const testRect = k.add([
            k.rect(100, 100),
            k.pos(10, 10),
            k.color(255, 255, 255),
            k.area()
        ])

        bar = topNav()
        info = topInfo()
        k.onUpdate(() => {
            testRect.pos.x = k.width() / 2
            testRect.pos.y = k.height() / 2
        })
    })
}