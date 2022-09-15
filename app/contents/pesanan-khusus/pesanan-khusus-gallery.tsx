/* eslint-disable react/destructuring-assignment */
import { FunctionComponent, useState, useCallback } from 'react'
import ImageViewer from 'react-simple-image-viewer'

import { Galleries } from '~/types'
import { transformArrayObjectToArrayString } from '~/utils'

interface PesananKhususGalleryProps {
  galleries: Galleries
}

export const PesananKhususGallery: FunctionComponent<
  PesananKhususGalleryProps
> = ({ galleries }) => {
  const [currentImage, setCurrentImage] = useState(0)
  const [isViewerOpen, setIsViewerOpen] = useState(false)
  const { pic } = galleries[0]
  const newPic = transformArrayObjectToArrayString(pic)

  const openImageViewer = useCallback((index: any) => {
    setCurrentImage(index)
    setIsViewerOpen(true)
  }, [])

  const closeImageViewer = () => {
    setCurrentImage(0)
    setIsViewerOpen(false)
  }
  return (
    <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
        <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
          <span className="inline-block mb-1 sm:mb-4">
            Bagian dari perjalanan kami
          </span>
          <div className="h-1 ml-auto duration-300 origin-left transform bg-fujibox scale-x-30 group-hover:scale-x-100" />
        </h2>
      </div>
      <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
        {newPic.map((img: any, index: any) => {
          return (
            <div
              key={index + 1}
              className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl"
            >
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src={img}
                alt={`item${index + 1}`}
                onClick={() => {
                  return openImageViewer(index)
                }}
              />
            </div>
          )
        })}
      </div>
      {isViewerOpen && (
        <ImageViewer
          src={newPic}
          currentIndex={currentImage}
          disableScroll
          backgroundStyle={{
            backgroundColor: 'rgba(0,0,0,0.8)',
            zIndex: '99',
          }}
          closeOnClickOutside
          onClose={closeImageViewer}
        />
      )}
    </div>
  )
}
