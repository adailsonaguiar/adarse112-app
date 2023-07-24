import React from "react";
import { useRouter } from "next/router";

import { bibleApi, harpaApi, harpaNumberAPI } from "../../services/api";
import BodyTemplate from "../../components/BodyTemplate";
import { Heading } from "../../components/Heading";
import { Loading } from "../../components/Loading";

export default function Harpa({ music }) {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);

  // const navigateToReference = () => {
  //   if (bookSelected.abbrev)
  //     router.push(`/bible/${bookSelected?.abbrev.pt}/${chapterSelected}`);
  // };

  router.events?.on("routeChangeStart", () => setLoading(true));

  router.events?.on("routeChangeComplete", () => setLoading(false));

  return (
    <BodyTemplate>
      <div className="flex flex-col w-full px-10 py-10 items-center">
        <Heading style="text-white">Harpa Cristã</Heading>

        <div
          className="text-white text-3\xl"
          dangerouslySetInnerHTML={{ __html: music.replace('\n', '<br/>') }}
        />
      </div>
      {loading && <Loading />}
    </BodyTemplate>
  );
}

export async function getServerSideProps(context) {
  const NUMBER = context.params.number;
  try {
    const {
      data: { content },
    } = await harpaNumberAPI.get(`${NUMBER}`);
    console.log(content.replace('\n', 'RRRRRRRRRRRRRRRRRR'));
    return {
      props: {
        music: content,
      },
    };
  } catch (error) {}

  return {
    props: {
      music: null,
    },
  };
}
