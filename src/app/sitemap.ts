import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap { return ["", "about", "services", "classes", "why-us", "testimonials", "contact"].map(route => ({ url: `https://tutorsacademy.example/${route}`, lastModified: new Date() })); }
