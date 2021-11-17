import React from "react"
import Parallax from 'react-rellax'

import Background from "./background"

const Top = () => (
  <Parallax speed={-5}>
    <section >
      <Background></Background>
    </section>
  </Parallax>
)

export default Top
