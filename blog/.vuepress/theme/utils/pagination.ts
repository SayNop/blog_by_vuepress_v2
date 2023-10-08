export const usePageContent = (list: any[], page: number) => {
    return list.slice((page-1)*5, page*5)
}
