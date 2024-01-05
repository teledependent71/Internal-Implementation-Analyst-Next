import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'

import authorsResource from '../resources/authors'

const TestPage = (props) => {
  return (
    <>
      <div className="test-page-container">
        <Head>
          <title>test-page - Internal Implementation Analyst</title>
          <meta
            property="og:title"
            content="test-page - Internal Implementation Analyst"
          />
        </Head>
        <DataProvider
          renderSuccess={(context_8jacou) => (
            <>
              <h1 id={context_8jacou?.Name}>Heading</h1>
            </>
          )}
          initialData={props.context8jacouProp}
          persistDataDuringLoading={true}
          key={props?.context8jacouProp?.id}
        />
      </div>
      <style jsx>
        {`
          .test-page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default TestPage

export async function getStaticProps(context) {
  try {
    const context8jacouProp = await authorsResource({
      ...context?.params,
    })
    return {
      props: {
        context8jacouProp: context8jacouProp?.data?.[0],
      },
      revalidate: 60,
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
