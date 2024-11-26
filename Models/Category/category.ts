interface CategoryItem {
    name: string;
    description: string;
}

interface Category {
    id: string;
    title: string;
    data: CategoryItem[];
}

interface TabCategoryProps {
    categories: Category[];
}

const categories = [
    {
        id: '1',
        title: 'D',
        data: [
            { name: 'Devin', description: 'Description for Devin' },
            { name: 'Dan', description: 'Description for Dan' },
            { name: 'Dominic', description: 'Description for Dominic' },
        ],
    },
    {
        id: '2',
        title: 'J',
        data: [
            { name: 'Jackson', description: 'Description for Jackson' },
            { name: 'James', description: 'Description for James' },
            { name: 'Jillian', description: 'Description for Jillian' },
            { name: 'Jimmy', description: 'Description for Jimmy' },
            { name: 'Joel', description: 'Description for Joel' },
            { name: 'John', description: 'Description for John' },
            { name: 'Julie', description: 'Description for Julie' },
        ],
    },
    {
        id: '3',
        title: 'K',
        data: [
            { name: 'Kevin', description: 'Description for Kevin' },
            { name: 'Kris', description: 'Description for Kris' },
        ],
    },
];

export default categories;
