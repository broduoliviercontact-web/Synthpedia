"use client";

import Link from "next/link";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { useMemo, useState } from "react";

type Synth = { slug:string; year:number|string; manufacturer:string; name:string; category:string; description:string; image:string; imageStatus:string };
const brandColor=(b:string)=>b==="Roland"?"#ff5c35":b==="Yamaha"?"#8d7dff":b==="Korg"?"#21d4b4":b==="Moog Music"?"#ffbf3f":"#78a9ff";

export default function SynthpediaExplorer({synths}:{synths:Synth[]}){
 const [query,setQuery]=useState(""); const [brand,setBrand]=useState("Toutes"); const [category,setCategory]=useState("Toutes"); const [onlyImages,setOnlyImages]=useState(false);
 const brands=useMemo(()=>["Toutes",...Array.from(new Set(synths.map(s=>s.manufacturer))).sort()],[synths]);
 const categories=useMemo(()=>["Toutes",...Array.from(new Set(synths.map(s=>s.category))).filter(Boolean).sort()],[synths]);
 const filtered=useMemo(()=>{const q=query.toLowerCase().trim();return synths.filter(s=>(!q||`${s.name} ${s.manufacturer} ${s.year}`.toLowerCase().includes(q))&&(brand==="Toutes"||s.manufacturer===brand)&&(category==="Toutes"||s.category===category)&&(!onlyImages||s.image))},[synths,query,brand,category,onlyImages]);
 const years=useMemo(()=>{const map=new Map<string,Synth[]>();filtered.forEach(s=>{const y=String(s.year);map.set(y,[...(map.get(y)??[]),s])});return Array.from(map.entries()).sort((a,b)=>Number(a[0])-Number(b[0]))},[filtered]);
 const reset=()=>{setQuery("");setBrand("Toutes");setCategory("Toutes");setOnlyImages(false)};
 return <main><header className="topbar"><Link href="/" className="logo"><span className="logo-mark">S</span><span>Synthpedia</span></Link><p className="count"><strong>{filtered.length.toLocaleString("fr-FR")}</strong> instruments · 1963—2026</p></header>
  <section className="controls" aria-label="Filtres de la chronologie"><div className="search-wrap"><Search size={18}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Rechercher un synthé, une marque, une année…" aria-label="Rechercher"/>{query&&<button onClick={()=>setQuery("")} aria-label="Effacer"><X size={17}/></button>}</div>
   <label><span>Marque</span><select value={brand} onChange={e=>setBrand(e.target.value)}>{brands.map(b=><option key={b}>{b}</option>)}</select></label><label><span>Type</span><select value={category} onChange={e=>setCategory(e.target.value)}>{categories.map(c=><option key={c}>{c}</option>)}</select></label><label className="check"><input type="checkbox" checked={onlyImages} onChange={e=>setOnlyImages(e.target.checked)}/><span>Avec image</span></label>
   {(query||brand!=="Toutes"||category!=="Toutes"||onlyImages)&&<button className="reset" onClick={reset}><SlidersHorizontal size={16}/> Réinitialiser</button>}</section>
  <div className="timeline-shell"><div className="timeline-line"/>{years.length?years.map(([year,items])=><section className="year-row" key={year} id={`year-${year}`}><div className="year-label"><span>{year}</span><small>{items.length} modèle{items.length>1?"s":""}</small></div><div className="year-dot"/><div className="cards">{items.map(s=><Link className="synth-card" href={`/instrument/${s.slug}`} key={s.slug} style={{"--brand":brandColor(s.manufacturer)} as React.CSSProperties}><div className="thumb">{s.image?<img src={s.image} alt="" loading="lazy" referrerPolicy="no-referrer"/>:<div className="wave">∿</div>}</div><div className="card-copy"><span className="brand">{s.manufacturer}</span><h2>{s.name.replace(`${s.manufacturer} `,"")}</h2><p>{s.category||"instrument électronique"}</p></div><span className="arrow">↗</span></Link>)}</div></section>):<div className="empty"><p>Aucun instrument ne correspond à ces filtres.</p><button onClick={reset}>Afficher toute la collection</button></div>}</div>
 </main>
}
