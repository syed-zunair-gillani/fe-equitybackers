export function getCompleteURL(path){
    return `${process.env.NEXT_PUBLIC_BACKEND_PUBLIC_BASE_URL}${path}`
}