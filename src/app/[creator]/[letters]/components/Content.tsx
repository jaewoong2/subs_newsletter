'use client'
import React, { useRef, useState } from 'react'

const Content = ({ ...props }: JSX.IntrinsicElements['iframe']) => {
  const contentRef = useRef<HTMLIFrameElement>(null)
  const [height, setHeight] = useState(0)

  return (
    <section
      className='relative w-full py-10 transition-opacity'
      style={{ height: height + 100, opacity: height > 0 ? 1 : 0 }}
    >
      <iframe
        {...props}
        ref={contentRef}
        onLoad={(event) => {
          setHeight(event.currentTarget.contentWindow?.document.body.scrollHeight ?? 0)
        }}
      />
    </section>
  )
}

export default Content
