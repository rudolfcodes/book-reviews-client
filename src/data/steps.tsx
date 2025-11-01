import { StepType } from "@/types/step/step.types";
import FindIcon from "@/components/icons/FindIcon";
import JoinIcon from "@/components/icons/JoinIcon";
import ChatIcon from "@/components/icons/ChatIcon";

const steps: StepType[] = [
  {
    stepNumber: 1,
    icon: <FindIcon />,
    title: "Find a club",
    description: "Filter by city, language, and genre.",
    actionText: "Browse clubs",
    actionLink: "/clubs",
  },
  {
    stepNumber: 2,
    icon: <JoinIcon />,
    title: "RSVP",
    description: "Join an event with one click.",
    actionText: "See events",
    actionLink: "/events",
  },
  {
    stepNumber: 3,
    icon: <ChatIcon />,
    title: "Chat & Meet",
    description: "Coordinate and get reminders.",
    actionText: "How chat works",
    actionLink: "/chat",
  },
];

export { steps };
