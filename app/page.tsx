export default function Home() {
  type Block = {
    href: string;
    slug: string;
  };

  const blocks: Block[] = [
    {
      href: "",
      slug: "",
    },
    {
      href: "",
      slug: "",
    },
    {
      href: "",
      slug: "",
    },
    {
      href: "",
      slug: "",
    },
  ];
  return (
    <main>
      {blocks.map((b) => (
        <p key={b.slug} className="bg-red-500">
          {b.href}
        </p>
      ))}
    </main>
  );
}
