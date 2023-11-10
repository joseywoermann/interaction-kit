import type { BitFlags } from "bitflag-js";

export const UserFlags = Object.freeze({
	Staff: 1n << 0n,
	Partner: 1n << 1n,
	HypeSquad: 1n << 2n,
	BugHunterLevelOne: 1n << 3n,
	HouseBravery: 1n << 6n,
	HouseBrilliance: 1n << 7n,
	HouseBalance: 1n << 8n,
	EarlyNitroSupporter: 1n << 9n,
	TeamPseudoUser: 1n << 10n,
	BugHunterLevelTwo: 1n << 14n,
	VerifiedBot: 1n << 16n,
	VerifiedDeveloper: 1n << 17n,
	CertifiedModerator: 1n << 18n,
	BotHttpInteractions: 1n << 19n,
	ActiveDeveloper: 1n << 22n,
}) satisfies BitFlags;
