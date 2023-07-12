import { useState } from 'react'
import { Post } from './Post'
import { Header } from './components/Header'

function App() {
  return (
    <>
      <Header />
      <Post
        author="Deigo"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dolores quidem consequuntur odit cumque. Velit, beatae modi itaque repellendus deleniti reprehenderit maxime dolores quo expedita id impedit aperiam voluptas architecto."
      />
      <Post
        author="Gabriel"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dolores quidem consequuntur odit cumque. Velit, beatae modi itaque repellendus deleniti reprehenderit maxime dolores quo expedita id impedit aperiam voluptas architecto."
      />
    </>
  )
}

export default App

