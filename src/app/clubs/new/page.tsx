import FlexContainer from "@/components/FlexContainer";

/* Next.js Router structure:
  GET /clubs/new -> src/app/clubs/new/page.tsx
  GET /clubs -> src/app/clubs/page.tsx
  GET /clubs/[id] -> src/app/clubs/[id]/page.tsx

  Events:
   GET /clubs/[id]/events -> src/app/clubs/[id]/events/page.tsx
   GET /clubs/[id]/events/new -> src/app/clubs/[id]/events/new/page.tsx
   GET /clubs/[id]/events/[eventId] -> src/app/clubs/[id]/events/[eventId]/page.tsx

*/

const CreateClubPage = () => {
  // This is the page for creating a new club
  // language should be fetched from a global state or context and the default value is "en"

  // I need a segment control button on top. This will be a reusable component
  // title: Create a new literary community
  // subtitle: A great club name will increase the chances of more engagement
  // Create separate CreateClubForm component
  // Illustration on the right side of the form
  const lang: "de" | "fr" | "it" | "en" = "en";

  return (
    <div className="create-club-page flex flex-col items-center justify-center p-8">
      <FlexContainer className="w-full max-w-4xl bg-white"></FlexContainer>
    </div>
  );
};
