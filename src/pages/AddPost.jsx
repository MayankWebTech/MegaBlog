import React from 'react'
import { Container, PostForm } from '../Components'

function AddPost() {
  return (
    <div className='py-8 bg-customGreen text-customBlue font-bold'>
        <Container>
            <PostForm />
        </Container>
    </div>
  )
}

export default AddPost