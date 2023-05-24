type Json =
	| string
	| number
	| boolean
	| null
	| { [property: string]: Json }
	| Json[];

// This matches our content model from our CMS (Contentful)

type Image = {
	title: string;
	url: string;
	width: number;
	height: number;
};

type Character = {
	name: string;
	slug: string;
	image: Image;
	description: string;
	species: string[];
	weapons: string[];
	sex: string[];
	genderPronoun: string[];
	Hair: string[];
	eyes: string[];
	gemstone: string[];
	gemType: GemType[];
	ocupation: string[];
	alignment: Alignment[];
	relatives: Character[];
	friends: Character[];
	voiceActor: string[];
	firstAppearance: string[];
};

type GemType = {
	gemType: string;
};

type Alignment = {
	alignment: string;
};

type PaginatedList<T> = {
	limit: number;
	skip: number;
	items: T[];
};

type User = {
	name: string;
	email: string;
	image: string;
};
