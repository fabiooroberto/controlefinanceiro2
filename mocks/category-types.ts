export interface CategoryItem {
  id: string;
  name: string;
  description: string;
}

export interface Category {
  id: string;
  title: string;
  data: CategoryItem[];
}

export interface TabCategoryProps {
  categories: Category[];
}
