import "server-only";
import { notFound } from "next/navigation";

export default function CatchAllPage() {
  notFound();
}
