import { MemberRoleEnum, RSVPStatusEnum } from "./enums";

// ClubMember interface
interface ClubMember {
  userId: string;
  clubId: string;
  role: MemberRoleEnum;
  rsvpStatus?: RSVPStatusEnum;
  joinedAt: Date;
}

export type { ClubMember };
