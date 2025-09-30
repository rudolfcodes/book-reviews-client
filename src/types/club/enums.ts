// All club enums
enum VenueEnum {
  Library = "library",
  Cafe = "cafe",
  Home = "home",
  Park = "park",
  Other = "other",
}

enum MemberRoleEnum {
  Admin = "admin",
  Moderator = "moderator",
  Member = "member",
}

enum RSVPStatusEnum {
  Attending = "attending",
  Maybe = "maybe",
  NotAttending = "not_attending",
  Pending = "pending",
}

enum BookCategoriesEnum {
  Fiction = "fiction",
  NonFiction = "non_fiction",
  Mystery = "mystery",
  Fantasy = "fantasy",
  Biography = "biography",
}

enum ClubStatusEnum {
  Active = "active",
  Inactive = "inactive",
  Archived = "archived",
}

enum MeetingFrequencyEnum {
  Weekly = "weekly",
  BiWeekly = "bi_weekly",
  Monthly = "monthly",
  Quarterly = "quarterly",
}

enum ClubLanguageEnum {
  English = "en",
  German = "de",
  French = "fr",
}

export {
  VenueEnum,
  MemberRoleEnum,
  RSVPStatusEnum,
  BookCategoriesEnum,
  ClubStatusEnum,
  MeetingFrequencyEnum,
  ClubLanguageEnum,
};
