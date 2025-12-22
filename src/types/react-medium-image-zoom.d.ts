declare module 'react-medium-image-zoom' {
  import * as React from 'react'

  export type ZoomContentProps = {
    img?: React.ReactNode
    modalState?: unknown
    isZoomImgLoaded?: boolean
    buttonUnzoom?: React.ReactNode
    onUnzoom?: (event: Event) => void
    [key: string]: unknown
  }

  export interface ControlledProps {
    isZoomed: boolean
    onZoomChange: (shouldZoom: boolean) => void
    ZoomContent?: (props: ZoomContentProps) => React.ReactNode
    children: React.ReactNode
  }

  export const Controlled: React.FC<ControlledProps>
}

