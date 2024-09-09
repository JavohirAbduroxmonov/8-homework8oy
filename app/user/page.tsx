import Link from 'next/link';
import React from 'react';
import Navbar from "../../components/header";

const News: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className='flex flex-col gap-5 px-20 pt-10'>
        <Link href="user/javohir">javohir</Link>
        <Link href="user/jamshid">jamshid</Link>
        <Link href="user/jasur">jasur</Link>
        <Link href="user/jahongir">jahongir</Link>
      </div>
    </>
  );
}

export default News;
