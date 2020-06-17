import { v4 as uuid } from 'uuid';

const charaters = [
    {
        name: 'Kyo Sohma',
        from: 'Book',
        title: 'Fruits Basket',
        species: 'Human',
        id: uuid()
    },
    {
        name: 'Jak',
        from: 'Game',
        title: 'Jak and Daxter',
        species: 'Human',
        id: uuid()
    },
    {
        name: 'Krato',
        from: 'Game',
        title: 'God of War',
        species: 'Demigod',
        id: uuid()
    },
    {
        name: 'Ken Kaneki',
        from: 'Book',
        title: 'Tokyo Ghoul',
        species: 'One-Eyed Ghoul',
        id: uuid()
    }
]

export default charaters