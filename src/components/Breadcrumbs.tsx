interface BreadcrumbsProps {
  path: string;
}

const Breadcrumbs = ({ path }: BreadcrumbsProps) => {
  const segments = path.split("/").filter((seg) => seg.length > 0);

  if (segments.length === 0) {
    return <div>Home</div>;
  }

  return (
    <nav aria-label="breadcrumb">
      <ul>
        <li className="inline">
          <a href="/" className="text-blue-600 hover:underline">
            Home
          </a>
        </li>
        {segments.map((segment, index) => {
          const isLast = index === segments.length - 1;
          const href = "/" + segments.slice(0, index + 1).join("/");
          return (
            <li key={index} className="inline">
              <span className="mx-2">/</span>
              {isLast ? (
                <span className="text-gray-500">{segment}</span>
              ) : (
                <a href={href} className="text-blue-600 hover:underline">
                  {segment}
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
