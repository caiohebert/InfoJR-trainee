import Head from 'next/head'
import {components} from "../../slices"
import { createClient } from '../../prismicio'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { SliceZone } from '@prismicio/react'

// Criando o tipo da pagina
type PageProps = InferGetStaticPropsType<typeof getStaticProps>

export default function Home({page}: PageProps) {
  return (
    <>
      <Head>
        <title>ZeMaroto</title>
        <meta name="description" content="Site criado por Caio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className='main'>
        <SliceZone slices={page.data.slices} components={components} />
      </main>
    </>
  )
}


// pegando a pagina home do repositório e colocando no index da pagina web
export async function getStaticProps({previewData}: GetStaticPropsContext) {
  const client = createClient({ previewData })
  const page = await client.getByUID('page', "home")

  return {
    props: {
      page,
    },
  }
}