import { usePaths } from "@/hooks/use-nav"

import { PAGE_BREAD_CRUMBS } from "@/constants/pages"

type InfoBarProps = {
  slug: string
}

const InfoBar = ({ slug }: InfoBarProps) => {
  const { page } = usePaths()
  const currentPage = PAGE_BREAD_CRUMBS.includes(page) || page == slug
}

export default InfoBar
