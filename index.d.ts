type Url = string;
type Json =
	| string
	| number
	| boolean
	| null
	| { [property: string]: Json }
	| Json[];

type TGemId = string;

type TGemAttributes = {
	description: string;
	species: string[];
	weapons: string[];
	sex: string;
	gender_pronoun: string[];
	hair: string[];
	eyes: string[];
	gemstone: string[];
	gem_type: string[];
};

type TGem = {
	id: TGemId;
	name: string;
	image: Url;
	attributes: TGemAttributes;
};

type TAPIGEMDetailResponse = TGem;

type TAPIGemResponse = {
	lenght: number;
	data: TGem[];
	error?: string;
};
