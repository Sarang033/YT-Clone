import React from "react";

const commentsData = [
  {
    name: "Sarang Sharma",
    text: "I am building this nested comment section",
    replies: [
      {
        name: "Sarang Sharma",
        text: "I am building this nested comment section",
        replies: [],
      },
      {
        name: "Sarang Sharma",
        text: "I am building this nested comment section",
        replies: [],
      },
      {
        name: "Sarang Sharma",
        text: "I am building this nested comment section",
        replies: [
          {
            name: "Sarang Sharma",
            text: "I am building this nested comment section",
            replies: [],
          },
          {
            name: "Sarang Sharma",
            text: "I am building this nested comment section",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Sarang Sharma",
    text: "I am building this nested comment section",
    replies: [],
  },
  {
    name: "Sarang Sharma",
    text: "I am building this nested comment section",
    replies: [],
  },
  {
    name: "Sarang Sharma",
    text: "I am building this nested comment section",
    replies: [],
  },
  {
    name: "Sarang Sharma",
    text: "I am building this nested comment section",
    replies: [
      {
        name: "Sarang Sharma",
        text: "I am building this nested comment section",
        replies: [
          {
            name: "Sarang Sharma",
            text: "I am building this nested comment section",
            replies: [
              {
                name: "Sarang Sharma",
                text: "I am building this nested comment section",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Sarang Sharma",
    text: "I am building this nested comment section",
    replies: [],
  },
  {
    name: "Sarang Sharma",
    text: "I am building this nested comment section",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-1 rounded-lg my-2">
      <img
        className="h-7"
        alt="user"
        src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div  key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
      <CommentsList comments={comment.replies}/>
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
