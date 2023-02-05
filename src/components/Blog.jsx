export const Blog = ({ title, description, date, readingTime, url }) => {
  return (
    <a
      href={url}
      rel="prefetch"
      className="flex flex-col gap-y-3 p-4 mb-8 rounded-xl"
    >
      <h2 className="text-(#a78bfa xl) md:text-3xl bg-gradient-to-r from-violet-500 to-violet-400 bg-clip-text text-transparent font-extrabold">
        {title}
      </h2>

      <div className="flex items-center text-gray-200 md:text-sm font-medium">
        <time dateTime={date}>
          {new Date(date).toLocaleDateString("en-us", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </time>
        <span> • </span> <span>{readingTime}</span>
      </div>
      <p className="text-sm md:text-base font-medium text-white">
        {description}
      </p>
    </a>
  );
};
