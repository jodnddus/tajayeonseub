export const data = [
    {
        id: 1,
        article: "안녕안녕안녕안녕안녕안녕안녕",
    },
    {
        id: 2,
        article: "안녕안녕안녕안녕안녕안녕안녕",
    },
    {
        id: 3,
        article: "안녕안녕안녕안녕안녕안녕안녕",
    },
    {
        id: 4,
        article: "안녕안녕안녕안녕안녕안녕안녕",
    },
    {
        id: 5,
        article: "안녕안녕안녕안녕안녕안녕안녕",
    }
];

export const filteredById = (id) => {
    let articleData = data.filter(data => {
        return data.id = id;
    });

    return articleData[0];
}