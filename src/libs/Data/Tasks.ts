import { Bookmark, TaskType } from "../Types/task.type";

export const tasks: TaskType[] = [
  {
    id: 1,
    title: "Close off case #012920-RODRIGUES, Amiguel",
    date: "12/06/2021",
    dueDate: "2 Days Left",
    description:
      "Closing off this case since this application has been cancelled. No one really understand how this case could possibly be canceled. The options and the documents within this document were totally a guaranteed for a success!",
    objective: "Personal Errands",
    status: "On going"
  },
  {
    id: 2,
    title:
      "Set up documentation report for several Cases : Case 145443, Case 192829 and Case 182203",
    date: "14/06/2021",
    dueDate: "4 Days Left",
    description:
      "All Cases must include all payment transactions, all documents and forms filled. All conversations in comments and messages in channels and emails should be provided as well in.",
    objective: "Personal Errands",
    status: "On going"
  },
  {
    id: 3,
    title: "Set up appointment with Dr Blake",
    date: "22/06/2021",
    dueDate: "10 Days Left",
    description: "No Description",
    objective: "Urgent To-do",
    status: "On going"
  },
  {
    id: 4,
    title: "Contact Andrew for Online Meeting and Conference",
    date: "3/06/2021",
    dueDate: "",
    description: "No Description",
    objective: "Urgent To-do",
    status: "Expired"
  },
  {
    id: 5,
    title: "Check and Revise Homework from Andre Gonzales",
    date: "11/06/2021",
    dueDate: "",
    description:
      "Homeworks needed to be checked are as follows : Client Profile Questionnaire, Passport Requirements and Images, Personal Documents.",
    objective: "Urgent To-do",
    status: "Expired"
  },
];

export const bookmarks: Bookmark[] = [
  {
    id: 1,
    title: "Important ASAP",
    value: "Important ASAP",
  },
  {
    id: 2,
    title: "Offline Meeting",
    value: "Offline Meeting",
  },
  {
    id: 3,
    title: "Virtual Meeting",
    value: "Virtual Meeting",
  },
  {
    id: 4,
    title: "ASAP",
    value: "ASAP",
  },
  {
    id: 5,
    title: "Client Related",
    value: "Client Related",
  },
  {
    id: 6,
    title: "Self Task",
    value: "Self Task",
  },
  {
    id: 7,
    title: "Appointments",
    value: "Appointments",
  },
  {
    id: 8,
    title: "Court Related",
    value: "Court Related",
  }
]
