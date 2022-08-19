
export type DiscordUser = {
  id: string;
  username: string;
  avatar: string;//hash
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
}

export type Paticipant = {
  id: string,
  date_created: string,
  date_updated: string,
  username: string;
  discord_id: string;
  points: number;
  giver_answers: Question[] | null,
  answered_questions: Answer[] | null,
  last_visited: string;
}

export type Question = {
  id: string;
  status: 'open' | 'closed' | 'archived';
  content: string;
  asked_by: Paticipant | string;
  answers: Answer[] | null
}

export type Answer = {
  id: string,
  user_created: string;
  date_created: string;
  date_updated: string;
  answer: string;
  question: Question | string;
  answered_by: Paticipant | string
}

export type WorkshopSession = {
  id: string;
  status: 'happened' | 'to-happen';
  date_created: string;
  date_updated: string;
  title: string;
  description: string;
  content: string;
  ressources: string;
  viewed_by: Paticipant[] | null
}


export type WorkshopManager = {
  user: Paticipant;
  answer: Answer;
  questions: Question;
  workshop_sessions: WorkshopSession;
}
