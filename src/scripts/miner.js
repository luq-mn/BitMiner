import { game, wallet } from "./data"

export function Miner() {
    (async () => {
        while (true) {
            game.mining.cycle++;

            // Reset values for each cycle
            game.power.consumption = 0; game.power.production = 0;
            game.mining.btc.hashrate = 0; game.mining.eth.hashrate = 0;

            // Loop each ownedGPU for mining
        }
    })
}