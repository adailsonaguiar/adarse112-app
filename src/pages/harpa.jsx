import React from "react";
import { useRouter } from "next/router";
import BodyTemplate from "../components/BodyTemplate";
import { Heading } from "../components/Heading";
import { Loading } from "../components/Loading";
import { harpaApi } from "../services/api";

export default function Harpa({ musics }) {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const [filtered, setFiltered] = React.useState(musics);

  const filterMusics = (searchParam = "") => {
    if (searchParam === "") setFiltered(musics);
    else {
      const musicsFiltered = musics.filter((music) => {
        if (music?.id.toString()?.includes(searchParam)) return music;
        if (music?.title.toUpperCase().includes(searchParam.toUpperCase()))
          return music;
      });

      if (musicsFiltered?.length) setFiltered(musicsFiltered);
    }
  };

  React.useEffect(() => {
    filterMusics(search);
  }, [search]);

  router.events?.on("routeChangeStart", () => setLoading(true));

  router.events?.on("routeChangeComplete", () => setLoading(false));

  return (
    <BodyTemplate>
      <div className="flex flex-col w-full px-10 py-10 items-center">
        <Heading style="text-white">Harpa Cristã</Heading>

        <div className="flex w-full md:w-1/2 py-10">
          <input
            type="text"
            placeholder="Busque seus hinos preferidos.."
            className="border-2 outline-none border-white bg-transparent h-28 w-full text-white text-3xl p-5 rounded-md"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="grid gap-10 pt-14 md:grid-cols-3 md:w-1/2">
          {filtered.map((music) => (
            <div
              className="flex items-center border-l-8 border-white rounded-lmdg py-10 px-7 text-white hover:bg-white hover:text-madureira-700 cursor-pointer"
              key={music.id}
            >
              <p className="text-4xl mr-5 font-bold">{music.id}</p>
              <p className="text-2xl">{music.title}</p>
            </div>
          ))}
        </div>
      </div>
      {loading && <Loading />}
    </BodyTemplate>
  );
}

export async function getServerSideProps(context) {
  const { data } = await harpaApi.get("list.json");

  return {
    props: {
      musics: data,
    },
  };
}
