import kaboom from 'kaboom';
k = kaboom({
	width: 1600,
	height: 900,
	background: [0, 0, 0]
});

// Import UIs
import { HomeScene } from './ui/scenes/home';
import { MiningScene } from './ui/scenes/mining';
import { WalletScene } from './ui/scenes/wallet';
import { ExchangeScene } from './ui/scenes/exchange';
import { StoreScene } from './ui/scenes/store';

HomeScene()
MiningScene()
WalletScene()
ExchangeScene()
StoreScene()

k.go("home")