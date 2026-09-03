import SynthpediaExplorer from "@/components/synthpedia-explorer";
import synths from "@/lib/synths";

export default function Home() {
  return <SynthpediaExplorer synths={synths} />;
}
