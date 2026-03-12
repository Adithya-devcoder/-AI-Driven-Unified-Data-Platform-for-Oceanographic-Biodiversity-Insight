import { MapboxOverlay } from "@deck.gl/mapbox";
import { useControl } from "react-map-gl/maplibre";
import type { Layer } from "deck.gl";

function DeckGLOverlayInner({ layers }: { layers: Layer[] }) {
  const overlay = useControl(() => new MapboxOverlay({ interleaved: true }));
  overlay.setProps({ layers });
  return null;
}

export { DeckGLOverlayInner as DeckGLOverlay };
