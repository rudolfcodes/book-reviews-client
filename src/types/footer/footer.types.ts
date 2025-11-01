type LinkType = {
  text: string;
  href: string;
};

interface FooterColumnProps {
  title?: string;
  links: LinkType[];
}
export type { FooterColumnProps, LinkType };
