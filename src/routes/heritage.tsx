import { Link } from "react-router-dom";
import { Layout } from "@/components/site/Layout";
import desk from "@/assets/byron-book.jpg";
import plaque from "@/assets/byron-plaque.jpg";



export default function Home() {

  return (
    <Layout>
      <section className="px-6 md:px-10 pt-6">
        <p className="eyebrow">№ 04 — A footnote in English letters</p>
      </section>

      {/* enormous serif quote */}
      <section className="px-6 md:px-10 mt-10 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-10 md:col-start-2">
          <p className="font-display text-[16vw] md:text-[12vw] leading-[0.88] text-cream tracking-tight">
            &ldquo;<span className="font-serif-i text-walnut">Fugitive</span><br/>
            Pieces&rdquo;
          </p>
          <p className="mt-8 font-serif-i text-xl text-muted-foreground">
            Newark, S. &amp; J. Ridge, November 1806.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-10 mt-32 grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-5 md:col-start-1">
          <img src={desk} alt="Quill pen resting beside a candle and leather-bound book on a dark oak writing desk" loading="lazy" width={1280} height={1600} className="w-full h-[80vh] object-cover" />
          <p className="mt-3 font-serif-i text-sm text-muted-foreground">Plate V — A printer&apos;s study, reconstructed.</p>
        </div>
        <div className="col-span-12 md:col-span-6 md:col-start-7 md:pt-20">
          <h2 className="font-display text-4xl md:text-5xl text-cream leading-[0.98]">
            A nineteen-year-old<br/>poet, &amp; a Newark<br/><span className="font-serif-i text-walnut">printer</span>.
          </h2>
          <div className="mt-10 space-y-6 max-w-[58ch] text-cream/85 leading-[1.8]">
            <p>
              George Gordon Byron was nineteen years old when he handed S. &amp; J. Ridge, a Newark printing house, a small sheaf of poems. The volume was intended for private circulation only — a hundred copies, distributed among friends.
            </p>
            <p>
              Within weeks, on the advice of a clergyman who found certain verses indelicate, Byron recalled and destroyed almost the entire run. Four copies are known to survive.
            </p>
            <p>
              The following July, Ridge issued a revised collection from the same press. It was titled <em className="font-serif-i">Hours of Idleness</em>, and it carried Byron&apos;s name into the wider world. The review that followed in <em className="font-serif-i">The Edinburgh</em> made him a national figure.
            </p>
            <p>
              The press stood on the upper floors of this building. The plaque on the Market Place elevation has marked the fact since the 19th century.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="mt-40 px-6 md:px-10 grid grid-cols-12 gap-6">
        <p className="col-span-12 md:col-span-3 eyebrow">A chronology</p>
        <ol className="col-span-12 md:col-span-9 divide-y divide-border border-y border-border">
          {[
            ["1788", "George Gordon Byron born in London."],
            ["1806", "Aged nineteen, Byron prints Fugitive Pieces privately at S. & J. Ridge, Newark — almost the entire run is later recalled."],
            ["1807", "Hours of Idleness is published from the same press in July, with Byron's name on the title page."],
            ["1809", "Childe Harold's Pilgrimage begun on the Grand Tour; published 1812."],
            ["1893", "G H Porter Provisions opens on the ground floor, beginning the continuous trade that gives this house its name."],
          ].map(([y, t]) => (
            <li key={y as string} className="grid grid-cols-12 gap-6 py-10">
              <p className="col-span-3 md:col-span-2 font-display text-3xl md:text-5xl text-cream tabular-nums">{y}</p>
              <p className="col-span-9 md:col-span-10 max-w-[58ch] text-cream/85 leading-[1.7]">{t}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-32 px-6 md:px-10 grid grid-cols-12 gap-6 items-center">
        <div className="col-span-12 md:col-span-7">
          <p className="font-display text-3xl md:text-5xl text-cream leading-[1.05] max-w-[24ch]">
            We do not own a museum. We own the rooms <span className="font-serif-i text-walnut">in which it happened</span>.
          </p>
        </div>
        <div className="col-span-12 md:col-span-4 md:col-start-9">
          <img src={plaque} alt="Brass plaque marking the publication of Lord Byron's first poems" loading="lazy" width={1280} height={1600} className="w-full" />
        </div>
      </section>

      <section className="mt-40 px-6 md:px-10 border-t border-border pt-10">
        <div className="grid grid-cols-12 items-end gap-6">
          <p className="col-span-12 md:col-span-3 eyebrow">Continue</p>
          <Link to="/about" className="col-span-12 md:col-span-9 group block">
            <p className="font-display text-5xl md:text-8xl text-cream leading-[0.95]">
              About &nbsp;<span className="font-serif-i text-muted-foreground inline-block transition-transform duration-700 group-hover:translate-x-4">→</span>
            </p>
            <p className="mt-4 font-serif-i text-muted-foreground">Custodianship, not assembly.</p>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
