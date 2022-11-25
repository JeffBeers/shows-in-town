import { scrapeHeadliners } from "./scrapers/Headliners.js";
import { scrapeLouisvilleJazzSociety } from "./scrapers/LouisvilleJazzSociety.js";
import { scrapeBlackJockeysLounge } from "./scrapers/BlackJockeysLounge.js";
import { scrapeStevieRays } from "./scrapers/StevieRays.js";
import { scrapeZanzabar } from "./scrapers/Zanzabar.js";
import { scrapeMagBar } from "./scrapers/MagBar.js";
import { scrapeMercuryBallroom } from "./scrapers/MercuryBallroom.js";
import { scrapeLouisvilleOrchestra } from "./scrapers/LouisvilleOrchestra.js";
import { scrapeIroqouisAmphitheater } from "./scrapers/IroqouisAmphitheater.js";

export async function getEvents() {
	const [headliners,
		jazzSociety,
		blackJockeysLounge,
		stevieRays,
		zanzabar,
		magBar,
		mercuryBallroom,
		louisvilleOrchestra,
		iroqouisAmphitheater
	] = await Promise.all([
		scrapeHeadliners(),
		scrapeLouisvilleJazzSociety(),
		scrapeBlackJockeysLounge(),
		scrapeStevieRays(),
		scrapeZanzabar(),
		scrapeMagBar(),
		scrapeMercuryBallroom(),
		scrapeLouisvilleOrchestra(),
		scrapeIroqouisAmphitheater()
	])

	return [
		...headliners,
		...jazzSociety,
		...blackJockeysLounge,
		...stevieRays,
		...zanzabar,
		...magBar,
		...mercuryBallroom,
		...louisvilleOrchestra,
		...iroqouisAmphitheater
	];
}