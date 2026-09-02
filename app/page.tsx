import SynthpediaExplorer from "@/components/synthpedia-explorer";
import synths from "@/lib/synths.json";

export default function Home() {
  return <SynthpediaExplorer synths={synths} />;
}
