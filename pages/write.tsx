import { NextPage } from 'next'
import React from 'react'
import TextField from '@mui/material/TextField'

import { MainLayout } from '../layouts/MainLayout'

const writePage: NextPage = () => {
  return (
    <MainLayout>
      <div>
        <TextField placeholder='Заголовок' />
      </div>
    </MainLayout>
  )
}

export default writePage;
