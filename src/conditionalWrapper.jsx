export const ConditionalWrapper = ({ condition, wrapper, children }) => {
    return <>
        {condition ? wrapper(children) : children}
    </>
}