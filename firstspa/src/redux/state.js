let postsRawData = [
    { id: 1, text: 'Post 1', likesCount: '1' },
    { id: 2, text: 'Post 2', likesCount: '231' },
    { id: 3, text: 'Post 3', likesCount: '547' },
    { id: 4, text: 'Post 4', likesCount: '14' },
    { id: 5, text: 'Post 5', likesCount: '1' },
    { id: 6, text: 'Post 6', likesCount: '8' }
  ];

  let usersData = [
    { id: 1, name: 'Dima' },
    { id: 2, name: 'Sveta' },
    { id: 3, name: 'Katya' },
    { id: 4, name: 'Kolya' },
    { id: 5, name: 'Valera' }
];

let messagesData = [
    { id: 1, text: 'Hi!' },
    { id: 2, text: 'How are you ?' },
    { id: 3, text: 'Yo!' },
    { id: 4, text: 'Kolya' },
    { id: 5, text: 'Valera' }
];

let state = {
    dialogsPage: {
        usersData: usersData,
        messagesData: messagesData
    },
    profilePage: {
        postsRawData: postsRawData
    },
    sitebar: {
        
    }
}

export default state;