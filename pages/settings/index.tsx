import { TagIcon } from '@heroicons/react/24/outline'
import Head from 'next/head'
import { DonutChart } from 'react-circle-chart'
import Base from '../../components/Base'
import DropdownSection from '../../components/particles/DropdownSection'
import TextIconButton from '../../components/particles/TextIconButton'
import CategoryEditor from './CategoryEditor'


export default function Settings() {
  return (
    <>
      <Head>
        <title>Budget App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Base headline="Settings">
        <div className="flex w-full">
          <div className="w-1/3">
            <TextIconButton Icon={TagIcon} content="Categories" size='lg' margin='lg' />
          </div>
          <div className="w-2/3">
            <h2 className='ml-6'>Categories</h2>
            <CategoryEditor />
          </div>
        </div>
      </Base>
    </>
  )
}
