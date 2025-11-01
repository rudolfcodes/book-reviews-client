type StepType = {
  stepNumber: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  actionText: string;
  actionLink: string;
};

interface ListStepCardsProps {
  steps: StepType[];
  className?: string;
}

export type { StepType, ListStepCardsProps };
