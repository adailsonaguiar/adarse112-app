import React from "react";
import { useRouter } from "next/router";

import { bibleApi } from "../../../services/api";
import BodyTemplate from "../../../components/BodyTemplate";
import { Select } from "../../../components/Select";
import { SelectOption } from "../../../components/SelectOption";
import { Loading } from "../../../components/Loading";
import { FormBible } from "../../../components/Bible/FormBible";
import { BibleChapter } from "../../../components/Bible/BibleChapter";

export default function Bible({ books, verses }) {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const [bookSelected, setBookSelected] = React.useState(books[0]);
  const [chapterSelected, setChapterSelected] = React.useState(
    router.query.chapter
  );

  const [verseSelected, setVerseSelected] = React.useState("");

  const chaptersBool = React.useMemo(() => {
    return Array.apply(null, Array(bookSelected?.chapters)).map(function (
      y,
      i
    ) {
      return i + 1;
    });
  }, [bookSelected?.chapters]);

  const navigateToReference = () => {
    if (bookSelected.abbrev)
      router.push(`/bible/${bookSelected?.abbrev.pt}/${chapterSelected}`);
  };

  const selectBook = (event) => {
    const bookFound = books.find((item) => item.name === event.target.value);
    setBookSelected(bookFound);
  };

  const selectChapter = (event) => setChapterSelected(event.target.value);

  React.useEffect(() => {
    navigateToReference();
  }, [bookSelected, chapterSelected]);

  React.useEffect(() => {
    const book = books.find((item) => item.abbrev.pt === router.query.book);
    setBookSelected(book);
    if (router.query.chapter > book.chapters) setChapterSelected(1);
  }, [router.query.chapter]);

  router.events?.on("routeChangeStart", () => setLoading(true));

  router.events?.on("routeChangeComplete", () => setLoading(false));

  return (
    <BodyTemplate>
      <div className="flex flex-col w-full px-10 py-10 items-center">
        <FormBible
          books={books}
          chapters={chaptersBool}
          selectBook={selectBook}
          selectChapter={selectChapter}
          bookSelected={bookSelected}
          chapterSelected={router.query.chapter}
        />
        <BibleChapter
          bookSelected={bookSelected}
          chapterSelected={router.query.chapter}
          verses={verses}
          selectVerse={(verse) => setVerseSelected(verse)}
          verseSelected={verseSelected}
        />
      </div>
      {loading && <Loading />}
    </BodyTemplate>
  );
}

export async function getServerSideProps(context) {
  const { data } = await bibleApi.get("books", {
    headers: { Authorization: `Bearer ${process.env.NEXT_APP_BIBE_API_TOKEN}` },
  });

  const BOOK = context.params.book;
  const CHAPTER = context.params.chapter;
  try {
    const {
      data: { verses },
    } = await bibleApi.get(`/verses/acf/${BOOK}/${CHAPTER}`, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_APP_BIBE_API_TOKEN}`,
      },
    });
    return {
      props: {
        books: data,
        verses,
      },
    };
  } catch (error) {}
  return {
    props: {
      books: data,
      verses: [],
    },
  };
}
