import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Overview() {
  const [apiTracks, setApiTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // 1. Fetch data dari API GDGoC UGM
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const res = await fetch("https://gdgoc-ugm-api.vercel.app/api/tracks");
        
        if (!res.ok) {
          throw new Error("Gagal mengambil data dari server API.");
        }
        
        const data = await res.json();
        setApiTracks(Array.isArray(data) ? data : data.tracks || data.data || []);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // 2. Logic Filter Pencarian (Advanced Frontend Logic)
  const filteredTracks = apiTracks.filter((t) => {
    const title = t.title || t.name || "";
    const desc = t.description || t.desc || "";
    return title.toLowerCase().includes(searchTerm.toLowerCase()) ||
           desc.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <main className="min-h-screen w-full bg-white text-[#242424] antialiased">
      
      {/* 1. HERO SECTION OVERVIEW */}
      <section className="mx-auto flex max-w-[1440px] flex-col justify-between gap-10 px-6 py-16 lg:flex-row lg:items-center lg:px-24">
        <div className="max-w-[620px]">
          <div className="flex items-center gap-2.5">
            <span className="h-[7px] w-[7px] rounded-full bg-[#4284F4]" />
            <p className="text-xs font-medium uppercase tracking-wide text-[#5F6368]">Overview • Programs & Learning Tracks</p>
          </div>
          <h1 className="mt-4 text-5xl font-bold leading-[1.05] text-[#1967D2] sm:text-[64px]">
            <span className="text-[#242424]">Find your spark.</span>
            <br />
            Build your own path.
          </h1>
          <p className="mt-6 text-[18px] leading-[1.6] text-[#5F6368]">
            Explore how research, creativity, and development connect. Start with one interest. Grow through practice and the people around you.
          </p>
        </div>

        <div className="relative flex max-w-[420px] items-center justify-center">
          <img 
            src="/Learning-logo.svg" 
            alt="Overview Illustration" 
            className="w-full h-auto object-contain drop-shadow-lg rounded-2xl"
          />
        </div>
      </section>

      {/* STICKY SUB-NAV / JUMP LINKS & SEARCH BAR */}
      <div className="border-y border-[#DADCE0] bg-white sticky top-[72px] z-40">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-6 py-4 lg:flex-row lg:items-center lg:justify-between lg:px-24">
          <div className="flex gap-8 overflow-x-auto text-sm font-medium text-[#5F6368]">
            <a href="#tracks" className="hover:text-[#1967D2] whitespace-nowrap">Learning tracks ↓</a>
            <a href="#formats" className="hover:text-[#1967D2] whitespace-nowrap">Learning formats ↓</a>
            <a href="#journey" className="hover:text-[#1967D2] whitespace-nowrap">Your learning journey ↓</a>
            <a href="#starting" className="hover:text-[#1967D2] whitespace-nowrap">Find a starting point ↓</a>
          </div>

          {/* SEARCH BAR AKTIF */}
          <div className="w-full lg:w-72">
            <input
              type="text"
              placeholder="Search Tracks..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-full border border-[#DADCE0] bg-gray-50 px-4 py-2 text-xs text-[#242424] focus:border-[#4284F4] focus:bg-white focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* 2. THREE WAYS IN (TRACKS) DENGAN LOADING, ERROR, & EMPTY STATES */}
      <section id="tracks" className="mx-auto max-w-[1440px] px-6 py-20 lg:px-24">
        <p className="text-[10px] font-medium uppercase tracking-wide text-[#5F6368]">Explore your interests</p>
        <h2 className="mt-2 text-[36px] font-bold text-[#242424]">
          Three ways in. Plenty of ways forward.
        </h2>
        <p className="mt-2 text-sm text-[#5F6368]">
          These pathways are starting points, not boxes. Follow one deeply or bring different skills together.
        </p>

        {/* LOADING STATE */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-24">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#4284F4] border-t-transparent"></div>
            <p className="mt-4 text-sm text-[#5F6368]">Menghubungkan kembali...</p>
          </div>
        )}

        {/* ERROR STATE */}
        {error && (
          <div className="mt-12 rounded-2xl border border-[#FCE8E6] bg-[#FCE8E6]/60 p-8 text-center max-w-xl mx-auto">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#EA4335] text-white font-bold text-lg mb-3">
              !
            </div>
            <p className="text-lg font-bold text-[#C5221F]">Koneksi Terputus / Gagal Memuat API</p>
            <p className="mt-2 text-sm text-[#5F6368]">{error}</p>
            <p className="mt-4 text-xs text-[#80868B]">Coba aktifkan kembali koneksi internetmu lalu refresh halaman.</p>
          </div>
        )}

        {/* DATA READY STATE */}
        {!loading && !error && (
          <>
            {/* EMPTY STATE (Jika pencarian tidak ditemukan) */}
            {filteredTracks.length === 0 ? (
              <div className="mt-10 rounded-2xl border border-[#DADCE0] bg-[#F8F9FA] py-16 text-center">
                <p className="text-lg font-bold text-[#242424]">Tidak ada track yang cocok dengan &quot;{searchTerm}&quot;</p>
                <p className="mt-2 text-sm text-[#5F6368]">Coba gunakan kata kunci pencarian yang lain.</p>
                <button
                  onClick={() => setSearchTerm("")}
                  className="mt-6 rounded-lg bg-[#1967D2] px-5 py-2 text-xs font-medium text-white hover:bg-[#1557b0]"
                >
                  Reset Pencarian
                </button>
              </div>
            ) : (
              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {filteredTracks.map((track, idx) => (
                  <article key={track.id || idx} className="overflow-hidden rounded-2xl border border-[#E8EAED] bg-white flex flex-col justify-between shadow-sm transition-shadow hover:shadow-md">
                    <div className="relative h-[200px] w-full overflow-hidden border-b border-[#E8EAED] bg-slate-50">
                      <img 
                        src={idx === 0 ? "/Research-and-Discovery.svg" : idx === 1 ? "/Design-and-Creativity.svg" : "/Development.svg"} 
                        alt={track.title} 
                        className="absolute left-0 top-0 h-auto w-full object-cover object-top" 
                      />
                    </div>
                    <div className="space-y-3 p-6 flex-grow flex flex-col justify-between">
                      <div>
                        <p className="text-[10px] font-medium uppercase tracking-wide text-[#1967D2]">
                          {track.tagline || track.category || "Explore the why"}
                        </p>
                        <h3 className="text-xl font-bold text-[#242424] mt-1">{track.title}</h3>
                        <p className="text-sm leading-relaxed text-[#5F6368] mt-2">{track.description || track.desc}</p>
                      </div>
                      <div>
                        <hr className="my-4 border-[#E8EAED]" />
                        <p className="text-[11px] text-[#80868B]">
                          {track.tags ? track.tags.join(" · ") : "Problem framing · User research"}
                        </p>
                        <div className="pt-2">
                          <Link to="/" className="inline-flex items-center gap-1.5 text-xs font-medium text-[#1967D2] hover:underline">
                            Explore this track →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </>
        )}
      </section>

      {/* 3. TABEL PERBANDINGAN */}
      <section className="mx-auto max-w-[1440px] px-6 pb-20 lg:px-24">
        <h2 className="text-[28px] font-bold text-[#242424]">From an interest to something you can show.</h2>
        <div className="mt-8 overflow-x-auto rounded-xl border border-[#DADCE0]">
          <table className="w-full text-left text-sm text-[#5F6368]">
            <thead className="bg-[#F8F9FA] text-xs uppercase tracking-wider text-[#3C4043] border-b border-[#DADCE0]">
              <tr>
                <th className="px-6 py-4 font-semibold">Pathway</th>
                <th className="px-6 py-4 font-semibold">What you can practice</th>
                <th className="px-6 py-4 font-semibold">A possible outcome</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#DADCE0]">
              <tr className="bg-white">
                <td className="px-6 py-4 font-bold text-[#242424]">Research & discovery</td>
                <td className="px-6 py-4">Listening, problem framing, and testing assumptions</td>
                <td className="px-6 py-4">A research insight and a focused problem brief</td>
              </tr>
              <tr className="bg-white">
                <td className="px-6 py-4 font-bold text-[#242424]">Design & creativity</td>
                <td className="px-6 py-4">Ideation, user flows, and prototype feedback</td>
                <td className="px-6 py-4">An interactive prototype and a design story</td>
              </tr>
              <tr className="bg-white">
                <td className="px-6 py-4 font-bold text-[#242424]">Development</td>
                <td className="px-6 py-4">Coding, testing, and connecting tools</td>
                <td className="px-6 py-4">A working demo with a clear explanation</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 4. FORMAT CHANGES SECTION */}
      <section id="formats" className="bg-[#F8F9FA] py-20">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-24">
          <p className="text-[10px] font-medium uppercase tracking-wide text-[#5F6368]">Ways to learn</p>
          <h2 className="mt-2 text-[36px] font-bold text-[#242424]">The format changes. The curiosity stays.</h2>
          <p className="mt-2 text-sm text-[#5F6368]">Explore the kinds of experiences that help you move from understanding to doing.</p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-[#DADCE0] bg-white p-8">
              <span className="inline-block rounded-lg bg-[#E8F0FE] p-3 text-[#1967D2] font-bold mb-4">◫</span>
              <h3 className="text-lg font-bold text-[#242424]">Study groups</h3>
              <p className="mt-2 text-sm text-[#5F6368]">Build foundations with peers. Work through a topic, compare approaches, and make space for questions.</p>
              <p className="mt-4 text-xs font-medium text-[#1967D2]">Best for · Learning the fundamentals</p>
            </div>

            <div className="rounded-2xl border border-[#DADCE0] bg-white p-8">
              <span className="inline-block rounded-lg bg-[#E6F4EA] p-3 text-[#188038] font-bold mb-4">&lt;/&gt;</span>
              <h3 className="text-lg font-bold text-[#242424]">Hands-on workshops</h3>
              <p className="mt-2 text-sm text-[#5F6368]">Get introduced to a tool or method, follow a practical exercise, and take away something to keep exploring.</p>
              <p className="mt-4 text-xs font-medium text-[#1967D2]">Best for · Trying something new</p>
            </div>

            <div className="rounded-2xl border border-[#DADCE0] bg-white p-8">
              <span className="inline-block rounded-lg bg-[#FEF7E0] p-3 text-[#B06000] font-bold mb-4">◎</span>
              <h3 className="text-lg font-bold text-[#242424]">Project circles</h3>
              <p className="mt-2 text-sm text-[#5F6368]">Connect research, design, and development around a shared problem. Learn through making and feedback.</p>
              <p className="mt-4 text-xs font-medium text-[#1967D2]">Best for · Putting skills into practice</p>
            </div>

            <div className="rounded-2xl border border-[#DADCE0] bg-white p-8">
              <span className="inline-block rounded-lg bg-[#FCE8E6] p-3 text-[#C5221F] font-bold mb-4">💡</span>
              <h3 className="text-lg font-bold text-[#242424]">Knowledge sharing</h3>
              <p className="mt-2 text-sm text-[#5F6368]">Walk through an idea, draw a lesson from your process, and discover how other students approach their work.</p>
              <p className="mt-4 text-xs font-medium text-[#1967D2]">Best for · Exchanging perspectives</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 4 LANGKAH PERJALANAN (JOURNEY) */}
      <section id="journey" className="mx-auto max-w-[1440px] px-6 py-20 lg:px-24">
        <p className="text-[10px] font-medium uppercase tracking-wide text-[#5F6368]">Progress, not perfection</p>
        <h2 className="mt-2 text-[36px] font-bold text-[#242424]">A journey you can keep building on.</h2>

        <div className="mt-12 grid gap-8 md:grid-cols-4 border-t border-[#DADCE0] pt-8">
          <div>
            <p className="text-3xl font-bold text-[#1967D2]">01</p>
            <h3 className="mt-3 text-base font-bold text-[#242424]">Discover</h3>
            <p className="mt-2 text-xs text-[#5F6368]">Explore a topic and find the questions you want to answer.</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[#1967D2]">02</p>
            <h3 className="mt-3 text-base font-bold text-[#242424]">Practice</h3>
            <p className="mt-2 text-xs text-[#5F6368]">Try an exercise, work through a challenge, and ask for help.</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[#1967D2]">03</p>
            <h3 className="mt-3 text-base font-bold text-[#242424]">Build</h3>
            <p className="mt-2 text-xs text-[#5F6368]">Apply your learning to a small idea with a clear purpose.</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[#1967D2]">04</p>
            <h3 className="mt-3 text-base font-bold text-[#242424]">Share</h3>
            <p className="mt-2 text-xs text-[#5F6368]">Show your process, gather feedback, and help someone else.</p>
          </div>
        </div>
      </section>

      {/* 6. BANNER PENUTUP */}
      <section id="starting" className="mx-auto max-w-[1440px] px-6 pb-20 lg:px-24">
        <div className="rounded-2xl bg-[#FEF7E0] p-8 md:p-12 mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-wide text-[#80868B]">Start where you are</p>
            <h3 className="mt-2 text-2xl font-bold text-[#242424]">New to tech? That’s a starting point, too.</h3>
          </div>
          <p className="max-w-md text-xs leading-relaxed text-[#5F6368]">
            You don’t need a finished portfolio or the perfect track choice. Pick a topic you’re curious about. If you’re unsure, tell us what interests you and we can start a conversation.
          </p>
          <a href="#" className="text-sm font-medium text-[#1967D2] hover:underline whitespace-nowrap">
            Ask about getting started →
          </a>
        </div>

        <div className="rounded-2xl bg-[#E8F0FE] p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-wide text-[#1967D2]">Your next chapter</p>
            <h3 className="mt-2 text-3xl font-bold text-[#1967D2]">Bring your curiosity.<br />We’ll build from there.</h3>
            <p className="mt-2 text-xs text-[#5F6368]">Find a learning track, meet a collaborator, or start a conversation.</p>
          </div>
          <div className="flex flex-col gap-3">
            <Link to="/overview" className="rounded-lg bg-[#4284F4] px-6 py-3 text-sm font-medium text-white text-center hover:bg-[#3b78e0]">
              Explore the overview
            </Link>
            <Link to="/" className="text-xs font-medium text-[#1967D2] text-center hover:underline">
              Talk to the community →
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}