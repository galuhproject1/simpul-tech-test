import { InboxType } from "../Types/inbox.type";

export const dataInbox: InboxType[] = [
  {
    id: 1,
    lastSender: "Cameron Phillips :",
    lastMessage: "Please check this out!",
    receiver: "me",
    datesend: "January 1,2021 19:10",
    messageType: "group",
    isGroup: true,
    groupName: "109220-Naturalization",
    read: false,
    detailInbox: [
      {
        date: "June, 08 2021",
        detailInbox: [
          {
            id: 1,
            sender: "Cameron Phillips :",
            message: "Just Fill me in for his updates yea?",
            date: "June, 09 2021 19:10",
          },
        ],
      },
      {
        date: "June, 09 2021",
        detailInbox: [
          {
            id: 1,
            sender: "You",
            message: "No worries. It will be completed ASAP. I’ve asked him yesterday.",
            date: "June, 09 2021 19:11",
          },
          {
            id: 2,
            sender: "Mary Hilda",
            message: "Hello Obaidullah, I will be your case advisor for case #029290. I have assigned some homework for you to fill. Please keep up with the due dates. Should you have any questions, you can message me anytime. Thanks.",
            date: "June, 09 2021 19:12",
          },
          {
            id: 3,
            sender: "You",
            message: "Please contact Mary for questions regarding the case bcs she will be managing your forms from now on! Thanks Mary.",
            date: "June, 09 2021 19:13",
          },
          {
            id: 4,
            sender: "Mary Hilda",
            message: "Sure thing ,Claren.",
            date: "June, 09 2021 19:14",
          }
        ],
      },
    ],
  },
  {
    id: 2,
    lastSender: "Ellen",
    lastMessage: "Hey, please read.",
    receiver: "me",
    datesend: "02/06/2021 10:45", // Assuming format is MM/DD/YYYY
    messageType: "group",
    isGroup: true,
    groupName:
      "Jeannette Moraima Guaman Chamba (Hutto I-589) [ Hutto Follow Up - Brief Service ]",
    read: true,
    detailInbox: [
      {
        date: "02/06/2021",
        detailInbox: [
          {
            id: 1,
            sender: "You",
            message:
              "No worries. It will be completed ASAP. I've asked him yesterday.",
            date: "Today June 09, 2021 19:32",
          },
          {
            id: 2,
            sender: "Mary Hilda",
            message: "Hello Obaidullah, I will be your case advisor...",
            date: "Today June 09, 2021 19:32",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    lastSender: "Cameron Phillips :",
    lastMessage:
      "I understand your initial concerns and thats very valid, Elizabeth. But you ...",
    receiver: "me",
    datesend: "01/06/2021 12:19", // Assuming format is MM/DD/YYYY
    messageType: "group",
    isGroup: true,
    groupName: "8405-Diana SALAZAR MUNGUIA",
    read: true,
    detailInbox: [
      {
        date: "01/06/2021 12:19",
        detailInbox: [
          {
            id: 1,
            sender: "You",
            message:
              "No worries. It will be completed ASAP. I've asked him yesterday.",
            date: "Today June 09, 2021 19:32",
          },
          {
            id: 2,
            sender: "Mary Hilda",
            message: "Hello Obaidullah, I will be your case advisor...",
            date: "Today June 09, 2021 19:32",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    lastSender: "FastVisa Support",
    lastMessage: "Hey there! Welcome to your inbox.",
    receiver: "me",
    datesend: "01/06/2021 12:19",
    messageType: "personal",
    isGroup: false,
    read: true,
    detailInbox: [
      {
        date: "01/06/2021 12:19",
        detailInbox: [
          {
            id: 1,
            sender: "You",
            message:
              "No worries. It will be completed ASAP. I've asked him yesterday.",
            date: "Today June 09, 2021 19:32",
          },
          {
            id: 2,
            sender: "Mary Hilda",
            message: "Hello Obaidullah, I will be your case advisor...",
            date: "Today June 09, 2021 19:32",
          },
        ],
      },
    ],
  },
];
