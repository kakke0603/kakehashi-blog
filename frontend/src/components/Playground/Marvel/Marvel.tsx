"use client";
import React from "react";

type MarvelCharacterResponse = {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  data: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: [
      {
        id: number;
        name: string;
        description: string;
        modified: Date;
        resourceURI: string;
        urls: [
          {
            type: string;
            url: string;
          },
        ];
        thumbnail: {
          path: string;
          extension: string;
        };
        comics: {
          available: number;
          returned: number;
          collectionURI: string;
          items: [
            {
              resourceURI: string;
              name: string;
            },
          ];
        };
        stories: {
          available: number;
          returned: number;
          collectionURI: string;
          items: [
            {
              resourceURI: string;
              name: string;
              type: string;
            },
          ];
        };
        events: {
          available: number;
          returned: number;
          collectionURI: string;
          items: [
            {
              resourceURI: string;
              name: string;
            },
          ];
        };
        series: {
          available: number;
          returned: number;
          collectionURI: string;
          items: [
            {
              resourceURI: string;
              name: string;
            },
          ];
        };
      },
    ];
  };
  etag: string;
};

const fetchMarvelCharacters = async (): Promise<MarvelCharacterResponse> => {
  const res = await fetch(
    `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=26687d218cdf41da90771665d8854439&hash=${process.env.MARVEL_API_KEY}`
  );
  const data = await res.json();
  return data;
};
// eslint-disable-next-line @next/next/no-async-client-component
export default async function Marvel() {
  const res = await fetchMarvelCharacters();
  console.log(res);
  return (
    <div>
      {res.data.results.map((character, key) => (
        <div key={key}>{character.name}</div>
      ))}
    </div>
  );
}
