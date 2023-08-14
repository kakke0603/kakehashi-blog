export const runtime = 'edge'
import React from 'react'

export default function page() {
  return <div>about page
  {process.env.MICROCMS_SERVICE_DOMAIN }
  </div>
}
