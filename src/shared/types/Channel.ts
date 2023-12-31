// Generated by https://quicktype.io

export interface Channel {
	id:                    string;
	type:                  number;
	last_message_id:       string;
	flags:                 number;
	last_pin_timestamp:    string;
	guild_id:              string;
	name:                  string;
	parent_id:             string;
	rate_limit_per_user:   number;
	topic:                 null;
	position:              number;
	permission_overwrites: PermissionOverwrite[];
	nsfw:                  boolean;
}

export interface PermissionOverwrite {
	id:    string;
	type:  number;
	allow: string;
	deny:  string;
}
