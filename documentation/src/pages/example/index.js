import React from "react";
import Layout from "@theme/Layout";

import Configurator from "../../example/Configurator";

function Example() {
  return (
    <Layout title="Example">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
          fontSize: "20px",
        }}
      >
        <Configurator />
      </div>
    </Layout>
  );
}

export default Example;
