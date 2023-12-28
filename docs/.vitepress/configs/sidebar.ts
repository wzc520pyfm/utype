import typesLocale from "../pages/types.json";

function getTypesSideBar() {
  return Object.entries(typesLocale).map(([_, val]) => mapPrefix(val, '/types'))
}

const getSidebar = () => {
  return {
    '/types/': getTypesSideBar(),
  }
}

type Item = {
  text: string
  items?: Item[]
  link?: string
}

function mapPrefix(item: Item, prefix = "") {
  if (item.items && item.items.length > 0) {
    return {
      ...item,
      items: item.items.map((child) => mapPrefix(child, prefix)),
    };
  }
  return {
    ...item,
    link: `${prefix}${item.link}`,
  };
}

export const sidebar = getSidebar()
