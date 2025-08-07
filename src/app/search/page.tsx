"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SearchForm from "@/components/SearchForm";
import TitleContainer from "@/components/TitleContainer";
import Head from "next/head";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const SearchResults = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const [error, setError] = useState<string | null>("");
  // useEffect that is called each time the query changes
  // do nothing if there is no query

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Search results - Bookclub CH</title>
        <meta
          name="description"
          content="Search results for your query on Bookclub CH"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="mx-auto w-screen max-w-screen-lg flex-grow">
        {/* Title div with search results query */}
        <TitleContainer
          title={`Search results: ${query}`}
          className="text-center pt-24 mb-20 bg-none"
        />
        {/* SearchForm */}
        <SearchForm initialQuery={query} setInitialQuery={() => {}} />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SearchResults;
