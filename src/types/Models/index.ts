export type DiscordUser = {
	id: string;
	username: string;
	avatar: string; //hash
	avatar_decoration: string | null;
	public_flags: number;
	flags: number;
	banner: null | string;
	banner_color: string;
	accent_color: number;
	locale: string;
	mfa_enabled: boolean;
	email: string;
	verified: boolean;
};

export type Participant = {
	id: string;
	date_created: string;
	date_updated: string;
	username: string;
	discord_id: string;
	points: number;
	giver_answers: Question[] | null;
	answered_questions: Answer[] | null;
	last_visited: string;
};

export type Question = {
	id: string;
	status: 'open' | 'closed' | 'archived';
	content: string;
	asked_by: Participant | string;
	answers: Answer[] | null;
};

export type Answer = {
	id: string;
	user_created: string;
	date_created: string;
	date_updated: string;
	answer: string;
	question: Question | string;
	answered_by: Participant | string;
};

export type WorkshopSession = {
	id: string;
	slug: string;
	main_image: string;
	date_created: string;
	date_updated: string;
	title: string;
	description: string;
	content: string;
	ressources: string;
	views: Participant[];
	date: string;
	time: string;
};

export type WorkshopManager = {
	user: Participant;
	answer: Answer;
	questions: Question;
	workshop_sessions: WorkshopSession;
};
