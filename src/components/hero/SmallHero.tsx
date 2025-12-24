import FlexContainer from "../FlexContainer";
import TitleContainer from "../TitleContainer";

type SmallHeroProps = {
  title?: string;
  imageUrl?: string;
  children?: React.ReactNode;
};

const SmallHero = ({ title, imageUrl, children }: SmallHeroProps) => {
  return (
    <FlexContainer
      className={`flex-col w-screen h-96 lg:h-[500px] bg-cover bg-center [clip-path:polygon(0_0,_100%_0,_100%_90%,_0_100%)] justify-center items-center text-white text-center px-4 lg:px-0 gap-8 font-bold`}
      style={{
        backgroundImage: `url(${
          imageUrl ||
          "https://via.placeholder.com/1500x500/D3D3D3/000000?text=No+Image"
        })`,
      }}
    >
      {title && (
        <TitleContainer
          title={title}
          className="font-plusJakarta text-6xl text-white"
        />
      )}
      {children}
    </FlexContainer>
  );
};

export default SmallHero;
