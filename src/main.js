import kaboom from 'kaboom';
k = kaboom({
	width: 1600,
	height: 900,
	background: [0, 0, 0]
});

// Import UIs
import { HomeScene } from './ui/home';
import { MiningScene } from './ui/mining';
import { WalletScene } from './ui/wallet';
import { ExchangeScene } from './ui/exchange';
import { StoreScene } from './ui/store';

HomeScene()
MiningScene()
WalletScene()
ExchangeScene()
StoreScene()

k.go("home")