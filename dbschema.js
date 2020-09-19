let db = {
  scream: [
    {
      userId: "6YlpCuGcrngBFbvsLo0csDnFdW13",
      email: "user21@gmail.com",
      handle: "user",
      createdAt: "2020-08-30T13:55:58.925Z",
      imageUrl: "image/dfsdfwefsdvasdgsdg/sdgwsgsd",
      bio: "hello, my name is user, nice to meet you",
      website: "https://user.com",
      location: "Islamabad,pakstan",
    },
    {
      userHandle: "user",
      body: "this is the scream body",
      createdAt: "2020-08-30T13:55:58.925Z",
      likeCount: 5,
      commentCount: 2,
    },
  ],
  comments: [
    {
      userHandle: "user",
      screamId: "PDLSNTX7gSTdrX5NGyx5",
      body: "nice one mate ",
      createdAt: "2020-08-30T13:55:58.925Z",
    },
  ],
  notifications: [
    {
      recipient: "user",
      sender: "john",
      read: "true | false",
      screamId: "PDLSNTX7gSTdrX5NGyx5",
      type: "like | comment",
      createdAt: "2020-08-30T13:55:58.925Z",
    },
  ],
};
const userDetails = {
  // Redux data
  credentials: {
    userId: "6YlpCuGcrngBFbvsLo0csDnFdW13",
    email: "user21@gmail.com",
    handle: "new12",
    createdAt: "2020-08-30T13:55:58.925Z",
    imageUrl: "image/dfsdfwefsdvasdgsdg/sdgwsgsd",
    bio: "hello, my name is user, nice to meet you",
    website: "https://user.com",
    location: "Islamabad,pakstan",
  },
  likes: [
    {
      userHandle: "new12",
      screamId: "PDLSNTX7gSTdrX5NGyx5",
    },
    {
      userHandle: "new12",
      screamId: "PDLSNTX7gSTdrX5NGyx5",
    },
  ],
};
