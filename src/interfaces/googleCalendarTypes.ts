export interface CalendarEvent {
  id: string;
  summary: string;
  start: { dateTime?: string; date?: string };
  end: { dateTime?: string; date?: string };
}

export interface GoogleAuthResponse {
  access_token: string;
  expires_in: number;
  token_type: string;
}

export interface GoogleCalendarState {
  isSignedIn: boolean;
  events: CalendarEvent[];
  loading: boolean;
  error: string | null;
}
