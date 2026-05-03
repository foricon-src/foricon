import Image from "next/image";

export default function Img({ src, alt }) {
    return <Image
        src={src}
        alt={alt}
        onLoad={e => remvAttrs(e.currentTarget, [ 'height', 'width' ])}
    />
}