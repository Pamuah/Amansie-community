import React from "react";
import NewsCard from "../components/news_card";

const NewsPage = () => {
  return (
    <div className="min-h-screen w-full bg-white p-10 relative">
      <div className="min-h-16 rounded-lg bg-gray-200 w-full p-2 ">
        <h1 className="text-2xl font-bold text-slate-800 text-center justify-center">
          Welcome to our <span className="text-red-400">Bulletin</span>
          <br />
          Stay in the Loop
        </h1>
      </div>
      <div className="flex flex-col gap-4 mt-4 px-10 text-wrap text-xs">
        <NewsCard
          image={
            "https://images.pexels.com/photos/167538/pexels-photo-167538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          title={"The Cedi has appreciated by 34% to the Dollar"}
          caption={
            "The Ghanaian Cedi has strengthened significantly, gaining 34% against the US Dollar—marking one of its sharpest appreciations in recent years"
          }
          timePosted={"20/03/2023"}
        />
      </div>
    </div>
  );
};

export default NewsPage;
