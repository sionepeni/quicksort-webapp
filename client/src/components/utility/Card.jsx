export default function Card({
    children,
    border,
    shadow,
    padding,
    margin,
    overflowY,
    height,
    width,
    fontSize,
    fontWeight,
    bgColor,
    display,
    align,
    className,
}) {
    let name = `reusable-master ${className}`
    return (
        <>
            <div
                style={{
                    border: border,
                    boxShadow: shadow,
                    padding: padding,
                    margin: margin,
                    overflowY: overflowY,
                    height: height,
                    width: width,
                    fontSize: fontSize,
                    fontWeight: fontWeight,
                    backgroundColor: bgColor,
                    display: display,
                    alignContent: align,
                }}
                className={name}
            >
                {children}
            </div>
        </>
    )
}
