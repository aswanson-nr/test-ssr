import * as React from "react"

import Layout from "../components/layout"
const TESTVAR = process.env.TESTVAR
export const getServerData = () => {
  return {
    props: {
      data: TESTVAR,
    },
  }
}

const IndexPage = ({ serverData }) => {
  console.log(serverData)
  const testVar = serverData.data
  return (
    <Layout>
      <p>Test var: {testVar}</p>
    </Layout>
  )
}

export default IndexPage
