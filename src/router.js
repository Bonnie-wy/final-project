import { Route } from "react-router-dom";

function RouteWrapper({ page: Page, layout: Layout, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout {...props}>
          <Page {...props} />
        </Layout>
      )}
    />
  )
}
