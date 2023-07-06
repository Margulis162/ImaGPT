import React, {useState, useEffect} from 'react'
import { Loader, Card, FormField } from '../components'

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);

  const RenderCards = ({data, title}) => {
    if(data?.lenght > 0){
      return data.map((post) => <Card key= {post._id} {...post} />)
    }

    return (
      <h2 className='mt-5 font-bold text-[#373637] text-lg'>{title}</h2>
    )
  }

  const [searchText, setSearchText] = useState(' ')

  return (
    <section className='max-w-7x1 mx-auto'>
      <div>
        <h1 className='font-bold text-[#3c3840] text-[32px]'>Discover Most Popular Generated Images</h1>
        <p className='mt-2 text-[#4f5152] text-[1.3rem] max-w-[500px]'> See what other people generated with AI</p>
      </div>

      <div className='mt-16'>
        <FormField />
      </div>

      <div className='mt-10'>
        {loading ? (
          <div className='flex justify-center items-center'>
            <Loader />
          </div>
        ) : (
          <>
          {searchText && (
            <h2 className='font-medium text-[#4f5152] text-lg mb-3'>
              Showing results for: <span className='text-[#3c3840]'>{searchText}</span>
            </h2>
          )}
          <div className='grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3'>
            {searchText ? (
              <RenderCards
              data={[]}
              title="Nothing found :("
              />
            ) : (
              <RenderCards
              data={[]}
              title="No posts found"
              />
            )}
          </div>

          </>
        )}
      </div>

    </section>
  )
}

export default Home