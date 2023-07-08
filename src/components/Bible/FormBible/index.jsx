import React from "react";
import { Select } from "../../Select";
import { SelectOption } from "../../SelectOption";

export function FormBible({books, chapters, selectBook, selectChapter, bookSelected, chapterSelected}) {
  return (
    <div className="grid grid-cols-2 gap-10 justify-center w-full md:w-1/2">
      <Select
        name="books"
        label="Livros"
        onChange={selectBook}
        value={bookSelected?.name}
      >
        {books?.map((book) => (
          <SelectOption
            key={book.chapters + book.name}
            item={{ id: book.name, name: book.name }}
          />
        ))}
      </Select>
      <Select
        name="chapter"
        label="Capítulo"
        onChange={selectChapter}
        value={chapterSelected}
      >
        {chapters?.map((ch) => (
          <SelectOption key={ch} item={{ id: ch, name: ch }} selected={ch} />
        ))}
      </Select>
    </div>
  );
}
