import kaboom from 'kaboom';
k = kaboom({
	width: 1600,
	height: 900,
	background: [0, 0, 0]
});

// Import UIs
import { HomeScene } from './ui/home';
import { MiningScene } from './ui/mining';

HomeScene()
MiningScene()

k.go("home")