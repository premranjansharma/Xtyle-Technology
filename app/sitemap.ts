import { MetadataRoute } from "next";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL ?? "https://xtyletechnology.com";

type Route = {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

const routes: Route[] = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services", changeFrequency: "weekly", priority: 0.9 },
  { path: "/careers", changeFrequency: "weekly", priority: 0.8 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
